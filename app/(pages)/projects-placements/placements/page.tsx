import { generateMetadata } from '@/lib/metadata';

import PlacementsHeroSection from '@/components/sections/projects-placements/placements/PlacementsHeroSection/PlacementsHeroSection';

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
      <PlacementsHeroSection />

      <PlacementSupportSection />

      <CareerPreparationSection />

      <PlacementsCTASection />
    </>
  );
}