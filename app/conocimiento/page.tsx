'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
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

const sections = [
  {
    label: '01',
    title: 'Alpaca (Vicugna pacos)',
    href: '/conocimiento/alpaca',
    desc: 'La historia, biología y características únicas de la alpaca peruana: las dos razas, las propiedades de su fibra y su hábitat en las alturas andinas.',
    tag: 'Biología',
  },
  {
    label: '02',
    title: 'Programa Genético',
    href: '/conocimiento/programa-genetico',
    desc: 'El programa más ambicioso de mejora genética de alpacas del mundo. Tres líneas de selección: Black Alpaca, Fibras Extrafinas y Fibras de Confort Superior.',
    tag: 'Genética',
  },
  {
    label: '03',
    title: 'Inca Esquila',
    href: '/conocimiento/inca-esquila',
    desc: 'El método de esquila científico que revolucionó la industria alpaquera. Normalizado como NTP 231.370-2014, mejora el bienestar animal y la calidad de la fibra.',
    tag: 'Manejo',
  },
  {
    label: '04',
    title: 'Publicaciones',
    href: '/conocimiento/publicaciones',
    desc: 'Más de 32 artículos científicos publicados en revistas indexadas internacionales. El conocimiento Pacomarca, disponible para la comunidad científica global.',
    tag: 'Investigación',
  },
  {
    label: '05',
    title: 'Pasantías',
    href: '/conocimiento/pasantias',
    desc: 'Programas de visita y pasantía en la estación científica de Pacomarca. De 300 a 800 visitantes por año de distintos países del mundo.',
    tag: 'Formación',
  },
]

export default function ConocimientoPage() {
  return (
    <>
      <PageHeader
        section="CONOCIMIENTO"
        title="Conocimiento"
        subtitle="Ciencia al servicio de las comunidades y la sostenibilidad"
        imageUrl="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=2400&q=85"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Base de conocimiento</p>
            <h2 className="font-serif text-4xl text-ink mb-8">
              Décadas de investigación científica rigurosa
            </h2>
            <p className="text-base text-ink/65 leading-relaxed">
              Pacomarca es mucho más que una estación científica: es el repositorio de conocimiento más importante sobre la alpaca en el mundo. Cada programa, cada investigación y cada publicación contribuye a mejorar la vida de las comunidades alpaqueras y la calidad de las fibras que llegan al mercado internacional.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Knowledge cards */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-6">
          {sections.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08}>
              <Link href={s.href}>
                <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center border border-sand/50 hover:border-gold/40 p-8 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="md:col-span-1">
                    <span className="font-serif text-3xl text-gold/30">{s.label}</span>
                  </div>
                  <div className="md:col-span-8">
                    <span className="text-xs tracking-[0.15em] uppercase text-gold/70 mb-2 block">{s.tag}</span>
                    <h3 className="font-serif text-2xl text-ink group-hover:text-gold transition-colors mb-3">{s.title}</h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="md:col-span-3 flex md:justify-end">
                    <span className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold group-hover:gap-3 transition-all duration-200">
                      Explorar
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  )
}
