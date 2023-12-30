import { Badge } from '@/technical/ui/badge';

import { Event as EventType } from '../types';

type Props = EventType;

const Event: React.FunctionComponent<Props> = ({
  date,
  title,
  subtitle,
  description,
  tags,
}) => {
  return (
    <div className="not-prose flex flex-col font-mono sm:flex-row sm:space-x-8">
      <div className="relative mb-2 whitespace-nowrap tabular-nums after:invisible after:content-['0000_-_0000']">
        <span className="absolute font-sans font-medium text-muted-foreground">
          {date}
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="font-sans font-medium">{title}</p>
          <div className="flex items-center">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <p>{subtitle}</p>
        <p className="text-sm font-normal text-muted-foreground lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export { Event };
