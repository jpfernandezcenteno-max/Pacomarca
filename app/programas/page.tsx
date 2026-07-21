'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  )
}

const programs = [
  {
    num: '01',
    title: 'Cabaña del Pastor',
    href: '/programas/cabana-del-pastor',
    stat: '8 construidas',
    statNum: '8',
    desc: 'Viviendas dignas para familias alpaqueras en las alturas andinas, donde la temperatura puede descender a -20°C. Cada cabaña incluye servicios básicos y equipamiento para mejorar la calidad de vida.',
    icon: '🏠',
    image: '/programas/cabana-del-pastor/portada.jpg',
  },
  {
    num: '02',
    title: 'Invernadero Comunitario',
    href: '/programas/invernadero',
    stat: '1 construido',
    statNum: '1',
    desc: 'Estructura para producir vegetales frescos en zonas donde la altitud y el frío lo hacen casi imposible. Combate la desnutrición infantil en las comunidades altoandinas.',
    icon: '🌱',
    image: '/programas/invernadero/portada.jpg',
  },
  {
    num: '03',
    title: 'Lote de Machos',
    href: '/programas/lote-de-machos',
    stat: '1,512 alpacas donadas',
    statNum: '1,512',
    desc: 'Donación de reproductores machos genéticamente seleccionados para mejorar la calidad de la fibra de las comunidades. De 30% a 80% de fibra fina con el programa.',
    icon: '◈',
    image: '/programas/lote-de-machos/portada.jpg',
  },
  {
    num: '04',
    title: 'Módulo de Esquila',
    href: '/programas/modulo-de-esquila',
    stat: '9 implementados',
    statNum: '9',
    desc: 'Infraestructura y equipamiento completo para realizar la esquila bajo el método Inca Esquila, garantizando bienestar animal, calidad de fibra y trazabilidad.',
    icon: '✂',
    image: '/programas/modulo-de-esquila/portada.jpg',
  },
  {
    num: '05',
    title: 'Fondo a la Investigación',
    href: '/programas/fondo-investigacion',
    stat: '32 artículos publicados',
    statNum: '32',
    desc: 'Financiamiento de investigaciones científicas sobre alpacas y el ecosistema andino. Más de 32 artículos en revistas indexadas internacionales.',
    icon: '◎',
    image: '/programas/fondo-investigacion/portada.jpg',
  },
  {
    num: '06',
    title: 'Tejiendo Corazones',
    href: '/programas/tejiendo-corazones',
    stat: '8,400+ kits donados',
    statNum: '8,400+',
    desc: 'Kits de abrigo para los miembros más vulnerables de las comunidades: niños y adultos mayores. Mantas, suéteres, medias, bufandas, chullos y más.',
    icon: '♡',
    image: '/programas/tejiendo-corazones/portada.jpg',
  },
]

function ProgramsBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % programs.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prog = programs[current]

  return (
    <section className="relative h-[520px] overflow-hidden bg-ink">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={prog.image}
            alt={prog.title}
            fill
            className="object-cover grayscale opacity-50"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-8 pb-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-3">Programa {prog.num}</p>
            <h3 className="font-serif text-4xl lg:text-5xl text-white mb-3">{prog.title}</h3>
            <p className="text-sm text-white/60 max-w-xl mb-6">{prog.desc}</p>
            <Link
              href={prog.href}
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white border border-white/40 px-6 py-3 hover:bg-white hover:text-ink transition-colors"
            >
              Conocer más
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {programs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + programs.length) % programs.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % programs.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
      >
        ›
      </button>
    </section>
  )
}

export default function ProgramasPage() {
  return (
    <>
      <PageHeader
        section="PROGRAMAS"
        title="Programas que sostienen comunidades"
        subtitle="Inversión real en las familias que hacen posible la fibra más fina del mundo"
        imageUrl="/programas/portada.jpg"
        imagePosition="object-center"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Compromiso real</p>
            <h2 className="font-serif text-4xl text-ink mb-8">
              La sostenibilidad se demuestra con acciones concretas
            </h2>
            <p className="text-base text-ink/65 leading-relaxed mb-5">
              Pacomarca destina recursos significativos al bienestar de las comunidades alpaqueras que son el corazón del ecosistema. Estos programas no son acciones de responsabilidad social corporativa aisladas: son inversiones estratégicas en la sostenibilidad del sistema que todos compartimos.
            </p>
            <p className="text-base text-ink/65 leading-relaxed">
              Cuando las familias viven mejor, cuidan mejor a sus animales. Cuando los animales están mejor, la fibra es de mayor calidad. Cuando la fibra es mejor, todos ganan. Esta es la lógica circular de un ecosistema verdaderamente sostenible.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Programs grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <FadeUp key={prog.title} delay={i * 0.08}>
              <Link href={prog.href}>
                <div className="group bg-cream border border-sand/30 hover:border-gold/40 hover:shadow-xl transition-all duration-400 h-full overflow-hidden">
                  <div className="bg-beige px-8 py-6 flex items-center justify-between">
                    <span className="font-serif text-4xl text-gold/30">{prog.num}</span>
                    <span className="text-xs tracking-[0.1em] uppercase text-gold font-medium">{prog.stat}</span>
                  </div>
                  <div className="p-8">
                    <div className="text-2xl mb-4">{prog.icon}</div>
                    <h3 className="font-serif text-2xl text-ink mb-4 group-hover:text-gold transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-ink/60 leading-relaxed mb-6">{prog.desc}</p>
                    <span className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold group-hover:gap-3 transition-all duration-200">
                      Conocer más
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

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Apoya los programas</p>
            <h2 className="font-serif text-3xl text-white mb-6">
              ¿Quieres contribuir a estos programas?
            </h2>
            <p className="text-base text-white/60 mb-10 leading-relaxed">
              Las marcas aliadas y los socios estratégicos del ecosistema tienen la posibilidad de participar activamente en el financiamiento y expansión de estos programas. Cada inversión se traduce en mejores condiciones para las comunidades y en fibras de mayor calidad.
            </p>
            <Link
              href="/contacto?tipo=programa"
              className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors"
            >
              Quiero apoyar un programa
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
