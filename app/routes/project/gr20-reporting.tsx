import projects from '~/assets/projects.json'
import ProjectLayout from '~/components/ProjectLayout'
import type { Project } from '~/types/project'

const project = projects.find(
  ({ link }) => link === '/project/gr20-reporting'
) as Project

/**
 * Display the project page for: 'GR20 reporting'
 */
const GR20Reporting = () => {
  return (
    <ProjectLayout project={project}>
      <section></section>
    </ProjectLayout>
  )
}

export default GR20Reporting
