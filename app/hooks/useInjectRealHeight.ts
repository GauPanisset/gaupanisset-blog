import React from 'react'

/**
 * Hook injecting the window height value in a css variable.
 * It is mainly used to handle 100vh issue on mobiles.
 */
export const useInjectRealHeight = () => {
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    const injectWindowHeight = () => {
      const doc = document.documentElement
      const windowHeight = window.innerHeight

      doc.style.setProperty('--window-height', `${windowHeight}px`)

      setHeight(windowHeight)
    }
    injectWindowHeight()

    window.addEventListener('resize', injectWindowHeight)

    return () => {
      window.removeEventListener('resize', injectWindowHeight)
    }
  }, [])

  return height
}
