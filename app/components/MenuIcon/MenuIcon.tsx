import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

type MenuIconProps = {
  isOpen: boolean
  onClick: () => void
}

type PathProps = {
  d?: string
  variants: Variants
}

const Path = (props: PathProps) => (
  <motion.path
    className="stroke-light"
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
)

const topLineVariants = {
  closed: { d: 'M 2 2.5 L 20 2.5' },
  open: { d: 'M 3 16.5 L 17 2.5' },
}
const middleLineVariants = {
  closed: { opacity: 1, transition: { duration: 0.1 } },
  open: { opacity: 0, transition: { duration: 0.1 } },
}
const bottomLineVariants = {
  closed: { d: 'M 2 16.346 L 20 16.346' },
  open: { d: 'M 3 2.5 L 17 16.346' },
}

/**
 * Display a clickable hamburger menu icon.
 * It render the right icon according to the `isOpen` props.
 */
const MenuIcon = ({ isOpen, onClick }: MenuIconProps) => (
  <motion.button
    className="select-none"
    onClick={onClick}
    animate={isOpen ? 'open' : 'closed'}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path variants={topLineVariants} />
      <Path d="M 2 9.423 L 20 9.423" variants={middleLineVariants} />
      <Path variants={bottomLineVariants} />
    </svg>
  </motion.button>
)

export default MenuIcon
