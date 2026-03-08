import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
