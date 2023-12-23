import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { getArticle } from '@/business/article/service/get-article';
import { getArticles } from '@/business/article/service/get-articles';
import { MdxImage } from '@/technical/ui/mdx-image';

type Props = {
  params: { projectSlug: string };
};

const ProjectPage: React.FunctionComponent<Props> = async ({ params }) => {
  const { source } = await getArticle(params.projectSlug);

  return (
    <article>
      <MDXRemote
        source={source}
        options={{
          parseFrontmatter: true,
        }}
        components={{ MdxImage }}
      />
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
