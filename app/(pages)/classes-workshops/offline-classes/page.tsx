import { generateMetadata } from '@/lib/metadata';

import OfflineClassesHeroSection from '@/components/sections/classes-workshops/offline-classes/OfflineClassesHeroSection/OfflineClassesHeroSection';

import OfflineClassesFeaturesSection from '@/components/sections/classes-workshops/offline-classes/OfflineClassesFeaturesSection/OfflineClassesFeaturesSection';

import OfflineClassesCTASection from '@/components/sections/classes-workshops/offline-classes/OfflineClassesCTASection/OfflineClassesCTASection';

export const metadata =
  generateMetadata({
    title: 'Offline Classes',

    description:
      'Explore TacoMines classroom-based engineering learning programs focused on practical implementation, mentorship and technical growth.',

    keywords: [
      'Offline Engineering Classes',
      'Classroom Training',
      'Practical Technical Learning',
      'Engineering Workshops',
      'TacoMines Offline Classes',
    ],
  });

export default function OfflineClassesPage() {
  return (
    <>
      <OfflineClassesHeroSection />

      <OfflineClassesFeaturesSection />

      <OfflineClassesCTASection />
    </>
  );
}