'use client'

import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  )
}

// Última publicación destacada — reemplazar con datos reales
const featuredPublication = {
  title: 'Título del artículo más reciente',
  authors: 'Apellido, N.; Apellido, N.; Apellido, N.',
  journal: 'Small Ruminant Research',
  year: '2024',
  doi: '#', // reemplazar con DOI o URL de descarga
  image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=85',
}

// Listado de publicaciones — agregar/editar según listado real
const publications = [
  { title: 'Genetic parameters for fiber traits in Peruvian alpacas', authors: 'Autor et al.', journal: 'Small Ruminant Research', year: '2023', url: '#' },
  { title: 'Heritability of medullation in Huacaya alpaca fleece', authors: 'Autor et al.', journal: 'Livestock Science', year: '2022', url: '#' },
  { title: 'Welfare indicators during shearing in South American camelids', authors: 'Autor et al.', journal: 'Animal Welfare', year: '2022', url: '#' },
  { title: 'Breeding values for fiber diameter in Suri alpaca', authors: 'Autor et al.', journal: 'Journal of Animal Breeding and Genetics', year: '2021', url: '#' },
  { title: 'Sustainable fiber production and rural livelihoods in the Andes', authors: 'Autor et al.', journal: 'Sustainability', year: '2021', url: '#' },
  { title: 'Color genetics in Huacaya alpaca: a quantitative approach', authors: 'Autor et al.', journal: 'Animal Genetics', year: '2020', url: '#' },
  { title: 'Genetic diversity in Peruvian alpaca populations', authors: 'Autor et al.', journal: 'Genetics Selection Evolution', year: '2020', url: '#' },
  { title: 'Impact of Inca Esquila on fiber quality and animal stress', authors: 'Autor et al.', journal: 'Small Ruminant Research', year: '2019', url: '#' },
]

// Logos de revistas — reemplazar src con los logos reales
const journals = [
  { name: 'Small Ruminant Research' },
  { name: 'Livestock Science' },
  { name: 'Animal Genetics' },
  { name: 'Journal of Animal Breeding and Genetics' },
  { name: 'Animal Welfare' },
  { name: 'Sustainability' },
  { name: 'Genetics Selection Evolution' },
]

export default function PublicacionesPage() {
  return (
    <>
      <PageHeader
        section="CONOCIMIENTO"
        title="Publicaciones"
        subtitle="El conocimiento Pacomarca, validado y disponible para la comunidad científica global"
        imageUrl="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=2400&q=85"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Producción científica</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              32 artículos en revistas científicas indexadas
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                El programa científico de Pacomarca ha generado más de 32 publicaciones en revistas científicas internacionales de alto impacto. Esta producción cubre áreas como genética cuantitativa, bienestar animal, calidad de fibra, sostenibilidad y economía rural.
              </p>
              <p>
                Una parte significativa de las publicaciones son el resultado de la colaboración con la <strong className="text-ink font-medium">Universidad Complutense de Madrid</strong> y otras instituciones académicas de nivel internacional.
              </p>
              <p>
                Las publicaciones están disponibles en los repositorios de las respectivas revistas indexadas (ISI, Scopus). El listado actualizado se mantiene en el sitio web institucional de Pacomarca.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '32+', label: 'Artículos científicos publicados' },
                { num: '13M+', label: 'Datos de base' },
                { num: '23+', label: 'Universidades colaboradoras' },
                { num: '5', label: 'Continentes de investigadores' },
              ].map((s) => (
                <div key={s.label} className="bg-beige p-8 text-center">
                  <p className="font-serif text-4xl text-gold mb-2">{s.num}</p>
                  <p className="text-xs text-ink/55 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Líneas temáticas</p>
              <h2 className="font-serif text-3xl text-ink">Áreas de investigación</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '◎', title: 'Genética cuantitativa', desc: 'Parámetros genéticos, heredabilidades, valores de cría y respuesta a la selección en alpacas.' },
              { icon: '◎', title: 'Calidad de fibra', desc: 'Finura, uniformidad, medulación, brillo y otras características físicas de la fibra de alpaca.' },
              { icon: '◎', title: 'Bienestar animal', desc: 'Indicadores de bienestar, prácticas de manejo, impacto de la esquila en la salud y productividad.' },
              { icon: '◎', title: 'Sostenibilidad', desc: 'Impacto social y ambiental de la producción alpaquera, modelos de negocio sostenibles.' },
            ].map((t) => (
              <FadeUp key={t.title}>
                <div className="bg-white p-8">
                  <span className="text-gold text-2xl block mb-4">{t.icon}</span>
                  <h3 className="font-serif text-lg text-ink mb-3">{t.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{t.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Featured publication */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Última publicación</p>
            <h2 className="font-serif text-3xl text-ink">Publicación destacada</h2>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 border border-sand/50 overflow-hidden">
            <div className="relative h-64 lg:h-auto min-h-[260px]">
              <Image
                src={featuredPublication.image}
                alt={featuredPublication.title}
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="p-10 flex flex-col justify-between bg-cream">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{featuredPublication.journal} · {featuredPublication.year}</p>
                <h3 className="font-serif text-2xl text-ink mb-4 leading-snug">{featuredPublication.title}</h3>
                <p className="text-sm text-ink/55 mb-8">{featuredPublication.authors}</p>
              </div>
              <a
                href={featuredPublication.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-ink text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-ink/80 transition-colors self-start"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar artículo
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Publications list */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Bibliografía</p>
              <h2 className="font-serif text-3xl text-ink">Listado de publicaciones</h2>
            </div>
          </FadeUp>
          <div className="space-y-3">
            {publications.map((pub, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-8 py-6 border-l-4 border-gold/40 hover:border-gold transition-colors">
                  <div className="flex-1">
                    <p className="font-serif text-base text-ink mb-1">{pub.title}</p>
                    <p className="text-xs text-ink/45">{pub.authors} — <span className="italic">{pub.journal}</span>, {pub.year}</p>
                  </div>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold border border-gold/50 px-5 py-3 hover:bg-ink hover:text-white hover:border-ink transition-colors shrink-0"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="mt-10 p-8 bg-beige text-center">
              <p className="text-sm text-ink/65 mb-4">
                Para más información sobre las publicaciones científicas de Pacomarca, contacta directamente al equipo científico.
              </p>
              <a
                href="/contacto?rol=cientifico"
                className="inline-block text-xs tracking-[0.2em] uppercase text-gold border-b border-gold pb-1 hover:text-ink hover:border-ink transition-colors"
              >
                Contactar al equipo científico
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Journal logos banner */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold text-center">Publicado en</p>
          </FadeUp>
        </div>
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...journals, ...journals].map((j, i) => (
              <div
                key={i}
                className="shrink-0 w-48 h-20 bg-beige border border-sand/50 flex items-center justify-center px-4"
              >
                {/* Reemplazar con <Image> cuando estén los logos */}
                <p className="text-xs text-ink/40 text-center leading-snug">{j.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
