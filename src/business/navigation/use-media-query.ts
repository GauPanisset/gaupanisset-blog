import { useEffect, useMemo, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

/**
 * Hook checking whether a media query is matching based on tailwind screens size.
 */
export const useMediaQuery = (screen: string) => {
  const [matches, setMatches] = useState(false);

  const config = resolveConfig(require('../../../tailwind.config'));
  const screenConfig = config?.theme?.screens;

  const query = useMemo(() => {
    if (!screenConfig[screen as keyof typeof screenConfig]) {
      console.warn(
        `Can't find any screen breakpoint named: '${screen}' in the tailwind config (see 'theme.screens')`
      );
      return '';
    }

    return `(min-width: ${screenConfig[screen as keyof typeof screenConfig]})`;
  }, [screenConfig, screen]);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const handleResize = () => setMatches(media.matches);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [matches, query]);

  return matches;
};
