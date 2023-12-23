import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col justify-center space-y-8">
      <p className="[&]:m-0">👋 Hi! I&apos;m</p>
      <h1 className="text-5xl font-black text-primary xs:text-7xl sm:text-8xl">
        Gauthier Panisset
      </h1>
      <p>
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
      <p className="my-8 sm:my-16">
        Welcome to my website, have a look at my{' '}
        <Link className="font-bold text-primary" href="/projects">
          projects
        </Link>
        .
      </p>
    </div>
  );
};

export default HomePage;
