import { normalizeTooltipLocale } from '../../app/utils/tooltip-locale'
import type { D1DatabaseLike } from './d1'

type TableInfoRow = {
  name?: string | null
}

type LocalizedColumnSelection = {
  baseColumn: string | null
  localizedColumn: string | null
}

type LocalizedSelectOptions = {
  db: D1DatabaseLike
  tableName: string
  baseColumn: string
  locale: unknown
  alias?: string
}

type LocaleAwareEqualsClauseOptions = {
  db: D1DatabaseLike
  tableName: string
  baseColumn: string
  locale: unknown
  value: string
  alias?: string
}

type LocaleAwareEqualsClause = {
  sql: string
  bindings: string[]
}

const IDENTIFIER_PATTERN = /^[A-Za-z_][A-Za-z0-9_]*$/

const tableColumnCache = new WeakMap<D1DatabaseLike, Map<string, Promise<Set<string>>>>()

const normalizeColumnName = (value: string) => value.trim().toLowerCase()

const quoteIdentifier = (value: string) => {
  if (!IDENTIFIER_PATTERN.test(value)) {
    throw new Error(`Invalid SQL identifier: ${value}`)
  }

  return `"${value}"`
}

const getColumnReference = (columnName: string, alias?: string) => {
  const quotedColumn = quoteIdentifier(columnName)
  if (!alias) return quotedColumn
  return `${quoteIdentifier(alias)}.${quotedColumn}`
}

const getLocaleColumnCandidates = (baseColumn: string, locale: string) => {
  const candidates = new Set<string>()
  const localeToken = locale.replace(/-/g, '_')
  const [language, region] = localeToken.split('_')
  const compactToken = localeToken.replace(/_/g, '')

  const addCandidate = (candidate: string | undefined) => {
    if (!candidate) return
    const normalized = normalizeColumnName(candidate)
    if (!normalized || normalized === baseColumn) return
    candidates.add(normalized)
  }

  addCandidate(`${baseColumn}_${localeToken}`)
  addCandidate(`${baseColumn}_${compactToken}`)
  addCandidate(`${localeToken}_${baseColumn}`)
  addCandidate(`${compactToken}_${baseColumn}`)

  if (language) {
    addCandidate(`${baseColumn}_${language}`)
    addCandidate(`${language}_${baseColumn}`)
  }

  if (language && region) {
    addCandidate(`${baseColumn}_${language}_${region}`)
    addCandidate(`${language}_${region}_${baseColumn}`)
  }

  return [...candidates]
}

const getTableColumnCache = (db: D1DatabaseLike) => {
  const cached = tableColumnCache.get(db)
  if (cached) {
    return cached
  }

  const nextCache = new Map<string, Promise<Set<string>>>()
  tableColumnCache.set(db, nextCache)
  return nextCache
}

const fetchTableColumns = async (db: D1DatabaseLike, tableName: string) => {
  if (!IDENTIFIER_PATTERN.test(tableName)) {
    return new Set<string>()
  }

  try {
    const pragmaSql = `PRAGMA table_info(${quoteIdentifier(tableName)})`
    const pragma = await db.prepare(pragmaSql).all() as { results?: TableInfoRow[] }
    return new Set(
      (pragma.results ?? [])
        .map((row) => typeof row.name === 'string' ? normalizeColumnName(row.name) : '')
        .filter((name) => name.length > 0),
    )
  } catch {
    return new Set<string>()
  }
}

const resolveLocalizedColumns = async (
  db: D1DatabaseLike,
  tableName: string,
  baseColumn: string,
  locale: unknown,
): Promise<LocalizedColumnSelection> => {
  const cache = getTableColumnCache(db)
  const normalizedTableName = normalizeColumnName(tableName)
  const cachedColumns = cache.get(normalizedTableName)
    ?? fetchTableColumns(db, tableName)
  if (!cache.has(normalizedTableName)) {
    cache.set(normalizedTableName, cachedColumns)
  }

  const columns = await cachedColumns
  const normalizedBaseColumn = normalizeColumnName(baseColumn)
  const baseColumnName = columns.has(normalizedBaseColumn) ? normalizedBaseColumn : null
  const normalizedLocale = normalizeTooltipLocale(locale)
  const localizedColumnName = getLocaleColumnCandidates(normalizedBaseColumn, normalizedLocale)
    .find((candidate) => columns.has(candidate) && candidate !== baseColumnName)
    ?? null

  return {
    baseColumn: baseColumnName,
    localizedColumn: localizedColumnName,
  }
}

export const buildLocalizedSelectSql = async ({
  db,
  tableName,
  baseColumn,
  locale,
  alias,
}: LocalizedSelectOptions) => {
  const { baseColumn: resolvedBaseColumn, localizedColumn } = await resolveLocalizedColumns(
    db,
    tableName,
    baseColumn,
    locale,
  )

  if (localizedColumn && resolvedBaseColumn) {
    return `COALESCE(${getColumnReference(localizedColumn, alias)}, ${getColumnReference(resolvedBaseColumn, alias)})`
  }

  if (localizedColumn) {
    return getColumnReference(localizedColumn, alias)
  }

  if (resolvedBaseColumn) {
    return getColumnReference(resolvedBaseColumn, alias)
  }

  return 'NULL'
}

export const buildLocaleAwareEqualsClause = async ({
  db,
  tableName,
  baseColumn,
  locale,
  value,
  alias,
}: LocaleAwareEqualsClauseOptions): Promise<LocaleAwareEqualsClause> => {
  const { baseColumn: resolvedBaseColumn, localizedColumn } = await resolveLocalizedColumns(
    db,
    tableName,
    baseColumn,
    locale,
  )

  if (localizedColumn && resolvedBaseColumn) {
    return {
      sql: `(LOWER(${getColumnReference(resolvedBaseColumn, alias)}) = LOWER(?) OR LOWER(${getColumnReference(localizedColumn, alias)}) = LOWER(?))`,
      bindings: [value, value],
    }
  }

  if (localizedColumn) {
    return {
      sql: `LOWER(${getColumnReference(localizedColumn, alias)}) = LOWER(?)`,
      bindings: [value],
    }
  }

  if (resolvedBaseColumn) {
    return {
      sql: `LOWER(${getColumnReference(resolvedBaseColumn, alias)}) = LOWER(?)`,
      bindings: [value],
    }
  }

  return {
    sql: '1 = 0',
    bindings: [],
  }
}
