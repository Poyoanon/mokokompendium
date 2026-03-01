const NAMED_HTML_ENTITIES: Record<string, string> = {
  amp: '&',
  apos: "'",
  gt: '>',
  lt: '<',
  nbsp: ' ',
  quot: '"',
}

const isValidCodePoint = (value: number) => Number.isInteger(value) && value >= 0 && value <= 0x10ffff

export const decodeTooltipEntities = (value: string) =>
  value.replace(/&(#x?[0-9a-fA-F]+|[A-Za-z][A-Za-z0-9]+);/g, (entity, token: string) => {
    if (token.startsWith('#')) {
      const rawNumericValue = token[1]?.toLowerCase() === 'x'
        ? Number.parseInt(token.slice(2), 16)
        : Number.parseInt(token.slice(1), 10)

      if (!isValidCodePoint(rawNumericValue)) {
        return entity
      }

      // Normalize non-breaking spaces to a regular space for tooltip layout consistency.
      if (rawNumericValue === 160) {
        return ' '
      }

      return String.fromCodePoint(rawNumericValue)
    }

    const normalizedToken = token.toLowerCase()
    return NAMED_HTML_ENTITIES[normalizedToken] ?? entity
  })
