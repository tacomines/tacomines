import {
  Globe,
  MonitorSmartphone,
  Smartphone,
  BrainCircuit,
  Cloud,
} from 'lucide-react';

import { generateMetadata } from '@/lib/metadata';

import SplitPageBanner from '@/components/shared/SplitPageBanner/SplitPageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import CoursesCategoriesSection from '@/components/sections/courses/CoursesCategoriesSection/CoursesCategoriesSection';

import CoursesMethodologySection from '@/components/sections/courses/CoursesMethodologySection/CoursesMethodologySection';

import CoursesModesSection from '@/components/sections/courses/CoursesModesSection/CoursesModesSection';

import CoursesFAQSection from '@/components/sections/courses/CoursesFAQSection/CoursesFAQSection';

import CoursesCTASection from '@/components/sections/courses/CoursesCTASection/CoursesCTASection';

export const metadata =
  generateMetadata({
    title: 'Courses',

    description:
      'Explore TacoMines engineering learning programs including web development, PWAs, hybrid apps, AI workflows and cloud deployment.',

    keywords: [
      'Web Development Courses',
      'PWA Training',
      'Hybrid Apps',
      'AI Engineering',
      'Cloud Deployment',
    ],
  });

export default function CoursesPage() {
  return (
    <>
      <SplitPageBanner
        badge='Engineering Courses'
        title='Implementation-Focused'
        highlight='Learning Programs'
        description='TacoMines provides structured engineering learning programs designed for productivity, implementation confidence and modern technical growth.'
        quickLinks={[
          {
            title:
              'Web Development',

            href:
              '#categories',

            icon: (
              <Globe size={30} />
            ),
          },

          {
            title:
              'Progressive Web Apps',

            href:
              '#categories',

            icon: (
              <MonitorSmartphone size={30} />
            ),
          },

          {
            title:
              'Hybrid Applications',

            href:
              '#categories',

            icon: (
              <Smartphone size={30} />
            ),
          },

          {
            title:
              'AI Workflows',

            href:
              '#methodology',

            icon: (
              <BrainCircuit size={30} />
            ),
          },

          {
            title:
              'Cloud & Deployment',

            href:
              '#modes',

            icon: (
              <Cloud size={30} />
            ),
          },
        ]}
      />

      <SectionNavigator
        sections={[
          {
            id: 'categories',
            label: 'Courses',
          },

          {
            id: 'methodology',
            label: 'Methodology',
          },

          {
            id: 'modes',
            label: 'Modes',
          },

          {
            id: 'faq',
            label: 'FAQ',
          },

          {
            id: 'cta',
            label: 'Get Started',
          },
        ]}
      />

      <CoursesCategoriesSection />

      <CoursesMethodologySection />

      <CoursesModesSection />

      <CoursesFAQSection />

      <CoursesCTASection />
    </>
  );
}