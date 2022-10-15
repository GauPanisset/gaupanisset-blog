import { useLoaderData as useRemixLoaderData } from '@remix-run/react'
import React from 'react'

/**
 * Hook wrapping the @remix-run `useLoaderData`.
 * It prevents the loaded data to be lost during transition.
 * Actually with framer-motion the component is unmounted after the route change.
 * However, since the route has changed, the loaded data are updated.
 */
export const useLoaderData = <T>() => {
  const lastData = React.useRef<T>()

  const data = (useRemixLoaderData<T>() ?? lastData.current) as T

  React.useEffect(() => {
    if (data) lastData.current = data
  }, [data])

  return data
}
