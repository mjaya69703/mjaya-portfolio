import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import { LanguageProvider } from './contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhamad Jaya Kusuma - Technical Support Engineer',
  description: 'Technical Support professional with expertise in server administration, network management, and DevOps practices',
  keywords: ['Technical Support', 'Server Administration', 'Network Management', 'DevOps', 'IT Support', 'System Administrator'],
  authors: [{ name: 'Muhamad Jaya Kusuma' }],
  creator: 'Muhamad Jaya Kusuma',
  publisher: 'Muhamad Jaya Kusuma',
  metadataBase: new URL('https://portfolio-mjaya69703.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/id',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-mjaya69703.vercel.app',
    title: 'Muhamad Jaya Kusuma - Technical Support Engineer',
    description: 'Technical Support professional with expertise in server administration, network management, and DevOps practices',
    siteName: 'Muhamad Jaya Kusuma Portfolio',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Muhamad Jaya Kusuma - Technical Support Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhamad Jaya Kusuma - Technical Support Engineer',
    description: 'Technical Support professional with expertise in server administration, network management, and DevOps practices',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
