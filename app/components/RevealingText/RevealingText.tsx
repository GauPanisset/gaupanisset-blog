import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const variants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: [0.17, 0.67, 0.27, 0.87],
    },
  }),
}

type RevealingTextProps = {
  children: React.ReactNode
  delay?: number
}

/**
 * Display a animated span revealing its content from its base line.
 */
const RevealingText = ({ children, delay = 1.6 }: RevealingTextProps) => {
  return (
    <span className="overflow-hidden">
      <motion.span
        className="inline-block"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={delay}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default RevealingText
