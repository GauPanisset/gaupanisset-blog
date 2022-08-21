import { useState, useEffect, useMemo } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config'

/**
 * Hook checking whether a media query is matching based on tailwind screens size.
 */
export const useMediaQuery = (screen: string) => {
  const [matches, setMatches] = useState(false)

  const config = resolveConfig(tailwindConfig)

  const query = useMemo(() => {
    const screenConfig = config?.theme?.screens as Record<string, string>

    if (!screenConfig[screen]) {
      console.warn(
        `Can't find any screen breakpoint named: '${screen}' in the tailwind config (see 'theme.screens')`
      )
      return ''
    }

    return `(min-width: ${screenConfig[screen]})`
  }, [config?.theme?.screens, screen])

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const handleResize = () => setMatches(media.matches)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [matches, query])

  return matches
}
