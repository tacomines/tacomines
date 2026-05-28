import { generateMetadata } from '@/lib/metadata';

import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import WorkshopsFeaturesSection from '@/components/sections/classes-workshops/workshops/WorkshopsTopicsSection/WorkshopsTopicsSection';

import WorkshopsCTASection from '@/components/sections/classes-workshops/workshops/WorkshopsCTASection/WorkshopsCTASection';

export const metadata =
  generateMetadata({
    title: 'Workshops',

    description:
      'Explore TacoMines engineering workshops focused on implementation-oriented learning, AI-assisted workflows and practical technical productivity.',

    keywords: [
      'Engineering Workshops',
      'AI Workshops',
      'Technical Workshops',
      'Implementation Training',
      'TacoMines Workshops',
    ],
  });

export default function WorkshopsPage() {
  return (
    <>
      <PageBanner
        badge='Implementation-Oriented Workshops'
        title='Hands-On'
        highlight='Technical Workshops'
        description='Participate in implementation-focused engineering workshops designed to improve technical confidence, productivity and practical workflow understanding.'
        image='/images/banners/workshops.webp'
        imageAlt='Workshops Banner'
      />

      <SectionNavigator
        sections={[
          {
            id: 'topics',
            label: 'Topics',
          },

          {
            id: 'cta',
            label: 'Get Started',
          },
        ]}
      />

      <WorkshopsFeaturesSection />

      <WorkshopsCTASection />
    </>
  );
}