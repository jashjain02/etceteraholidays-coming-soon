import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { Viewport } from 'next';

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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Etcetera Holidays',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, 
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Browser compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* iOS/Safari specific tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Additional Safari compatibility meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Disable automatic detection of possible phone numbers */}
        <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />
        
        {/* Disable auto zoom on input focus for iOS */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}