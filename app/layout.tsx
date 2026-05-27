import type { Metadata } from 'next';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://tacomines.com'),

  title: {
    default: 'TacoMines',
    template: '%s | TacoMines',
  },

  description:
    'AI-assisted engineering academy focused on software development, AI tools, web applications, automation, cloud technologies and career-oriented practical training.',

  keywords: [
    'TacoMines',
    'AI Training',
    'Web Development Training',
    'PWA Development',
    'Software Training Institute',
    'AI Assisted Learning',
    'Next.js Training',
    'React Training',
    'Cloud Hosting',
    'Career Guidance',
    'Engineering Academy',
  ],

  openGraph: {
    title: 'TacoMines',
    description:
      'AI-assisted engineering academy focused on practical skill development and career-oriented learning.',

    url: 'https://tacomines.com',

    siteName: 'TacoMines',

    locale: 'en_US',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'TacoMines',

    description:
      'AI-assisted engineering academy focused on practical implementation and career-oriented learning.',
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
    <html lang='en'>
      <body>
        <ThemeProvider>
          <ModalProvider>
            <RegistrationProvider>

              <Navbar />

              <main
                style={{
                  paddingTop: '78px',
                }}
              >
                {children}
              </main>

              <Footer />

              <FloatingButtons />

              <Toaster
                richColors
                position='top-right'
              />

            </RegistrationProvider>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}