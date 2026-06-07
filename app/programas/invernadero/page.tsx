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

const vegetables = [
  'Cebolla', 'Lechuga', 'Apio', 'Acelga', 'Beterraga', 'Zanahoria', 'Tomate',
]

export default function InvernaderoPage() {
  return (
    <>
      <PageHeader
        section="PROGRAMAS"
        title="Invernadero"
        subtitle="Nutrición y seguridad alimentaria para las familias altoandinas"
        imageUrl="/programas/invernadero/portada.jpg"
        imagePosition="object-center"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <div className="inline-block bg-gold text-white px-8 py-5 mb-10">
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-1">Impacto acumulado</p>
              <p className="font-serif text-4xl">1 invernadero construido y entregado</p>
            </div>

            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Seguridad alimentaria</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Vegetales frescos donde la naturaleza lo hace casi imposible
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                El <strong className="text-ink font-medium">24% de los niños menores de cinco años</strong> en zonas rurales del Perú sufre de desnutrición crónica. Las dietas balanceadas cumplen un rol crucial en la vida de los pastores y sus familias. Sin embargo, la gran altitud limita la disponibilidad de frutas, verduras y fuentes de proteína.
              </p>
              <p>
                Como resultado, las comunidades alpaqueras suelen depender de la papa y la carne de alpaca, poniéndolas en una situación vulnerable.
              </p>
              <p>
                El invernadero se establece en un espacio comunal, como el área de una asociación o una escuela, para beneficiar a toda una comunidad de pastores. Esta iniciativa busca mejorar su alimentación y su salud, brindando un ambiente ideal para cultivar productos como cebolla, lechuga, apio, acelga, beterraga, zanahoria y tomate.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-ink text-white p-10">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">La problemática</p>
              <div className="text-center py-8">
                <p className="font-serif text-7xl text-gold mb-4">24%</p>
                <p className="text-base text-white/60">desnutrición crónica en menores de 5 años en zonas rurales altoandinas</p>
              </div>
              <div className="border-t border-white/10 pt-8">
                <p className="text-sm text-white/50 leading-relaxed">
                  Este indicador se concentra en las comunidades que viven por encima de los 3,800 m.s.n.m., donde la dieta está dominada por tubérculos y cereales, con escaso acceso a vegetales frescos y proteína animal de calidad.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Vegetables */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Producción</p>
              <h2 className="font-serif text-3xl text-ink">Qué se puede cultivar</h2>
              <p className="text-base text-ink/55 mt-4 max-w-xl mx-auto">
                En el microclima controlado del invernadero es posible producir vegetales que normalmente no sobrevivirían en las condiciones del altiplano.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {vegetables.map((v, i) => (
              <FadeUp key={v} delay={i * 0.04}>
                <span className="bg-white border border-sand/50 text-ink/60 text-sm px-5 py-2">{v}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Equipamiento</p>
            <h2 className="font-serif text-3xl text-ink">¿Qué incluye el programa?</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Estructura de policarbonato', desc: 'Invernadero cubierto con policarbonato, con doble ventana y doble puerta para mantener una temperatura y humedad adecuadas.' },
            { title: 'Ubicación comunal', desc: 'Se establece en un espacio comunal, como el área de una asociación o una escuela, para beneficiar a toda una comunidad de pastores.' },
            { title: 'Acompañamiento', desc: 'Capacitación y acompañamiento para que la comunidad aproveche el invernadero y mejore su alimentación durante todo el año.' },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.08}>
              <div className="bg-beige p-8">
                <h3 className="font-serif text-lg text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programas" className="inline-block border border-white/30 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 transition-colors">
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
        '/programas/invernadero/portada.jpg',
        '/programas/invernadero/foto-1.jpg',
        '/programas/cabana-del-pastor/portada.jpg',
        '/programas/cabana-del-pastor/foto-1.jpg',
        '/programas/lote-de-machos/portada.jpg',
        '/programas/lote-de-machos/foto-1.jpg',
        '/programas/modulo-de-esquila/portada.jpg',
        '/programas/modulo-de-esquila/foto-1.jpg',
        '/programas/fondo-investigacion/portada.jpg',
        '/programas/abrigando-corazones/portada.jpg',
        '/programas/portada.jpg',
      ]} />
    </>
  )
}
