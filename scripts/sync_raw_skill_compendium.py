#!/usr/bin/env python3
"""Build a complete skill catalog from extracted game tables; optionally repair a D1 export.

No network writes: inspect coverage.json and repair.sql before applying with Wrangler.
"""
import argparse
from collections import Counter, defaultdict
import json
from pathlib import Path
import re
import sqlite3

import skill_description_resolver as resolver

ROOT = Path(__file__).resolve().parent.parent
KEYS = {'skills': ('skill_id',), 'tripods': ('skill_id', 'slot_number'),
        'skill_descriptions': ('skill_id', 'level')}
# Skill.Type values verified against the existing D1 catalog.
CAST_TAGS = {1: 'Normal', 2: 'Special', 3: 'Casting', 4: 'Charge',
             5: 'Holding', 6: 'Combo', 11: 'Move', 12: 'Toggle'}


def quote(value):
    if value is None:
        return 'NULL'
    if isinstance(value, (int, float)):
        return str(value)
    return "'" + str(value).replace("'", "''") + "'"


def source_paths(source):
    # The archive also contains jss overrides with older/reduced skill tables.
    # Never let those silently replace the main game tables by basename.
    table_dir = source / 'EFGame_Extra/ClientData/TableData'
    if not table_dir.is_dir():
        table_dir = source
    return {p.stem.removeprefix('EFTable_'): p for p in table_dir.glob('EFTable_*.db')}


def build(source):
    paths = source_paths(source)
    connections = {name: sqlite3.connect(f'file:{path}?mode=ro', uri=True)
                   for name, path in paths.items()}
    # Index working copies, leaving the extracted archive files untouched.
    for name, connection in list(connections.items()):
        if name == 'GameMsg':
            continue
        working = sqlite3.connect(':memory:')
        connection.backup(working)
        columns = {row[1] for row in working.execute(f'PRAGMA table_info("{name}")')}
        if {'PrimaryKey', 'SecondaryKey'}.issubset(columns):
            working.execute(f'CREATE INDEX sync_keys ON "{name}"(PrimaryKey,SecondaryKey)')
        connections[name] = working
        connection.close()
    for required in ('Skill', 'SkillFeature', 'GameMsg', 'PC', 'SkillEffect', 'SkillBuff'):
        if required not in connections:
            raise ValueError(f'Missing source table: {required}')
    resolver.GAME_DB_PATH = paths['Skill'].parent
    messages = {locale: dict(connections['GameMsg'].execute(f'SELECT KEY,MSG FROM GameMsg_{lang}'))
                for locale, lang in [('en', 'English'), ('es', 'Spanish')]}
    classes = dict(connections['PC'].execute('SELECT PrimaryKey,Name FROM PC WHERE Released=1'))
    connections['Skill'].row_factory = sqlite3.Row
    levels = defaultdict(list)
    for row in connections['Skill'].execute('SELECT * FROM Skill ORDER BY PrimaryKey,SecondaryKey'):
        if row['LearnClass'] in classes and messages['en'].get(row['Name'], '').strip():
            levels[row['PrimaryKey']].append(dict(row))
    records = {table: [] for table in KEYS}
    unresolved = []

    def render(key, locale, **context):
        text = messages[locale].get(key, '')
        if not text:
            return None
        value = resolver.clean_description(text, connections, **context)
        if re.search(r'<\$|\$[A-Z]|\{\d+\}', value):
            unresolved.append({'key': key, 'locale': locale, 'text': value})
        return resolver.cleanup_placeholders(value) or None

    for skill_id, rows in levels.items():
        row = rows[-1]
        record = dict(skill_id=skill_id, class_id=row['LearnClass'], icon_file=row['Icon'],
                      icon_index=row['IconIndex'], skill_name=messages['en'][row['Name']],
                      skill_name_es=messages['es'].get(row['Name']) or None,
                      cast_tag=CAST_TAGS.get(row['Type']),
                      cooldown_seconds=row['Cooltime'] / 1000,
                      parts_attack_level=row['PartsAttackLevelTooltip'],
                      stiffness_type=row['StiffnessTooltipType'],
                      directional_attack_type=row['DirectionalAttackTooltipType'],
                      counter_attack_type=row['CounterAttackTooltipType'],
                      super_armor_type=row['SuperArmorTooltip'])
        for level_row in rows:
            key = level_row['Desc'] or level_row['DescIdentity']
            desc = dict(skill_id=skill_id, level=level_row['SecondaryKey'])
            for locale in messages:
                column = 'description' + ('_' + locale if locale != 'en' else '')
                desc[column] = render(key, locale, skill_id=skill_id, class_id=row['LearnClass'],
                                      skill_level=level_row['SecondaryKey'])
                if level_row == rows[-1]:
                    record[column] = desc[column]
            if desc['description']:
                records['skill_descriptions'].append(desc)
        records['skills'].append(record)

    connections['SkillFeature'].row_factory = sqlite3.Row
    features = defaultdict(list)
    for row in connections['SkillFeature'].execute("SELECT * FROM SkillFeature WHERE NameKey<>'' AND SecondaryKey BETWEEN 1 AND 8"):
        if row['PrimaryKey'] in levels:
            features[(row['PrimaryKey'], row['SecondaryKey'])].append(dict(row))
    missing_names, missing_descriptions = [], []
    for (skill_id, slot), rows in sorted(features.items()):
        # Mode 0 is shared and mode 1 is PvE; mode 2 is PvP. Prefer the
        # skill-specific text when variants share a tripod name with the base skill.
        rows.sort(key=lambda r: (r['TargetModeType'] != 2,
                                bool(messages['en'].get(r['DescKey'])),
                                r['DescKey'].startswith(f'tip.desc.tripod_{skill_id}{slot}_'),
                                r['Level'] == 1, r['SourceRow']), reverse=True)
        row = rows[0]
        name = messages['en'].get(row['NameKey'])
        if not name:
            missing_names.append([skill_id, slot, row['NameKey']])
            continue
        record = dict(skill_id=skill_id, slot_number=slot, tier=1 if slot <= 3 else 2 if slot <= 6 else 3,
                      icon_index=row['IconIndex'], tripod_name=name,
                      tripod_name_es=messages['es'].get(row['NameKey']) or None)
        for locale in messages:
            column = 'description' + ('_' + locale if locale != 'en' else '')
            record[column] = render(row['DescKey'], locale, skill_id=skill_id, tripod_index=slot,
                                   class_id=levels[skill_id][-1]['LearnClass'])
        if not record['description']:
            missing_descriptions.append([skill_id, slot, row['DescKey']])
        records['tripods'].append(record)
    counts = Counter(r['class_id'] for r in records['skills'])
    skill_classes = {r['skill_id']: r['class_id'] for r in records['skills']}
    tripod_counts = Counter(skill_classes[r['skill_id']] for r in records['tripods'])
    report = dict(source=str(source.resolve()), counts={t: len(r) for t, r in records.items()},
                  classes=[dict(class_id=c, name=classes[c], skills=counts[c], tripods=tripod_counts[c])
                           for c in sorted(counts)], missing_tripod_names=missing_names,
                  missing_tripod_descriptions=missing_descriptions, unresolved=unresolved)
    for connection in connections.values():
        connection.close()
    return records, report


def repair_sql(records, baseline):
    """Update by natural key, preserving all unrelated tables and custom columns."""
    statements = []
    for table, rows in records.items():
        columns = {row[1] for row in baseline.execute(f'PRAGMA table_info("{table}")')}
        if not set(KEYS[table]).issubset(columns):
            raise ValueError(f'{table} missing from baseline or incompatible schema')
        for row in rows:
            fields = [c for c in row if c in columns]
            where = ' AND '.join(f'"{c}"={quote(row[c])}' for c in KEYS[table])
            changes = ','.join(f'"{c}"={quote(row[c])}' for c in fields if c not in KEYS[table])
            statements.append(f'UPDATE "{table}" SET {changes} WHERE {where};')
            statements.append(f'INSERT INTO "{table}" ({",".join(fields)}) SELECT '
                              f'{",".join(quote(row[c]) for c in fields)} '
                              f'WHERE NOT EXISTS (SELECT 1 FROM "{table}" WHERE {where});')
    return '\n'.join(statements) + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=ROOT / '.data/aug31')
    parser.add_argument('--output', type=Path, default=ROOT / '.data/skill-sync')
    parser.add_argument('--baseline', type=Path, help='SQLite database or SQL export of remote D1')
    parser.add_argument('--dry-run', action='store_true', help='Build/validate locally; never applies remote writes')
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)
    records, report = build(args.source)
    (args.output / 'records.json').write_text(json.dumps(records, ensure_ascii=False))
    (args.output / 'coverage.json').write_text(json.dumps(report, indent=2, ensure_ascii=False))
    if args.baseline:
        db = sqlite3.connect(':memory:')
        if args.baseline.suffix == '.sql':
            db.executescript(args.baseline.read_text())
        else:
            source = sqlite3.connect(f'file:{args.baseline.resolve()}?mode=ro', uri=True)
            source.backup(db)
            source.close()
        sql = repair_sql(records, db)
        before = {t: db.execute(f'SELECT COUNT(*) FROM {t}').fetchone()[0] for t in KEYS}
        db.executescript(sql)
        after = {t: db.execute(f'SELECT COUNT(*) FROM {t}').fetchone()[0] for t in KEYS}
        db.executescript(sql)
        assert after == {t: db.execute(f'SELECT COUNT(*) FROM {t}').fetchone()[0] for t in KEYS}, 'Not idempotent'
        assert db.execute('PRAGMA integrity_check').fetchone()[0] == 'ok'
        (args.output / 'repair.sql').write_text(sql)
        report['baseline_counts'] = before
        report['repaired_counts'] = after
        (args.output / 'coverage.json').write_text(json.dumps(report, indent=2, ensure_ascii=False))
        destination = sqlite3.connect(args.output / 'repaired.db')
        db.backup(destination)
        destination.close()
        db.close()
    print(json.dumps({k: v for k, v in report.items() if k != 'unresolved'}, indent=2))


if __name__ == '__main__':
    main()
