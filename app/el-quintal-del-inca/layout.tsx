import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El Quintal del Inca 2026/2027',
  description:
    'Concurso nacional que evalúa la calidad de tu fibra de alpaca, compra tu lote y reconoce a los mejores productores. 8.ª edición, organizado por INCA TOPS S.A. y Pacomarca desde 2012.',
  openGraph: {
    title: 'El Quintal del Inca 2026/2027 | Pacomarca',
    description:
      'Demuestra la calidad de tu fibra y recibe el reconocimiento que merece. Concurso nacional de fibra de alpaca.',
    url: 'https://www.pacomarca.com/el-quintal-del-inca',
    images: [{ url: '/concurso/portada.jpg' }],
  },
  alternates: { canonical: 'https://www.pacomarca.com/el-quintal-del-inca' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
