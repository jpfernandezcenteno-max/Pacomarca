import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lote de Machos',
  description: 'Donación de reproductores machos genéticamente seleccionados para mejorar la fibra de las comunidades alpaqueras. 1,512 alpacas donadas por Pacomarca.',
  openGraph: {
    title: 'Lote de Machos | Pacomarca',
    description: 'Mejora genética real para las comunidades: de 30% a 80% de fibra fina con reproductores seleccionados de Pacomarca.',
    url: 'https://www.pacomarca.com/programas/lote-de-machos',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas/lote-de-machos' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
