import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.pacomarca.com'

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/ecosistema', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/ecosistema/alpaqueros', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/ecosistema/cientificos', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/ecosistema/marcas-aliadas', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/ecosistema/trazabilidad', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/conocimiento', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/conocimiento/alpaca', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/conocimiento/programa-genetico', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/conocimiento/inca-esquila', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/conocimiento/publicaciones', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/conocimiento/pasantias', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/programas', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/programas/cabana-del-pastor', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/programas/invernadero', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/programas/lote-de-machos', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/programas/modulo-de-esquila', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/programas/fondo-investigacion', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/programas/abrigando-corazones', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/fibras', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/fibras/imperial', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/fibras/divine', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/fibras/sixteen', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/fibras/black', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/fibras/colores-puros', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { url: '/contacto', priority: 0.7, changeFrequency: 'yearly' },
  ] as const

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
