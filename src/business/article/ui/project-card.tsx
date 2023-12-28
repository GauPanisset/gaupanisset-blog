import Link from 'next/link';

import { Badge } from '@/technical/ui/badge';

import { Article } from '../types';

type Props = Article['metadata'] & { slug: string; index: number };

const ProjectCard: React.FunctionComponent<Props> = ({
  date,
  description,
  index,
  slug,
  tags,
  title,
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="space-y-2 no-underline duration-500 animate-in fade-in fill-mode-backwards motion-safe:slide-in-from-bottom-16 [&:first-of-type>h2]:mt-0"
      style={{ animationDelay: `${100 * index}ms` }}
    >
      <h2 id={`project-card-${slug}`} className="text-primary [&]:mb-2">
        {title}
      </h2>
      <div className="text-muted-foreground">
        <span>
          {new Date(date.update).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
      <div className="line-clamp-4 text-ellipsis sm:line-clamp-3">
        {description}
      </div>
      <div className="flex space-x-2">
        {tags.map((tag) => (
          <Badge variant="secondary" key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
