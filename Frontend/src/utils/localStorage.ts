export const getFromStorage = (key: string): unknown => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const saveToStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key)
}