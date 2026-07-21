import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tejiendo Corazones',
  description: 'Kits de abrigo de alpaca para niños y adultos mayores de las comunidades altoandinas. 8,400+ kits donados por Pacomarca a las familias más vulnerables.',
  openGraph: {
    title: 'Tejiendo Corazones | Pacomarca',
    description: 'La fibra más fina del mundo al servicio de los más vulnerables: 8,400+ kits de abrigo donados en los Andes.',
    url: 'https://www.pacomarca.com/programas/tejiendo-corazones',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas/tejiendo-corazones' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
