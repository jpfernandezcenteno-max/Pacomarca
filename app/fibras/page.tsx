'use client'

import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
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

const fibers = [
  {
    name: 'Divine Alpaca',
    href: '/fibras/divine',
    spec: 'Comparable 18-19 µm | Cero medulación',
    desc: 'La innovación más sofisticada de Pacomarca. Divine Alpaca es el resultado de décadas de selección genética orientada a eliminar las fibras meduladas del vellón, logrando una suavidad comparable al cachemir pero con las propiedades únicas de la alpaca.',
    partners: 'Kuna, Amano',
    bgColor: 'bg-cream',
    image: '/fibras/fibra-divine-imperial-sixteen.jpg',
  },
  {
    name: 'Sixteen Alpaca',
    href: '/fibras/sixteen',
    spec: '< 17 µm | La más fina del mundo',
    desc: 'La fibra de alpaca más fina jamás certificada comercialmente. Sixteen Alpaca tiene un diámetro medio inferior a 17 micras, comparable a la vicuña y a las mejores fibras de guanaco. Es el resultado del programa de fibras extrafinas de Pacomarca.',
    partners: 'Inca Tops, marcas selectas',
    bgColor: 'bg-beige',
    image: '/fibras/fibra-divine-imperial-sixteen.jpg',
  },
  {
    name: 'Imperial Alpaca',
    href: '/fibras/imperial',
    spec: '< 18 µm | Certificación RAS',
    desc: 'Con un diámetro medio inferior a 18 micras y la certificación del Responsible Alpaca Standard (RAS), Imperial Alpaca representa el más alto estándar de trazabilidad y bienestar animal en la industria. Disponible en la gama de colores naturales de la alpaca.',
    partners: 'Inca Tops, Incalpaca',
    bgColor: 'bg-cream',
    image: '/fibras/fibra-divine-imperial-sixteen.jpg',
  },
  {
    name: 'Black Alpaca',
    href: '/fibras/black',
    spec: 'Negro natural puro | 0.07% producción nacional',
    desc: 'La fibra más escasa y buscada del ecosistema. Black Alpaca proviene de las alpacas de color negro puro que Pacomarca ha rescatado de la extinción. Solo el 0.07% de la producción nacional es negro puro, sin pigmentación mixta.',
    partners: 'Kuna, Amano, The Inoue Brothers',
    bgColor: 'bg-ink',
    image: '/fibras/fibra-black.jpg',
    dark: true,
  },
  {
    name: 'Colores Puros',
    href: '/fibras/colores-puros',
    spec: '22+ tonalidades naturales | Sin tintes',
    desc: 'La alpaca peruana posee la paleta de colores naturales más amplia de cualquier fibra animal: más de 22 tonalidades reconocidas, del blanco puro al negro profundo, pasando por decenas de grises, cafés y cremas. Sin ningún proceso de tintura química.',
    partners: 'Kuna, Amano',
    bgColor: 'bg-beige',
    image: '/fibras/fibra-colores.jpg',
  },
]

export default function FibrasPage() {
  return (
    <>
      <PageHeader
        section="FIBRAS"
        title="Fibras de Alpaca"
        subtitle="Las fibras más exclusivas del mundo, respaldadas por ciencia y sostenibilidad"
        imageUrl="/fibras/portada.jpg"
        imagePosition="object-center"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Fibras certificadas</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Cada fibra Pacomarca es el resultado de décadas de trabajo
            </h2>
            <p className="text-base text-ink/65 leading-relaxed">
              Las fibras certificadas Pacomarca son el producto visible de un ecosistema invisible pero poderoso: las comunidades alpaqueras que cuidan a los animales, los científicos que diseñan los programas genéticos, y los técnicos que garantizan la calidad en cada etapa. Cada fibra lleva consigo la historia de todo ese esfuerzo.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Fibers */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-8">
          {fibers.map((fiber, i) => (
            <FadeUp key={fiber.name} delay={i * 0.08}>
              <Link href={fiber.href}>
                <div className={`group grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden hover:shadow-2xl transition-all duration-500 ${fiber.bgColor}`}>
                  {/* Circle side */}
                  <div className="lg:col-span-3 flex items-center justify-center py-16 px-8">
                    <div className="w-36 h-36 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500 relative">
                      <Image
                        src={fiber.image}
                        alt={fiber.name}
                        fill
                        className="object-cover scale-[1.75] object-center"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-7 py-12 px-8 lg:px-12 flex flex-col justify-center`}>
                    <p className={`text-xs tracking-[0.2em] uppercase mb-3 ${fiber.dark ? 'text-gold' : 'text-gold'}`}>
                      {fiber.spec}
                    </p>
                    <h3 className={`font-serif text-3xl mb-5 group-hover:text-gold transition-colors duration-300 ${fiber.dark ? 'text-white' : 'text-ink'}`}>
                      {fiber.name}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-5 ${fiber.dark ? 'text-white/60' : 'text-ink/60'}`}>
                      {fiber.desc}
                    </p>
                    <p className={`text-xs tracking-[0.1em] uppercase ${fiber.dark ? 'text-white/30' : 'text-ink/35'}`}>
                      Marcas: {fiber.partners}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className={`lg:col-span-2 flex items-center justify-center py-8 ${fiber.dark ? 'text-gold/40 group-hover:text-gold' : 'text-gold/40 group-hover:text-gold'} transition-colors duration-300`}>
                    <svg className="w-8 h-8 transition-transform group-hover:translate-x-2 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
