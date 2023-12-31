'use client';

import { Portal } from '@radix-ui/react-portal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';

import { ThemeModeSwitch } from '@/business/theme/theme-mode-switch';
import { Button } from '@/technical/ui/button';
import { cn } from '@/technical/ui/helpers';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d={isOpen ? 'M6 6 L18 18' : 'M4 6 L20 6'}
            className="transition-all"
          />
          <path
            d="M4 12 L20 12"
            className={cn(
              isOpen ? 'opacity-0' : 'opacity-100',
              'transition-all'
            )}
          />
          <path
            d={isOpen ? 'M18 6 L6 18' : 'M4 18 L20 18'}
            className="transition-all"
          />
        </svg>
      </Button>
      {isOpen ? (
        <Portal
          onClick={() => setIsOpen(false)}
          className="not-prose absolute left-0 top-16 z-20 flex h-main w-full flex-col justify-between bg-gradient-to-b from-background via-transparent px-6 pb-6 pt-16 backdrop-blur-xl duration-300 animate-in fade-in fill-mode-backwards"
        >
          <div className="flex flex-col space-y-6 ">
            <Button
              asChild
              className="w-fit text-2xl font-bold delay-150 duration-300 animate-in fade-in slide-in-from-left-8 fill-mode-backwards"
              variant="ghost"
              onClick={preventPropagation}
              style={{ transitionDelay: '0ms', transitionDuration: '150ms' }}
            >
              <Link href="/projects">Projects</Link>
            </Button>
            <Button
              asChild
              className="w-fit text-2xl font-bold delay-200 duration-300 animate-in fade-in slide-in-from-left-8 fill-mode-backwards"
              variant="ghost"
              onClick={preventPropagation}
              style={{ transitionDelay: '0ms', transitionDuration: '150ms' }}
            >
              <Link href="/uses">Uses</Link>
            </Button>
            <Button
              asChild
              className="w-fit text-2xl font-bold duration-300 animate-in fade-in slide-in-from-left-8 fill-mode-backwards"
              variant="ghost"
              onClick={preventPropagation}
              style={{
                transitionDelay: '0ms',
                transitionDuration: '150ms',
                animationDelay: '250ms',
              }}
            >
              <Link href="/about">About</Link>
            </Button>
          </div>

          <div
            className="self-end delay-150 duration-300 animate-in fade-in slide-in-from-bottom-8 fill-mode-backwards"
            onClick={preventPropagation}
            style={{ transitionDelay: '0ms', transitionDuration: '150ms' }}
          >
            <ThemeModeSwitch />
          </div>
        </Portal>
      ) : null}
    </>
  );
};

export { MobileNavigationMenu };
