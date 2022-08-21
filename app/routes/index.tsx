import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'

const spanVariants = {
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

/**
 * Display a animated span revealing from its base line.
 */
const MotionSpan = ({
  children,
  delay = 1.6,
}: {
  children: React.ReactNode
  delay?: number
}) => {
  return (
    <span className="overflow-hidden">
      <motion.span
        className="inline-block"
        initial="hidden"
        animate="visible"
        variants={spanVariants}
        custom={delay}
      >
        {children}
      </motion.span>
    </span>
  )
}

/**
 * Display the landing page.
 */
const Index = () => {
  return (
    <div className="m-auto flex h-full w-full max-w-[1320px] grow flex-col justify-center gap-8 px-6 text-base sm:px-16">
      <div className="w-fit">
        <MotionSpan>{`Hi! I'm`}</MotionSpan>
        <h1 className="overflow-hidden text-8xl font-black text-primary sm:text-9xl">
          <MotionSpan delay={0.8}>{`Gauthier Panisset`}</MotionSpan>
        </h1>
      </div>
      <div>
        <h2>
          <MotionSpan>
            {`I love creating `} <span>{`useful`}</span>
            {` or `}
            <span>{`funny`}</span>
            {` things with code.`}
          </MotionSpan>
        </h2>
        <h2>
          <MotionSpan>
            {`Currently Software Engineer at `}
            <a
              href="https://goshaba.com/en/goshaba-home-en/"
              rel="noreferrer"
              target="_blank"
            >
              <strong className="text-primary">{`Goshaba`}</strong>
            </a>
            {` building an assessment tool with cognitive science and video game.`}
          </MotionSpan>
        </h2>
      </div>
      <h3 className="my-16">
        <MotionSpan>
          {`Welcome to my website, have a look at my `}
          <Link to="/projects">
            <strong className="text-primary">{`projects`}</strong>
          </Link>
          {`.`}
        </MotionSpan>
      </h3>
    </div>
  )
}

export default Index
