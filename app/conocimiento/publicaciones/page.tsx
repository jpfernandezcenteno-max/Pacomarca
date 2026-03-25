'use client'

import PageHeader from '@/components/PageHeader'
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

function Accordion({ title, description }: { title: string; description: string }) {
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
            <div className="px-8 pb-8">
              <p className="text-sm text-ink/60 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

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

      {/* Accordion */}
      <section className="py-24 max-w-4xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="mb-12 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Bibliografía</p>
            <h2 className="font-serif text-3xl text-ink">Listados de publicaciones</h2>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="space-y-4">
            <Accordion
              title="Revistas indexadas (ISI / Scopus)"
              description="El listado completo y actualizado de artículos publicados en revistas indexadas se encuentra disponible en el sitio web institucional de Pacomarca y en los repositorios de las respectivas revistas. Las publicaciones cubren genética cuantitativa, calidad de fibra, bienestar animal y sostenibilidad del ecosistema alpaquero. Las revistas incluyen Small Ruminant Research, Livestock Science, Animal Genetics, Journal of Animal Breeding and Genetics, entre otras de alto impacto internacional."
            />
            <Accordion
              title="Otras publicaciones y materiales técnicos"
              description="Además de artículos científicos, Pacomarca ha generado manuales técnicos, guías de manejo, presentaciones en congresos internacionales y materiales de capacitación para comunidades alpaqueras. Estos materiales están disponibles a través de la estación científica y pueden solicitarse directamente contactando a nuestro equipo técnico."
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-12 p-8 bg-beige text-center">
            <p className="text-sm text-ink/65 mb-4">
              Para acceder al listado completo y actualizado de publicaciones, visita el sitio web institucional o contacta directamente al equipo científico de Pacomarca.
            </p>
            <a
              href="/contacto?rol=cientifico"
              className="inline-block text-xs tracking-[0.2em] uppercase text-gold border-b border-gold pb-1 hover:text-ink hover:border-ink transition-colors"
            >
              Contactar al equipo científico
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
