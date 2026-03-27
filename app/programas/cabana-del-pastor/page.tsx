'use client'

import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import ImageCarousel from '@/components/ImageCarousel'
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

export default function CabanaDelPastorPage() {
  return (
    <>
      <PageHeader
        section="PROGRAMAS"
        title="Cabaña del Pastor"
        subtitle="Viviendas dignas en las alturas más extremas del Perú"
        imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=90"
      />

      {/* Stat badge + quote */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            {/* Stat Badge */}
            <div className="inline-block bg-gold text-white px-8 py-5 mb-10">
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-1">Impacto acumulado</p>
              <p className="font-serif text-4xl">8 cabañas construidas y entregadas</p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-gold pl-6 mb-10">
              <p className="font-serif text-xl text-ink/80 italic leading-relaxed mb-4">
                "Antes de la cabaña, mi familia y yo dormíamos con las alpacas para resistir el frío. Ahora tenemos un hogar de verdad y podemos cuidar mejor a nuestros animales."
              </p>
              <cite className="text-xs tracking-[0.15em] uppercase text-gold not-italic">
                — Martín Chipana Vilchez, alpaquero beneficiario
              </cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85"
                alt="Cabaña del pastor en los Andes"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-beige py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="bg-white p-10">
                <p className="text-xs tracking-[0.25em] uppercase text-ink/40 mb-6">El problema</p>
                <h3 className="font-serif text-2xl text-ink mb-6">Condiciones extremas de vida</h3>
                <div className="space-y-4 text-sm text-ink/65 leading-relaxed">
                  <p>El <strong className="text-ink font-medium">90%</strong> de las familias alpaqueras enfrentan riesgo de heladas severas en sus viviendas durante los meses de invierno andino (mayo-agosto).</p>
                  <p>Las viviendas tradicionales, construidas con adobe sin aislamiento, no ofrecen protección adecuada contra temperaturas que pueden descender a <strong className="text-ink font-medium">-20°C</strong> o menos durante las noches.</p>
                  <p>La falta de servicios básicos (agua potable, saneamiento, energía) genera condiciones insalubres que afectan la salud de las familias y su capacidad de cuidar adecuadamente a sus animales.</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-ink text-white p-10">
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">La solución</p>
                <h3 className="font-serif text-2xl text-white mb-6">Una cabaña diseñada para el altiplano</h3>
                <div className="space-y-4 text-sm text-white/65 leading-relaxed">
                  <p>Las Cabañas del Pastor son viviendas diseñadas específicamente para las condiciones del altiplano andino, con materiales de construcción que ofrecen aislamiento térmico real y resistencia a las condiciones climáticas extremas.</p>
                  <p>Cada cabaña es construida, equipada y entregada completamente a la familia beneficiaria, sin costo alguno para ellos. El programa selecciona a las familias más vulnerables del ecosistema.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Equipamiento completo</p>
            <h2 className="font-serif text-3xl text-ink">¿Qué incluye cada cabaña?</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Estructura e instalación', desc: 'Construcción completa con materiales de calidad adaptados a las condiciones del altiplano andino.' },
            { title: 'Sistemas básicos', desc: 'Instalación de agua potable, saneamiento básico y sistema de energía solar para iluminación.' },
            { title: 'Equipamiento interior', desc: 'Mobiliario básico, cocina mejorada y camas con abrigos de alpaca para proteger del frío.' },
            { title: 'Espacio para animales', desc: 'Corral techado adyacente para proteger a los animales más jóvenes durante las heladas nocturnas.' },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <div className="bg-cream p-8 h-full">
                <h3 className="font-serif text-lg text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <Link href="/programas" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors mr-8">
              ← Volver a programas
            </Link>
            <Link href="/contacto?tipo=programa" className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
              Apoyar este programa
            </Link>
          </FadeUp>
        </div>
      </section>

      <ImageCarousel images={[
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85',
        'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=85',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85',
      ]} />
    </>
  )
}
