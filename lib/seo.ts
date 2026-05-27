import { SEOProps } from '@/types/seoTypes';

export const generateSEO = ({
  title,
  description,
  keywords = [],
}: SEOProps) => {
  return {
    title,

    description,

    keywords,
  };
};