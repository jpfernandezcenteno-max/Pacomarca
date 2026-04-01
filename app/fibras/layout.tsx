import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fibras de Alpaca',
  description: 'Las fibras de alpaca más finas del mundo: Divine, Sixteen, Imperial, Black Alpaca y Colores Puros. Certificadas y trazables desde los Andes peruanos.',
  openGraph: {
    title: 'Fibras de Alpaca | Pacomarca',
    description: 'Divine, Sixteen, Imperial, Black y Colores Puros. Las fibras de alpaca más finas, sostenibles y certificadas del mundo.',
    url: 'https://www.pacomarca.com/fibras',
  },
  alternates: { canonical: 'https://www.pacomarca.com/fibras' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
