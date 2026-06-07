import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Módulo de Esquila',
  description: 'Infraestructura y equipamiento de esquila mecanizada bajo el método Inca Esquila: bienestar animal, fibra más limpia y trazabilidad. 9 módulos implementados por Pacomarca.',
  openGraph: {
    title: 'Módulo de Esquila | Pacomarca',
    description: 'Esquila profesional con bienestar animal y trazabilidad. La tasa de nacimientos sube del 60% al 76% con Inca Esquila.',
    url: 'https://www.pacomarca.com/programas/modulo-de-esquila',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas/modulo-de-esquila' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
