import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/technical/ui/badge';
import { Button } from '@/technical/ui/button';

import { Use } from '../types';

type Props = Use;

const UseItem: React.FunctionComponent<Props> = ({
  title,
  description,
  link,
  tags = [],
}) => {
  return (
    <div className="not-prose font-mono">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="font-sans font-medium">{title}</p>
          {link ? (
            <Button variant="ghost" size="icon" asChild>
              <a href={link} target="_blank">
                <ArrowUpRight />
              </a>
            </Button>
          ) : null}
        </div>
        <div className="flex items-center space-x-2">
          {tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground lg:text-base">
        {description}
      </p>
    </div>
  );
};

export { UseItem };
