import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ecosistema',
  description: 'Conoce el ecosistema de alpaca sostenible de Pacomarca: alpaqueros andinos, científicos, marcas aliadas y trazabilidad. Un modelo único en el mundo.',
  openGraph: {
    title: 'Ecosistema de Alpaca Sostenible | Pacomarca',
    description: 'Alpaqueros, científicos, marcas aliadas y trazabilidad. Un ecosistema único que une a todos los actores de la cadena de la fibra de alpaca.',
    url: 'https://www.pacomarca.com/ecosistema',
  },
  alternates: { canonical: 'https://www.pacomarca.com/ecosistema' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
