import { generateMetadata } from '@/lib/metadata';

import StudentProjectsHeroSection from '@/components/sections/projects-placements/student-projects/StudentProjectsHeroSection/StudentProjectsHeroSection';

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
      <StudentProjectsHeroSection />

      <ProjectsCategoriesSection />

      <ProjectsWorkflowSection />

      <StudentProjectsCTASection />
    </>
  );
}