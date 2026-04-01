import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Imperial Alpaca',
  description: 'Imperial Alpaca: fibra menor a 18 micras con certificación RAS (Responsible Alpaca Standard). La fibra de alpaca más sostenible y trazable del mundo.',
  openGraph: {
    title: 'Imperial Alpaca — Certificación RAS | Pacomarca',
    description: 'Menos de 18 micras, certificación RAS. Imperial Alpaca es la fibra que combina finura excepcional con sostenibilidad comprobada.',
    url: 'https://www.pacomarca.com/fibras/imperial',
  },
  alternates: { canonical: 'https://www.pacomarca.com/fibras/imperial' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
