'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import Image from 'next/image'
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

const countries = [
  'Perú', 'España', 'Austria', 'Alemania', 'Argentina', 'Bolivia', 'Chile',
  'Ecuador', 'Estados Unidos', 'Australia', 'Nueva Zelanda', 'Países Bajos',
  'Francia', 'Italia', 'Japón', 'Corea del Sur', 'Brasil', 'México',
]

const topics = [
  'Genética y mejoramiento animal de alpacas',
  'Manejo del hato: nutrición, sanidad y reproducción',
  'Técnica Inca Esquila y bienestar animal',
  'Clasificación y evaluación de la calidad de fibra',
  'Sistema PacoPro: registro genético y productivo',
  'Programas comunitarios y modelo de negocio sostenible',
  'Trazabilidad de la fibra: del animal al producto',
  'Impacto social y ambiental del ecosistema Pacomarca',
]

export default function PasantiasPage() {
  return (
    <>
      <PageHeader
        section="CONOCIMIENTO"
        title="Pasantías"
        subtitle="Aprende directamente en la estación científica de alpacas más importante del mundo"
        imageUrl="/conocimiento/pasantias/portada.jpg"
        imagePosition="object-center"
      />

      {/* Stats */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Un destino científico único</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              De 300 a 800 visitantes al año de todo el mundo
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                La estación científica de Pacomarca, ubicada en Llalli, Melgar, Puno, es un destino de referencia para investigadores, estudiantes, profesionales del sector textil y criadores de alpacas de todo el mundo que desean aprender de primera mano sobre el ecosistema más avanzado de producción sostenible de fibra de alpaca.
              </p>
              <p>
                Cada año recibimos entre <strong className="text-ink font-medium">300 y 800 visitantes</strong> provenientes de distintos países, que participan en dos modalidades de programa: la visita de un día o la pasantía de tres días.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-ink text-white p-8 text-center">
                <p className="font-serif text-5xl text-gold mb-2">300–800</p>
                <p className="text-xs text-white/50 uppercase tracking-[0.15em]">Visitantes por año</p>
              </div>
              <div className="bg-beige p-8 text-center">
                <p className="font-serif text-5xl text-gold mb-2">18+</p>
                <p className="text-xs text-ink/50 uppercase tracking-[0.15em]">Países de origen</p>
              </div>
              <div className="bg-cream p-8 text-center">
                <p className="font-serif text-5xl text-gold mb-2">2</p>
                <p className="text-xs text-ink/50 uppercase tracking-[0.15em]">Formatos disponibles</p>
              </div>
              <div className="bg-beige p-8 text-center">
                <p className="font-serif text-5xl text-gold mb-2">8</p>
                <p className="text-xs text-ink/50 uppercase tracking-[0.15em]">Temas de formación</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Formatos</p>
              <h2 className="font-serif text-3xl text-ink">Dos modalidades de programa</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            <FadeUp delay={0.1} className="h-full">
              <div className="bg-white border-t-4 border-gold overflow-hidden h-full flex flex-col">
                <div className="relative h-56 w-full shrink-0">
                  <Image
                    src="/conocimiento/pasantias/foto-1.jpg"
                    alt="Visita de 1 día"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Modalidad 1</p>
                  <h3 className="font-serif text-2xl text-ink mb-4">Visita de 1 día</h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-6">
                    Recorrido completo por la estación científica con guía especializado. Ideal para grupos académicos, clientes de marcas aliadas y medios de comunicación interesados en conocer el ecosistema Pacomarca en profundidad.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {['Recorrido por el rebaño y las instalaciones', 'Demostración de Inca Esquila', 'Presentación del programa genético', 'Visita a los módulos comunitarios'].map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-ink/60">
                        <span className="text-gold">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="h-full">
              <div className="bg-white border-t-4 border-gold overflow-hidden h-full flex flex-col">
                <div className="relative h-56 w-full shrink-0">
                  <Image
                    src="/conocimiento/pasantias/foto-2.jpg"
                    alt="Pasantía de 3 días"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Modalidad 2</p>
                  <h3 className="font-serif text-2xl text-ink mb-4">Pasantía de 3 días</h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-6">
                    Programa intensivo para investigadores, estudiantes de posgrado y profesionales del sector. Incluye trabajo práctico con los animales, análisis de datos y acceso a los laboratorios y sistemas de información.
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {['Trabajo práctico con el rebaño', 'Acceso a la base de datos PacoPro', 'Taller de clasificación de fibras', 'Sesiones con investigadores del programa', 'Visita a comunidades alpaqueras aliadas'].map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-ink/60">
                        <span className="text-gold">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Contenido</p>
            <h2 className="font-serif text-3xl text-ink mb-8">Temas que se abordan</h2>
            <div className="space-y-3">
              {topics.map((topic, i) => (
                <div key={topic} className="flex gap-4 items-start py-3 border-b border-sand/40">
                  <span className="font-serif text-gold/40 text-xl">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-ink/70 pt-1">{topic}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Países de origen</p>
            <h2 className="font-serif text-3xl text-ink mb-8">Una comunidad global</h2>
            <div className="flex flex-wrap gap-3">
              {countries.map((country) => (
                <span key={country} className="bg-cream text-ink/60 text-xs tracking-[0.1em] px-4 py-2 border border-sand/50">
                  {country}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-beige py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Inscripciones</p>
            <h2 className="font-serif text-3xl text-ink mb-6">
              ¿Te interesa visitar Pacomarca?
            </h2>
            <p className="text-base text-ink/65 mb-10 leading-relaxed">
              Las visitas y pasantías se coordinan con anticipación. Para solicitar una visita, inscribirte en una pasantía o resolver cualquier duda sobre los programas, contáctanos directamente.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-ink text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-ink/90 transition-colors"
            >
              Solicitar inscripción
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
