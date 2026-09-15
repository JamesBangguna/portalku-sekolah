import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { schoolInfo } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `${schoolInfo.name} | ${schoolInfo.tagline}`,
    template: `%s | ${schoolInfo.name}`,
  },
  description: `${schoolInfo.name} - ${schoolInfo.tagline}. Sekolah dasar unggulan dengan pendidikan berkualitas, karakter kuat, dan fasilitas modern.`,
  keywords: [
    'sekolah dasar',
    'SD Negeri',
    'pendidikan',
    'Jakarta',
    schoolInfo.name,
  ],
  authors: [{ name: schoolInfo.name }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: schoolInfo.name,
    title: schoolInfo.name,
    description: schoolInfo.tagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: schoolInfo.name,
    description: schoolInfo.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
