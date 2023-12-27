import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { getArticle } from '@/business/article/service/get-article';
import { getArticles } from '@/business/article/service/get-articles';
import { MdxImage } from '@/technical/ui/mdx-image';

type Props = {
  params: { projectSlug: string };
};

const ProjectPage: React.FunctionComponent<Props> = async ({ params }) => {
  const { source, metadata } = await getArticle(params.projectSlug);

  return (
    <article>
      <h1>{metadata.title}</h1>
      <div className="delay-300 duration-500 animate-in fade-in slide-in-from-bottom-16 fill-mode-backwards">
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

const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { metadata } = await getArticle(params.projectSlug);

  return {
    title: metadata.title,
    description: metadata.description,
  };
};

const generateStaticParams = async () => {
  const projectArticles = await getArticles();

  return projectArticles.map(({ slug }) => ({
    projectSlug: slug,
  }));
};

export { generateMetadata, generateStaticParams };

export default ProjectPage;
