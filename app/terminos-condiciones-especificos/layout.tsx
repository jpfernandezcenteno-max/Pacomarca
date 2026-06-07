import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones Específicos',
  description: 'Términos y condiciones específicos de Pacomarca.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://www.pacomarca.com/terminos-condiciones-especificos' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
