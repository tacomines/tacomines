import {
  Monitor,
  Building2,
  Presentation,
} from 'lucide-react';

import { generateMetadata } from '@/lib/metadata';

import SplitPageBanner from '@/components/shared/SplitPageBanner/SplitPageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import TrainingFormatsSection from '@/components/sections/classes-workshops/TrainingFormatsSection/TrainingFormatsSection';

import LearningExperienceSection from '@/components/sections/classes-workshops/LearningExperienceSection/LearningExperienceSection';

import WorkshopHighlightsSection from '@/components/sections/classes-workshops/WorkshopHighlightsSection/WorkshopHighlightsSection';

import ClassesFAQSection from '@/components/sections/classes-workshops/ClassesFAQSection/ClassesFAQSection';

import ClassesCTASection from '@/components/sections/classes-workshops/ClassesCTASection/ClassesCTASection';

export const metadata =
  generateMetadata({
    title:
      'Classes & Workshops',

    description:
      'Explore TacoMines online classes, offline learning programs, workshops and implementation-focused engineering training workflows.',

    keywords: [
      'Online Classes',
      'Offline Classes',
      'Engineering Workshops',
      'Technical Training',
      'AI Learning',
    ],
  });

export default function ClassesWorkshopsPage() {
  return (
    <>
      <SplitPageBanner
        badge='Classes & Workshops'
        title='Practical Engineering'
        highlight='Learning Programs'
        description='TacoMines provides AI-assisted engineering learning programs through online classes, offline classroom sessions, workshops and guided practical implementation workflows.'
        quickLinks={[
          {
            title:
              'Online Classes',

            href:
              '/classes-workshops/online-classes',

            icon: (
              <Monitor size={30} />
            ),
          },

          {
            title:
              'Offline Classes',

            href:
              '/classes-workshops/offline-classes',

            icon: (
              <Building2 size={30} />
            ),
          },

          {
            title:
              'Workshops',

            href:
              '/classes-workshops/workshops',

            icon: (
              <Presentation size={30} />
            ),
          },
        ]}
      />

      <SectionNavigator
        sections={[
          {
            id: 'formats',
            label: 'Formats',
          },

          {
            id: 'experience',
            label: 'Experience',
          },

          {
            id: 'highlights',
            label: 'Workshops',
          },

          {
            id: 'faq',
            label: 'FAQ',
          },
        ]}
      />

      <TrainingFormatsSection />

      <LearningExperienceSection />

      <WorkshopHighlightsSection />

      <ClassesFAQSection />

      <ClassesCTASection />
    </>
  );
}