import projects from '~/assets/projects.json'
import ProjectCard from '~/components/ProjectCard'
import RevealingText from '~/components/RevealingText'
import type { Project } from '~/types/project'

const sortProjectsByDate = (projectA: Project, projectB: Project) => {
  const dateA = new Date(projectA.date.update || projectA.date.creation)
  const dateB = new Date(projectB.date.update || projectB.date.creation)
  if (!dateA) return -1
  if (!dateB) return 1

  if (dateA <= dateB) return 1
  return -1
}

/**
 * Display the page showing all the projects.
 */
const Projects = () => {
  return (
    <div className="m-auto flex w-full max-w-[820px] flex-col gap-8 p-6 sm:gap-16 sm:p-16">
      <h1 className="text-title font-bold">
        <RevealingText delay={1}>{`Projects`}</RevealingText>
      </h1>
      <div className="flex w-full flex-col gap-8">
        {projects.sort(sortProjectsByDate).map((project) => (
          <ProjectCard key={project.link} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
