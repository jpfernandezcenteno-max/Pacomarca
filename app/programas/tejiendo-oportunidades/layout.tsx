import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tejiendo Oportunidades',
  description: 'Kits de abrigo de alpaca para niños y adultos mayores de las comunidades altoandinas. 1,412 kg de hilado donados por Pacomarca a las familias más vulnerables.',
  openGraph: {
    title: 'Tejiendo Oportunidades | Pacomarca',
    description: 'La fibra más fina del mundo al servicio de los más vulnerables: 1,412 kg de hilado donado en los Andes.',
    url: 'https://www.pacomarca.com/programas/tejiendo-oportunidades',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas/tejiendo-oportunidades' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
