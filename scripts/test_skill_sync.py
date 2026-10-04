import sqlite3
from pathlib import Path
import tempfile
import unittest

from sync_raw_skill_compendium import repair_sql, source_paths


class SkillSyncTests(unittest.TestCase):
    def test_main_tables_are_not_overridden_by_jss(self):
        with tempfile.TemporaryDirectory() as root:
            path = Path(root) / 'EFGame_Extra/ClientData/TableData'
            (path / 'jss').mkdir(parents=True)
            (path / 'EFTable_Skill.db').touch()
            (path / 'jss/EFTable_Skill.db').touch()
            self.assertEqual(source_paths(Path(root))['Skill'], path / 'EFTable_Skill.db')

    def test_repair_preserves_custom_data_and_is_repeatable(self):
        db = sqlite3.connect(':memory:')
        db.executescript('''
            CREATE TABLE skills(skill_id PRIMARY KEY, skill_name, description, custom);
            CREATE TABLE tripods(skill_id,slot_number,tripod_name,description,PRIMARY KEY(skill_id,slot_number));
            CREATE TABLE skill_descriptions(skill_id,level,description,PRIMARY KEY(skill_id,level));
            CREATE TABLE guides(body);
            INSERT INTO guides VALUES ('keep me');
            INSERT INTO skills VALUES(1,'old','old','keep custom');
        ''')
        records = {
            'skills': [{'skill_id': 1, 'skill_name': "Destroyer's skill", 'description': 'new'},
                       {'skill_id': 2, 'skill_name': 'second', 'description': 'added'}],
            'tripods': [{'skill_id': 2, 'slot_number': 8, 'tripod_name': 'new tripod', 'description': 'text'}],
            'skill_descriptions': [{'skill_id': 2, 'level': 14, 'description': 'level 14'}],
        }
        sql = repair_sql(records, db)
        db.executescript(sql)
        db.executescript(sql)
        self.assertEqual(db.execute('SELECT COUNT(*) FROM skills').fetchone()[0], 2)
        self.assertEqual(db.execute('SELECT skill_name,custom FROM skills WHERE skill_id=1').fetchone(),
                         ("Destroyer's skill", 'keep custom'))
        self.assertEqual(db.execute('SELECT * FROM guides').fetchone(), ('keep me',))
        self.assertEqual(db.execute('SELECT COUNT(*) FROM tripods').fetchone()[0], 1)


if __name__ == '__main__':
    unittest.main()
