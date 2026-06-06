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

export default function DivinePage() {
  return (
    <>
      <PageHeader
        section="FIBRAS"
        title="Divine Alpaca"
        subtitle="Cero medulación. La suavidad perfecta."
        imageUrl="/fibras/divine/portada.jpg"
        imagePosition="object-center"
      />

      {/* Split layout */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Fiber sample */}
          <FadeUp>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full overflow-hidden relative">
                  <Image src="/fibras/fibra-divine-imperial-sixteen.jpg" alt="Divine Alpaca" fill className="object-cover scale-[1.75] object-center" />
                </div>
                <div className="absolute -top-4 -right-4 bg-gold text-white text-xs tracking-[0.1em] uppercase px-4 py-2">
                  0% medulación
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">La innovación Pacomarca</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Suavidad sin compromiso
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed mb-8">
              <p>
                Divine Alpaca es el resultado más refinado del programa de selección genética para Fibras de Confort Superior de Pacomarca. Su característica definitoria es la ausencia prácticamente total de fibras meduladas —fibras huecas que son las responsables del "prickle factor" o sensación de picazón en la piel.
              </p>
              <p>
                Con una finura comparable a las calidades 18-19 micras de alpaca y cero medulación verificable, Divine Alpaca ofrece una experiencia táctil que supera incluso al cachemir en suavidad y confort sobre la piel desnuda.
              </p>
              <p>
                Es el resultado de más de una década de selección sistemática de animales con los menores índices de medulación, construyendo una línea genética única en el mundo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Finura comparable', value: '18–19 µm' },
                { label: 'Medulación', value: '≈ 0%' },
                { label: 'Tipo de fibra', value: 'Huacaya' },
                { label: 'Marcas aliadas', value: 'Kuna, Amano' },
              ].map((spec) => (
                <div key={spec.label} className="bg-beige p-4">
                  <p className="text-xs text-ink/40 uppercase tracking-[0.1em] mb-1">{spec.label}</p>
                  <p className="font-serif text-lg text-ink">{spec.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contacto?rol=marca"
              className="inline-block bg-ink text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-ink/90 transition-colors"
            >
              Consultar disponibilidad
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Technical details */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Especificaciones técnicas</p>
              <h2 className="font-serif text-3xl text-ink">Por qué Divine Alpaca es única</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Cero medulación', desc: 'Las fibras meduladas son la causa del prickle effect o picazón. Divine Alpaca las ha eliminado mediante selección genética, no por proceso industrial.' },
              { title: 'Confort superior', desc: 'La ausencia de medulación combinada con una finura de 18-19 micras hace que las prendas de Divine Alpaca sean cómodas en contacto directo con la piel más sensible.' },
              { title: 'Origen certificado', desc: 'Cada lote proviene de animales registrados en el programa genético de Pacomarca con los datos de genealogía, evaluación y clasificación de su fibra.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8">
                  <h3 className="font-serif text-lg text-ink mb-4">{item.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/fibras" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
              ← Todas las fibras
            </Link>
            <Link href="/fibras/sixteen" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
              Sixteen Alpaca →
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
