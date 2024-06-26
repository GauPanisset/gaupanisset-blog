import { Github, Linkedin, Twitter } from 'lucide-react';

import { events } from '@/business/bio/events';
import { Event } from '@/business/bio/ui/event';
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
          I&apos;m Gauthier Panisset a software engineer based in Paris, shaping
          things up at{` `}
          <a
            className="font-bold text-primary"
            href="https://www.elaxenergie.com/"
            rel="noreferrer"
            target="_blank"
          >
            Elax Energie
          </a>
          .
        </p>
        <p>
          Beyond coding, I enjoy running, sailing, and hiking, considering
          nature as the most beautiful gym.
          <br />
          While I used to play the cello, finding time and space for practice
          has become a challenge. Nevertheless, my love for music remains.
          <br />
          I&apos;m also a bit of a video game enthusiast. Whether trying out new
          releases, exploring them on Twitch or Youtube, or even dabbling in
          building some myself, it&apos;s a hobby I cherish.
        </p>
        <p>
          But what I really love is to imagine, design and bringing digital
          products or services to life. I dedicate a significant chunk of my
          time to reading articles on product management, product strategy and,
          all kind of technology that can be use for creation. And, of course,
          there&apos;s always time for messing around with side projects.
        </p>
      </section>
      <section
        className="duration-500 animate-in fade-in fill-mode-backwards motion-safe:slide-in-from-bottom-16"
        style={{ animationDelay: '400ms' }}
      >
        <h2 id="bio">Bio</h2>
        <div className="space-y-8">
          {events.map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </div>
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
