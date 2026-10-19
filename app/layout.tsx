import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'DK — Cybersecurity Enthusiast | Aspiring Penetration Tester',
  description:
    'Portfolio of DK, a cybersecurity learner focused on penetration testing, red team fundamentals, networking, Linux, Windows, and web application security.',
  keywords: ['penetration testing', 'cybersecurity', 'red team', 'offensive security', 'portfolio'],
  authors: [{ name: 'DK' }],
  openGraph: {
    title: 'DK — Aspiring Penetration Tester',
    description: 'Learning offensive security, networking, and penetration testing through hands-on labs.',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
