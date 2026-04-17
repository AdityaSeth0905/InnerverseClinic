import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Innerverse Homoeclinic | Holistic Homeopathy in New Delhi',
  description:
    'Innerverse Homoeoclinic offers personalised homeopathic treatment by experienced physicians Dr. Jaittry and Dr. Manisha in Lajpat Nagar, New Delhi. Safe, natural, and holistic care for the whole person.',
  keywords:
    'homeopathy clinic Delhi, homeopathic doctor Lajpat Nagar, holistic healing New Delhi, Dr. Jaittry, Dr. Manisha, homeopathic treatment, constitutional homeopathy',
  metadataBase: new URL('https://innerversehomoeclinic.com'),
  openGraph: {
    title: 'Innerverse Homoeoclinic | Holistic Homeopathy in New Delhi',
    description:
      'Personalised homeopathic care by experienced physicians in Lajpat Nagar, New Delhi. Healing that begins from within.',
    type: 'website',
    url: 'https://innerversehomoeoclinic.com',
    siteName: 'Innerverse Homoeclinic',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innerverse Homoeclinic',
    description: 'Personalised homeopathic care in Lajpat Nagar, New Delhi.',
  },
  icons: {
    icon: [
      { url: '/logo-main.ico', media: '(prefers-color-scheme: light)' },
      { url: '/logo-main.ico', media: '(prefers-color-scheme: dark)' },
      { url: '/logo-main.ico', type: 'image/x-icon' },
    ],
    apple: '/logo-main.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}