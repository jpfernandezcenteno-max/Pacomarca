import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pasantías',
  description: 'Programa de pasantías en Pacomarca: aprende genética alpaquera, manejo de rebaños y producción de fibra en la estación científica más importante del mundo.',
  openGraph: {
    title: 'Pasantías en Pacomarca',
    description: 'Vive la experiencia de investigación en la estación científica de alpacas más importante del mundo. Programa de pasantías en Pacomarca, Perú.',
    url: 'https://www.pacomarca.com/conocimiento/pasantias',
  },
  alternates: { canonical: 'https://www.pacomarca.com/conocimiento/pasantias' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
