import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import FloatingButtons from '@/components/shared/FloatingButtons';

import { ThemeProvider } from '@/context/ThemeProvider';
import { ModalProvider } from '@/context/ModalProvider';
import { RegistrationProvider } from '@/context/RegistrationProvider';

import { Toaster } from 'sonner';

import '@/styles/globals.css';
import '@/styles/animations.css';
import '@/styles/utilities.css';

const inter = Inter({
  subsets: ['latin'],

  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://www.tacomines.com'
  ),

  title: {
    default:
      'TacoMines',

    template:
      '%s | TacoMines',
  },

  description:
    'TacoMines provides AI-assisted engineering learning, practical implementation workflows, modern web development training and productivity-oriented technical growth.',

  keywords: [
    'TacoMines',
    'Web Development',
    'AI Engineering',
    'Progressive Web Apps',
    'Hybrid Apps',
    'Technical Training',
    'Engineering Learning',
  ],

  openGraph: {
    title:
      'TacoMines',

    description:
      'AI-assisted engineering learning and implementation-focused technical growth.',

    url:
      'https://www.tacomines.com',

    siteName:
      'TacoMines',

    locale:
      'en_US',

    type: 'website',
  },

  twitter: {
    card:
      'summary_large_image',

    title:
      'TacoMines',

    description:
      'AI-assisted engineering learning and practical technical growth.',
  },

  robots: {
    index: true,

    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html
        lang='en'
        data-scroll-behavior='smooth'
      >
      <body className={inter.className}>
        <ThemeProvider>
          <ModalProvider>
            <RegistrationProvider>

              <Navbar />

              <main className='layoutMain'>
                {children}
              </main>

              <Footer />

              <FloatingButtons />

              <Toaster
                richColors
                position='top-right'
                expand
                closeButton
                duration={3500}
              />

            </RegistrationProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}