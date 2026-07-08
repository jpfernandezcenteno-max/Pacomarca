'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import Image from 'next/image'
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

const steps = [
  { step: '01', title: 'El animal', desc: 'Cada alpaca en el programa está identificada individualmente con arete, con su historial genético registrado en el sistema PacoPro.' },
  { step: '02', title: 'La esquila', desc: 'La fibra se extrae siguiendo el método Inca Esquila, garantizando bienestar animal y calidad óptima. Se registra la longitud y el peso de cada vellón.' },
  { step: '03', title: 'El acopio', desc: 'Los módulos de esquila certificados concentran la fibra clasificada por comunidad y calidad, con registros digitales de procedencia.' },
  { step: '04', title: 'El procesamiento', desc: 'Las plantas del Grupo Inca (Inca Tops, Incalpaca) procesan la fibra manteniendo la trazabilidad desde el origen hasta el top o hilo final.' },
  { step: '05', title: 'La certificación', desc: 'Cada lote es verificado y certificado con el estándar RAS (Responsible Alpaca Standard) y el sello de calidad Pacomarca.' },
  { step: '06', title: 'El producto final', desc: 'Las marcas aliadas reciben fibra trazable que pueden comunicar con autenticidad a sus clientes en el mercado internacional.' },
]

export default function TrazabilidadPage() {
  return (
    <>
      <PageHeader
        section="ECOSISTEMA"
        title="Trazabilidad"
        subtitle="Del animal al producto final: transparencia total en cada eslabón"
        imageUrl="/ecosistema/trazabilidad/portada.jpg"
        imagePosition="object-[center_45%]"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Cadena de valor transparente</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Sabemos exactamente de dónde viene cada fibra
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                La trazabilidad es uno de los pilares fundamentales del ecosistema Pacomarca. Nuestro sistema permite rastrear cada fibra desde el animal de origen hasta el producto final en manos del consumidor.
              </p>
              <p>
                Esto no es solo una promesa: es un sistema verificable con datos registrados en PacoPro, nuestra plataforma de gestión genética y productiva, que documenta cada etapa de la cadena de valor.
              </p>
              <p>
                Para las marcas aliadas, esto significa poder comunicar con absoluta autenticidad la historia de cada prenda. Para los alpaqueros, significa que su trabajo y el cuidado de sus animales se reconoce y se valora.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-beige p-10">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Video de trazabilidad</p>
              <video
                controls
                playsInline
                className="w-full aspect-video"
                src="/ecosistema/trazabilidad/video-trazabilidad.mp4"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">El proceso</p>
              <h2 className="font-serif text-4xl text-ink">6 pasos, trazabilidad total</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <FadeUp key={s.step} delay={i * 0.1}>
                <div className="bg-white p-8 border-t-2 border-gold">
                  <p className="font-serif text-4xl text-gold/30 mb-4">{s.step}</p>
                  <h3 className="font-serif text-xl text-ink mb-3">{s.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PacoPro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Tecnología</p>
            <h2 className="font-serif text-3xl text-ink mb-6">PacoPro: el sistema de registro</h2>
            <p className="text-base text-ink/65 leading-relaxed mb-10">
              PacoPro es el software de gestión genética y productiva desarrollado específicamente para el ecosistema Pacomarca. Permite registrar, analizar y rastrear más de 17,000 individuos con sus datos genealógicos, productivos y de calidad de fibra. Es la base tecnológica de la trazabilidad del ecosistema.
            </p>
            <Link
              href="/contacto"
              className="inline-block border border-ink/30 text-ink text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-colors"
            >
              Conocer más sobre el sistema
            </Link>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/ecosistema/trazabilidad/foto-1.jpg"
                alt="PacoPro sistema de registro"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
