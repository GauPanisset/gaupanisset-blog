import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center space-y-8 overflow-hidden px-6 sm:px-16">
      <div className="absolute inset-0 -top-px z-0 h-screen w-screen bg-dot-pattern dark:bg-dot-pattern-dark">
        <div className="h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />
      </div>
      <div className="relative prose-p:font-mono">
        <p className="[&]:m-0">👋 Hi! I&apos;m</p>
        <h1 className="text-5xl font-black duration-500 animate-in fade-in fill-mode-backwards xs:text-7xl sm:text-8xl [&]:text-primary">
          Gauthier Panisset
        </h1>
        <p className="transition-none delay-300 duration-500 animate-in fade-in fill-mode-backwards motion-safe:slide-in-from-bottom-16">
          I love coding to create useful or funny things.
          <br />
          Currently Software Engineer at{' '}
          <a
            className="font-bold text-primary"
            href="https://www.elaxenergie.com/"
            rel="noreferrer"
            target="_blank"
          >
            Elax Energie
          </a>{' '}
          building applications to optimize, monitor and manage water heaters.
        </p>
        <p className="my-8 transition-none delay-500 duration-500 animate-in fade-in fill-mode-backwards motion-safe:slide-in-from-bottom-16 sm:my-16">
          Welcome to my website, have a look at my{' '}
          <Link className="font-bold text-primary" href="/projects">
            projects
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default HomePage;
