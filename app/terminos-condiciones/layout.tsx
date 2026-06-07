import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso de Pacomarca.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://www.pacomarca.com/terminos-condiciones' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
