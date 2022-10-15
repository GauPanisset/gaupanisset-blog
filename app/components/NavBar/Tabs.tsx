import { Link } from '@remix-run/react'

type TabsProps = {
  /**
   * Forward `className` to be able to add some Tailwind classes.
   */
  className?: string
}

/**
 * Display the tabs of the navigation bar.
 */
const Tabs = ({ className = '' }: TabsProps) => {
  return (
    <ul className={`text-2xl font-bold text-white ${className}`}>
      <Link to="/projects">{`Projects`}</Link>
      {/* <Link to="/about">{`About`}</Link>
      <Link to="/contact">{`Contact`}</Link> */}
    </ul>
  )
}

export default Tabs
