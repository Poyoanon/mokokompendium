-- Match the expressions used by locale-aware tooltip lookups. Without these,
-- LOWER(name) forces full scans despite the tables' primary-key indexes.
CREATE INDEX IF NOT EXISTS skills_class_name_ci ON skills(class_id, LOWER(skill_name));
CREATE INDEX IF NOT EXISTS skills_class_name ON skills(class_id, skill_name);
CREATE INDEX IF NOT EXISTS tripods_skill_name_ci ON tripods(skill_id, LOWER(tripod_name));
CREATE INDEX IF NOT EXISTS ark_passives_name_ci ON ark_passives(LOWER(passive_name), class_id, level);
CREATE INDEX IF NOT EXISTS ark_passives_class_name ON ark_passives(class_id, passive_name);
CREATE INDEX IF NOT EXISTS engravings_name_ci ON engravings(LOWER(name), class_id, level);
CREATE INDEX IF NOT EXISTS runes_name_ci ON runes(LOWER(rune_name), rarity);
