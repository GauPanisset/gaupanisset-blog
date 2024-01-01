import { redirect } from 'next/navigation';

import { serializeMdxFile } from './serialize-mdx-file';

const getArticle = (slug: string) => {
  try {
    return serializeMdxFile(`${slug}.mdx`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    redirect('/not-found');
  }
};

export { getArticle };
