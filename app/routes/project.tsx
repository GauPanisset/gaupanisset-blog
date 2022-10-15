import type { LinksFunction } from '@remix-run/node'
import { Outlet, ScrollRestoration } from '@remix-run/react'
import styles from 'highlight.js/styles/a11y-dark.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ]
}

/**
 * Component implementing the layout of project pages.
 */
const Project = () => {
  return (
    <div className="m-auto w-full max-w-[1320px] p-6 sm:p-16">
      <div className="prose prose-invert mx-auto max-w-[692px] lg:prose-xl">
        <Outlet />
        <ScrollRestoration />
      </div>
    </div>
  )
}

export default Project
