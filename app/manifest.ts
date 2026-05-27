import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TacoMines',

    short_name: 'TacoMines',

    description:
      'AI-powered product engineering academy.',

    start_url: '/',

    display: 'standalone',

    background_color: '#071B3B',

    theme_color: '#0057FF',

    icons: [
      {
        src: '/pwa/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },

      {
        src: '/pwa/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}