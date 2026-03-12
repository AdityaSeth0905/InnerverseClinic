import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Innerverse Homoeoclinic | Premium Homeopathy Treatment in Delhi',
  description: 'Experience holistic homeopathy treatment at Innerverse Homoeoclinic. Founded by Dr. Jaittry and Dr. Manisha. Expert care for your wellness journey.',
  keywords: 'homeopathy clinic Delhi, homeopathic treatment, wellness, Dr. Jaittry, Dr. Manisha, Lajpat Nagar',
  generator: 'v0.app',
  metadataBase: new URL('https://innerversehomoeoclinic.com'),
  openGraph: {
    title: 'Innerverse Homoeoclinic | Premium Homeopathy Treatment',
    description: 'Holistic homeopathy treatment by experienced doctors in Delhi. Trust, healing, and wellness.',
    type: 'website',
    url: 'https://innerversehomoeoclinic.com',
    siteName: 'Innerverse Homoeoclinic',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f9a8d4" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <div suppressHydrationWarning>{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
