import fs from 'fs';
import path from 'path';

import { mdxDirectory } from '../constants';
import { Article } from '../types';
import { serializeMdxFile } from './serialize-mdx-file';

const getArticles = async () => {
  const files = fs.readdirSync(path.join(mdxDirectory));

  return (
    await Promise.all(
      files.map(async (filename) => {
        try {
          return await serializeMdxFile(filename);
        } catch (error) {
          console.error(error instanceof Error ? error.message : error);
        }
      })
    )
  ).filter((article): article is Article => article !== undefined);
};

export { getArticles };
