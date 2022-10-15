import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  useLocation,
  useOutlet,
} from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

import NavBar from '~/components/NavBar'
import { useInjectRealHeight } from '~/hooks/useInjectRealHeight'

import styles from './tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap',
  },
  { rel: 'stylesheet', href: styles },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Gauthier Panisset',
  viewport: 'width=device-width,initial-scale=1',
})

type DocumentProps = { children: React.ReactNode }

type LayoutProps = { children: React.ReactNode }

const App = () => {
  /**
   * The `useOutlet` is used to prevent glitch on transition with `framer-motion`.
   */
  const outlet = useOutlet()
  useInjectRealHeight()

  return (
    <Document>
      <Layout>{outlet}</Layout>
    </Document>
  )
}

const variants: Variants = {
  opening: {
    clipPath: 'inset(100% 0% 0% 0%)',
  },
  closing: {
    clipPath: 'inset(0% 0% 100% 0%)',
    transition: { duration: 0.5, ease: [0.745, 0.35, 0.61, 0.925] },
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { delay: 0.2, duration: 0.5, ease: [0.745, 0.35, 0.61, 0.925] },
  },
}

const Document = ({ children }: DocumentProps) => {
  const location = useLocation()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <AnimatePresence mode="wait">
        <motion.body
          key={location.pathname}
          initial="opening"
          animate="visible"
          exit="closing"
          variants={variants}
        >
          {children}
          <Scripts />
          {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
        </motion.body>
      </AnimatePresence>
    </html>
  )
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-[var(--window-height)] flex-col items-center">
      <NavBar />
      <motion.main className="flex w-full flex-1 bg-dark">
        {children}
      </motion.main>
    </div>
  )
}

export default App
