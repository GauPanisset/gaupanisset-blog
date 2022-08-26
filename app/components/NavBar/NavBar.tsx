import { Link } from '@remix-run/react'
import { motion, useCycle } from 'framer-motion'
import type { Variants } from 'framer-motion'

import MenuIcon from '~/components/MenuIcon'
import { useMediaQuery } from '~/hooks/useMediaQuery'

import Tabs from './Tabs'

/**
 * Display the navigation bar of the application.
 * The NavBar has two variant depending on screen size.
 */
const NavBar = () => {
  const isWiderThanSmScreen = useMediaQuery('sm')
  return isWiderThanSmScreen ? <DesktopNavBar /> : <MobileNavBar />
}

const wrapperVariants: Variants = {
  hidden: {
    y: '-100%',
    transition: { delay: 0.1, duration: 0.8, ease: [0.17, 0.67, 0.27, 0.87] },
  },
  visible: {
    y: 0,
    transition: { delay: 0.4, duration: 0.8, ease: [0.17, 0.67, 0.27, 0.87] },
  },
}

const menuVariants: Variants = {
  open: {
    clipPath: `inset(0% 0% 0% 0%)`,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  closed: {
    clipPath: 'inset(0% 0% 100% 0%)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
}

/**
 * Navigation bar display on desktop.
 */
const DesktopNavBar = () => (
  <nav className="w-full bg-dark">
    <motion.div
      className="m-auto flex w-full max-w-[1320px] items-center justify-between px-16 py-2"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={wrapperVariants}
    >
      <Link to="/">
        <img
          alt="GauPanisset logo"
          className="h-16 w-16"
          src="https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/gaupanisset-logo.svg"
        />
      </Link>
      <Tabs className="flex gap-6" />
    </motion.div>
  </nav>
)

/**
 * Navigation bar display on mobile.
 */
const MobileNavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <nav className="z-10 w-full bg-dark">
      <motion.div
        className="flex w-full max-w-[1320px] items-center justify-between px-6 py-2"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={wrapperVariants}
      >
        <Link to="/">
          <img
            alt="GauPanisset logo"
            className="h-16 w-16"
            src="https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/gaupanisset-logo.svg"
          />
        </Link>
        <MenuIcon isOpen={isOpen} onClick={() => toggleOpen()} />
      </motion.div>
      <motion.div
        className="absolute top-20 z-0 h-main w-full bg-gradient-to-b from-dark via-transparent px-6 pt-16 backdrop-blur-xl"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <Tabs className="flex flex-col gap-8" />
      </motion.div>
    </nav>
  )
}

export default NavBar
