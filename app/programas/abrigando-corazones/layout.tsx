import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abrigando Corazones',
  description: 'Kits de abrigo de alpaca para niños y adultos mayores de las comunidades altoandinas. 8,400+ kits donados por Pacomarca a las familias más vulnerables.',
  openGraph: {
    title: 'Abrigando Corazones | Pacomarca',
    description: 'La fibra más fina del mundo al servicio de los más vulnerables: 8,400+ kits de abrigo donados en los Andes.',
    url: 'https://www.pacomarca.com/programas/abrigando-corazones',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas/abrigando-corazones' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
