import { Link, useLocation } from '@remix-run/react'
import React from 'react'

import MenuIcon from '~/components/MenuIcon'

import Tabs from './Tabs'

/**
 * Display the navigation bar of the application.
 * The NavBar has two variant depending on screen size.
 */
const NavBar = () => {
  return (
    <>
      <DesktopNavBar className="hidden sm:flex" />
      <MobileNavBar className="flex sm:hidden" />
    </>
  )
}

type ClassNameProps = { className?: string }

/**
 * Navigation bar display on desktop.
 */
const DesktopNavBar = ({ className = '' }: ClassNameProps) => (
  <nav
    className={`w-full max-w-[1320px] items-center justify-between px-16 py-2 ${className}`}
  >
    <Link to="/">
      <img
        alt="GauPanisset logo"
        className="h-16 w-16"
        src="https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/gaupanisset-logo.svg"
      />
    </Link>
    <Tabs className="flex gap-6" />
  </nav>
)

/**
 * Navigation bar display on mobile.
 */
const MobileNavBar = ({ className = '' }: ClassNameProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const location = useLocation()

  React.useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleClick = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <>
      <nav
        className={`w-full max-w-[1320px] items-center justify-between px-6 py-2 ${className}`}
      >
        <Link to="/">
          <img
            alt="GauPanisset logo"
            className="h-16 w-16"
            src="https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/gaupanisset-logo.svg"
          />
        </Link>
        <MenuIcon
          className="block sm:hidden"
          isOpen={isOpen}
          onClick={handleClick}
        />
      </nav>
      {isOpen && (
        <div className="absolute top-0 mt-20 h-screen w-full bg-dark px-6 pt-16">
          <Tabs className="flex flex-col gap-8" />
        </div>
      )}
    </>
  )
}

export default NavBar
