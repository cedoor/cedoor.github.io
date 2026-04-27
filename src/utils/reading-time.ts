export function readingTime(body: string): string {
  const words = body.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min`
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10).replace(/-/g, '.')
}
