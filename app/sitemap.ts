import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    'https://www.tacomines.com';

  const routes = [
    '',

    '/about',

    '/courses',

    '/classes-workshops',

    '/classes-workshops/online-classes',

    '/classes-workshops/offline-classes',

    '/classes-workshops/workshops',

    '/projects-placements',

    '/projects-placements/student-projects',

    '/projects-placements/placements',

    '/register',

    '/contact',

    '/blog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,

    lastModified:
      new Date(),

    changeFrequency:
      'weekly',

    priority:
      route === ''
        ? 1
        : 0.8,
  }));
}