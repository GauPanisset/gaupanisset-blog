import { json } from '@remix-run/node'

import ProjectCard from '~/components/ProjectCard'
import RevealingText from '~/components/RevealingText'
import { getProjectFromMdx } from '~/helpers/getProjectFromMdx'
import { useLoaderData } from '~/hooks/useLoaderData'
import type { Project } from '~/types/project'

import * as browserSupport from './project/browser-support.mdx'
import * as gr20Reporting from './project/gr20-reporting.mdx'
import * as personalBlog from './project/personal-blog.mdx'
import * as slackWheel from './project/slack-wheel.mdx'
import * as weWorkTeam from './project/wework-team.mdx'

const sortProjectsByDate = (projectA: Project, projectB: Project) => {
  const dateA = new Date(projectA.date.update || projectA.date.creation)
  const dateB = new Date(projectB.date.update || projectB.date.creation)
  if (!dateA) return -1
  if (!dateB) return 1

  if (dateA <= dateB) return 1
  return -1
}

type LoaderData = ReturnType<typeof getProjectFromMdx>[]

export const loader = () => {
  return json<LoaderData>(
    [
      getProjectFromMdx(browserSupport),
      getProjectFromMdx(gr20Reporting),
      getProjectFromMdx(personalBlog),
      getProjectFromMdx(slackWheel),
      getProjectFromMdx(weWorkTeam),
    ].sort(sortProjectsByDate)
  )
}

/**
 * Display the page showing all the projects.
 */
const Projects = () => {
  const projects = useLoaderData<LoaderData>()

  return (
    <div className="mx-auto flex w-full max-w-[820px] flex-col p-6 sm:p-16">
      <h1>
        <RevealingText delay={1}>{`Projects`}</RevealingText>
      </h1>

      <div className="flex w-full flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
