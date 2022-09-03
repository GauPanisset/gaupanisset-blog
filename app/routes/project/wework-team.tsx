import projects from '~/assets/projects.json'
import Callout, { Severity } from '~/components/Callout'
import Code from '~/components/Code'
import Image from '~/components/Image'
import Paragraph from '~/components/Paragraph'
import ProjectLayout from '~/components/ProjectLayout'
import Subtitle from '~/components/Subtitle'
import type { Project } from '~/types/project'

const project = projects.find(
  ({ link }) => link === '/project/wework-team'
) as Project

/**
 * Display the project page for: 'wework team'
 */
const WeWorkTeam = () => {
  return (
    <ProjectLayout project={project}>
      <section>
        <Subtitle>Why?</Subtitle>
        <Paragraph>
          As a lot of tech companies, Goshaba became full remote during the
          pandemic. But as soon as the world was allowed to go out, some of use
          wanted to be able to meet again in an office. That is why, Goshaba
          chose the co-working solution named <i>WeWork</i>.
        </Paragraph>
        <Paragraph>
          <i>WeWork</i> offers a dozen of offices in Paris (and even more all
          around the world). But you actually need to register a desk or a room
          in order to have access to the building. However, on <i>WeWork</i> web
          platform the user can only manage his reservations and can&apos;t see
          those of his co-workers.
        </Paragraph>
        <Paragraph className="py-4 font-bold">
          <span className="underline">Problem:</span>
          <br />
          How can we meet, if we don&apos;t know where and when the others took
          their reservations?
        </Paragraph>
        <Paragraph>
          At first, we just tried to communicate with our messaging tools like
          Slack or Whatsapp, but it partially solved the problem. Either we
          forgot to share our reservations or we always shared them with the
          same co-workers.
        </Paragraph>
        <Paragraph className="py-4 font-bold">
          <span className="underline">Problem 2:</span>
          <br />
          How can we automatically share our reservations with all co-workers?
        </Paragraph>
        <Paragraph>
          That&apos;s why I though a Chrome extension would be a great solution.
          In fact, it can enhance a already existing application. Therefor, we
          will not have to adopt a new process or a new behavior or a new
          application. Instead, we will just keep using the same things but with
          the feature we needed.
          <br />
          And I confess, I was pretty excited about this solution because I had
          never built a Chrome extension before!
        </Paragraph>
      </section>
      <section>
        <Subtitle>
          <i>WeWork</i> API exploration
        </Subtitle>
        <Paragraph>
          As usual after coming up with an idea, I need to check if it is
          technically feasible. That&apos;s why I opened my browser and inspect
          the <i>WeWork</i> platform.
          <br />
          The goal was to find a way to retrieve the reservations. Quite simple,
          I have an account so I can log in and visit the reservation page.
        </Paragraph>

        <Paragraph>
          <Image
            alt="wework 'your bookings' page on the left and the developer console showing the network traffic on the right"
            caption="https://members.wework.com/your-bookings"
            src="https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/wework-team/wework-api-exploration.jpg"
          />
          In the previous image, you can see there is a request fetching the
          reservations:
          <Code language="bash">
            https://rooms.wework.com/api/v7/reservations
          </Code>
          You can also spot their filtering syntax. In fact, they use query
          params to filter the data sent back in the response:
          <Code language="bash">
            ?filter[user_uuid]=d2e64122-96b3-4088-8c65-e6d55fc29d47
          </Code>
          Ok now, let&apos;s have a look to the response and see what is the
          shape of a reservation:
          <Code language="json">
            {`{
    "id": "d8d9f5d1-1a71-404b-afb7-2e61bc151259",
    "type": "reservations",
    "attributes": {
        "uuid": "d8d9f5d1-1a71-404b-afb7-2e61bc151259",
        "start": "2022-08-21T22:00:00.000Z",
        "finish": "2022-08-22T21:59:00.000Z",
        "location_uuid": "3e18355f-a805-4732-a8fd-30f206492a5d",
        "reservable_uuid": "55041ea8-1f87-11e7-a929-22000bfdfd88",
        "user_uuid": "d2e64122-96b3-4088-8c65-e6d55fc29d47",
        "company_uuid": "ef3fe116-b5e5-443d-a130-a99843c079fb",
        "reservable_type": "DailyDesk"
    }
}`}
          </Code>
          A field may have caught you attention: <code>company_uuid</code>. Yes,
          for this project I wanted to retrieve the reservations of the whole
          company. So if I am lucky (and I will) setting the following query
          params will do the job:{' '}
          <code>filter[company_uuid]=ef3fe116-b5e5-443d-a130-a99843c079fb</code>
        </Paragraph>
        <Paragraph>
          At this point, I knew I would be able to retrieve all Goshaba&apos;s
          reservations. But there were still two issues:
          <ul className="list-decimal px-8">
            <li>
              The endpoint is protected, meaning I should be logged in to be
              able to access the API.
            </li>
            <li>
              As you can see, the reservation data does not contain any human
              readable information. So I don&apos;t have the details of the
              location, the reservable or the user.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          The first point was quite easy to solve. A lot of web applications
          store the <code>access_token</code> used to authenticate the requests
          in the local storage of the browser.
        </Paragraph>
        <Paragraph>
          <Image
            alt="wework 'landing' page on the left and the developer console showing the application local storage on the right"
            caption="https://members.wework.com"
            src="https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/wework-team/wework-api-exploration-2.jpg"
          />
          As you can see, <i>WeWork</i> does it too and a Chrome extension can
          read the local storage. So it was simple to get the token.
        </Paragraph>
        <Paragraph>
          The second point was not much harder thanks to a query parameter in
          the first request: <code>include=location,reservable</code>. This add
          complementary data to the response. So I just had to ask for location,
          reservable and user details with this parameter.
        </Paragraph>
      </section>
      <section>
        <Subtitle>
          First attempt: enhance <i>WeWork</i> web application
        </Subtitle>
        <Paragraph>
          Once I could retrieve the data I needed, I had to design the extension
          and define how the information should be displayed?
          <br />
          Usually I draw some sketches to help me visualize my thoughts. Here is
          the last one:
          <Image
            alt="sketch of the wework 'book a desk' page with the extension enhancement"
            caption="Sketch of the wework 'book a desk' page"
            src="https://gaupanisset-blog.s3.eu-west-3.amazonaws.com/wework-team/first-attempt.jpg"
          />
          This sketch shows the &quot;book a desk&quot; page of the{' '}
          <i>WeWork</i> application. In this page you have two important
          elements. First, the selects on the top, enabling the user to choose
          the date, the city, etc... Below, the list of office cards. Each card
          allows the user to book a desk in the specific location. <br />
          In blue, I drew what I wanted to add in this page. It is basically the
          list of users who have already registered a desk in the given
          location.
        </Paragraph>
        <Paragraph>
          I think it perfectly fits the needs since the user can see who he
          could meet if he also take the reservation. Then, he can check all the
          locations and optionally change the date if he wants to work with
          someone else.
        </Paragraph>
        <Callout className="my-8" severity={Severity.Info}>
          Be careful! After this point everything is just rough ideas I still
          need to polish.
        </Callout>
        <Paragraph>
          To code the extension I used React and more specifically{' '}
          <code>react-create-app</code>. This choice is only based on the fact
          that it was the TypeScript framework I knew the most. Moreover, there
          are plenty of articles explaining the basic configuration to use this
          stack.
          <br />I have to confess that it was a bit overkill at first. Because
          you only have to write some React for building the extension popup and
          in my first attempt I haven&apos;t planned to develop it.
        </Paragraph>
      </section>
      <section>
        <Subtitle>Second attempt: reservation calendar</Subtitle>
      </section>
    </ProjectLayout>
  )
}
export default WeWorkTeam
