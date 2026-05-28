import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import AboutVisionSection from '@/components/sections/about/AboutVisionSection/AboutVisionSection';

import AboutApproachSection from '@/components/sections/about/AboutApproachSection/AboutApproachSection';

import AboutEcosystemSection from '@/components/sections/about/AboutEcosystemSection/AboutEcosystemSection';

import AboutCTASection from '@/components/sections/about/AboutCTASection/AboutCTASection';

import { generateMetadata } from '@/lib/metadata';

export const metadata =
  generateMetadata({
    title: 'About',

    description:
      'Learn about TacoMines AI-assisted engineering academy focused on practical implementation, productivity and career-oriented technical learning.',

    keywords: [
      'TacoMines About',
      'AI Training Institute',
      'Engineering Academy',
      'Career Training',
      'Practical Learning',
    ],
  });

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge='About TacoMines'
        title='Building Modern'
        highlight='Engineering Skills'
        description='TacoMines is focused on AI-assisted engineering learning, implementation-driven workflows and practical technical growth designed for modern students, developers and future innovators.'
        image='/images/banners/about.webp'
        imageAlt='About TacoMines Banner'
      />

      <SectionNavigator
        sections={[
          {
            id: 'vision',
            label: 'Vision',
          },

          {
            id: 'approach',
            label: 'Approach',
          },

          {
            id: 'ecosystem',
            label: 'Ecosystem',
          },

          {
            id: 'cta',
            label: 'Get Started',
          },
        ]}
      />

      <AboutVisionSection />

      <AboutApproachSection />

      <AboutEcosystemSection />

      <AboutCTASection />
    </>
  );
}