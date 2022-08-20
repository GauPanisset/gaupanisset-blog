import { Link } from '@remix-run/react'

import { computeReadingTime, formatDate } from './helpers'

type ProjectCardProps = {
  /**
   * Creation or last update date of the project.
   */
  date: string
  /**
   * Short description of the project.
   * It should not exceed 170 characters and 3 lines.
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
  /**
   * Tags attached to the project. They refer to linked subjects.
   */
  tags: string[]
  /**
   * Full project page text. It is required here to compute the read time.
   */
  text: string
  /**
   * Title of the project.
   */
  title: string
}

/**
 * Display a card in which a project is shortly described.
 */
const ProjectCard = ({
  date,
  description,
  icon,
  link,
  tags,
  text,
  title,
}: ProjectCardProps) => {
  return (
    <Link to={link} className="flex flex-col gap-2">
      <h2 className="text-subtitle font-bold text-primary">
        {icon} {title}
      </h2>
      <div className="flex gap-4 text-caption text-mid">
        <span>{formatDate(date)}</span>{' '}
        <span>🕑 {computeReadingTime(text)} min read</span>
      </div>
      <div className="text-base">{description}</div>
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
