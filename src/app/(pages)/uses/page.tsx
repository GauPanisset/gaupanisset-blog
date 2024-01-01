import { UseCategories } from '@/business/uses/types';
import { UseItem } from '@/business/uses/ui/use-item';
import { uses } from '@/business/uses/uses';

const UsesPage: React.FunctionComponent = () => {
  return (
    <>
      <h1>Uses</h1>
      <section className="duration-500 animate-in fade-in fill-mode-backwards motion-safe:slide-in-from-bottom-16">
        <p>
          Here is a list of my favorite products, applications and technologies.
          I use them all the time and hardly recommend them.
        </p>

        <h2>Technologies</h2>
        <p>
          These are tech that I&apos;ve used for a long time, or that I&apos;ve
          just discovered, but definitely cherish.
        </p>
        <ul className="not-prose space-y-8">
          {uses
            .filter((use) => use.category === UseCategories.Technology)
            .map((use) => (
              <li key={use.id}>
                <UseItem {...use} />
              </li>
            ))}
        </ul>
        <h2>Applications</h2>
        <p>The applications I use on an almost daily basis.</p>
        <ul className="not-prose space-y-8">
          {uses
            .filter((use) => use.category === UseCategories.Software)
            .map((use) => (
              <li key={use.id}>
                <UseItem {...use} />
              </li>
            ))}
        </ul>
        <h2>Products</h2>
        <ul className="not-prose space-y-8">
          {uses
            .filter((use) => use.category === UseCategories.Hardware)
            .map((use) => (
              <li key={use.id}>
                <UseItem {...use} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default UsesPage;
