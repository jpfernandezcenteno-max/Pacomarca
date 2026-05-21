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

const actors = [
  {
    title: 'Alpaqueros',
    href: '/ecosistema/alpaqueros',
    icon: '🏔',
    description: 'Las comunidades alpaqueras son el motor del ecosistema. Agrupadas en la red Pacochayllu, son aproximadamente 1,000 familias distribuidas en Apurímac, Cusco, Puno, Arequipa y Huancavelica. Ellos custodian el recurso genético más valioso del mundo.',
    stat: '~1,000 familias',
  },
  {
    title: 'Científicos',
    href: '/ecosistema/cientificos',
    icon: '🔬',
    description: 'Más de 30 investigadores y 23 universidades de todo el mundo colaboran con Pacomarca para generar conocimiento científico riguroso que mejora las condiciones de las comunidades alpaqueras y la calidad de las fibras.',
    stat: '32 artículos publicados',
  },
  {
    title: 'Marcas Aliadas',
    href: '/ecosistema/marcas-aliadas',
    icon: '✦',
    description: 'Las marcas del Grupo Inca (Incalpaca, Kuna, Amano, Inca Tops, Alpaca 111) y aliados estratégicos globales como The Inoue Brothers, Sandra Jordan y Hessnatur validan y llevan estas fibras al mundo.',
    stat: '12+ marcas aliadas',
  },
  {
    title: 'Sociedad Civil',
    href: '/ecosistema',
    icon: '◯',
    description: 'Organizaciones, consumidores conscientes e instituciones que eligen la sostenibilidad real. La demanda responsable es lo que hace viable este ecosistema a largo plazo para las generaciones futuras.',
    stat: 'Impacto global',
  },
]

export default function EcosistemaPage() {
  return (
    <>
      <PageHeader
        section="ECOSISTEMA"
        title="El ecosistema"
        subtitle="Una red viva que conecta a los Andes con el mundo"
        imageUrl="/ecosistema/alpacas.jpg"
        imagePosition="object-top"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Sustainable Alpaca Network</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Cuando todos ganan, la sostenibilidad es posible
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                Pacomarca articula la Sustainable Alpaca Network, un ecosistema sin precedentes en la industria de fibras naturales. Su diseño parte de una premisa simple pero revolucionaria: para que la sostenibilidad sea real, todos los actores de la cadena deben beneficiarse.
              </p>
              <p>
                Desde las comunidades alpaqueras en las alturas de los Andes, pasando por los científicos que generan conocimiento, hasta las marcas que llevan estas fibras al consumidor final, cada eslabón está conectado y cada uno recibe valor real.
              </p>
              <p>
                Este modelo fue diseñado por el Grupo Inca con la convicción de que la industria textil puede ser un motor de desarrollo social y ambiental, sin sacrificar la calidad ni la excelencia que el mercado de lujo exige.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Actors */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Los actores</p>
              <h2 className="font-serif text-4xl text-ink">Cuatro pilares, un propósito</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {actors.map((actor, i) => (
              <FadeUp key={actor.title} delay={i * 0.1}>
                <Link href={actor.href}>
                  <div className="group bg-white p-10 hover:shadow-xl transition-all duration-400 border border-transparent hover:border-gold/20 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-3xl">{actor.icon}</span>
                      <span className="text-xs tracking-[0.15em] uppercase text-gold bg-gold/10 px-3 py-1">
                        {actor.stat}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-ink mb-4 group-hover:text-gold transition-colors">
                      {actor.title}
                    </h3>
                    <p className="text-sm text-ink/60 leading-relaxed mb-6">{actor.description}</p>
                    <span className="text-xs tracking-[0.15em] uppercase text-gold flex items-center gap-2">
                      Conocer más
                      <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Model description */}
      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <FadeUp>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">El modelo</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-8 leading-relaxed">
            "La verdadera sostenibilidad no se declara: se demuestra con datos, con compromisos y con el bienestar de las familias."
          </h2>
          <p className="text-base text-ink/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Cada programa, cada investigación y cada fibra certificada es evidencia concreta del compromiso de Pacomarca con las comunidades alpaqueras del Perú y con el planeta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programas"
              className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/90 transition-colors"
            >
              Ver programas comunitarios
            </Link>
            <Link
              href="/contacto"
              className="inline-block border border-ink/30 text-ink text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-colors"
            >
              Únete al ecosistema
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
