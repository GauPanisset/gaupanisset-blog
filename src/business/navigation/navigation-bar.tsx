import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/technical/ui/button';

import { ThemeModeSwitch } from '../theme/theme-mode-switch';

const NavigationBar: React.FunctionComponent = () => {
  return (
    <nav className="not-prose sticky top-0 flex items-center justify-between bg-background">
      <Link href="/">
        <Image
          alt="GauPanisset logo"
          className="h-16 w-16"
          src="https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/gaupanisset-logo.svg"
          width={64}
          height={64}
        />
      </Link>
      <div className="flex items-center space-x-4">
        <ThemeModeSwitch />
        <Button asChild className="text-2xl font-bold" variant="ghost">
          <Link href="/projects">Projects</Link>
        </Button>
        <Button asChild className="text-2xl font-bold" variant="ghost">
          <Link href="/about">About</Link>
        </Button>
      </div>
    </nav>
  );
};

export { NavigationBar };
