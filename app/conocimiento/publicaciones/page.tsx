'use client'

import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

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
  doi: '/conocimiento/publicaciones/ultima-publicacion.png',
  image: '/conocimiento/publicaciones/ultima-publicacion.png',
}

// Revistas indexadas — pendiente de cargar el listado real de publicaciones
const publicacionesIndexadas = [
  { title: 'El listado de publicaciones en revistas indexadas (ISI / Scopus) se encuentra en actualización.', authors: 'Para acceder a los artículos, escríbenos al equipo científico de Pacomarca.', journal: '', year: '', url: '/contacto?rol=cientifico' },
]

// Otras publicaciones — pendiente de cargar el listado real
const otrasPub = [
  { title: 'Presentaciones, congresos y materiales técnicos en actualización.', authors: 'Para más información, escríbenos al equipo científico de Pacomarca.', journal: '', year: '', url: '/contacto?rol=cientifico' },
]

function PublicationAccordion({ title, publications }: { title: string; publications: typeof publicacionesIndexadas }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-sand/50">
      <button
        className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-cream/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-xl text-ink">{title}</span>
        <span className="text-xs tracking-[0.15em] uppercase text-gold">{open ? '— Cerrar' : '+ Ver'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 space-y-3">
              {publications.map((pub, i) => (
                <div key={i} className="bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-l-4 border-gold/40 hover:border-gold transition-colors">
                  <div className="flex-1">
                    <p className="font-serif text-base text-ink mb-1">{pub.title}</p>
                    <p className="text-xs text-ink/45">{pub.authors}{pub.journal ? <> — <span className="italic">{pub.journal}</span></> : ''}{pub.year ? `, ${pub.year}` : ''}</p>
                  </div>
                  <a
                    href={pub.url}
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold border border-gold/50 px-5 py-3 hover:bg-ink hover:text-white hover:border-ink transition-colors shrink-0"
                  >
                    Escríbenos
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

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
        imageUrl="/conocimiento/publicaciones/portada.jpg"
        imagePosition="object-[center_35%]"
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
                Gracias a la base de datos que maneja Pacomarca, la más grande y completa en el mundo, y a la colaboración con la <strong className="text-ink font-medium">Universidad Complutense de Madrid</strong>, se ha logrado producir una serie de papers científicos que han sido publicados en algunas de las revistas indexadas más importantes a nivel internacional.
              </p>
              <p>
                Asímismo, Pacomarca realiza continuamente presentaciones no científicas de su programa de mejora genética en diversas publicaciones, nacionales e internacionales, así como en congresos veterinarios, encuentros de agrupaciones ligadas por la alpaca, eventos especializados, charlas a nivel universitario, etc.
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
                download
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
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-12 text-center">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Bibliografía</p>
              <h2 className="font-serif text-3xl text-ink">Listado de publicaciones</h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="space-y-4">
              <PublicationAccordion title="Revistas indexadas (ISI / Scopus)" publications={publicacionesIndexadas} />
              <PublicationAccordion title="Otras publicaciones y materiales técnicos" publications={otrasPub} />
            </div>
          </FadeUp>

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
            <p className="text-xs tracking-[0.25em] uppercase text-gold text-center">Revistas indexadas del sector</p>
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
