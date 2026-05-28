import { generateMetadata } from '@/lib/metadata';

import WorkshopsHeroSection from '@/components/sections/classes-workshops/workshops/WorkshopsHeroSection/WorkshopsHeroSection';

import WorkshopsTopicsSection from '@/components/sections/classes-workshops/workshops/WorkshopsTopicsSection/WorkshopsTopicsSection';

import WorkshopsCTASection from '@/components/sections/classes-workshops/workshops/WorkshopsCTASection/WorkshopsCTASection';

export const metadata =
  generateMetadata({
    title: 'Workshops',

    description:
      'Explore TacoMines technical workshops focused on modern engineering technologies, AI-assisted workflows and practical implementation learning.',

    keywords: [
      'Technical Workshops',
      'Engineering Workshops',
      'AI Workshops',
      'Web Development Workshops',
      'TacoMines Workshops',
    ],
  });

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopsHeroSection />

      <WorkshopsTopicsSection />

      <WorkshopsCTASection />
    </>
  );
}