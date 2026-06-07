import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invernadero',
  description: 'Invernaderos comunitarios de Pacomarca para producir vegetales frescos en el altiplano y combatir la desnutrición crónica de las comunidades alpaqueras.',
  openGraph: {
    title: 'Invernadero | Pacomarca',
    description: 'Vegetales frescos donde la altitud lo hace casi imposible: invernaderos comunitarios contra la desnutrición en los Andes.',
    url: 'https://www.pacomarca.com/programas/invernadero',
  },
  alternates: { canonical: 'https://www.pacomarca.com/programas/invernadero' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
