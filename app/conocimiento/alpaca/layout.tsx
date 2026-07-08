import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La Alpaca — Vicugna Pacos',
  description: 'Conoce los dos tipos de alpaca: Suri y Huacaya. Historia, características y diferencias de la Vicugna pacos, el animal que produce la fibra más fina del mundo.',
  openGraph: {
    title: 'La Alpaca — Suri y Huacaya | Pacomarca',
    description: 'Tipos de alpaca Suri y Huacaya: características, diferencias y el valor de su fibra. Todo sobre la Vicugna pacos en Pacomarca.',
    url: 'https://www.pacomarca.com/conocimiento/alpaca',
  },
  alternates: { canonical: 'https://www.pacomarca.com/conocimiento/alpaca' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
