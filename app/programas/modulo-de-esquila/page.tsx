'use client'

import PageHeader from '@/components/PageHeader'
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

const equipment = [
  'Planta de esquila portátil con motor eléctrico',
  'Equipo de esquila eléctrica (máquinas, peines, cortantes)',
  'Mesa de clasificación de fibra con iluminación adecuada',
  'Balanzas de precisión para pesado de vellones',
  'Equipos de protección personal para esquiladores',
  'Mantas de recolección y bolsas de almacenamiento',
  'Sistema de etiquetado y registro por animal',
  'Kit de primeros auxilios para animales',
  'Material de capacitación y guías técnicas',
  'Generador de respaldo para zonas sin electricidad',
]

export default function ModuloDeEsquilaPage() {
  return (
    <>
      <PageHeader
        section="PROGRAMAS"
        title="Módulo de Esquila"
        subtitle="Infraestructura profesional para la esquila con bienestar animal"
        imageUrl="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=2400&q=85"
      />

      {/* Stat + Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <div className="inline-block bg-gold text-white px-8 py-5 mb-10">
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-1">Impacto acumulado</p>
              <p className="font-serif text-4xl">9 módulos implementados</p>
            </div>

            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Infraestructura para la calidad</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              La esquila profesional transforma los resultados
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                El Módulo de Esquila es la infraestructura que permite aplicar el método Inca Esquila en las comunidades alpaqueras. Sin el equipamiento adecuado, incluso los mejores conocimientos técnicos no pueden traducirse en resultados concretos para la fibra.
              </p>
              <p>
                Pacomarca implementa módulos completos en las comunidades participantes, incluyendo todo el equipamiento necesario para realizar la esquila de manera profesional: con bienestar animal, alta calidad de fibra y trazabilidad completa.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-ink text-white p-10 h-full">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-8">Resultados comprobados</p>
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase text-white/40 tracking-[0.1em] mb-3">Esquila tradicional</p>
                  <div className="flex items-baseline gap-4">
                    <p className="font-serif text-6xl text-white/30">60%</p>
                    <p className="text-sm text-white/40">tasa de nacimientos</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-8">
                  <p className="text-xs uppercase text-gold tracking-[0.1em] mb-3">Con módulo Inca Esquila</p>
                  <div className="flex items-baseline gap-4">
                    <p className="font-serif text-6xl text-gold">76%</p>
                    <p className="text-sm text-white/60">tasa de nacimientos</p>
                  </div>
                </div>
                <p className="text-sm text-white/40 leading-relaxed border-t border-white/10 pt-6">
                  El estrés reducido durante la esquila y el mejor manejo del animal se reflejan directamente en mejores tasas reproductivas, lo que incrementa los ingresos de las familias a largo plazo.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Equipamiento completo</p>
              <h2 className="font-serif text-3xl text-ink">¿Qué incluye el módulo?</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {equipment.map((item, i) => (
              <FadeUp key={item} delay={i * 0.06}>
                <div className="flex gap-4 items-start bg-white p-5">
                  <span className="text-gold font-serif text-lg mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-sm text-ink/65">{item}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Capacitación incluida</p>
            <h2 className="font-serif text-3xl text-ink mb-6">Formación de esquiladores certificados</h2>
            <div className="space-y-4 text-base text-ink/65 leading-relaxed">
              <p>
                Junto con el equipamiento, el programa incluye la capacitación de los esquiladores de la comunidad en el método Inca Esquila. Los participantes reciben una certificación que acredita su competencia en la técnica.
              </p>
              <p>
                Los esquiladores certificados son un activo valioso para la comunidad: pueden ofrecer sus servicios a otros criadores en la zona, generando un ingreso adicional y extendiendo los beneficios del programa más allá de los participantes directos.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Trazabilidad integrada</p>
            <h2 className="font-serif text-3xl text-ink mb-6">El módulo como nodo de trazabilidad</h2>
            <div className="space-y-4 text-base text-ink/65 leading-relaxed">
              <p>
                Cada módulo de esquila funciona también como punto de acopio y registro. Los datos de cada vellón —peso, finura, clasificación, animal de origen— se registran en el sistema PacoPro, iniciando la cadena de trazabilidad que acompaña a la fibra hasta el producto final.
              </p>
              <p>
                Esta trazabilidad permite a las marcas aliadas verificar el origen y la calidad de cada lote, y comunicar esa historia a sus clientes con total autenticidad.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programas" className="inline-block border border-ink/30 text-ink text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-colors">
                ← Volver a programas
              </Link>
              <Link href="/contacto?tipo=programa" className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
                Apoyar este programa
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <ImageCarousel images={[
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
        'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=85',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85',
      ]} />
    </>
  )
}
