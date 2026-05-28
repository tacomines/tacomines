import {
  FolderKanban,
  BriefcaseBusiness,
} from 'lucide-react';

import { generateMetadata } from '@/lib/metadata';

import SplitPageBanner from '@/components/shared/SplitPageBanner/SplitPageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import StudentProjectsSection from '@/components/sections/projects-placements/StudentProjectsSection/StudentProjectsSection';

import CareerSupportSection from '@/components/sections/projects-placements/CareerSupportSection/CareerSupportSection';

import ProjectsPlacementsCTASection from '@/components/sections/projects-placements/ProjectsPlacementsCTASection/ProjectsPlacementsCTASection';

export const metadata =
  generateMetadata({
    title:
      'Projects & Placements',

    description:
      'Explore TacoMines student projects, engineering workflows, portfolio development and placement-oriented technical learning.',

    keywords: [
      'Student Projects',
      'Engineering Projects',
      'Placement Support',
      'Portfolio Development',
      'TacoMines Placements',
    ],
  });

export default function ProjectsPlacementsPage() {
  return (
    <>
      <SplitPageBanner
        badge='Projects & Placements'
        title='Practical Engineering'
        highlight='Career Growth'
        description='TacoMines supports students through guided projects, implementation-focused engineering workflows, portfolio development and career-oriented technical growth.'
        quickLinks={[
          {
            title:
              'Student Projects',

            href:
              '/projects-placements/student-projects',

            icon: (
              <FolderKanban size={30} />
            ),
          },

          {
            title:
              'Placements',

            href:
              '/projects-placements/placements',

            icon: (
              <BriefcaseBusiness size={30} />
            ),
          },
        ]}
      />

      <SectionNavigator
        sections={[
          {
            id: 'projects',
            label: 'Projects',
          },

          {
            id: 'support',
            label: 'Career Support',
          },

          {
            id: 'cta',
            label: 'Get Started',
          },
        ]}
      />

      <StudentProjectsSection />

      <CareerSupportSection />

      <ProjectsPlacementsCTASection />
    </>
  );
}