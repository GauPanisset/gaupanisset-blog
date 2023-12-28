import { Github, Linkedin, Twitter } from 'lucide-react';

import { Button } from '@/technical/ui/button';

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <section
        className="duration-500 animate-in fade-in fill-mode-backwards motion-safe:slide-in-from-bottom-16"
        style={{ animationDelay: '300ms' }}
      >
        <p>
          I&apos;m Gauthier Panisset a software engineer based in Paris and
          currently working for{` `}
          <a
            className="font-bold text-primary"
            href="https://goshaba.com/en/goshaba-home-en/"
            rel="noreferrer"
            target="_blank"
          >
            Goshaba
          </a>
          .
        </p>
        <p>
          I like running, sailing, and hiking. Nature is for me the most
          beautiful gym.
          <br />
          I used to play the cello, but now I neither have the time nor the
          place to practice. However, I still really enjoy the music.
          <br />
          I&apos;m also crazy about video games. I like to try new ones,
          discover others on Twitch or Youtube, and sometimes build some.
        </p>
        <p>
          But what I really love is to imagine, design and build digital
          products or services. I spend a lot of time reading articles about
          product management or product strategy and obviously about all kind of
          technology that can be use to create something. And I spend even more
          time working on side projects.
        </p>
      </section>
      <section
        className="duration-500 animate-in fade-in fill-mode-backwards motion-safe:slide-in-from-bottom-16"
        style={{ animationDelay: '400ms' }}
      >
        <h2 id="bio">Bio</h2>
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="font-bold">1996</td>
              <td>Born in Mulhouse, France.</td>
            </tr>
            <tr>
              <td className="font-bold">2019</td>
              <td>
                Graduate from the engineering school{' '}
                <a
                  className="font-bold text-primary"
                  href="https://mines-nancy.univ-lorraine.fr/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Mines de Nancy
                </a>{' '}
                (Computer Science program).
              </td>
            </tr>
            <tr>
              <td className="font-bold">2019</td>
              <td>
                Work as main software engineer at{' '}
                <a
                  className="font-bold text-primary"
                  href="https://goshaba.com/en/goshaba-home-en/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Goshaba
                </a>
                .
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section
        className="duration-500 animate-in fade-in fill-mode-backwards motion-safe:slide-in-from-bottom-16"
        style={{ animationDelay: '500ms' }}
      >
        <h2 id="contact">Contact</h2>

        <div className="flex gap-8">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://twitter.com/GauPanisset"
              rel="noreferrer"
              target="_blank"
            >
              <Twitter />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://github.com/GauPanisset"
              rel="noreferrer"
              target="_blank"
            >
              <Github />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://www.linkedin.com/in/gauthier-panisset-126374148/"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
