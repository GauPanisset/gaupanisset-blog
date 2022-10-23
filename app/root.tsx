import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  useCatch,
  useLocation,
  useOutlet,
} from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

import NavBar from '~/components/NavBar'
import { useInjectRealHeight } from '~/hooks/useInjectRealHeight'

import styles from './tailwind.css'

const links: LinksFunction = () => [
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

const description =
  "Gauthier's personal developer blog. Find his last projects and articles about tech and product subjects."
const defaultTitle = 'Gauthier Panisset'

const meta: MetaFunction = () => ({
  charset: 'utf-8',
  description,
  'og:type': 'website',
  'og:url': 'https://gauthier.panisset.fr',
  'og:title': defaultTitle,
  'og:description': description,
  'og:image':
    'https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/og-image.png',
  'og:image:height': '630',
  'og:image:width': '1200',
  viewport: 'width=device-width,initial-scale=1',
})

type DocumentProps = { children: React.ReactNode; title?: string }

type ErrorBoundaryProps = { error: Error }

type LayoutProps = { children: React.ReactNode }

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

const Document = ({ children, title = defaultTitle }: DocumentProps) => {
  const location = useLocation()
  useInjectRealHeight()

  return (
    <html lang="en">
      <head>
        <Meta />
        {title && <title>{title}</title>}
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
      <motion.main className="prose prose-invert flex w-full max-w-none flex-1 bg-dark lg:prose-xl">
        {children}
      </motion.main>
    </div>
  )
}

const App = () => {
  /**
   * The `useOutlet` is used to prevent glitch on transition with `framer-motion`.
   */
  const outlet = useOutlet()

  return (
    <Document>
      <Layout>{outlet}</Layout>
    </Document>
  )
}

const CatchBoundary = () => {
  const { status, statusText } = useCatch()

  return (
    <Document title={`${status} ${statusText}`}>
      <Layout>
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-center gap-16 self-stretch px-6 sm:flex-row sm:px-16">
          <div className="border-slate-300 text-center sm:border-r-[1px] sm:pr-16">
            <h1 className="mb-0 text-7xl lg:mb-0 lg:text-8xl">{status}</h1>
            <h2 className="my-4 text-3xl lg:my-4">{statusText}</h2>
          </div>
          {status === 404 && (
            <div>
              <p>{`I haven't created this page yet.`}</p>
              <p>
                {`Please click `}
                <Link to="/" className="font-bold text-primary no-underline">
                  here
                </Link>
                {` to be redirected to the landing page.`}
              </p>
              <p>
                {`If you think this page
                should exist, don't hesitate to `}
                <HashLink
                  smooth={true}
                  to="/about#contact"
                  className="font-bold text-primary no-underline"
                >
                  contact me
                </HashLink>
                .
              </p>
            </div>
          )}
        </div>
      </Layout>
    </Document>
  )
}

const ErrorBoundary = ({ error }: ErrorBoundaryProps) => {
  console.error(error)

  return (
    <Document title="Oops!">
      <Layout>
        <div className="mx-auto flex w-full max-w-[1320px] flex-col justify-center self-stretch px-6 text-white sm:px-16">
          <h2>Error:</h2>
          <pre>{error.message}</pre>
        </div>
      </Layout>
    </Document>
  )
}

export { CatchBoundary, ErrorBoundary, links, meta }

export default App
