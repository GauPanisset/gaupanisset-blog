'use client';

import { Portal } from '@radix-ui/react-portal';
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
        <Portal>
          <div
            onClick={() => setIsOpen(false)}
            className="not-prose absolute left-0 top-16 z-20 flex h-main w-full flex-col justify-between bg-gradient-to-b from-background via-transparent px-6 pb-6 pt-16 backdrop-blur-xl"
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
        </Portal>
      ) : null}
    </>
  );
};

export { MobileNavigationMenu };
