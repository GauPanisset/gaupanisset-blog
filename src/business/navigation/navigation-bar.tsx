'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/technical/ui/button';

import { DesktopNavigationBar } from './desktop-navigation-bar';
import { MobileNavigationMenu } from './mobile-navigation-menu';
import { useMediaQuery } from './use-media-query';

const NavigationBar: React.FunctionComponent = () => {
  const isWiderThanSmScreen = useMediaQuery('sm');

  return (
    <nav className="sticky top-0 z-10 box-border h-16 w-full border-b border-border/40 bg-background">
      <div className="not-prose mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6 sm:px-16">
        <Button
          asChild
          className="h-fit w-fit rounded-full p-0"
          variant="ghost"
        >
          <Link href="/">
            <Image
              alt="GauPanisset logo"
              className="h-16 w-16"
              src="/assets/images/gaupanisset-logo.svg"
              width={64}
              height={64}
            />
          </Link>
        </Button>
        {isWiderThanSmScreen ? (
          <DesktopNavigationBar />
        ) : (
          <MobileNavigationMenu />
        )}
      </div>
    </nav>
  );
};

export { NavigationBar };
