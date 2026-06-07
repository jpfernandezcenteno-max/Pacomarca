import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fondo a la Investigación',
  description: 'El Fondo a la Investigación de Pacomarca financia ciencia sobre la alpaca y el ecosistema andino. 32 artículos científicos publicados en colaboración con universidades de todo el mundo.',
  openGraph: {
    title: 'Fondo a la Investigación | Pacomarca',
    description: 'Inversión en conocimiento científico para el sector alpaquero: 32 artículos publicados y 13M+ de datos genéticos disponibles.',
    url: 'https://www.pacomarca.com/programas/fondo-investigacion',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas/fondo-investigacion' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
