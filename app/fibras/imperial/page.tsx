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
                Imperial Alpaca es la fibra con diámetro inferior a <strong className="text-ink font-medium">18 micras</strong> y la certificación del <strong className="text-ink font-medium">Responsible Alpaca Standard (RAS)</strong>, el estándar más riguroso de bienestar animal y trazabilidad en la industria alpaquera.
              </p>
              <p>
                La certificación RAS verifica independientemente que los animales han sido criados con altos estándares de bienestar, que la comunidad ha sido tratada con equidad y que la fibra puede rastrearse desde el animal hasta el producto final.
              </p>
              <p>
                Imperial Alpaca combina la excelencia en finura del programa de Fibras Extrafinas con la garantía de sostenibilidad que solo el ecosistema Pacomarca puede ofrecer.
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
              {/* Sello RAS — reemplazar con <Image> cuando esté disponible */}
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-white border border-sand/60 flex items-center justify-center">
                  <p className="text-xs text-ink/30 text-center px-4">Sello<br />RAS</p>
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
