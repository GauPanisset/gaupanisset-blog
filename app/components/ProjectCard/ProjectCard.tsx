import { Link } from '@remix-run/react'

import ProgressBar from '~/components/ProgressBar'
import { computeReadingTime } from '~/helpers/computeReadingTime'
import { formatDate } from '~/helpers/formatDate'
import type { Project } from '~/types/project'

type ProjectCardProps = Project & {
  /**
   * Full project page text. It is required here to compute the read time.
   */
  text: string
}

/**
 * Display a card in which a project is shortly described.
 */
const ProjectCard = ({
  date,
  description,
  icon,
  link,
  progress,
  tags,
  text,
  title,
}: ProjectCardProps) => {
  return (
    <Link to={link} className="flex flex-col gap-2">
      <h2 className="text-subtitle-2 font-bold text-primary">
        {icon} {title}
      </h2>
      <div className="flex items-center justify-between gap-4 text-caption text-mid">
        <span>
          <span>{formatDate(date.update || date.creation)}</span>{' '}
          <span>🕑 {computeReadingTime(text)} min read</span>
        </span>
        <span className="h-fit max-w-[5rem] grow">
          <ProgressBar value={progress} />
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
