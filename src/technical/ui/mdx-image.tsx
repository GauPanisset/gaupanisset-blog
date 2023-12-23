/* eslint-disable @next/next/no-img-element */

import { cn } from './helpers';

type Props = {
  alt: string;
  caption?: string | React.ReactNode;
  className?: string;
  src: string;
};

const MdxImage: React.FunctionComponent<Props> = ({
  alt,
  caption,
  className = '',
  src,
}) => {
  return (
    <figure className={cn(className)}>
      <img
        src={`/assets/images/${src}`}
        alt={alt}
        className="m-auto rounded-md shadow-lg"
      />
      {caption && <figcaption className="text-center">{caption}</figcaption>}
    </figure>
  );
};

export { MdxImage };
