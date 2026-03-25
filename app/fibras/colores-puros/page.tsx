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

const colors = [
  { name: 'Blanco nieve', hex: '#FAFAFA' },
  { name: 'Blanco crema', hex: '#F1F1F1' },
  { name: 'Beige claro', hex: '#E3E3E3' },
  { name: 'Arena', hex: '#C6C6C6' },
  { name: 'Canela', hex: '#ACACAC' },
  { name: 'Marrón claro', hex: '#818181' },
  { name: 'Castaño', hex: '#626262' },
  { name: 'Café oscuro', hex: '#454545' },
  { name: 'Marrón rojizo', hex: '#545454' },
  { name: 'Tostado', hex: '#939393' },
  { name: 'Gris plata', hex: '#C0C0C0' },
  { name: 'Gris medio', hex: '#A0A0A0' },
  { name: 'Gris oscuro', hex: '#707070' },
  { name: 'Gris carbón', hex: '#4A4A4A' },
  { name: 'Negro puro', hex: '#1A1A1A' },
  { name: 'Rosado suave', hex: '#D6D6D6' },
  { name: 'Terracota', hex: '#858585' },
  { name: 'Miel', hex: '#9F9F9F' },
  { name: 'Rojo vino', hex: '#484848' },
  { name: 'Gris azulado', hex: '#8D8D8D' },
  { name: 'Pardo oscuro', hex: '#535353' },
  { name: 'Blanco hueso', hex: '#EDEDED' },
]

export default function ColoresPurosPage() {
  return (
    <>
      <PageHeader
        section="FIBRAS"
        title="Colores Puros"
        subtitle="La paleta más amplia de colores naturales en cualquier fibra animal"
        imageUrl="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=2400&q=85"
      />

      {/* Split layout */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Color palette */}
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">22+ tonalidades naturales</p>
            <div className="grid grid-cols-6 gap-2">
              {colors.map((color) => (
                <div key={color.name} className="group">
                  <div
                    className="w-full aspect-square border border-sand/30"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                  <p className="text-xs text-ink/40 mt-1 leading-tight hidden group-hover:block absolute bg-white px-2 py-1 shadow-sm z-10 text-nowrap">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-ink/40 mt-4 text-center">
              Colores aproximados — la paleta natural varía entre individuos y regiones
            </p>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">La naturaleza como paleta</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Sin tintes. Sin químicos. Sin compromisos.
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed mb-8">
              <p>
                La alpaca peruana posee la paleta de colores naturales más amplia de cualquier fibra animal: más de <strong className="text-ink font-medium">22 tonalidades reconocidas oficialmente</strong> por el estándar peruano, desde el blanco más puro hasta el negro profundo, pasando por toda la gama de grises, marrones, cafés, cremas y rojos.
              </p>
              <p>
                Colores Puros es la línea de Pacomarca que valoriza esta diversidad cromática natural. Cada lote es clasificado cuidadosamente por tono y pureza de color, garantizando uniformidad dentro de la tanda y autenticidad en el resultado final.
              </p>
              <p>
                Para las marcas de moda sostenible, Colores Puros representa la eliminación total de tintes químicos del proceso productivo, con el beneficio adicional de poder comunicar la historia del color natural al consumidor final.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Tonalidades naturales', value: '22+' },
                { label: 'Proceso de tintura', value: 'Ninguno' },
                { label: 'Impacto ambiental tintes', value: 'Cero' },
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

      {/* Why natural */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">La ventaja del color natural</p>
              <h2 className="font-serif text-3xl text-ink">Por qué los colores naturales importan</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Cero impacto de tintes', desc: 'El proceso de tintura convencional consume grandes cantidades de agua y genera efluentes tóxicos. La fibra de color natural elimina completamente este impacto.' },
              { title: 'Durabilidad del color', desc: 'Los colores naturales no se desvanecen de la misma manera que los colores teñidos. Con el cuidado correcto, las prendas mantienen su tono durante décadas.' },
              { title: 'Historia auténtica', desc: 'Cada color natural tiene una historia genética rastreable. La marca puede comunicar exactamente de qué región y de qué tipo de animal proviene el color.' },
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
            <Link href="/fibras/black" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
              ← Black Alpaca
            </Link>
            <Link href="/fibras" className="text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors">
              Todas las fibras →
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
