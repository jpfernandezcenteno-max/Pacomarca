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
  'Lechuga', 'Espinaca', 'Acelga', 'Zanahoria', 'Rabanitos', 'Col', 'Brócoli', 'Betarraga', 'Perejil', 'Cilantro', 'Tomate cherry', 'Pimiento',
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
                Las comunidades alpaqueras que viven por encima de los 4,000 metros sobre el nivel del mar enfrentan una severa limitación: la imposibilidad de cultivar vegetales al aire libre debido a las bajas temperaturas, las heladas y la escasez de oxígeno.
              </p>
              <p>
                Esto tiene un impacto directo en la nutrición de sus familias. El Perú registra una tasa de <strong className="text-ink font-medium">24% de desnutrición crónica en menores de 5 años</strong> en zonas rurales altoandinas, uno de los indicadores más preocupantes del país.
              </p>
              <p>
                El programa Invernadero de Pacomarca construye y entrega estructuras de cultivo protegido que permiten a las familias producir sus propios vegetales frescos durante todo el año, sin depender de los ciclos climáticos del altiplano.
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
            { title: 'Estructura del invernadero', desc: 'Construcción completa de la estructura de policarbonato con sistemas de ventilación y manejo térmico.' },
            { title: 'Sistema de riego', desc: 'Instalación de sistema de riego por goteo adaptado a las condiciones hídricas del altiplano.' },
            { title: 'Insumos iniciales', desc: 'Semillas, sustrato, herramientas de trabajo y materiales para el inicio de la producción.' },
            { title: 'Capacitación', desc: 'Formación práctica para la familia en técnicas de cultivo bajo cubierta y manejo del invernadero.' },
            { title: 'Seguimiento técnico', desc: 'Visitas periódicas del equipo técnico de Pacomarca para acompañar el desarrollo del programa.' },
            { title: 'Banco de semillas', desc: 'Dotación de un banco de semillas de variedades adaptadas a las condiciones del altiplano.' },
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
      ]} />
    </>
  )
}
