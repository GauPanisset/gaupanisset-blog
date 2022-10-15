import { Link } from '@remix-run/react'

import { formatDate } from '~/helpers/formatDate'
import type { Project } from '~/types/project'

type ProjectCardProps = Project

/**
 * Display a card in which a project is shortly described.
 */
const ProjectCard = ({
  date,
  description,
  slug,
  tags,
  title,
}: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${slug}`}
      className="flex flex-col gap-2 no-underline prose-h2:mb-2 lg:prose-h2:mb-2"
    >
      <h2 className="text-primary">{title}</h2>
      <div className="flex items-center justify-between gap-4 text-base text-slate-400">
        <span>
          <span>{formatDate(date.update || date.creation)}</span>
        </span>
      </div>
      <div className="text-ellipsis line-clamp-4 sm:line-clamp-3">
        {description}
      </div>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <div
            className="rounded-xl bg-white px-2 text-base text-dark"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </Link>
  )
}

export default ProjectCard
