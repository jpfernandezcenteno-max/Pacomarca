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

export default function LoteDeMachosPage() {
  return (
    <>
      <PageHeader
        section="PROGRAMAS"
        title="Lote de Machos"
        subtitle="Mejora genética real para las comunidades alpaqueras"
        imageUrl="/programas/lote-de-machos/portada.jpg"
        imagePosition="object-[center_35%]"
      />

      {/* Stat + Quote */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <div className="inline-block bg-gold text-white px-8 py-5 mb-10">
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-1">Impacto acumulado</p>
              <p className="font-serif text-4xl">1,512 alpacas donadas a comunidades</p>
            </div>

            <blockquote className="border-l-4 border-gold pl-6 mb-8">
              <p className="font-serif text-xl text-ink/80 italic leading-relaxed mb-4">
                "Las alpacas de Pacomarca nos ayudan a mejorar la genética de las crías, para que salgan mejor. Con las alpacas de Pacomarca obtenemos crías con mejor fibra."
              </p>
              <cite className="text-xs tracking-[0.15em] uppercase text-gold not-italic">
                — Juan Faustino, alpaquero de Nuñoa
              </cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/programas/lote-de-machos/foto-1.jpg"
                alt="Alpacas en el programa"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-beige py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Transformación</p>
              <h2 className="font-serif text-3xl text-ink">El impacto de la mejora genética</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <FadeUp delay={0.1}>
              <div className="bg-white p-10 text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-ink/40 mb-4">Sin el programa</p>
                <p className="font-serif text-7xl text-ink/25 mb-4">30%</p>
                <p className="text-sm text-ink/50">de fibra fina en el hato promedio</p>
                <p className="text-xs text-ink/35 mt-4 leading-relaxed">
                  La consanguinidad (endogamia) en hatos cerrados reduce progresivamente la calidad genética y la finura de la fibra.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-ink text-white p-10 text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Con el programa</p>
                <p className="font-serif text-7xl text-gold mb-4">80%</p>
                <p className="text-sm text-white/60">de fibra fina en el hato</p>
                <p className="text-xs text-white/40 mt-4 leading-relaxed">
                  La incorporación de reproductores genéticamente seleccionados multiplica en toda la descendencia la mejora lograda por el programa científico.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">El problema</p>
            <h2 className="font-serif text-3xl text-ink mb-6">Endogamia y deterioro genético</h2>
            <div className="space-y-4 text-base text-ink/65 leading-relaxed">
              <p>
                Los pastores de alpaca enfrentan un gran reto: la endogamia. El cruce entre animales de la misma familia reduce la diversidad genética y origina alpacas más débiles, menos resistentes a las duras temperaturas de los Andes y con fibra de menor calidad.
              </p>
              <p>
                Como consecuencia, solo alrededor del 30% de la fibra obtenida alcanza la categoría de fibra fina.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">La solución</p>
            <h2 className="font-serif text-3xl text-ink mb-6">Machos seleccionados, donados gratuitamente</h2>
            <div className="space-y-4 text-base text-ink/65 leading-relaxed">
              <p>
                Al entregar a los pastores alpacas machos provenientes de Pacomarca, no solo se renueva la genética de sus rebaños para obtener crías más fuertes, sino que también se garantiza que estas nuevas generaciones produzcan una fibra de mejor calidad en los próximos años.
              </p>
              <p>
                Hoy, el 80% de la fibra obtenida de alpacas de Pacomarca se clasifica como fibra fina.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">El programa incluye</p>
              <h2 className="font-serif text-3xl text-ink">Más que una donación</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '4 alpacas machos reproductores', desc: 'Reproductores de Pacomarca: alpacas blancas para obtener fibra más fina o alpacas negras para la conservación de la genética de la alpaca negra.' },
              { title: 'Software con datos', desc: 'Información sobre las alpacas donadas, incluyendo pedigrí, análisis de fibra, porcentaje de medulación, colorimetría y datos biométricos.' },
              { title: 'Capacitación continua', desc: 'Capacitación y acompañamiento del equipo de Pacomarca para asegurar la implementación de buenas prácticas de crianza.' },
              { title: 'Acompañamiento del equipo', desc: 'El equipo de Pacomarca acompaña a las familias para asegurar el éxito del programa a lo largo del tiempo.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 h-full">
                  <h3 className="font-serif text-lg text-ink mb-3">{item.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-beige">
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
        '/programas/lote-de-machos/portada.jpg',
        '/programas/lote-de-machos/foto-1.jpg',
        '/programas/cabana-del-pastor/portada.jpg',
        '/programas/cabana-del-pastor/foto-1.jpg',
        '/programas/invernadero/portada.jpg',
        '/programas/invernadero/foto-1.jpg',
        '/programas/modulo-de-esquila/portada.jpg',
        '/programas/modulo-de-esquila/foto-1.jpg',
        '/programas/fondo-investigacion/portada.jpg',
        '/programas/abrigando-corazones/portada.jpg',
        '/programas/portada.jpg',
      ]} />
    </>
  )
}
