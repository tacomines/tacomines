import { generateMetadata } from '@/lib/metadata';

import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import OfflineClassesFeaturesSection from '@/components/sections/classes-workshops/offline-classes/OfflineClassesFeaturesSection/OfflineClassesFeaturesSection';

import OfflineClassesCTASection from '@/components/sections/classes-workshops/offline-classes/OfflineClassesCTASection/OfflineClassesCTASection';

export const metadata =
  generateMetadata({
    title: 'Offline Classes',

    description:
      'Explore TacoMines classroom-based engineering training programs focused on practical implementation, mentorship and AI-assisted learning workflows.',

    keywords: [
      'Offline Engineering Classes',
      'Classroom Technical Training',
      'Practical Engineering Learning',
      'AI-Assisted Engineering',
      'TacoMines Offline Classes',
    ],
  });

export default function OfflineClassesPage() {
  return (
    <>
      <PageBanner
        badge='Classroom Engineering Training'
        title='Structured'
        highlight='Offline Classes'
        description='Experience implementation-oriented classroom learning with practical engineering guidance, collaborative environments and mentorship-focused workflows.'
        image='/images/banners/offline-classes.webp'
        imageAlt='Offline Classes Banner'
      />

      <SectionNavigator
        sections={[
          {
            id: 'features',
            label: 'Features',
          },

          {
            id: 'cta',
            label: 'Get Started',
          },
        ]}
      />

      <OfflineClassesFeaturesSection />

      <OfflineClassesCTASection />
    </>
  );
}