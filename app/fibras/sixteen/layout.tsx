import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sixteen Alpaca',
  description: 'Sixteen Alpaca: menos de 17 micras, la fibra de alpaca más fina del mundo. Un logro de la selección genética de Pacomarca disponible solo en cantidades limitadas.',
  openGraph: {
    title: 'Sixteen Alpaca — Menos de 17 Micras | Pacomarca',
    description: 'La fibra de alpaca más fina del mundo: menos de 17 micras. Sixteen Alpaca es el pináculo de la selección genética de Pacomarca.',
    url: 'https://www.pacomarca.com/fibras/sixteen',
  },
  alternates: { canonical: 'https://www.pacomarca.com/fibras/sixteen' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
