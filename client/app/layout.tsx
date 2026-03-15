import type {Metadata} from 'next';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-accent-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}