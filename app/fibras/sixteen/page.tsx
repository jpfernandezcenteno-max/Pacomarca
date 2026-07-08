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

export default function SixteenPage() {
  return (
    <>
      <PageHeader
        section="FIBRAS"
        title="Sixteen Alpaca"
        subtitle="La fibra de alpaca más fina del mundo"
        imageUrl="/fibras/sixteen/portada.jpg"
        imagePosition="object-center"
      />

      {/* Split layout */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Fiber sample */}
          <FadeUp>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden relative">
                  <Image src="/fibras/fibra-divine-imperial-sixteen.jpg" alt="Sixteen Alpaca" fill className="object-cover scale-[1.2] object-center" />
                </div>
                <div className="absolute -top-4 -right-4 bg-gold text-white text-xs tracking-[0.1em] px-4 py-2">
                  &lt; 17 µm
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Extrafina de alpaca</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Comparable a la vicuña
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed mb-8">
              <p>
                La Sixteen Alpaca es la fibra más fina del mundo dentro del mercado textil de alpaca, con una finura <strong className="text-ink font-medium">menor a 17 micras</strong>. Su suavidad excepcional, comparable únicamente con la vicuña, es el resultado de unir los avances en ingeniería genética y textil con el conocimiento ancestral de los alpaqueros.
              </p>
              <p>
                Esta fibra exclusiva no solo eleva los estándares de la moda de lujo, sino que también refleja un modelo de sostenibilidad basado en el respeto al ambiente, el bienestar animal y el desarrollo de las comunidades altoandinas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Diámetro máximo', value: '< 17 µm' },
                { label: 'Categoría', value: 'Extrafina' },
                { label: 'Comparativa', value: 'Vicuña' },
                { label: 'Origen', value: 'Huacaya seleccionada' },
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

      {/* Context */}
      <section className="bg-ink text-white py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Contexto global de finura</p>
            <h2 className="font-serif text-3xl text-white mb-10">Comparativa de fibras finas</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { fiber: 'Vicuña', micras: '12–14 µm', note: 'Protegida' },
                { fiber: 'Sixteen Alpaca', micras: '< 17 µm', note: 'Pacomarca', highlight: true },
                { fiber: 'Imperial Alpaca', micras: '< 18 µm', note: 'Pacomarca' },
                { fiber: 'Cashmere fino', micras: '14–16 µm', note: 'Animal distinto' },
              ].map((item) => (
                <div key={item.fiber} className={`p-6 ${item.highlight ? 'bg-gold' : 'bg-white/5'}`}>
                  <p className="font-serif text-2xl mb-2">{item.micras}</p>
                  <p className={`text-sm font-medium mb-1 ${item.highlight ? 'text-white' : 'text-white/80'}`}>{item.fiber}</p>
                  <p className={`text-xs ${item.highlight ? 'text-white/70' : 'text-white/40'}`}>{item.note}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/fibras/divine" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
              ← Divine Alpaca
            </Link>
            <Link href="/fibras/imperial" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
              Imperial Alpaca →
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
