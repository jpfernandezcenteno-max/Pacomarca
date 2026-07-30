'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

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
  'Perú', 'Bolivia', 'Ecuador', 'Chile', 'Argentina', 'Estados Unidos',
  'Japón', 'Australia', 'Reino Unido', 'Suiza', 'Noruega', 'Corea', 'China',
]

const topics = [
  'Programas de mejora genética',
  'Selección de padrillos',
  'Manejo de datos',
  'Esquila mecanizada',
  'Sanidad',
  'Alimentación',
  'Reproducción',
]

type Dia = { label: string | null; comidas: string | null; manana: string[]; tarde: string[] }
type Modalidad = {
  title: string
  image: string
  participantes: string
  incluye: string
  noIncluye: string
  dias: Dia[]
}

const modalidades: Modalidad[] = [
  {
    title: 'Visita de 1 día',
    image: '/conocimiento/pasantias/foto-1.jpg',
    participantes: 'Ilimitados',
    incluye: '—',
    noIncluye: 'Movilidad de ida y vuelta',
    dias: [
      {
        label: null,
        comidas: null,
        manana: [
          'Registros genealógicos',
          'Registros productivos',
          'Introducción a la mejora genética',
          'Break',
        ],
        tarde: [
          'Programa genético del diámetro',
          'Programa genético de la médula',
          'Programa genético del color',
          'Visita de laboratorio e infraestructuras de manejo',
        ],
      },
    ],
  },
  {
    title: 'Pasantía de 2 días',
    image: '/conocimiento/pasantias/foto-2.jpg',
    participantes: 'Mínimo 8, máximo 19 personas',
    incluye: '1 noche de alojamiento y 2 días de alimentación',
    noIncluye: 'Movilidad de ida y vuelta',
    dias: [
      {
        label: 'Día 1',
        comidas: 'Incluye almuerzo y cena',
        manana: [
          'Instalación',
          'Bienvenida y presentación de ponentes',
          'Introducción al Programa de Pacomarca',
          'Break',
          'Etapas de un plan de mejora genética',
          'Definición de objetivos y criterios de selección',
          'Registros genealógicos',
          'Instalación de software (opcional)',
        ],
        tarde: [
          'Mejora genética — Programa del diámetro',
          'Mejora genética — Programa de la medulación',
          'Mejora genética — Programa Black Alpaka',
          'Índices de selección',
          'Break',
          'Visita a la cabaña del pastor',
          'Consideraciones generales de la esquila',
          'Uso de máquina esquiladora',
          'Demostración de esquila (NTP)',
          'Registros productivos de la esquila',
        ],
      },
      {
        label: 'Día 2',
        comidas: 'Incluye desayuno y almuerzo',
        manana: [
          'Manejo reproductivo en alpacas (protocolo de empadre)',
          'Protocolos de diagnóstico de gestación y demostración de ecografía (opcional)',
          'Manejo en parición en alpacas',
          'Registros del nacimiento',
          'Break',
          'Visita a laboratorio',
          'Uso del Fiber Med (diámetro y medulación)',
          'Uso de la cámara FLIR (temperatura infrarroja)',
          'Uso de cartillas de campo',
          'Uso del Chroma meter (colorimetría)',
        ],
        tarde: [
          'Salud de alpacas',
          'Programas de prevención y tratamiento de enfermedades',
          'Protocolos de inmunización para enterotoxemia',
          'Break',
          'Evaluación de suelos para la producción de pastos y forrajes',
          'Instalación de forrajes',
          'Conservación de forrajes (ensilado y henificado)',
          'Guiado para el uso de implementos agrícolas',
        ],
      },
    ],
  },
  {
    title: 'Pasantía de 3 días',
    image: '/conocimiento/pasantias/foto-3.jpg',
    participantes: 'Mínimo 8, máximo 19 personas',
    incluye: '2 noches de alojamiento y 3 días de alimentación',
    noIncluye: 'Movilidad de ida y vuelta',
    dias: [
      {
        label: 'Día 1',
        comidas: 'Incluye almuerzo y cena',
        manana: [
          'Instalación',
          'Bienvenida y presentación de ponentes y participantes',
          'Introducción al Programa de Pacomarca',
          'Break',
          'Etapas de un plan de mejora genética',
          'Definición de objetivos y criterios de selección',
          'Registros genealógicos',
          'Instalación de software (opcional)',
        ],
        tarde: [
          'Salida a campo',
          'Evaluación morfológica',
          'Evaluación de dentición',
          'Uso de la valoración genética',
          'Construcción de índice genético',
          'Break',
          'Mejora genética — Programa del diámetro',
          'Mejora genética — Programa de la medulación',
          'Mejora genética — Programa Black Alpaka',
          'Índices de selección',
        ],
      },
      {
        label: 'Día 2',
        comidas: 'Incluye desayuno, almuerzo y cena',
        manana: [
          'Manejo reproductivo en alpacas (protocolo de empadre)',
          'Protocolos de diagnóstico de gestación',
          'Demostración de ecografía (opcional)',
          'Manejo en parición en alpacas',
          'Registros del nacimiento',
          'Break',
          'Visita a laboratorio',
          'Uso del Fiber Med (diámetro y medulación)',
          'Uso de la cámara FLIR (temperatura infrarroja)',
          'Uso de cartillas de campo',
          'Uso del Chroma meter (colorimetría)',
        ],
        tarde: [
          'Salud de alpacas',
          'Programas de prevención y tratamiento de enfermedades',
          'Protocolos de inmunización para enterotoxemia',
          'Uso de registros de salud y seguimiento de casos clínicos',
          'Break',
          'Visita al almacén veterinario',
          'Principales productos usados en el manejo de alpacas',
          'Protocolos y vías de aplicación de medicamentos',
        ],
      },
      {
        label: 'Día 3',
        comidas: 'Incluye desayuno y almuerzo',
        manana: [
          'Visita a la cabaña del pastor',
          'Consideraciones generales de la esquila',
          'Uso de máquina esquiladora, afiladora, peines y cortantes',
          'Demostración de esquila (NTP)',
          'Registros productivos de la esquila',
          'Break',
          'Certificaciones',
          'Certificación de Trazabilidad',
          'Certificación RAS (normatividad)',
          'Estudio de caso de productor certificado para RAS',
        ],
        tarde: [
          'Pastos y forrajes',
          'Calendario agrícola',
          'Instalación de forrajes',
          'Conservación de forrajes',
          'Break',
          'Guiado para el uso de maquinaria agrícola',
          'Guiado para el uso de implementos agrícolas',
          'Visita de cultivos',
        ],
      },
    ],
  },
]

export default function PasantiasPage() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <>
      <PageHeader
        section="CONOCIMIENTO"
        title="Pasantías"
        subtitle="Aprende directamente en la estación científica de alpacas más importante del mundo"
        imageUrl="/conocimiento/pasantias/portada.jpg"
        imagePosition="object-[center_30%]"
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
                Cada año, la estación científica Pacomarca recibe entre <strong className="text-ink font-medium">300 y 800 visitantes</strong>, entre productores, técnicos y profesionales del Perú y de países como Bolivia, Ecuador, Chile, Argentina, Estados Unidos, Japón, Australia, Reino Unido, Suiza, Noruega, Corea y China, interesados en conocer de cerca nuestro programa genético.
              </p>
              <p>
                A través de visitas de un día y pasantías de tres días, compartimos con ellos los conocimientos y prácticas que desarrollamos en la estación científica. Estos espacios tienen gran acogida entre los grupos organizados de alpaqueros de distintas regiones del país, quienes encuentran aquí un lugar de aprendizaje y de intercambio.
              </p>
              <p>
                Durante su estancia, los visitantes conocen de primera mano aspectos clave de nuestro trabajo: programas de mejora genética, selección de padrillos, manejo de datos, esquila mecanizada, sanidad, alimentación y reproducción.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative aspect-video w-full overflow-hidden bg-ink">
              <video
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/conocimiento/pasantias/video.mp4" type="video/mp4" />
              </video>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Formatos</p>
              <h2 className="font-serif text-3xl text-ink">Tres modalidades de programa</h2>
              <p className="text-sm text-ink/50 mt-4 max-w-xl mx-auto leading-relaxed">
                Modalidad teórica o práctica según corresponda. Haz clic en una modalidad para desplegar su cronograma completo.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-4">
            {modalidades.map((m, i) => {
              const isOpen = open === i
              return (
                <FadeUp key={m.title} delay={i * 0.1}>
                  <div
                    className={`bg-white overflow-hidden border transition-colors duration-300 ${
                      isOpen ? 'border-gold shadow-lg' : 'border-sand/40 hover:border-gold/50'
                    }`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-stretch text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="relative w-28 sm:w-52 shrink-0 self-stretch min-h-[7rem]">
                        <Image
                          src={m.image}
                          alt={m.title}
                          fill
                          sizes="208px"
                          className={`object-cover transition-all duration-500 ${isOpen ? '' : 'grayscale'}`}
                        />
                      </div>
                      <div className="flex-1 flex items-center justify-between gap-2 sm:gap-4 p-5 sm:p-7">
                        <div className="min-w-0">
                          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-2">Modalidad {i + 1}</p>
                          <h3 className="font-serif text-xl sm:text-2xl text-ink mb-1.5">{m.title}</h3>
                          <p className="text-xs sm:text-sm text-ink/50">{m.participantes}</p>
                        </div>
                        <span
                          className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isOpen ? 'border-gold text-gold rotate-180' : 'border-sand text-ink/40'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-sand/40 p-6 sm:p-10">
                            {/* Resumen */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                              {[
                                { k: 'Participantes', v: m.participantes },
                                { k: 'Incluye', v: m.incluye },
                                { k: 'No incluye', v: m.noIncluye },
                              ].map((r) => (
                                <div key={r.k} className="bg-cream p-5">
                                  <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2">{r.k}</p>
                                  <p className="text-sm text-ink/70 leading-relaxed">{r.v}</p>
                                </div>
                              ))}
                            </div>

                            {/* Agenda */}
                            <div className="space-y-10">
                              {m.dias.map((d, di) => (
                                <div key={di}>
                                  {d.label && (
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                      <span className="font-serif text-2xl text-gold">{d.label}</span>
                                      {d.comidas && (
                                        <span className="text-xs text-ink/45 border border-sand/60 px-3 py-1">{d.comidas}</span>
                                      )}
                                    </div>
                                  )}
                                  {(() => {
                                    const items = [...d.manana, ...d.tarde]
                                    let n = 0
                                    return (
                                      <ol className="max-w-2xl border-t border-sand/30">
                                        {items.map((it, ii) => {
                                          if (it === 'Break') {
                                            return (
                                              <li key={ii} className="flex items-center gap-3 py-3.5">
                                                <span className="h-px flex-1 bg-sand/60" />
                                                <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.25em] uppercase text-gold">
                                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8h13v5a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM16 8h2a3 3 0 010 6h-2M6 3v2M10 3v2M14 3v2" />
                                                  </svg>
                                                  Break
                                                </span>
                                                <span className="h-px flex-1 bg-sand/60" />
                                              </li>
                                            )
                                          }
                                          n += 1
                                          const num = n
                                          return (
                                            <li key={ii} className="flex gap-4 items-baseline py-2.5 border-b border-sand/30">
                                              <span className="font-serif text-sm text-gold/50 w-6 shrink-0 tabular-nums">
                                                {String(num).padStart(2, '0')}
                                              </span>
                                              <span className="text-sm text-ink/70 leading-snug">{it}</span>
                                            </li>
                                          )
                                        })}
                                      </ol>
                                    )
                                  })()}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeUp>
              )
            })}
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
