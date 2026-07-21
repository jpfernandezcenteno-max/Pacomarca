import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programas Sociales',
  description: 'Programas sociales de Pacomarca: Cabaña del Pastor, Lote de Machos, Tejiendo Corazones, Invernadero, Módulo de Esquila y Fondo de Investigación.',
  openGraph: {
    title: 'Programas Sociales | Pacomarca',
    description: '8 cabañas construidas, 1,512 alpacas donadas, 8,400+ kits Abrigando Corazones. Los programas de Pacomarca transforman comunidades andinas.',
    url: 'https://www.pacomarca.com/programas',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
