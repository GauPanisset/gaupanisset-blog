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
  liveUrl,
}) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="space-y-2 rounded-md px-4 py-2 no-underline animate-in fade-in fill-mode-backwards hover:bg-accent hover:text-accent-foreground motion-safe:slide-in-from-bottom-16 [&>h2]:mt-0"
      style={{
        animationDelay: `${100 * index}ms`,
        animationDuration: '500ms',
        transitionDuration: '250ms',
      }}
    >
      <h2
        id={`project-card-${slug}`}
        className="flex items-center text-primary [&]:mb-2"
      >
        {title}
        {liveUrl ? (
          <span className="ml-4 block h-2 w-2 rounded-full bg-green-500 motion-safe:animate-pulse" />
        ) : null}
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
      <p className="text-ellipsis font-mono">{description}</p>
      <div className="flex space-x-2 font-mono">
        {tags.map((tag) => (
          <Badge variant="secondary" key={tag} className="truncate">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
