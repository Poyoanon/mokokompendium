export const createDeferred = <T>() => {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })

  return { promise, resolve, reject }
}

export const flushMicrotasks = async (rounds = 5) => {
  for (let i = 0; i < rounds; i += 1) {
    await Promise.resolve()
  }
}
