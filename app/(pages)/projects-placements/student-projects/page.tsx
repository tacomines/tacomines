import { generateMetadata } from '@/lib/metadata';

import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import ProjectsCategoriesSection from '@/components/sections/projects-placements/student-projects/ProjectsCategoriesSection/ProjectsCategoriesSection';

import ProjectsWorkflowSection from '@/components/sections/projects-placements/student-projects/ProjectsWorkflowSection/ProjectsWorkflowSection';

import StudentProjectsCTASection from '@/components/sections/projects-placements/student-projects/StudentProjectsCTASection/StudentProjectsCTASection';

export const metadata =
  generateMetadata({
    title: 'Student Projects',

    description:
      'Explore TacoMines student engineering projects focused on practical implementation, productivity and workflow-oriented technical learning.',

    keywords: [
      'Student Projects',
      'Engineering Projects',
      'Web Development Projects',
      'Hybrid App Projects',
      'AI Projects',
    ],
  });

export default function StudentProjectsPage() {
  return (
    <>
      <PageBanner
        badge='Implementation-Oriented Learning'
        title='Real-World'
        highlight='Student Projects'
        description='Build practical engineering projects focused on implementation workflows, technical confidence and portfolio-oriented learning experiences.'
        image='/images/banners/student-projects.webp'
        imageAlt='Student Projects Banner'
      />

      <SectionNavigator
        sections={[
          {
            id: 'projects',
            label: 'Projects',
          },

          {
            id: 'workflow',
            label: 'Workflow',
          },

          {
            id: 'cta',
            label: 'Get Started',
          },
        ]}
      />

      <ProjectsCategoriesSection />

      <ProjectsWorkflowSection />

      <StudentProjectsCTASection />
    </>
  );
}