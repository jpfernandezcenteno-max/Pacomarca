import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de Pacomarca.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://www.pacomarca.com/politica-cookies' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
