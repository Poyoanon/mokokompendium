#!/usr/bin/env python3
"""Game tooltip formula renderer, adapted from quickbms/update_tripod_descriptions.py.

The sync command supplies connections to the freshly extracted game tables.
Damage uses the existing compendium convention of 140,000 attack power.
"""

import sqlite3
import re
import math
from pathlib import Path

# Paths to game databases (relative to this script's location in quickbms/)
GAME_DB_PATH = Path(__file__).parent.parent / ".data/aug31/EFGame_Extra/ClientData/TableData"
# Default attack power used for tooltip math
DEFAULT_ATTACK_POWER = 140000

TABLE_NAME_MAP = {
    "SKILLEFFECT": "SkillEffect",
    "SKILLFEATURE": "SkillFeature",
    "SKILLBUFF": "SkillBuff",
    "COMBATEFFECT": "CombatEffect",
    "ABILITYFEATURE": "AbilityFeature",
    "PC": "PC",
}


def normalize_table_name(table_name: str) -> str:
    return TABLE_NAME_MAP.get(table_name.upper(), table_name)


# Macro prefix to SkillBuff column mapping
MACRO_COLUMN_MAP = {
    "buffstat0": "PassiveOptionValue0",
    "buffstat1": "PassiveOptionValue1",
    "buffstat2": "PassiveOptionValue2",
    "buffstat3": "PassiveOptionValue3",
    "buffduration": "Duration",
}


def resolve_macro(text: str, db_connections: dict) -> str:
    """
    Resolve <$MACRO buffstat#_### @1:BUFFID/> patterns.

    Examples:
        <$MACRO buffstat0_100 @1:162101/> -> PassiveOptionValue0 / 100 from SkillBuff where PrimaryKey=162101
        <$MACRO buffduration_1000 @1:162101/> -> Duration / 1000 from SkillBuff where PrimaryKey=162101
    """
    # Pattern: <$MACRO macroname_divisor @1:buffid/>
    # macroname can be: buffstat0, buffstat1, buffstat2, buffstat3, buffduration
    # divisor: 100, 1000, 50, etc. (or absent = 1)
    macro_pattern = (
        r"<\$MACRO\s+(buffstat[0-3]|buffduration)(?:_(\d+))?\s+@1:(\d+)\s*/>"
    )

    def replace_macro(match):
        macro_name = match.group(1).lower()
        divisor_str = match.group(2)
        buff_id = int(match.group(3))

        divisor = int(divisor_str) if divisor_str else 1

        column = MACRO_COLUMN_MAP.get(macro_name)
        if not column:
            # Unknown macro, return 0
            return "0"

        value = get_table_value("SkillBuff", column, buff_id, db_connections)
        if value is None:
            return "0"

        result = float(value) / divisor
        return format_number(result)

    resolved = re.sub(macro_pattern, replace_macro, text)

    # General macro expansion using GameMsg templates (e.g. magic_ch203)
    general_macro_pattern = r"<\$MACRO\s+([A-Za-z0-9_]+)([^/>]*)/>"

    def replace_general_macro(match):
        macro_name = match.group(1)
        macro_lower = macro_name.lower()
        if macro_lower.startswith("buffstat") or macro_lower.startswith("buffduration"):
            return match.group(0)

        args_str = match.group(2) or ""
        args = {key: value for key, value in re.findall(r"@(\d+):(\d+)", args_str)}

        game_msg_db = db_connections.get("GameMsg")
        if not game_msg_db:
            return "0"

        row = game_msg_db.execute(
            "SELECT MSG FROM GameMsg_English WHERE KEY = ?",
            (macro_name,),
        ).fetchone()
        if not row or not row[0]:
            return "0"

        template = row[0]

        def replace_arg(arg_match):
            return args.get(arg_match.group(1), arg_match.group(0))

        return re.sub(r"@(\d+)", replace_arg, template)

    return re.sub(general_macro_pattern, replace_general_macro, resolved)


def get_table_connection(table_name, db_connections):
    canonical_name = normalize_table_name(table_name)
    db_path = GAME_DB_PATH / f"EFTable_{canonical_name}.db"
    if canonical_name not in db_connections:
        if not db_path.exists():
            return None
        db_connections[canonical_name] = sqlite3.connect(str(db_path))
    return db_connections.get(canonical_name)


def get_table_value(
    table_name, column, primary_key, db_connections, secondary_key=None
):
    """Look up a value from a game table"""
    canonical_name = normalize_table_name(table_name)
    connection = get_table_connection(canonical_name, db_connections)
    if not connection:
        return None

    try:
        cursor = connection.cursor()
        column_expr = column
        column_match = re.match(r"(\w+)", column)
        if column_match:
            column_expr = column_match.group(1)
        if secondary_key is None:
            result = cursor.execute(
                f"SELECT {column_expr} FROM {canonical_name} WHERE PrimaryKey = ?",
                (primary_key,),
            ).fetchone()
        else:
            result = cursor.execute(
                f"SELECT {column_expr} FROM {canonical_name} WHERE PrimaryKey = ? AND SecondaryKey = ?",
                (primary_key, secondary_key),
            ).fetchone()
        return result[0] if result else None
    except Exception as e:
        key_suffix = f".{secondary_key}" if secondary_key is not None else ""
        print(
            f"Error getting {column} from {table_name}[{primary_key}{key_suffix}]: {e}"
        )
        return None


def get_max_secondary_key(table_name, primary_key, db_connections):
    canonical_name = normalize_table_name(table_name)
    connection = get_table_connection(canonical_name, db_connections)
    if not connection:
        return None

    try:
        cursor = connection.cursor()
        result = cursor.execute(
            f"SELECT MAX(SecondaryKey) FROM {canonical_name} WHERE PrimaryKey = ?",
            (primary_key,),
        ).fetchone()
        if not result:
            return None
        value = result[0]
        return int(value) if value is not None else None
    except Exception:
        return None


def is_placeholder_skill_effect_row(primary_key, secondary_key, db_connections):
    """Some Hyper skills store placeholder 100/122/100 in SkillEffect.

    Real values live in SkillEffectVariable with high SecondaryKey tiers.
    """
    connection = get_table_connection("SkillEffect", db_connections)
    if not connection:
        return False

    try:
        cursor = connection.cursor()
        row = cursor.execute(
            """
            SELECT ValueA, ValueB, ValueF
            FROM SkillEffect
            WHERE PrimaryKey = ? AND SecondaryKey = ?
            """,
            (primary_key, secondary_key),
        ).fetchone()
        if not row:
            return False
        return row[0] == 100 and row[1] == 122 and row[2] == 100
    except Exception:
        return False


def get_skill_feature_param_value(
    skill_id, tripod_index, param_name, db_connections, column_name=None
):
    """
    Resolve ParamValue for a SkillFeature row.

    First tries to match by ParamName0.
    If that fails, tries to find a row with non-zero value for the requested column.
    Uses highest SourceRow to get the max level value.
    """
    connection = get_table_connection("SkillFeature", db_connections)
    if not connection:
        return None

    # Extract column index from column_name (e.g., "ParamValue3" -> 3)
    col_idx = None
    if column_name:
        col_match = re.match(r"ParamValue(\d+)", column_name)
        if col_match:
            col_idx = int(col_match.group(1))

    try:
        cursor = connection.cursor()

        # First try: match by ParamName0, prefer highest SourceRow (max level)
        result = cursor.execute(
            """
            SELECT ParamValue0, ParamValue1, ParamValue2, ParamValue3, ParamValue4,
                   ParamValue5, ParamValue6, ParamValue7, ParamValue8, ParamValue9,
                   ParamValue10, ParamValue11, ParamValue12, ParamValue13, ParamValue14,
                   ParamValue15, ParamValue16, ParamValue17
            FROM SkillFeature
            WHERE PrimaryKey = ? AND SecondaryKey = ? AND ParamName0 = ?
            ORDER BY SourceRow DESC
            LIMIT 1
            """,
            (skill_id, tripod_index, param_name),
        ).fetchone()

        if result:
            # If we have a specific column, return that value
            if col_idx is not None and col_idx < len(result):
                return result[col_idx]
            # Otherwise return first non-zero
            for value in result:
                if value != 0:
                    return value

        # Fallback: find row with reasonable value for the specific column
        # This handles cases where ParamName0 is empty but values exist
        if col_idx is not None:
            col_name = f"ParamValue{col_idx}"

            # For CHANGE_BUFF_STAT and CHANGE_BUFF_DURATION, only use fallback if there's
            # exactly one buff ID involved (to avoid mixing up values from different buffs)
            if param_name in ("CHANGE_BUFF_STAT", "CHANGE_BUFF_DURATION"):
                # First check how many unique buff IDs exist for this skill/tripod
                # Only count buff IDs in the 100000-999999 range (exclude 90000xxx aux IDs)
                buff_ids = cursor.execute(
                    """
                    SELECT DISTINCT ParamValue1 FROM SkillFeature
                    WHERE PrimaryKey = ? AND SecondaryKey = ?
                    AND ParamValue1 > 100000 AND ParamValue1 < 1000000
                    AND (ParamName0 = '' OR ParamName0 IS NULL)
                    """,
                    (skill_id, tripod_index),
                ).fetchall()

                # Only use fallback if there's exactly one buff ID
                if len(buff_ids) != 1:
                    result = None
                else:
                    result = cursor.execute(
                        f"""
                        SELECT {col_name} FROM SkillFeature
                        WHERE PrimaryKey = ? AND SecondaryKey = ?
                        AND {col_name} != 0
                        AND ABS({col_name}) < 1000
                        AND ParamValue1 > 100000 AND ParamValue1 < 1000000
                        AND (ParamName0 = '' OR ParamName0 IS NULL)
                        ORDER BY SourceRow DESC
                        LIMIT 1
                        """,
                        (skill_id, tripod_index),
                    ).fetchone()
            else:
                result = cursor.execute(
                    f"""
                    SELECT {col_name} FROM SkillFeature
                    WHERE PrimaryKey = ? AND SecondaryKey = ?
                    AND {col_name} != 0
                    AND ABS({col_name}) < 100000
                    AND (ParamName0 = '' OR ParamName0 IS NULL)
                    ORDER BY SourceRow DESC
                    LIMIT 1
                    """,
                    (skill_id, tripod_index),
                ).fetchone()

            if result and result[0] != 0:
                return result[0]

    except Exception as e:
        print(
            f"Error getting SkillFeature ParamValue for {skill_id}/{tripod_index} {param_name}: {e}"
        )
    return None


def resolve_formula(
    formula,
    db_connections,
    skill_id=None,
    tripod_index=None,
    class_id=None,
    skill_level=None,
):
    """Resolve <$TABLE and <$CALC formulas to actual values"""

    # First, resolve MACRO patterns (must happen before other lookups)
    resolved = resolve_macro(formula, db_connections)

    # Replace <$TABLE_SKILLFEATURE ParamValueX skill_id tripod_index PARAM_NAME .../>
    skillfeature_pattern = (
        r"<\$TABLE_SKILLFEATURE\s+(\w+)\s+(\d+)\s+(\d+)\s+([A-Z0-9_]+)(?:\s+\d+)?\s*/>"
    )

    def replace_skillfeature(match):
        column = match.group(1)
        feature_skill_id = int(match.group(2))
        feature_tripod = int(match.group(3))
        param_name = match.group(4)
        if column.lower().startswith("paramvalue"):
            value = get_skill_feature_param_value(
                feature_skill_id,
                feature_tripod,
                param_name,
                db_connections,
                column_name=column,
            )
            return str(value) if value is not None else "0"
        return "0"

    resolved = re.sub(skillfeature_pattern, replace_skillfeature, resolved)

    # Replace <$TABLE lookups
    table_pattern = r"<\$TABLE_(\w+)\s+(\w+)\s+(\d+)(?:\s+(\d+))?(?:\s+[^/>]*)?/>"

    def replace_table(match):
        table = match.group(1)
        column = match.group(2)
        pk = int(match.group(3))
        secondary_key = match.group(4)
        resolved_secondary = int(secondary_key) if secondary_key is not None else None
        if (
            resolved_secondary is None
            and skill_level
            and table.upper()
            in (
                "SKILLEFFECT",
                "SKILLEFFECTVARIABLE",
            )
        ):
            resolved_secondary = skill_level

        value = get_table_value(
            table,
            column,
            pk,
            db_connections,
            resolved_secondary,
        )

        # Hyper skills may use placeholder SkillEffect rows (100/122/100) at secondary=1
        # while actual values are in SkillEffectVariable at high SecondaryKey tiers.
        if (
            table.upper() == "SKILLEFFECT"
            and resolved_secondary is not None
            and column in ("ValueA", "ValueB", "ValueF")
            and is_placeholder_skill_effect_row(pk, resolved_secondary, db_connections)
        ):
            variable_secondary = get_max_secondary_key(
                "SkillEffectVariable", pk, db_connections
            )
            if variable_secondary is not None:
                variable_value = get_table_value(
                    "SkillEffectVariable",
                    column,
                    pk,
                    db_connections,
                    variable_secondary,
                )
                if variable_value is not None:
                    value = variable_value

        if (
            value is None
            and table.upper() == "SKILLEFFECT"
            and resolved_secondary is not None
        ):
            value = get_table_value(
                "SkillEffectVariable",
                column,
                pk,
                db_connections,
                resolved_secondary,
            )
        return str(value) if value is not None else "0"

    resolved = re.sub(table_pattern, replace_table, resolved)

    # Replace <$PLAYER_INFO STAT STAT_ATTACK_POWER/> with a default AP value
    resolved = re.sub(
        r"<\$PLAYER_INFO\s+STAT\s+STAT_ATTACK_POWER\s*/>",
        str(DEFAULT_ATTACK_POWER),
        resolved,
    )

    # Replace other <$PLAYER_INFO .../> tags with a neutral value
    resolved = re.sub(r"<\$PLAYER_INFO[^/>]*/>", "1", resolved)

    # Replace <$TABLE_PC DamageCoefficient class_id/> with a lookup if class_id is provided
    def replace_pc(match):
        value = get_table_value(
            "PC", "DamageCoefficient", int(match.group(1)), db_connections
        )
        return str(value) if value is not None else "1"

    resolved = re.sub(
        r"<\$TABLE_PC\s+DamageCoefficient\s+(\d+)\s*/>", replace_pc, resolved
    )

    # Replace remaining [VALUE] marker with 0
    resolved = resolved.replace("[VALUE]", "0")
    resolved = resolved.replace("%1", "")
    resolved = re.sub(r"%\d+", "", resolved)

    def evaluate_calc_expression(expr: str) -> str:
        expr = expr.strip()
        if not expr:
            return expr
        if not re.match(r"^[\d\s\+\-\*/\(\)\.]+$", expr):
            return expr
        try:
            result = eval(expr)
        except Exception:
            return expr

        if str(DEFAULT_ATTACK_POWER) in expr:
            return str(math.floor(result))
        if isinstance(result, float):
            if result == int(result):
                return str(int(result))
            return f"{result:.1f}".rstrip("0").rstrip(".")
        return str(result)

    def replace_calc_comma(match):
        expr = match.group(1).replace("%1", "")
        return evaluate_calc_expression(expr)

    def replace_calc(match):
        expr = match.group(1)
        return evaluate_calc_expression(expr)

    # Replace <$CALC_COMMA and <$CALC with evaluated numbers where possible
    resolved = re.sub(r"<\$CALC_COMMA\s+(.+?)\s*/>", replace_calc_comma, resolved)
    resolved = re.sub(r"<\$CALC\s+(.+?)\s*/>", replace_calc, resolved)

    # NOTE: Don't strip tags here - let clean_description handle FONT tags first

    # Try to evaluate simple math expressions
    try:
        # Only evaluate if it looks like a safe math expression
        if re.match(r"^[\d\s\+\-\*/\(\)\.]+$", resolved):
            result = eval(resolved)
            # Round to reasonable precision
            if isinstance(result, float):
                # Round to 1 decimal place if not a whole number
                if result == int(result):
                    return str(int(result))
                return f"{result:.1f}".rstrip("0").rstrip(".")
            return str(result)
    except Exception:
        pass

    return resolved


def clean_description(
    desc,
    db_connections,
    skill_id=None,
    tripod_index=None,
    class_id=None,
    skill_level=None,
):
    """Clean up the GameMsg description and calculate actual values"""
    if not desc:
        return ""

    # First, resolve formulas before extracting colors
    desc = resolve_formula(
        desc,
        db_connections,
        skill_id=skill_id,
        tripod_index=tripod_index,
        class_id=class_id,
        skill_level=skill_level,
    )
    desc = simplify_numeric_expressions(desc)

    # Evaluate math expressions inside FONT tags before extracting colors
    def eval_font_content(match):
        prefix = match.group(1)  # The FONT tag
        content = match.group(2)
        suffix = match.group(3)  # </FONT>

        # Try to evaluate math expressions like "6 * 1.97%"
        math_match = re.match(r"^([\d\.\s\+\-\*/\(\)]+)(%?)$", content.strip())
        if math_match:
            expr = math_match.group(1).strip()
            pct = math_match.group(2)
            if re.match(r"^[\d\s\+\-\*/\.]+$", expr):
                try:
                    result = eval(expr)
                    # Use final=True for proper rounding to 1dp
                    content = f"{format_number(float(result), final=True)}{pct}"
                except:
                    pass
        return f"{prefix}{content}{suffix}"

    desc = re.sub(
        r"(<FONT COLOR='#[0-9a-f]+'[^>]*>)(.*?)(</FONT>)",
        eval_font_content,
        desc,
        flags=re.IGNORECASE,
    )

    # Extract color markers with resolved values
    # Use .*? to match across any leftover formula fragments
    desc = re.sub(
        r"<FONT COLOR='#99ff99'>(.*?)</FONT>",
        r"[GREEN]\1[/GREEN]",
        desc,
        flags=re.IGNORECASE,
    )
    desc = re.sub(
        r"<FONT COLOR='#ffff99'>(.*?)</FONT>",
        r"[YELLOW]\1[/YELLOW]",
        desc,
        flags=re.IGNORECASE,
    )
    desc = re.sub(
        r"<FONT COLOR='#ffffac'>(.*?)</FONT>",
        r"[YELLOW]\1[/YELLOW]",
        desc,
        flags=re.IGNORECASE,
    )
    desc = re.sub(
        r"<FONT COLOR='#ffbb00'>(.*?)</FONT>",
        r"[ORANGE]\1[/ORANGE]",
        desc,
        flags=re.IGNORECASE,
    )
    desc = re.sub(
        r"<FONT COLOR='#00ccff'>(.*?)</FONT>",
        r"[BLUE]\1[/BLUE]",
        desc,
        flags=re.IGNORECASE,
    )
    desc = re.sub(
        r"<FONT COLOR='#bf9ef6'>(.*?)</FONT>",
        r"[PURPLE]\1[/PURPLE]",
        desc,
        flags=re.IGNORECASE,
    )
    desc = re.sub(
        r"<FONT COLOR='#ff9999'>(.*?)</FONT>",
        r"[RED]\1[/RED]",
        desc,
        flags=re.IGNORECASE,
    )

    # Add .0 suffix to integer percentages inside color tags (e.g., 120% -> 120.0%)
    def add_decimal_to_percent(match):
        tag = match.group(1)
        content = match.group(2)
        end_tag = match.group(3)
        # Add .0 to integers followed by % (but not if already has decimal)
        content = re.sub(
            r"(?<!\.)(\d+)%(?!\d)",
            lambda m: f"{m.group(1)}.0%",
            content,
        )
        return f"[{tag}]{content}[{end_tag}]"

    desc = re.sub(
        r"\[(GREEN|YELLOW|RED|PURPLE|ORANGE|BLUE)\](.*?)\[(/GREEN|/YELLOW|/RED|/PURPLE|/ORANGE|/BLUE)\]",
        add_decimal_to_percent,
        desc,
    )

    # Remove any remaining HTML-like tags (e.g. unknown FONT colors)
    desc = re.sub(r"<[^>]+>", "", desc)

    def wrap_damage_numbers(text: str) -> str:
        pattern = r"(?<![\w\[])(\d+(?:\.\d+)?)(?=\s+(?:\[[A-Za-z]+\]\s+)?(?:Elemental\s+)?Damage)"
        return re.sub(pattern, r"[ORANGE]\1[/ORANGE]", text)

    def apply_damage_colorization(text: str) -> str:
        result = []
        cursor = 0
        for match in re.finditer(
            r"\[(GREEN|YELLOW|RED|PURPLE|ORANGE|BLUE)\].*?\[/\1\]",
            text,
            flags=re.IGNORECASE,
        ):
            result.append(wrap_damage_numbers(text[cursor : match.start()]))
            result.append(match.group(0))
            cursor = match.end()
        result.append(wrap_damage_numbers(text[cursor:]))
        return "".join(result)

    desc = apply_damage_colorization(desc)

    return desc.strip()


def format_number(value: float, keep_decimal: bool = False, final: bool = False) -> str:
    """Format a number.

    Args:
        value: The number to format
        keep_decimal: If True, always show .0 for whole numbers
        final: If True, round to 1 decimal place (for final display).
               If False, keep 2 decimals for intermediate calculations.
    """
    if final:
        # Final display: round down to 1 decimal place like the game
        if value >= 0:
            truncated = math.floor(value * 10) / 10
        else:
            truncated = math.ceil(value * 10) / 10

        if truncated == int(truncated):
            if keep_decimal or value != int(value):
                return f"{int(truncated)}.0"
            return str(int(truncated))
        return f"{truncated:.1f}"
    else:
        # Intermediate: keep 2 decimal places to avoid precision loss
        if value == int(value):
            return str(int(value))
        return f"{value:.2f}".rstrip("0").rstrip(".")


def simplify_numeric_expressions(text: str) -> str:
    def safe_eval(expression: str) -> str:
        expression = expression.strip()
        if not expression:
            return expression
        if not re.match(r"^[\d\s\+\-\*/\.]+$", expression):
            return expression
        try:
            return format_number(eval(expression))
        except Exception:
            return expression

    def apply_percent_scaling(value: float, original_text: str, expr: str = "") -> str:
        # Don't scale if the expression already contains division (already scaled)
        if "/" in expr:
            return format_number(value)
        # Don't scale if the value is already reasonably small (< 100)
        # This handles cases where the formula already computed the scaled value
        if abs(value) < 100:
            return format_number(value)
        if original_text.strip().endswith("%"):
            return format_number(value / 100)
        return format_number(value)

    def replace_inline_math(match: re.Match) -> str:
        expr = match.group(1)
        if not re.match(r"^[\d\s\+\-\*/\.]+$", expr):
            return match.group(0)
        try:
            value = eval(expr)
        except Exception:
            return match.group(0)
        return apply_percent_scaling(float(value), match.group(0), expr)

    previous = None
    while previous != text:
        previous = text
        text = re.sub(
            r"\(([-\d\.\s\+\*/]+)\)",
            lambda m: safe_eval(m.group(1)),
            text,
        )
    text = re.sub(
        r"\b(\d{3,})\s*/\s*(\d+)(?=\b|s|%)",
        lambda m: format_number(float(m.group(1)) / float(m.group(2))),
        text,
    )
    text = re.sub(r"\b(\d+)/1s\b", lambda m: f"{m.group(1)}s", text)
    text = re.sub(
        r"(?<!/)\b(\d{4,})s\b",
        lambda m: f"{format_number(float(m.group(1)) / 1000)}s",
        text,
    )

    text = re.sub(
        r"\b(\d+(?:\.\d+)?)\s*/\s*(\d+)(?=s\b)",
        lambda m: format_number(float(m.group(1)) / float(m.group(2)), final=True),
        text,
    )
    text = re.sub(
        r"([+\-])\s*([\d\.\s\+\-\*/]+)%",
        lambda m: (
            f"{m.group(1)}{apply_percent_scaling(float(eval(m.group(2))), m.group(0), m.group(2))}%"
            if re.match(r"^[\d\s\+\-\*/\.]+$", m.group(2))
            else m.group(0)
        ),
        text,
    )
    # Handle 0/N patterns AFTER percent scaling (to avoid breaking 0/100% expressions)
    # Only match when NOT followed by % or s
    text = re.sub(r"\b0\s*/\s*\d+(?![%s])\b", "0", text)
    text = re.sub(
        r"(?<!/)\b(\d{4,})s\b",
        lambda m: f"{format_number(float(m.group(1)) / 1000)}s",
        text,
    )
    text = re.sub(
        r"\b(\d{4,})\b",
        lambda m: (
            format_number(float(m.group(1)) / 100)
            if len(m.group(1)) == 4
            else m.group(0)
        ),
        text,
    )
    # Remove *1 multiplications but NOT *1.5 or *1.2 etc.
    text = re.sub(r"\*1\*1(?![\d\.])", "", text)
    text = re.sub(r"\*1(?![\d\.])", "", text)
    return text


def cleanup_placeholders(text: str) -> str:
    # Simplify duration additions like "3 + 1s" or "10+ 1s" to combined value
    def combine_duration(match):
        left = match.group(1)
        right = match.group(2)
        keep_decimal = "." in left or "." in right
        total = float(left) + float(right)
        return f"{format_number(total, final=True, keep_decimal=keep_decimal)}s"

    text = re.sub(
        r"\b(\d+(?:\.\d+)?)\s*\+\s*(\d+(?:\.\d+)?)s\b",
        combine_duration,
        text,
    )

    # Fix double negatives like "--3s" to "-3s"
    text = re.sub(r"--(\d)", r"-\1", text)

    # Fix double negatives with color tags: "-[GREEN]-50.0%[/GREEN]" -> "-[GREEN]50.0%[/GREEN]"
    text = re.sub(
        r"-\[(GREEN|YELLOW|RED)\]-",
        r"-[\1]",
        text,
    )
    # Also fix: "+[GREEN]-50.0%[/GREEN]" -> "-[GREEN]50.0%[/GREEN]"
    text = re.sub(
        r"\+\[(GREEN|YELLOW|RED)\]-",
        r"-[\1]",
        text,
    )

    # Fix malformed decimals like "50.84.68" -> "50.84"
    text = re.sub(r"(\d+\.\d+)\.\d+", r"\1", text)

    text = re.sub(r"%1\s*", "", text)
    text = text.replace("* (1.0)", "")
    text = re.sub(r"\(([\d\.]+)\)\s*\*\s*1", r"\1", text)
    text = re.sub(r"\+\s*\(?(\d+)\)?\s*\*\s*1%", r"+\1%", text)
    text = re.sub(r"\+\s*\(?(\d+)\)?\s*\*\s*1", r"+\1", text)
    text = re.sub(r"-\s*\(?(\d+)\)?\s*\*\s*1%", r"-\1%", text)
    text = re.sub(r"-\s*\(?(\d+)\)?\s*\*\s*1", r"-\1", text)
    text = re.sub(r"\s+", " ", text)
    text = text.replace("+ 0/100", "")
    text = text.replace("+0/100", "")
    text = text.replace("(0/100)", "0")
    text = text.replace("0/100", "0")
    text = text.replace("0/1000", "0")
    text = text.replace("0/50", "0")
    text = text.replace("0/110", "0")
    text = text.replace("0 /", "0/")
    text = text.replace("(1*(", "(")
    text = text.replace("*1 ", " ")
    text = text.replace("*1Damage", " Damage")
    text = text.replace("*1 Damage", " Damage")
    text = re.sub(r"\s*\*\s*1(?![\d\.])", "", text)
    text = text.replace("+ 0%", "+0%")
    text = text.replace("- 0%", "-0%")
    # Only scale percentages with 4+ digits (like 4200% -> 42%)
    # Don't scale 3-digit values like 120% which are valid percentages
    text = re.sub(
        r"([+\-])\s*(\d{4,})%",
        lambda m: f"{m.group(1)}{format_number(float(m.group(2)) / 100)}%",
        text,
    )
    text = re.sub(
        r"(?<!/)\b(\d{4,})s\b",
        lambda m: f"{format_number(float(m.group(1)) / 1000)}s",
        text,
    )

    # Handle duration patterns: "X + 0/Ys" should become "Xs"
    # MUST run before the /1s pattern below
    text = re.sub(r"(\d+)\s*\+\s*0/\d+s", r"\1s", text)
    text = re.sub(r"\s*\+\s*0/\d+s", "s", text)
    text = re.sub(r"\b0/\d+s\b", "", text)

    text = re.sub(r"\b(\d+)/1s\b", lambda m: f"{m.group(1)}s", text)

    # Strip +0% and -0% values (indicate failed resolution)
    text = re.sub(r"\+0%", "", text)
    text = re.sub(r"-0%", "", text)

    # Strip +0s, -0s, + 0s, - 0s (duration bonuses that didn't resolve)
    text = re.sub(r"\+\s*0s", "", text)
    text = re.sub(r"-\s*0s", "", text)

    # Strip trailing "+ 0" or "- 0" (failed bonus values)
    text = re.sub(r"\+\s*0\b(?![\d%s/])", "", text)
    text = re.sub(r"-\s*0\b(?![\d%s/])", "", text)

    # Replace raw damage numbers with "Damage"
    # Pattern: +X.XX followed by whitespace (not %), indicating raw damage values
    # e.g., "+397.51 " -> "Damage", but NOT "+0.2%" which is a percentage
    text = re.sub(r"[+]\s*\d+\.\d+(?=\s+(?!%))", "Damage", text)
    text = re.sub(r"[+]\s*\d+\.\d+\s+Damage", "Damage", text)

    # Clean up leftover broken tokens like "+ * 0/>%" or similar artifacts
    text = re.sub(r"\+\s*\*\s*[\d\.]+\s*/>\s*%?", "", text)
    text = re.sub(r"-\s*\*\s*[\d\.]+\s*/>\s*%?", "", text)

    # Clean up leftover [VALUE] markers BEFORE stripping />
    # Patterns like: +[VALUE]/1000/>s, +[VALUE]/>%, [VALUE] />s, etc.
    text = re.sub(r"\+?\[VALUE\]\s*[^\.]*?/>s?%?", "", text)
    text = re.sub(r"-?\[VALUE\]\s*[^\.]*?/>s?%?", "", text)
    text = re.sub(r"\[VALUE\]\s*/?\d*\s*/?s?", "", text)

    # Now strip remaining /> tokens
    text = re.sub(r"\s*/>\s*", "", text)

    # Clean up multiple periods (from empty values)
    text = re.sub(r"\.{2,}", ".", text)

    # Clean up trailing periods after empty values like "Fury Meter gain ."
    text = re.sub(r"\s+\.$", ".", text)

    # Clean up dangling "for." from removed duration values
    text = re.sub(r"\s+for\s*\.$", ".", text)
    text = re.sub(r"\s+for\s*$", "", text)

    # Fix space between +/- and color tags: "+ [RED]" -> "+[RED]", "- [GREEN]" -> "-[GREEN]"
    text = re.sub(
        r"([+\-])\s+\[(GREEN|YELLOW|RED|PURPLE|ORANGE|BLUE)\]", r"\1[\2]", text
    )

    # Clean up double spaces and trailing/leading whitespace
    text = re.sub(r"\s+", " ", text)

    # Some macro-expanded values can stick to the preceding word
    # (e.g., "inflicting1857331118 Damage"). Add a separator.
    text = re.sub(
        r"([A-Za-z])(\d+)(?=\s+(?:\[[A-Za-z]+\]\s+)?Damage)",
        r"\1 \2",
        text,
    )

    return text.strip()

