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

export default function BlackAlpacaPage() {
  return (
    <>
      <PageHeader
        section="FIBRAS"
        title="Black Alpaca"
        subtitle="La fibra negra más escasa y valiosa del mundo"
        imageUrl="/fibras/black/portada.jpg"
        imagePosition="object-center"
      />

      {/* Split layout - dark */}
      <section className="bg-ink py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Fiber sample */}
            <FadeUp>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-72 h-72 rounded-full overflow-hidden relative">
                    <Image src="/fibras/fibra-black.jpg" alt="Black Alpaca" fill className="object-cover scale-[1.45] object-center" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gold text-white text-xs tracking-[0.1em] uppercase px-4 py-2">
                    0.07% producción
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Content */}
            <FadeUp delay={0.2}>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Extremadamente escasa</p>
              <h2 className="font-serif text-4xl text-white mb-8 leading-snug">
                Negro puro. Sin tintes. Sin compromisos.
              </h2>
              <div className="space-y-5 text-base text-white/60 leading-relaxed mb-8">
                <p>
                  Black Alpaca proviene de las alpacas de color negro absolutamente puro que Pacomarca ha rescatado de la extinción a través de su programa de conservación genética. Solo el <strong className="text-white/90 font-medium">0.07% de la producción nacional</strong> de fibra de alpaca es negro puro, sin mezcla de otros pigmentos.
                </p>
                <p>
                  Su valor radica no solo en su extrema escasez, sino en su cualidad única: es un negro profundo, natural, que no requiere ningún proceso de tintura química. Las prendas confeccionadas con Black Alpaca son ecológicamente impecables y mantienen su color sin desgaste.
                </p>
                <p>
                  El programa Black Alpaca de Pacomarca registra y selecciona más de 3,000 animales negros, manteniendo un promedio de 1,000 animales negros vivos en el rebaño en todo momento, para garantizar la continuidad del programa.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Participación en producción', value: '0.07%' },
                  { label: 'Animales registrados', value: '3,000+' },
                  { label: 'Proceso de tintura', value: 'Ninguno' },
                  { label: 'Marcas aliadas', value: 'Kuna, Amano, Inoue Brothers' },
                ].map((spec) => (
                  <div key={spec.label} className="bg-white/5 border border-white/10 p-4">
                    <p className="text-xs text-white/30 uppercase tracking-[0.1em] mb-1">{spec.label}</p>
                    <p className="font-serif text-base text-white">{spec.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contacto?rol=marca"
                className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/90 transition-colors"
              >
                Consultar disponibilidad
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">El rescate</p>
            <h2 className="font-serif text-3xl text-ink mb-6">Una especie en riesgo de extinción</h2>
            <div className="space-y-4 text-base text-ink/65 leading-relaxed">
              <p>
                Durante décadas, el mercado internacional prefirió la fibra blanca de alpaca porque es más fácil de teñir. Esto generó una presión de selección contraria a los animales de colores, y muy especialmente contra los negros puros, que fueron progresivamente marginados de los programas de reproducción.
              </p>
              <p>
                Pacomarca reconoció este problema en los años 90 e inició el programa de conservación y mejora del color negro. Hoy, con más de 3,000 animales registrados, la continuidad de la alpaca negra pura en el Perú está garantizada.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">La revalorización</p>
            <h2 className="font-serif text-3xl text-ink mb-6">El mercado descubrió su valor</h2>
            <div className="space-y-4 text-base text-ink/65 leading-relaxed">
              <p>
                La certificación Pacomarca y la narrativa del rescate transformaron el mercado. Hoy, el negro natural de alpaca es uno de los materiales más buscados por las marcas de moda sostenible, que valoran tanto su escasez como su autenticidad ecológica.
              </p>
              <p>
                Marcas como Kuna, Amano y The Inoue Brothers han desarrollado colecciones exclusivas basadas en Black Alpaca, devolviendo a este color el valor que siempre mereció y generando mejores precios para las familias que cuidan estos animales.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-cream max-w-full px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link href="/fibras/imperial" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
                ← Imperial Alpaca
              </Link>
              <Link href="/fibras/colores-puros" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
                Colores Puros →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
