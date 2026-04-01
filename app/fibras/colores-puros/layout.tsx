import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colores Puros Alpaca',
  description: 'Colores Puros: más de 22 tonalidades naturales de alpaca sin tinturas químicas. La paleta de colores más amplia de fibra natural del mundo.',
  openGraph: {
    title: 'Colores Puros — 22 Tonalidades Naturales | Pacomarca',
    description: 'Más de 22 tonalidades naturales sin tinturas químicas. Colores Puros es la paleta de colores más amplia de fibra de alpaca natural del mundo.',
    url: 'https://www.pacomarca.com/fibras/colores-puros',
  },
  alternates: { canonical: 'https://www.pacomarca.com/fibras/colores-puros' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
