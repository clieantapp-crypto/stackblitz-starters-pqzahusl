import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: ' الخدمات وآخر العروض الحصرية',
  description: 'اكتشف    الخدمات وآخر العروض عبر روابطنا ',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir='rtl'>
       <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXX"
        />

        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXX');
          `}
        </Script>
      </head>
      <body >{children}</body>
    </html>
  );
}
