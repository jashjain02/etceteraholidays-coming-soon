import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coming Soon | Etcetera Holidays',
  description: 'Etcetera Holidays is launching soon. Subscribe to be notified when we launch with exclusive deals and offers for your next dream vacation.',
  keywords: 'holidays, travel, vacation, etcetera holidays, coming soon, launch, travel deals',
  openGraph: {
    title: 'Coming Soon | Etcetera Holidays',
    description: 'Etcetera Holidays is launching soon. Subscribe to be notified when we launch with exclusive deals.',
    url: 'https://etceteraholidays.com',
    siteName: 'Etcetera Holidays',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coming Soon | Etcetera Holidays',
    description: 'Etcetera Holidays is launching soon. Subscribe to be notified when we launch with exclusive deals.',
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}