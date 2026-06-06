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

const colors = [
  { name: 'Blanco nieve', hex: '#F8F6F0' },
  { name: 'Blanco crema', hex: '#EDE5D5' },
  { name: 'Crema', hex: '#DDD0B5' },
  { name: 'Beige claro', hex: '#C8B898' },
  { name: 'Arena', hex: '#B8A080' },
  { name: 'Gris plata', hex: '#C0C0BA' },
  { name: 'Gris claro', hex: '#A8A8A0' },
  { name: 'Gris medio', hex: '#888880' },
  { name: 'Gris oscuro', hex: '#5A5A55' },
  { name: 'Gris carbón', hex: '#3D3D38' },
  { name: 'Canela', hex: '#C49060' },
  { name: 'Tostado', hex: '#B07840' },
  { name: 'Marrón claro', hex: '#9A6535' },
  { name: 'Castaño', hex: '#8A5230' },
  { name: 'Marrón medio', hex: '#7A4025' },
  { name: 'Marrón rojizo', hex: '#923520' },
  { name: 'Terracota', hex: '#A05030' },
  { name: 'Café', hex: '#6A3020' },
  { name: 'Chocolate', hex: '#512010' },
  { name: 'Marrón oscuro', hex: '#3D1A10' },
  { name: 'Pardo oscuro', hex: '#6A4520' },
  { name: 'Negro puro', hex: '#1C1810' },
]

export default function ColoresPurosPage() {
  return (
    <>
      <PageHeader
        section="FIBRAS"
        title="Colores Puros"
        subtitle="La paleta más amplia de colores naturales en cualquier fibra animal"
        imageUrl="/fibras/colores-puros/portada.jpg"
        imagePosition="object-[center_30%]"
      />

      {/* Split layout */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Fiber sample */}
          <FadeUp>
            <div className="flex items-center justify-center mb-10">
              <div className="w-72 h-72 rounded-full overflow-hidden relative">
                <Image src="/fibras/fibra-colores.jpg" alt="Colores Puros" fill className="object-cover scale-[1.75] object-center" />
              </div>
            </div>
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
