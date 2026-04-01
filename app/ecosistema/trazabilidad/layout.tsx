import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trazabilidad',
  description: 'Sistema de trazabilidad PacoPro: seguimiento completo de la fibra de alpaca desde el rebaño hasta la prenda final. Transparencia total en la cadena de valor.',
  openGraph: {
    title: 'Trazabilidad PacoPro | Pacomarca',
    description: 'PacoPro: el sistema de trazabilidad que permite seguir la fibra de alpaca desde el rebaño hasta la prenda. Transparencia y sostenibilidad comprobable.',
    url: 'https://www.pacomarca.com/ecosistema/trazabilidad',
  },
  alternates: { canonical: 'https://www.pacomarca.com/ecosistema/trazabilidad' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
