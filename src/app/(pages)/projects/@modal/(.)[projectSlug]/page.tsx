import { MDXRemote } from 'next-mdx-remote/rsc';

import { getArticle } from '@/business/article/service/get-article';
import { ProjectTitle } from '@/business/article/ui/project-title';
import { MdxImage } from '@/technical/ui/mdx-image';

type Props = {
  params: { projectSlug: string };
};

const ProjectPage: React.FunctionComponent<Props> = async ({ params }) => {
  const { source, metadata } = await getArticle(params.projectSlug);

  return (
    <article>
      <ProjectTitle projectSlug={params.projectSlug}>
        {metadata.title}
      </ProjectTitle>
      <div className="transition-none delay-700 duration-500 animate-in fade-in slide-in-from-bottom-16 fill-mode-backwards">
        <MDXRemote
          source={source}
          options={{
            parseFrontmatter: true,
          }}
          components={{ MdxImage }}
        />
      </div>
    </article>
  );
};

export default ProjectPage;
