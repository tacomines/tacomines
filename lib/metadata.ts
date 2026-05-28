import type { Metadata } from 'next';

interface MetadataProps {
  title: string;

  description: string;

  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  keywords = [],
}: MetadataProps): Metadata {

  const fullTitle =
    `${title} | TacoMines`;

  return {
    title: fullTitle,

    description,

    keywords,

    openGraph: {
      title: fullTitle,

      description,

      url:
        'https://tacomines.com',

      siteName:
        'TacoMines',

      locale: 'en_US',

      type: 'website',
    },

    twitter: {
      card:
        'summary_large_image',

      title: fullTitle,

      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}