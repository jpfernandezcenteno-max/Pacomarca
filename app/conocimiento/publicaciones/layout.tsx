import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publicaciones Científicas',
  description: 'Más de 32 artículos científicos publicados sobre genética alpaquera, fibra de alpaca y sostenibilidad. Investigación de Pacomarca disponible para descarga.',
  openGraph: {
    title: 'Publicaciones Científicas | Pacomarca',
    description: 'Artículos científicos sobre genética alpaquera y fibra de alpaca. Más de 32 publicaciones de investigadores de Pacomarca.',
    url: 'https://www.pacomarca.com/conocimiento/publicaciones',
  },
  alternates: { canonical: 'https://www.pacomarca.com/conocimiento/publicaciones' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
