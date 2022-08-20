/**
 * Compute the time to read a text based on its content.
 * @param text text to read
 * @param wpm reading speed (word per minute)
 */
const computeReadingTime = (text: string, wpm = 238): number => {
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wpm)
}

/**
 * Format a string date.
 * @param date date to format
 */
const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

export { computeReadingTime, formatDate }
