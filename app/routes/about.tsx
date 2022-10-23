import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import RevealingText from '~/components/RevealingText'

/**
 * Display the page giving details about me.
 */
const About = () => {
  return (
    <div className="mx-auto w-full max-w-[820px] p-6 sm:p-16">
      <h1>
        <RevealingText delay={1}>About</RevealingText>
      </h1>
      <section>
        <p>
          I&apos;m Gauthier Panisset a software engineer based in Paris and
          currently working for{` `}
          <a
            className="no-underline"
            href="https://goshaba.com/en/goshaba-home-en/"
            rel="noreferrer"
            target="_blank"
          >
            <strong className="text-primary">Goshaba</strong>
          </a>
          .
        </p>
        <p>
          I like running, sailing, and hiking. Nature is the most beautiful gym.
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
      <section>
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
                  className="no-underline"
                  href="https://mines-nancy.univ-lorraine.fr/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <strong className="text-primary">Mines de Nancy</strong>
                </a>{' '}
                (Computer Science program).
              </td>
            </tr>
            <tr>
              <td className="font-bold">2019</td>
              <td>
                Work as software engineer at{' '}
                <a
                  className="no-underline"
                  href="https://goshaba.com/en/goshaba-home-en/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <strong className="text-primary">Goshaba</strong>
                </a>
                .
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h2 id="contact">Contact</h2>

        <div className="flex gap-8">
          <a
            className="text-4xl no-underline"
            href="https://twitter.com/GauPanisset"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="text-4xl no-underline"
            href="https://github.com/GauPanisset"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="text-4xl no-underline"
            href="https://www.linkedin.com/in/gauthier-panisset-126374148/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
