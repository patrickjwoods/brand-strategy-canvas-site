import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'The Brand Strategy Canvas',
  description: 'A one-page framework for early-stage founders who need brand strategy before brand execution. Build your positioning, voice, and messaging on a foundation that actually holds.',
  openGraph: {
    title: 'The Brand Strategy Canvas',
    description: 'A one-page framework for early-stage founders who need brand strategy before brand execution.',
    url: 'https://thebrandstrategycanvas.com',
    siteName: 'The Brand Strategy Canvas',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Brand Strategy Canvas',
    description: 'A one-page framework for early-stage founders who need brand strategy before brand execution.',
    creator: '@patrickjwoods',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}<Analytics /></body>
    </html>
  )
}
