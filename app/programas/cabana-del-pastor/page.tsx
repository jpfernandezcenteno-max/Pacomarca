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
        imageUrl="/programas/cabana-del-pastor/portada.jpg"
        imagePosition="object-center"
      />

      {/* Stat badge + quote */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            {/* Stat Badge */}
            <div className="inline-block max-w-full bg-gold text-white px-5 sm:px-8 py-5 mb-10">
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-1">Impacto acumulado</p>
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl break-words">8 cabañas construidas y entregadas</p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-gold pl-6 mb-10">
              <p className="font-serif text-xl text-ink/80 italic leading-relaxed mb-4">
                "La cabaña del pastor es para nosotros una gran mejora: tiene un cuarto con calefacción, una cocina mejorada, electricidad y un baño con ducha con agua caliente. Además, tiene un invernadero que nos permite tener verduras y eso es muy bueno para mi alimentación y la de mi familia."
              </p>
              <cite className="text-xs tracking-[0.15em] uppercase text-gold not-italic">
                — Martín Chipana Vilchez, alpaquero de la zona de influencia de Pacomarca
              </cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/programas/cabana-del-pastor/testimonio.jpg"
                alt="Martín Chipana, alpaquero beneficiario de la cabaña del pastor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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
              <div className="bg-white overflow-hidden h-full">
                <div className="relative aspect-[16/9]">
                  <Image src="/programas/cabana-del-pastor/foto-2.jpg" alt="Cabaña del pastor en los Andes" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-10">
                  <p className="text-xs tracking-[0.25em] uppercase text-ink/40 mb-6">El problema</p>
                  <h3 className="font-serif text-2xl text-ink mb-6">Condiciones extremas de vida</h3>
                  <div className="space-y-4 text-sm text-ink/65 leading-relaxed">
                    <p>El <strong className="text-ink font-medium">90%</strong> de las personas en los Andes están expuestas a un alto riesgo debido a las heladas. Los pastores alpaqueros viven en zonas con geografías y condiciones climáticas desafiantes.</p>
                    <p>Sus viviendas no están equipadas para enfrentar estas condiciones y carecen de servicios básicos.</p>
                    <p>Además, suelen tener la cocina dentro de la habitación para calentarse, exponiéndose a enfermedades respiratorias.</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-ink text-white overflow-hidden h-full">
                <div className="relative aspect-[16/9]">
                  <Image src="/programas/cabana-del-pastor/foto-3.jpg" alt="Cabaña del pastor equipada" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-10">
                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">La solución</p>
                  <h3 className="font-serif text-2xl text-white mb-6">Una cabaña diseñada para el altiplano</h3>
                  <div className="space-y-4 text-sm text-white/65 leading-relaxed">
                    <p>La cabaña del pastor brinda a las familias alpaqueras una vivienda digna, donde ellas pueden acceder a servicios esenciales como agua, electricidad, instalaciones sanitarias y calefacción.</p>
                    <p>El diseño de estas cabañas combina de manera armónica las técnicas tradicionales con soluciones innovadoras y sostenibles, utilizando materiales de origen local.</p>
                  </div>
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
            { title: 'Dormitorio con calefacción', desc: 'Dormitorio con calefactor de pared trombe, un sistema que utiliza el sol para calentar los espacios interiores, y cocina mejorada.' },
            { title: 'Baño con agua caliente', desc: 'Baño con ducha de agua caliente, alimentada por un calentador solar, y sistema de biodigestor.' },
            { title: 'Sistema eléctrico solar', desc: 'Toda la cabaña cuenta con un sistema eléctrico alimentado con energía solar.' },
            { title: 'Invernadero', desc: 'Invernadero que permite a la familia cultivar sus propias verduras y mejorar su alimentación.' },
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
        '/programas/cabana-del-pastor/portada.jpg',
        '/programas/cabana-del-pastor/foto-1.jpg',
        '/programas/invernadero/portada.jpg',
        '/programas/invernadero/foto-1.jpg',
        '/programas/lote-de-machos/portada.jpg',
        '/programas/lote-de-machos/foto-1.jpg',
        '/programas/modulo-de-esquila/portada.jpg',
        '/programas/modulo-de-esquila/foto-1.jpg',
        '/programas/fondo-investigacion/portada.jpg',
        '/programas/tejiendo-corazones/portada.jpg',
        '/programas/portada.jpg',
      ]} />
    </>
  )
}
