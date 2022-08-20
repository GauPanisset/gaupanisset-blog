import { Link } from '@remix-run/react'

type TabsProps = { className?: string }

/**
 * Display the tabs of the navigation bar.
 */
const Tabs = ({ className = '' }: TabsProps) => {
  return (
    <ul className={`text-subtitle font-bold ${className}`}>
      <Link to="/projects">{`Projects`}</Link>
      {/* <Link to="/about">{`About`}</Link>
      <Link to="/contact">{`Contact`}</Link> */}
    </ul>
  )
}

export default Tabs
