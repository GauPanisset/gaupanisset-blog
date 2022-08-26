type ObjectWithDate = {
  date: string
}

/**
 * Callback function used to sort object with a `date` attribute.
 */
export const sortByDate = (
  objectA: ObjectWithDate,
  objectB: ObjectWithDate
): 1 | -1 => {
  const dateA = new Date(objectA.date)
  const dateB = new Date(objectB.date)
  if (!dateA) return -1
  if (!dateB) return 1

  if (dateA <= dateB) return 1
  return -1
}
