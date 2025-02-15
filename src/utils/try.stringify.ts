export const tryStringify = (data: unknown) => {
  if (typeof data === 'string') return data

  try {
    const stringified = JSON.stringify(data) as string | undefined
    return stringified || ''
  } catch {
    return 'not stringifiable'
  }
}
