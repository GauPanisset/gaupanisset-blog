import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center space-y-8 overflow-hidden px-6 sm:px-16">
      <div className="absolute inset-0 -top-px z-0 h-screen w-screen bg-dot-pattern dark:bg-dot-pattern-dark">
        <div className="h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />
      </div>
      <div className="relative">
        <p className="[&]:m-0">👋 Hi! I&apos;m</p>
        <h1 className="text-5xl font-black text-primary duration-500 animate-in fade-in fill-mode-backwards xs:text-7xl sm:text-8xl">
          Gauthier Panisset
        </h1>
        <p className="transition-none delay-300 duration-500 animate-in fade-in slide-in-from-bottom-16 fill-mode-backwards">
          I love coding to create useful or funny things.
          <br />
          Currently Software Engineer at{' '}
          <a
            className="font-bold text-primary"
            href="https://goshaba.com/en/goshaba-home-en/"
            rel="noreferrer"
            target="_blank"
          >
            Goshaba
          </a>{' '}
          building an assessment tool with cognitive science and video game.
        </p>
        <p className="my-8 transition-none delay-500 duration-500 animate-in fade-in slide-in-from-bottom-16 fill-mode-backwards sm:my-16">
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
