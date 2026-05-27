import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tacomines.com',
      lastModified: new Date(),
    },

    {
      url: 'https://tacomines.com/about',
      lastModified: new Date(),
    },

    {
      url: 'https://tacomines.com/courses',
      lastModified: new Date(),
    },

    {
      url: 'https://tacomines.com/contact',
      lastModified: new Date(),
    },
  ];
}