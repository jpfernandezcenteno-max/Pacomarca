import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marcas Aliadas',
  description: 'Grupo Inca, Inca Tops, Incalpaca, Kuna, Alpaca 111 y Amano: las marcas aliadas que validan y comercializan las fibras certificadas del ecosistema Pacomarca.',
  openGraph: {
    title: 'Marcas Aliadas | Pacomarca',
    description: 'Conoce las marcas del Grupo Inca y aliados estratégicos que comercializan las fibras certificadas y trazables de Pacomarca.',
    url: 'https://www.pacomarca.com/ecosistema/marcas-aliadas',
  },
  alternates: { canonical: 'https://www.pacomarca.com/ecosistema/marcas-aliadas' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
