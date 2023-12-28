import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <div className="absolute inset-0 -top-px z-0 h-screen w-screen bg-dot-pattern dark:bg-dot-pattern-dark">
        <div className="h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-16 px-6 sm:flex-row sm:px-16">
        <div className="text-center sm:pr-16">
          <h1 className="mb-0 text-7xl lg:mb-0 lg:text-8xl">404</h1>
          <h2 className="my-4 text-3xl lg:my-4">Not found</h2>
        </div>

        <div className="prose-p:font-mono">
          <p>I haven&apos;t created this page yet.</p>
          <p>
            Please click{' '}
            <Link href="/" className="font-bold text-primary">
              here
            </Link>{' '}
            to be redirected to the home page.
          </p>
          <p>
            If you think this page should exist, don&apos;t hesitate to{' '}
            <Link href="/about#contact" className="font-bold text-primary">
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
