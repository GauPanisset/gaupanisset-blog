export type Project = {
  /**
   * Dates of the project.
   */
  date: {
    /**
     * Creation date of the project.
     */
    creation: string
    /**
     * Last update date of the project.
     */
    update?: string
  }
  /**
   * Short description of the project.
   * It should not exceed 210 characters for 3 lines (170 on mobile for 4 lines).
   */
  description: string
  /**
   * <head> meta tags
   */
  meta: {
    title: string
  }
  /**
   * Short link redirecting to the project page.
   */
  slug: string
  /**
   * Tags attached to the project. They refer to linked subjects.
   */
  tags: string[]
  /**
   * Title of the project.
   */
  title: string
}
