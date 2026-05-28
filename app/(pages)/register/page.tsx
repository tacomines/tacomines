import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import RegisterFormSection from '@/components/sections/register/RegisterFormSection/RegisterFormSection';

import { generateMetadata } from '@/lib/metadata';

export const metadata =
  generateMetadata({
    title: 'Register',

    description:
      'Register for TacoMines AI-assisted engineering training programs focused on practical implementation and career-oriented learning.',

    keywords: [
      'TacoMines Registration',
      'Engineering Training Registration',
      'AI Training Enrollment',
      'Web Development Registration',
    ],
  });

export default function RegisterPage() {
  return (
    <>
      <PageBanner
        badge='Join TacoMines'
        title='Start Your'
        highlight='Engineering Journey'
        description='Register with TacoMines to access AI-assisted engineering learning, practical workflows, implementation-oriented programs and modern technical growth opportunities.'
        image='/images/banners/register.webp'
        imageAlt='Register TacoMines Banner'
      />

      <SectionNavigator
        sections={[
          {
            id: 'register',
            label: 'Registration',
          },
        ]}
      />

      <RegisterFormSection />
    </>
  );
}