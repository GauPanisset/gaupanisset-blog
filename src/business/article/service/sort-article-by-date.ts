import { Article } from '../types';

const sortArticleByDate = (articles: Article[]) => {
  return articles.sort((articleA: Article, articleB: Article) => {
    const dateA = new Date(articleA.metadata.date.update);
    const dateB = new Date(articleB.metadata.date.update);
    if (!dateA) return -1;
    if (!dateB) return 1;

    if (dateA <= dateB) return 1;
    return -1;
  });
};

export { sortArticleByDate };
