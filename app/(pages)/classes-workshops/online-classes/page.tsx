import { generateMetadata } from '@/lib/metadata';

import OnlineClassesHeroSection from '@/components/sections/classes-workshops/online-classes/OnlineClassesHeroSection/OnlineClassesHeroSection';

import OnlineClassesFeaturesSection from '@/components/sections/classes-workshops/online-classes/OnlineClassesFeaturesSection/OnlineClassesFeaturesSection';

import OnlineClassesCTASection from '@/components/sections/classes-workshops/online-classes/OnlineClassesCTASection/OnlineClassesCTASection';

export const metadata =
  generateMetadata({
    title: 'Online Classes',

    description:
      'Explore TacoMines online engineering learning programs focused on AI-assisted workflows, practical implementation and productivity-oriented learning.',

    keywords: [
      'Online Engineering Classes',
      'AI Learning',
      'Remote Technical Training',
      'Online Web Development',
      'TacoMines Online Classes',
    ],
  });

export default function OnlineClassesPage() {
  return (
    <>
      <OnlineClassesHeroSection />

      <OnlineClassesFeaturesSection />

      <OnlineClassesCTASection />
    </>
  );
}