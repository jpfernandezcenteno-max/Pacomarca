import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alpaqueros',
  description: 'Las comunidades alpaqueras de los Andes peruanos son el corazón del ecosistema Pacomarca. Familias que desde los 3,800m custodian la fibra más fina del mundo.',
  openGraph: {
    title: 'Alpaqueros Andinos | Pacomarca',
    description: 'Comunidades alpaqueras de los Andes peruanos. Familias que desde los 3,800m de altitud custodian la fibra más fina del mundo.',
    url: 'https://www.pacomarca.com/ecosistema/alpaqueros',
  },
  alternates: { canonical: 'https://www.pacomarca.com/ecosistema/alpaqueros' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
