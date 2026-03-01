export const useSkillDisplayNames = () => useState<Record<string, string>>(
  'mk-skill-display-names',
  () => ({}),
)
