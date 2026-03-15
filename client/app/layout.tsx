import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Baitumeleng | Professional Printing & Business Services',
  description: 'Baitumeleng offers high-quality printing, stationery, digital signage, and business services. From flyers to 3D signage, we deliver excellence.',
  keywords: ['printing', 'business services', 'Baitumeleng', 'stationery', 'digital printing', '3D signage', 'photocopying', 'flyers', 'posters'],
  openGraph: {
    title: 'Baitumeleng | Professional Printing & Business Services',
    description: 'Expert printing and business solutions for your local needs.',
    url: 'https://baitumeleng.co.za',
    siteName: 'Baitumeleng',
    images: [
      {
        url: 'https://picsum.photos/seed/baitumeleng/1200/630',
        width: 1200,
        height: 630,
        alt: 'Baitumeleng Printing Services',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baitumeleng | Professional Printing & Business Services',
    description: 'Expert printing and business solutions.',
    images: ['https://picsum.photos/seed/baitumeleng-tw/1200/630'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-body antialiased selection:bg-accent selection:text-accent-foreground`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
