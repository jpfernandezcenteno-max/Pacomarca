import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inca Esquila',
  description: 'Técnica de esquila Inca: el método de corte de fibra de alpaca que garantiza la calidad y bienestar animal. Certificación NTP y reconocimiento internacional.',
  openGraph: {
    title: 'Técnica Inca Esquila | Pacomarca',
    description: 'La técnica de esquila Inca garantiza fibra de la más alta calidad y bienestar animal. Certificada con norma técnica peruana NTP.',
    url: 'https://www.pacomarca.com/conocimiento/inca-esquila',
  },
  alternates: { canonical: 'https://www.pacomarca.com/conocimiento/inca-esquila' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
