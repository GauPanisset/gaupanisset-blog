import fs from 'fs';
import path from 'path';

import { mdxDirectory } from '../constants';
import { serializeMdxFile } from './serialize-mdx-file';

const getArticles = () => {
  const files = fs.readdirSync(path.join(mdxDirectory));

  return Promise.all(files.map((filename) => serializeMdxFile(filename)));
};

export { getArticles };
