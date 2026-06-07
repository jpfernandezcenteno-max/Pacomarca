import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Libro de Reclamaciones',
  description: 'Libro de Reclamaciones virtual de Pacomarca.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://www.pacomarca.com/libro-reclamaciones' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
