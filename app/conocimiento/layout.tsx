import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conocimiento',
  description: 'Centro de conocimiento sobre la alpaca: razas, programa genético, esquila Inca, publicaciones científicas y pasantías. El saber detrás de la fibra más fina del mundo.',
  openGraph: {
    title: 'Conocimiento sobre Alpaca | Pacomarca',
    description: 'Todo sobre la alpaca: razas Suri y Huacaya, programa genético, técnica de esquila Inca, publicaciones científicas y pasantías en Pacomarca.',
    url: 'https://www.pacomarca.com/conocimiento',
  },
  alternates: { canonical: 'https://www.pacomarca.com/conocimiento' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
