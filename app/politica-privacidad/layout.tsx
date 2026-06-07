import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Pacomarca.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://www.pacomarca.com/politica-privacidad' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
