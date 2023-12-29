import { MetadataRoute } from 'next';

import { getArticles } from '@/business/article/service/get-articles';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = await getArticles();

  return [
    {
      url: 'https://gauthier.panisset.fr/',
      lastModified: new Date('2023-12-28T16:24'),
      priority: 1,
    },
    {
      url: 'https://gauthier.panisset.fr/projects',
      lastModified: new Date('2023-12-28T16:24'),
      priority: 0.8,
    },
    {
      url: 'https://gauthier.panisset.fr/about',
      lastModified: new Date('2023-12-28T16:24'),
      priority: 0.5,
    },
    ...articles.map((article) => ({
      url: `https://gauthier.panisset.fr/projects/${article.slug}`,
      lastModified: new Date(article.metadata.date.update),
      priority: 0.75,
    })),
  ];
};

export default sitemap;
