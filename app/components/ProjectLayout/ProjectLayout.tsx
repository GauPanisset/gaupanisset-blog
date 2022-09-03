import Callout, { Severity } from '~/components/Callout'
import { formatDate } from '~/helpers/formatDate'
import type { Project } from '~/types/project'

type ProjectLayoutProps = {
  /**
   * Content of the project page.
   */
  children: React.ReactNode
  /**
   * Metadata of the project.
   */
  project: Project
}

/**
 * Implement the layout of any project page.
 */
const ProjectLayout = ({ children, project }: ProjectLayoutProps) => {
  return (
    <div className="m-auto flex w-full max-w-[1320px] flex-col justify-center gap-6 p-6 sm:gap-16 sm:p-16">
      <header className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-subtitle-2 font-bold sm:text-title">
          <span className="hidden sm:inline">{project.icon}</span>{' '}
          {project.title}
        </h1>
        <div className="flex gap-4 text-caption text-mid">
          <span>{formatDate(project.date.creation)}</span>
        </div>
        <div className="flex gap-2 py-2">
          {project.tags.map((tag) => (
            <div
              className="rounded-lg bg-light px-2 text-caption text-dark"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </header>
      {project.progress === 0 && (
        <Callout severity={Severity.Error}>
          There is nothing here right now... come back in a few days.
        </Callout>
      )}
      {project.progress > 0 && project.progress < 100 && (
        <Callout severity={Severity.Info}>
          While reading, keep in mind I&apos;m still working on this page.
        </Callout>
      )}
      {children}
    </div>
  )
}

export default ProjectLayout
