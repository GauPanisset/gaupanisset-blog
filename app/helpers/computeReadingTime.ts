/**
 * Compute the time to read a text based on its content.
 * @param text text to read
 * @param wpm reading speed (word per minute)
 */
export const computeReadingTime = (text: string, wpm = 238): number => {
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wpm)
}
