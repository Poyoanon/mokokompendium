export type D1PreparedStatementLike = {
  bind: (...values: unknown[]) => D1PreparedStatementLike
  first: <T = unknown>() => Promise<T | null>
  all: <T = unknown>() => Promise<{ results?: T[] }>
}

export type D1DatabaseLike = {
  prepare: (query: string) => D1PreparedStatementLike
}

export const asD1Database = (value: unknown): D1DatabaseLike => value as D1DatabaseLike
