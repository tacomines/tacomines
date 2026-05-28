import { generateMetadata } from '@/lib/metadata';

import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

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
      <PageBanner
        badge='Online Engineering Learning'
        title='AI-Assisted'
        highlight='Online Classes'
        description='Learn modern engineering workflows remotely through implementation-focused sessions, AI-assisted productivity systems and guided practical learning.'
        image='/images/banners/online-classes.webp'
        imageAlt='Online Classes Banner'
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

      <OnlineClassesFeaturesSection />

      <OnlineClassesCTASection />
    </>
  );
}