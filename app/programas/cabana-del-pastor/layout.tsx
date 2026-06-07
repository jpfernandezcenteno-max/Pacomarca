import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cabaña del Pastor',
  description: 'Viviendas dignas para familias alpaqueras en los Andes: calefacción, cocina mejorada, agua caliente, energía solar e invernadero. 8 cabañas construidas por Pacomarca.',
  openGraph: {
    title: 'Cabaña del Pastor | Pacomarca',
    description: 'Viviendas dignas con calefacción, agua caliente, energía solar e invernadero para familias alpaqueras altoandinas.',
    url: 'https://www.pacomarca.com/programas/cabana-del-pastor',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas/cabana-del-pastor' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
