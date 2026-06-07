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

export default function ImperialPage() {
  return (
    <>
      <PageHeader
        section="FIBRAS"
        title="Imperial Alpaca"
        subtitle="El estándar de excelencia certificado"
        imageUrl="/fibras/imperial/portada.jpg"
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
                  <Image src="/fibras/fibra-divine-imperial-sixteen.jpg" alt="Imperial Alpaca" fill className="object-cover scale-[1.2] object-center" />
                </div>
                <div className="absolute -top-4 -right-4 bg-gold text-white text-xs tracking-[0.1em] uppercase px-4 py-2">
                  RAS Certified
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Calidad certificada</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Trazabilidad total, certificación RAS
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed mb-8">
              <p>
                La Imperial Alpaca es una fibra de gran confort y finura <strong className="text-ink font-medium">menor a 18 micras</strong>, reconocida por su suavidad, durabilidad y versatilidad gracias a su longitud. Su origen está en las comunidades alpaqueras certificadas bajo el estándar <strong className="text-ink font-medium">RAS (Responsible Alpaca Standard)</strong>, lo que asegura trazabilidad total y prácticas responsables.
              </p>
              <p>
                Al elegir esta fibra, se respalda el trabajo de mejora genética impulsado por Pacomarca y se contribuye a un modelo sostenible que garantiza bienestar animal, desarrollo social y respeto ambiental.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Diámetro máximo', value: '< 18 µm' },
                { label: 'Certificación', value: 'RAS' },
                { label: 'Trazabilidad', value: '100% completa' },
                { label: 'Marcas', value: 'Inca Tops, Incalpaca' },
              ].map((spec) => (
                <div key={spec.label} className="bg-cream p-4">
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

      {/* RAS section */}
      <section className="bg-beige py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Responsible Alpaca Standard</p>
                <h2 className="font-serif text-3xl text-ink mb-6">¿Qué certifica el RAS?</h2>
                <div className="space-y-4 text-sm text-ink/65 leading-relaxed">
                  <p>El Responsible Alpaca Standard (RAS) es el estándar internacional desarrollado por Textile Exchange para garantizar que la fibra de alpaca proviene de animales bien tratados y de comunidades que se benefician equitativamente del comercio.</p>
                  <p>La certificación incluye auditorías independientes de bienestar animal, condiciones laborales de las comunidades, gestión de la tierra y trazabilidad de la cadena de suministro.</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/fibras/imperial/logo-ras.svg"
                    alt="Responsible Alpaca Standard"
                    className="w-full h-full object-contain scale-[0.85]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Bienestar animal verificado',
                  'Trazabilidad completa',
                  'Comercio justo',
                  'Gestión sostenible',
                  'Sin maltrato',
                  'Auditoría independiente',
                ].map((item) => (
                  <div key={item} className="bg-white px-6 py-4 flex gap-4 items-center">
                    <span className="text-gold shrink-0">◆</span>
                    <span className="text-sm text-ink/65">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/fibras/sixteen" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
              ← Sixteen Alpaca
            </Link>
            <Link href="/fibras/black" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
              Black Alpaca →
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
