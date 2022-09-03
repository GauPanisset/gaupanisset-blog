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
   * Icon or emoji displayed at the title left.
   */
  icon: string
  /**
   * Short link redirecting to the project page.
   */
  link: string
  progress: number
  /**
   * Tags attached to the project. They refer to linked subjects.
   */
  tags: string[]
  /**
   * Title of the project.
   */
  title: string
}
