import HeroSection from '@/components/sections/home/HeroSection/HeroSection';

import WhyChooseSection from '@/components/sections/home/WhyChooseSection/WhyChooseSection';

import AIComparisonSection from '@/components/sections/home/AIComparisonSection/AIComparisonSection';

import CoursesSection from '@/components/sections/home/CoursesSection/CoursesSection';

import StudentWorkflowSection from '@/components/sections/home/StudentWorkflowSection/StudentWorkflowSection';

import ProjectsSection from '@/components/sections/home/ProjectsSection/ProjectsSection';

import CareerSection from '@/components/sections/home/CareerSection/CareerSection';

import CTASection from '@/components/sections/home/CTASection/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

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