import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programa Genético',
  description: 'El programa genético de Pacomarca: selección científica de alpacas para producir las fibras más finas del mundo. Más de 13 millones de datos genéticos acumulados.',
  openGraph: {
    title: 'Programa Genético | Pacomarca',
    description: 'Selección genética rigurosa con más de 13 millones de datos. El programa que hace posible las fibras de alpaca más finas del mundo.',
    url: 'https://www.pacomarca.com/conocimiento/programa-genetico',
  },
  alternates: { canonical: 'https://www.pacomarca.com/conocimiento/programa-genetico' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
