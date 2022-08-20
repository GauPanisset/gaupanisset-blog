import ProjectCard from '~/components/ProjectCard'

/**
 * Display the page showing all the projects.
 */
const Projects = () => {
  return (
    <main className="flex w-full max-w-[820px] flex-col gap-8 p-6 sm:gap-16 sm:p-16">
      <h1 className="text-title font-bold">{`Projects`}</h1>
      <div className="flex w-full flex-col gap-8">
        <ProjectCard
          date="2022-08-20"
          description="WeWork permet de réserver une salle ou un accès à un établissement. Cependant, il n’est pas possible de voir les réservations de ses collègues."
          icon="🏢"
          link="/project/wework-team"
          tags={['Chrome Extension', 'TypeScript']}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat dui eu libero fringilla, sed mollis est fringilla. In id sapien neque. Suspendisse viverra viverra velit, ut pretium massa. Sed pulvinar ex ut dolor euismod, eget dignissim orci mollis. Sed sit amet mauris a elit malesuada pellentesque in sed enim. Nullam enim nibh, aliquam at sodales vitae, gravida lacinia tellus. Cras efficitur suscipit libero eu mollis. Pellentesque id eros vitae diam accumsan congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat dui eu libero fringilla, sed mollis est fringilla. In id sapien neque. Suspendisse viverra viverra velit, ut pretium massa. Sed pulvinar ex ut dolor euismod, eget dignissim orci mollis. Sed sit amet mauris a elit malesuada pellentesque in sed enim. Nullam enim nibh, aliquam at sodales vitae, gravida lacinia tellus. Cras efficitur suscipit libero eu mollis. Pellentesque id eros vitae diam accumsan congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat dui eu libero fringilla, sed mollis est fringilla. In id sapien neque. Suspendisse viverra viverra velit, ut pretium massa. Sed pulvinar ex ut dolor euismod, eget dignissim orci mollis. Sed sit amet mauris a elit malesuada pellentesque in sed enim. Nullam enim nibh, aliquam at sodales vitae, gravida lacinia tellus. Cras efficitur suscipit libero eu mollis. Pellentesque id eros vitae diam accumsan congue."
          title="WeWork Team"
        />
      </div>
    </main>
  )
}

export default Projects
