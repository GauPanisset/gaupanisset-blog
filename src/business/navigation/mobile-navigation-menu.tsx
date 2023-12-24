'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';

import { ThemeModeSwitch } from '@/business/theme/theme-mode-switch';
import { Button } from '@/technical/ui/button';

const preventPropagation: MouseEventHandler = (event) => {
  event.stopPropagation();
};

const MobileNavigationMenu: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </Button>
      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute -left-6 top-16 z-0 flex h-mobile-menu w-[calc(100%+1.5rem)] flex-col justify-between bg-gradient-to-b from-background via-transparent px-12 pb-6 pr-6 pt-16 backdrop-blur-xl"
        >
          <div className="flex flex-col space-y-6 ">
            <Button
              asChild
              className="w-fit text-2xl font-bold"
              variant="ghost"
              onClick={preventPropagation}
            >
              <Link href="/projects">Projects</Link>
            </Button>
            <Button
              asChild
              className="w-fit text-2xl font-bold"
              variant="ghost"
              onClick={preventPropagation}
            >
              <Link href="/about">About</Link>
            </Button>
          </div>

          <div className="self-end" onClick={preventPropagation}>
            <ThemeModeSwitch />
          </div>
        </div>
      ) : null}
    </>
  );
};

export { MobileNavigationMenu };
