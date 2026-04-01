import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Noticias, artículos y novedades de Pacomarca: avances científicos, programas sociales, fibras de alpaca y sostenibilidad desde los Andes peruanos.',
  openGraph: {
    title: 'Blog | Pacomarca',
    description: 'Las últimas noticias y artículos de Pacomarca: ciencia, sostenibilidad, comunidades alpaqueras y fibras de excepción.',
    url: 'https://www.pacomarca.com/actualidad',
  },
  alternates: { canonical: 'https://www.pacomarca.com/actualidad' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
