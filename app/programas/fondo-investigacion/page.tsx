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

export default function FondoInvestigacionPage() {
  return (
    <>
      <PageHeader
        section="PROGRAMAS"
        title="Fondo a la Investigación"
        subtitle="Financiando el conocimiento científico que transforma el sector alpaquero"
        imageUrl="/programas/fondo-investigacion/portada.jpg"
        imagePosition="object-[center_55%]"
      />

      {/* Stat + Quote */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <div className="inline-block bg-gold text-white px-8 py-5 mb-10">
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-1">Impacto acumulado</p>
              <p className="font-serif text-4xl">32 artículos científicos publicados</p>
            </div>

            <blockquote className="border-l-4 border-gold pl-6 mb-8">
              <p className="font-serif text-xl text-ink/80 italic leading-relaxed mb-4">
                "Durante más de dos décadas, Pacomarca ha sido el punto de encuentro donde la ciencia, la sostenibilidad y el esfuerzo colaborativo se unen para mejorar la calidad genética de la fibra de alpaca. Nuestra misión es fortalecer la cadena textil y mejorar los medios de vida de las comunidades alpaqueras involucradas."
              </p>
              <cite className="text-xs tracking-[0.15em] uppercase text-gold not-italic">
                — Alan Cruz, PhD, experto en genética en camélidos y científico responsable de Pacomarca
              </cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/programas/fondo-investigacion/alan.jpg"
                alt="Alan Cruz, PhD, científico responsable de Pacomarca"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* About the fund */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeUp>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">El fondo</p>
              <h2 className="font-serif text-3xl text-ink mb-6">Inversión en conocimiento para el sector</h2>
              <div className="space-y-4 text-base text-ink/65 leading-relaxed">
                <p>
                  La investigación desarrollada en Pacomarca es la base que hace posible todos nuestros esfuerzos por mejorar la vida de los pastores de alpaca. Desde este centro de investigación se teje un ecosistema de conocimiento que fortalece a las comunidades alpaqueras cercanas y promueve medios de vida más sostenibles y prósperos.
                </p>
                <p>
                  En Pacomarca se desarrollan investigaciones que abarcan toda la cadena de valor de la fibra de alpaca: desde la genética y la genómica hasta el bienestar, la reproducción y la salud animal. Estas iniciativas se realizan en colaboración con reconocidas universidades del Perú y del mundo, y han permitido alcanzar logros notables, como la obtención de fibra de alpaca con una finura de hasta 16 micras.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Proceso</p>
              <h2 className="font-serif text-3xl text-ink mb-6">¿Cómo funciona?</h2>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Propuesta de investigación', desc: 'El investigador presenta una propuesta de investigación al comité científico de Pacomarca.' },
                  { step: '02', title: 'Evaluación y aprobación', desc: 'El comité evalúa la pertinencia, calidad metodológica y potencial de impacto de la investigación.' },
                  { step: '03', title: 'Desarrollo de la investigación', desc: 'El investigador trabaja con los datos, instalaciones y rebaño de Pacomarca durante el período acordado.' },
                  { step: '04', title: 'Publicación y reconocimiento', desc: 'Los resultados se publican con reconocimiento de Pacomarca y el investigador accede a beneficios adicionales.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 bg-white p-5">
                    <span className="font-serif text-xl text-gold/40 flex-shrink-0 mt-0.5">{item.step}</span>
                    <div>
                      <h4 className="font-serif text-base text-ink mb-1">{item.title}</h4>
                      <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">El apoyo incluye</p>
            <h2 className="font-serif text-3xl text-ink">Lo que ofrece el fondo</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: '2 artículos por año', desc: 'El fondo financia el desarrollo y publicación de dos artículos científicos por ciclo anual.' },
            { title: 'Reconocimiento institucional', desc: 'Los investigadores reciben reconocimiento oficial de Pacomarca en todas sus publicaciones y actividades.' },
            { title: 'Acceso a la plataforma web', desc: 'Presencia en el sitio web de Pacomarca con perfil del investigador y links a sus publicaciones.' },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <div className="bg-beige p-8 text-center">
                <h3 className="font-serif text-xl text-ink mb-4">{item.title}</h3>
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
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Para investigadores</p>
            <h2 className="font-serif text-2xl text-white mb-6">¿Tienes una propuesta de investigación sobre alpacas?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programas" className="inline-block border border-white/30 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 transition-colors">
                ← Volver a programas
              </Link>
              <Link href="/contacto?rol=cientifico" className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
                Presentar propuesta
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <ImageCarousel images={[
        '/programas/fondo-investigacion/portada.jpg',
        '/programas/cabana-del-pastor/portada.jpg',
        '/programas/cabana-del-pastor/foto-1.jpg',
        '/programas/invernadero/portada.jpg',
        '/programas/invernadero/foto-1.jpg',
        '/programas/lote-de-machos/portada.jpg',
        '/programas/lote-de-machos/foto-1.jpg',
        '/programas/modulo-de-esquila/portada.jpg',
        '/programas/modulo-de-esquila/foto-1.jpg',
        '/programas/tejiendo-corazones/portada.jpg',
        '/programas/portada.jpg',
      ]} />
    </>
  )
}
