import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Científicos',
  description: 'Red de más de 30 investigadores y 23 universidades generando conocimiento científico para mejorar la genética alpaquera en Pacomarca.',
  openGraph: {
    title: 'Red Científica | Pacomarca',
    description: 'Más de 30 investigadores y 23 universidades colaborando en investigación genética alpaquera desde Pacomarca, Perú.',
    url: 'https://www.pacomarca.com/ecosistema/cientificos',
  },
  alternates: { canonical: 'https://www.pacomarca.com/ecosistema/cientificos' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
