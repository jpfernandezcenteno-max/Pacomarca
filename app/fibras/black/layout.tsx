import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Black Alpaca',
  description: 'Black Alpaca: negro natural puro sin tinturas químicas. Solo el 0.07% de la producción mundial. La rareza más exclusiva de la fibra de alpaca.',
  openGraph: {
    title: 'Black Alpaca — Negro Natural Puro | Pacomarca',
    description: 'Negro natural puro, sin tinturas. Solo el 0.07% de producción. Black Alpaca es la fibra más exclusiva y rara del mundo.',
    url: 'https://www.pacomarca.com/fibras/black',
  },
  alternates: { canonical: 'https://www.pacomarca.com/fibras/black' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
