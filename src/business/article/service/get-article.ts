import { serializeMdxFile } from './serialize-mdx-file';

const getArticle = (slug: string) => serializeMdxFile(`${slug}.mdx`);

export { getArticle };
