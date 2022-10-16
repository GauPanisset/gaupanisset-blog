import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

import RevealingText from '~/components/RevealingText'

const variants: Variants = {
  idle: {
    rotate: 0,
    transition: {
      delay: 1.8,
      duration: 0.3,
      repeat: 4,
      repeatType: 'mirror',
    },
  },
  rotating: { rotate: 30 },
}

/**
 * Display the landing page.
 */
const Index = () => {
  return (
    <div className="not-prose mx-auto flex w-full max-w-[1320px] flex-col justify-center gap-8 self-stretch px-6 text-white sm:px-16">
      <div>
        <RevealingText>
          <motion.span
            className="mr-2 inline-block origin-[center_80%]"
            initial="rotating"
            animate="idle"
            variants={variants}
          >
            👋
          </motion.span>
          {`Hi! I'm`}
        </RevealingText>
        <h1 className="text-5xl font-black text-primary sm:text-8xl xs:text-7xl">
          {`Gauthier Panisset`}
        </h1>
      </div>
      <div>
        <h2>
          <RevealingText>
            {`I love coding to create `}
            <span>{`useful`}</span>
            {` or `}
            <span>{`funny`}</span>
            {` things.`}
          </RevealingText>
        </h2>
        <h2>
          <RevealingText>
            {`Currently Software Engineer at `}
            <a
              href="https://goshaba.com/en/goshaba-home-en/"
              rel="noreferrer"
              target="_blank"
            >
              <strong className="text-primary">{`Goshaba`}</strong>
            </a>
            {` building an assessment tool with cognitive science and video game.`}
          </RevealingText>
        </h2>
      </div>
      <h3 className="my-8 sm:my-16">
        <RevealingText>
          {`Welcome to my website, have a look at my `}
          <Link to="/projects">
            <strong className="text-primary">{`projects`}</strong>
          </Link>
          {`.`}
        </RevealingText>
      </h3>
    </div>
  )
}

export default Index
