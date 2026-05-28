import { generateMetadata } from '@/lib/metadata';

import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import PlacementSupportSection from '@/components/sections/projects-placements/placements/PlacementSupportSection/PlacementSupportSection';

import CareerPreparationSection from '@/components/sections/projects-placements/placements/CareerPreparationSection/CareerPreparationSection';

import PlacementsCTASection from '@/components/sections/projects-placements/placements/PlacementsCTASection/PlacementsCTASection';

export const metadata =
  generateMetadata({
    title: 'Placements',

    description:
      'Explore TacoMines placement readiness support, engineering mentorship and implementation-focused career preparation workflows.',

    keywords: [
      'Placement Support',
      'Engineering Career',
      'Technical Portfolio',
      'Resume Guidance',
      'Career Preparation',
    ],
  });

export default function PlacementsPage() {
  return (
    <>
      <PageBanner
        badge='Career & Placement Support'
        title='Engineering'
        highlight='Career Preparation'
        description='Build technical confidence, portfolio quality and implementation-oriented workflow understanding for long-term engineering career growth.'
        image='/images/banners/placements.webp'
        imageAlt='Placements Banner'
      />

      <SectionNavigator
        sections={[
          {
            id: 'guidance',
            label: 'Guidance',
          },

          {
            id: 'opportunities',
            label: 'Opportunities',
          },

          {
            id: 'cta',
            label: 'Get Started',
          },
        ]}
      />

      <PlacementSupportSection />

      <CareerPreparationSection />

      <PlacementsCTASection />
    </>
  );
}