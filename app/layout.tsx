import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pacomarca.com'),
  title: {
    default: 'Pacomarca — Ecosistema de Alpaca Sostenible',
    template: '%s | Pacomarca',
  },
  description:
    'El principal Ecosistema de Alpaca Sostenible del mundo. Investigación científica, fibras de excepción y programas sociales desde los Andes peruanos. Impulsado por el Grupo Inca.',
  keywords: [
    'alpaca', 'alpaca sostenible', 'fibra de alpaca', 'Pacomarca', 'Grupo Inca',
    'alpaca Peru', 'fibra fina', 'Andes', 'alpaca organica', 'Imperial Alpaca',
    'Divine Alpaca', 'Sixteen Alpaca', 'Black Alpaca', 'RAS certificacion',
    'ecosistema alpaca', 'estacion cientifica alpacas',
  ],
  authors: [{ name: 'Pacomarca — Grupo Inca' }],
  creator: 'Grupo Inca',
  publisher: 'Pacomarca',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://www.pacomarca.com',
    siteName: 'Pacomarca',
    title: 'Pacomarca — Ecosistema de Alpaca Sostenible',
    description:
      'El principal Ecosistema de Alpaca Sostenible del mundo. Investigación científica, fibras de excepción y programas sociales desde los Andes peruanos.',
    images: [
      {
        url: '/home/foto-1.jpg',
        width: 1800,
        height: 1200,
        alt: 'Pacomarca — Ecosistema de Alpaca Sostenible',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pacomarca — Ecosistema de Alpaca Sostenible',
    description:
      'El principal Ecosistema de Alpaca Sostenible del mundo. Impulsado por el Grupo Inca desde los Andes peruanos.',
    images: ['/home/foto-1.jpg'],
  },
  alternates: {
    canonical: 'https://www.pacomarca.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pacomarca',
  url: 'https://www.pacomarca.com',
  logo: 'https://www.pacomarca.com/logo.svg',
  image: 'https://www.pacomarca.com/home/foto-1.jpg',
  description:
    'El principal Ecosistema de Alpaca Sostenible del mundo. Investigación científica, fibras de excepción y programas sociales desde los Andes peruanos.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Miguel Forga 348, Parque Industrial',
    addressLocality: 'Arequipa',
    addressCountry: 'PE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+51-54-602500',
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
  },
  sameAs: [
    'https://www.instagram.com/pacomarca_official/',
    'https://www.facebook.com/pacomarcaperu/',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Grupo Inca',
    url: 'https://grupoinca.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
