import { promises as fs } from 'fs';
import { redirect } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import { mdxDirectory } from '../constants';
import { Article, metadataSchema } from '../types';

const serializeMdxFile = async (fileName: string): Promise<Article> => {
  const fileSource = await fs.readFile(
    path.join(mdxDirectory, fileName),
    'utf-8'
  );
  const { frontmatter } = await serialize(fileSource, {
    parseFrontmatter: true,
  });

  return {
    metadata: metadataSchema.parse(frontmatter),
    slug: fileName.replace('.mdx', ''),
    source: fileSource,
  };
};

export { serializeMdxFile };
