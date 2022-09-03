import projects from '~/assets/projects.json'
import Callout, { Severity } from '~/components/Callout'
import Paragraph from '~/components/Paragraph'
import ProjectLayout from '~/components/ProjectLayout'
import Subtitle from '~/components/Subtitle'
import type { Project } from '~/types/project'

const project = projects.find(
  ({ link }) => link === '/project/personal-blog'
) as Project

/**
 * Display the project page for: 'personal blog'
 */
const PersonalBlog = () => {
  return (
    <ProjectLayout project={project}>
      <section>
        <Subtitle>Why?</Subtitle>
        <Paragraph>
          During my free time I really enjoy doing side projects. They come to
          my mind suddenly during the night, while walking to the office or in
          the bathroom and I write a few words about them in a Notion page as
          reminders.
        </Paragraph>
        <Paragraph>
          There are a lot of different things! They are not all useful, they are
          not all very technically challenging but they are fun (at least to me)
          and make me learn or practice something. I started coding some of them
          and I « finished » a few, but I couldn&apos;t share my adventures
          through their development. However, I feel that my experiences
          building some projects, my researches on some subjects or my general
          thoughts was worthy sharing. That&apos;s why I created this blog.
        </Paragraph>
        <Callout className="my-8" severity={Severity.Info}>
          Be careful! After this point everything is just rough ideas I still
          need to polish.
        </Callout>
      </section>

      <section>
        <Subtitle>Main ideas</Subtitle>
        <Paragraph>
          The main goal of this blog is to share my projects. But I also want to
          use it as a playground to experiment new ways to broadcast ideas,
          thoughts and projects.
        </Paragraph>
      </section>
    </ProjectLayout>
  )
}

export default PersonalBlog
