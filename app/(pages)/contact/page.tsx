import PageBanner from '@/components/shared/PageBanner/PageBanner';

import SectionNavigator from '@/components/shared/SectionNavigator/SectionNavigator';

import ContactInfoSection from '@/components/sections/contact/ContactInfoSection/ContactInfoSection';

import ContactMapSection from '@/components/sections/contact/ContactMapSection/ContactMapSection';

import { generateMetadata } from '@/lib/metadata';

export const metadata =
  generateMetadata({
    title: 'Contact',

    description:
      'Contact TacoMines for engineering training guidance, workshops, AI-assisted learning programs and technical support.',

    keywords: [
      'Contact TacoMines',
      'Training Support',
      'Engineering Academy Contact',
      'AI Training Contact',
    ],
  });

export default function ContactPage() {
  return (
    <>
      <PageBanner
        badge='Contact TacoMines'
        title='Let’s Build'
        highlight='Together'
        description='Connect with TacoMines for engineering learning programs, technical guidance, implementation-focused workflows and future-ready development training.'
        image='/images/banners/contact.webp'
        imageAlt='Contact TacoMines Banner'
      />

      <SectionNavigator
        sections={[
          {
            id: 'info',
            label: 'Contact Info',
          },

          {
            id: 'map',
            label: 'Location',
          },
        ]}
      />

      <ContactInfoSection />

      <ContactMapSection />
    </>
  );
}