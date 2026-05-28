import { generateMetadata } from '@/lib/metadata';

import HomeSplitHero from '@/components/sections/home/HomeSplitHero/HomeSplitHero';

import WhyChooseSection from '@/components/sections/home/WhyChooseSection/WhyChooseSection';

import AIComparisonSection from '@/components/sections/home/AIComparisonSection/AIComparisonSection';

import CoursesSection from '@/components/sections/home/CoursesSection/CoursesSection';

import StudentWorkflowSection from '@/components/sections/home/StudentWorkflowSection/StudentWorkflowSection';

import ProjectsSection from '@/components/sections/home/ProjectsSection/ProjectsSection';

import CareerSection from '@/components/sections/home/CareerSection/CareerSection';

import CTASection from '@/components/sections/home/CTASection/CTASection';

export const metadata =
  generateMetadata({
    title: 'Home',

    description:
      'TacoMines is an AI-assisted engineering academy focused on practical software development, AI tools, web applications, automation and career-oriented technical learning.',

    keywords: [
      'TacoMines',
      'AI Engineering Academy',
      'Web Development Training',
      'AI Assisted Learning',
      'Software Development',
      'Progressive Web Apps',
      'Hybrid Apps',
      'Engineering Training',
      'Career-Oriented Learning',
      'Modern Engineering Skills',
    ],
  });

export default function HomePage() {
  return (
    <>
      <HomeSplitHero />

      <WhyChooseSection />

      <AIComparisonSection />

      <CoursesSection />

      <StudentWorkflowSection />

      <ProjectsSection />

      <CareerSection />

      <CTASection />
    </>
  );
}