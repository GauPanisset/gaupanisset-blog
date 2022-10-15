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
    <Link to={`/project/${slug}`} className="flex flex-col gap-2">
      <h2 className="text-subtitle-2 font-bold text-primary">{title}</h2>
      <div className="flex items-center justify-between gap-4 text-caption text-mid">
        <span>
          <span>{formatDate(date.update || date.creation)}</span>
        </span>
      </div>
      <div className="text-ellipsis text-base line-clamp-4 sm:line-clamp-3">
        {description}
      </div>
      <div className="flex gap-2 py-2">
        {tags.map((tag) => (
          <div
            className="rounded-lg bg-light px-2 text-caption text-dark"
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
