import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divine Alpaca',
  description: 'Divine Alpaca: bajo % de medulación, suavidad perfecta. La fibra de alpaca de baja medulación, resultado de décadas de selección genética en Pacomarca.',
  openGraph: {
    title: 'Divine Alpaca — Bajo % de Medulación | Pacomarca',
    description: 'La fibra de alpaca de baja medulación. Divine Alpaca es el resultado de la selección genética más exigente del mundo, con suavidad incomparable.',
    url: 'https://www.pacomarca.com/fibras/divine',
  },
  alternates: { canonical: 'https://www.pacomarca.com/fibras/divine' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
