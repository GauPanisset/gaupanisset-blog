import type { Project } from '~/types/project'

/**
 * Retrieve Project data from the .mdx file.
 * @param file imported module of the .mdx
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProjectFromMdx = (file: any): Project => {
  return {
    ...file.attributes,
  }
}
