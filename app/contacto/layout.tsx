import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctate con Pacomarca: alpaqueros, científicos, marcas o empresas interesadas en la fibra de alpaca sostenible. Oficina en Arequipa, Perú.',
  openGraph: {
    title: 'Contacto | Pacomarca',
    description: '¿Eres alpaquero, científico o marca? Contáctate con el equipo de Pacomarca en Arequipa, Perú.',
    url: 'https://www.pacomarca.com/contacto',
  },
  alternates: { canonical: 'https://www.pacomarca.com/contacto' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
