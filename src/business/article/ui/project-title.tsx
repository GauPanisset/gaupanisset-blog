'use client';

import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  projectSlug: string;
};

const ProjectTitle: React.FunctionComponent<Props> = ({
  children,
  projectSlug,
}) => {
  const matchingElement = document?.getElementById(
    `project-card-${projectSlug}`
  );

  /**
   * Hide the title on the /projects page to create the transition to the /projects/[projectSlug] page.
   */
  useEffect(() => {
    matchingElement?.classList.add('opacity-0');
    return () => {
      matchingElement?.classList.remove('opacity-0');
    };
  }, [projectSlug, matchingElement]);

  const elementY =
    Number(matchingElement?.offsetTop) -
    document.getElementsByTagName('main')[0]?.scrollTop;

  return (
    <h1
      className="origin-top-left text-inherit motion-safe:animate-article-title-in"
      style={{ '--title-start-y': `${elementY}px` } as React.CSSProperties}
    >
      {children}
    </h1>
  );
};

export { ProjectTitle };
