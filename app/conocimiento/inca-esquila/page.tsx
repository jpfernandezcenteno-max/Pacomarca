'use client'

import PageHeader from '@/components/PageHeader'
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

const benefitsLeft = [
  { title: 'Mejor precio de mercado', desc: 'El pago directo, sin intermediarios, y al mejor precio de mercado beneficia directamente a las familias alpaqueras.' },
  { title: 'Bienestar animal', desc: 'La técnica protege al esquilador y reduce el estrés del animal durante la esquila.' },
  { title: 'Mayor rendimiento de fibra', desc: 'La técnica correcta maximiza el aprovechamiento del vellón.' },
]

const benefitsRight = [
  { title: 'Fibra más limpia e inalterada', desc: 'El método garantiza una fibra más limpia y uniforme, manteniendo sus características.' },
  { title: 'Uniformidad en la calidad', desc: 'El vellón esquilado con la técnica presenta mayor uniformidad.' },
  { title: 'Mayor rendimiento en calidades finas', desc: 'Mejora el porcentaje de fibras en las categorías más finas.' },
  { title: 'Trazabilidad 100%', desc: 'Los lotes forman parte de la marca Pacomarca, lo que asegura su trazabilidad al 100%.' },
]

export default function IncaEsquilaPage() {
  return (
    <>
      <PageHeader
        section="CONOCIMIENTO"
        title="Inca Esquila"
        subtitle="El método científico que transformó la esquila de alpacas en el Perú"
        imageUrl="/conocimiento/inca-esquila/portada.jpg"
        imagePosition="object-[center_30%]"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Norma técnica NTP 231.370</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              La esquila elevada a estándar nacional
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                La Inca Esquila es un método de trasquila mecanizada desarrollado por Pacomarca que protege al esquilador, asegura el bienestar de la alpaca y garantiza una fibra más limpia y uniforme. Reconocida oficialmente como norma técnica nacional del Perú (<strong className="text-ink font-medium">NTP 231.370 "Buenas prácticas de esquila y manejo de vellón"</strong>), esta práctica se ha convertido en un referente que beneficia tanto a los productores como a la industria textil.
              </p>
              <p>
                En muchas comunidades alpaqueras, la esquila tradicional causa estrés, lesiones e incluso abortos en las alpacas, reduciendo la tasa de nacimientos al 60%. En contraste, en Pacomarca, el uso de la Inca Esquila eleva este porcentaje al 76%, al reducir el estrés y obtener una fibra más limpia y uniforme.
              </p>
              <p>
                Además, Pacomarca cuenta con un programa para llevar esta tecnología a los alpaqueros, asegurando el pago directo (sin intermediarios) y al mejor precio de mercado. Los lotes obtenidos bajo esta modalidad forman parte de la marca Pacomarca, lo que asegura su trazabilidad al 100%.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-ink text-white p-10 h-full flex flex-col justify-center">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-8">Resultados comprobados</p>
              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-[0.1em] uppercase text-white/40 mb-3">Esquila tradicional</p>
                  <div className="flex items-end gap-4">
                    <p className="font-serif text-6xl text-white/40">60%</p>
                    <p className="text-sm text-white/40 pb-2">tasa de nacimientos</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-8">
                  <p className="text-xs tracking-[0.1em] uppercase text-gold mb-3">Con Inca Esquila</p>
                  <div className="flex items-end gap-4">
                    <p className="font-serif text-6xl text-gold">76%</p>
                    <p className="text-sm text-white/60 pb-2">tasa de nacimientos</p>
                  </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed border-t border-white/10 pt-6">
                  Un incremento del 16% en la tasa de natalidad representa decenas de crías adicionales por comunidad, con impacto directo en los ingresos familiares.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-beige">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6 text-center">Video</p>
            <video
              src="/conocimiento/inca-esquila/video.mp4"
              controls
              playsInline
              className="w-full aspect-video"
            />
          </FadeUp>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Beneficios</p>
              <h2 className="font-serif text-4xl text-ink">Por qué Inca Esquila transforma</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div className="space-y-6">
                {benefitsLeft.map((b) => (
                  <div key={b.title} className="bg-white p-8 border-l-4 border-gold">
                    <h3 className="font-serif text-lg text-ink mb-3">{b.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="space-y-6">
                {benefitsRight.map((b) => (
                  <div key={b.title} className="bg-white p-8 border-l-4 border-sand">
                    <h3 className="font-serif text-lg text-ink mb-3">{b.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Standard */}
      <section className="py-20 max-w-5xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="border border-gold/30 p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Reconocimiento oficial</p>
                <h2 className="font-serif text-3xl text-ink mb-6">NTP 231.370 "Buenas prácticas de esquila y manejo de vellón"</h2>
                <p className="text-base text-ink/65 leading-relaxed">
                  La Norma Técnica Peruana NTP 231.370 establece los requisitos para la esquila, recolección, acondicionamiento, clasificación y almacenamiento de la fibra de alpaca. Es el primer estándar peruano que formaliza el proceso de esquila con base en criterios científicos de bienestar animal y calidad de fibra, fruto del trabajo conjunto entre Pacomarca, el INDECOPI y el sector académico.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/conocimiento/inca-esquila/logo-ntp.svg"
                    alt="Sello NTP 231.370"
                    className="w-full h-full object-contain scale-[0.85]"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
