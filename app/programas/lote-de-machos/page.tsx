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
                "Antes tenía mis alpacas y sabía que la fibra no era de buena calidad. Desde que Pacomarca nos trajo los reproductores, la calidad ha mejorado mucho. Ahora soy socio del programa."
              </p>
              <cite className="text-xs tracking-[0.15em] uppercase text-gold not-italic">
                — Juan Faustino, alpaquero de Nuñoa, Puno
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
                La mayoría de los hatos alpaqueros de las comunidades son sistemas cerrados: los mismos animales se reproducen entre sí generación tras generación. Este proceso, conocido como endogamia, lleva progresivamente al deterioro de la calidad genética y a la reducción de la finura de la fibra.
              </p>
              <p>
                Sin acceso a reproductores de calidad genética superior, las familias no tienen forma de mejorar su hato. Los machos de calidad tienen un costo prohibitivo para la mayoría de los criadores andinos.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">La solución</p>
            <h2 className="font-serif text-3xl text-ink mb-6">Machos seleccionados, donados gratuitamente</h2>
            <div className="space-y-4 text-base text-ink/65 leading-relaxed">
              <p>
                Pacomarca selecciona reproductores machos del programa genético con los mejores índices de mejora estimados (IME) para finura, uniformidad y producción. Estos machos se donan a las familias participantes.
              </p>
              <p>
                Los resultados son medibles en la primera generación: la descendencia de los machos donados presenta significativamente mayor porcentaje de fibra fina, mejorando los ingresos de la familia desde el primer año de esquila.
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
              { title: '4 reproductores machos', desc: 'Machos seleccionados del programa genético con los mejores índices de mejora para finura y producción.' },
              { title: 'Software PacoPro', desc: 'Acceso al sistema de registro genético y productivo para gestionar el hato y hacer seguimiento de la mejora.' },
              { title: 'Capacitación técnica', desc: 'Formación en manejo reproductivo, evaluación de animales y criterios de selección para el hato.' },
              { title: 'Seguimiento periódico', desc: 'El equipo técnico de Pacomarca visita regularmente a las familias para verificar el progreso y ajustar el programa.' },
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
      ]} />
    </>
  )
}
