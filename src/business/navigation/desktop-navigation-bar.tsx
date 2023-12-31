'use client';

import Link from 'next/link';

import { ThemeModeSwitch } from '@/business/theme/theme-mode-switch';
import { Button } from '@/technical/ui/button';

const DesktopNavigationBar: React.FunctionComponent = () => {
  return (
    <div className="flex items-center space-x-4">
      <ThemeModeSwitch />
      <Button asChild className="text-2xl font-bold" variant="ghost">
        <Link href="/projects">Projects</Link>
      </Button>
      <Button asChild className="text-2xl font-bold" variant="ghost">
        <Link href="/uses">Uses</Link>
      </Button>
      <Button asChild className="text-2xl font-bold" variant="ghost">
        <Link href="/about">About</Link>
      </Button>
    </div>
  );
};

export { DesktopNavigationBar };
