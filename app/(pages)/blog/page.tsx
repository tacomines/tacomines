import { generateMetadata } from '@/lib/metadata';

import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import FeaturedArticlesSection from '@/components/sections/blog/FeaturedArticlesSection/FeaturedArticlesSection';

import BlogCategoriesSection from '@/components/sections/blog/BlogCategoriesSection/BlogCategoriesSection';

import LatestInsightsSection from '@/components/sections/blog/LatestInsightsSection/LatestInsightsSection';

import BlogCTASection from '@/components/sections/blog/BlogCTASection/BlogCTASection';

export const metadata =
  generateMetadata({
    title: 'Blog',

    description:
      'Explore TacoMines engineering insights, AI-assisted workflows, productivity systems and implementation-oriented technical learning.',

    keywords: [
      'Engineering Blog',
      'AI Productivity',
      'Web Development',
      'Technical Learning',
      'TacoMines Insights',
    ],
  });

export default function BlogPage() {
  return (
    <>
    <PageBanner
      badge='TacoMines Blog'
      title='Engineering'
      highlight='Insights & Learning'
      description='Explore practical engineering insights, AI-assisted workflows, modern development systems, productivity techniques and implementation-oriented technical learning.'
      image='/images/banners/blog.webp'
      imageAlt='TacoMines Blog Banner'
    />

      <SectionNavigator
        sections={[
          {
            id: 'featured',
            label: 'Featured',
          },

          {
            id: 'categories',
            label: 'Categories',
          },

          {
            id: 'insights',
            label: 'Insights',
          },

          {
            id: 'cta',
            label: 'Continue Learning',
          },
        ]}
      />

      <FeaturedArticlesSection />

      <BlogCategoriesSection />

      <LatestInsightsSection />

      <BlogCTASection />
    </>
  );
}