import { Link } from '@remix-run/react'

/**
 * Display the landing page.
 */
const Index = () => {
  return (
    <main className="flex w-full max-w-[1320px] grow flex-col justify-center gap-8 px-6 text-base sm:px-16">
      <div className="w-fit">
        <p>{`Hi! I'm`}</p>
        <h1 className="text-8xl font-black text-primary sm:text-9xl">
          {`Gauthier Panisset`}
        </h1>
      </div>
      <div>
        <h2>
          {`I love creating `} <span>{`useful`}</span>
          {` or `}
          <span>{`funny`}</span>
          {` things with code.`}
        </h2>
        <h2>
          {`Currently Software Engineer at `}
          <a
            href="https://goshaba.com/en/goshaba-home-en/"
            rel="noreferrer"
            target="_blank"
          >
            <strong className="text-primary">{`Goshaba`}</strong>
          </a>
          {` building an assessment tool with cognitive science and video game.`}
        </h2>
      </div>
      <h3 className="my-16">
        {`Welcome to my website, have a look at my `}
        <Link to="/projects">
          <strong className="text-primary">{`projects`}</strong>
        </Link>
        {`.`}
      </h3>
    </main>
  )
}

export default Index
