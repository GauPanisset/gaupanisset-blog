import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'http://gauthier.panisset.fr/sitemap.xml',
  };
};

export default robots;
