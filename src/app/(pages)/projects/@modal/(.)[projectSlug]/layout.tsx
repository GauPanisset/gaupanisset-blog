'use client';

import { Portal } from '@radix-ui/react-portal';

type Props = {
  children: React.ReactNode;
};

const ProjectLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Portal className="absolute left-0 top-16 z-10 h-main w-full animate-article-in overflow-auto">
      <div className="mx-auto max-w-[820px] p-6 sm:p-16">{children}</div>
    </Portal>
  );
};

export default ProjectLayout;
