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
  { title: 'Mejor precio', desc: 'La fibra limpia y bien clasificada obtiene mejores precios en el mercado, beneficiando directamente a las familias alpaqueras.' },
  { title: 'Bienestar animal', desc: 'La técnica reduce el estrés del animal durante la esquila y minimiza el riesgo de cortes y heridas.' },
  { title: 'Mayor rendimiento de fibra', desc: 'La técnica correcta maximiza el aprovechamiento del vellón, reduciendo las pérdidas de fibra.' },
]

const benefitsRight = [
  { title: 'Fibra más limpia', desc: 'El método elimina la contaminación vegetal y las fibras de segunda que reducen la calidad del lote.' },
  { title: 'Uniformidad', desc: 'El vellón esquilado con técnica correcta presenta mayor uniformidad de longitud y diámetro.' },
  { title: 'Mayor rendimiento en calidades finas', desc: 'La clasificación correcta incrementa el porcentaje de fibras en las categorías de mayor valor comercial.' },
  { title: 'Trazabilidad 100%', desc: 'El módulo de esquila certifica el origen del vellón, vinculando cada fibra con el animal y la familia de origen.' },
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
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Norma técnica NTP 231.370-2014</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              La esquila elevada a estándar nacional
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                Inca Esquila es el método de esquila de alpacas desarrollado y perfeccionado por Pacomarca con base en evidencia científica. Fue reconocido como Norma Técnica Peruana <strong className="text-ink font-medium">NTP 231.370-2014</strong>, convirtiéndose en el estándar oficial para la esquila de camélidos sudamericanos domésticos en el Perú.
              </p>
              <p>
                A diferencia de la esquila tradicional, que se realiza con el animal en pie o con métodos improvisados, Inca Esquila establece procedimientos precisos para cada etapa: la sujeción del animal, la secuencia de corte, la recolección del vellón y la clasificación de la fibra.
              </p>
              <p>
                El impacto es medible: las comunidades que adoptan Inca Esquila incrementan significativamente su tasa de natalidad, reducen la mortalidad neonatal y obtienen mejor precio por su fibra.
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
                  Un incremento del 27% en la tasa de natalidad representa decenas de crías adicionales por comunidad, con impacto directo en los ingresos familiares.
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
                <h2 className="font-serif text-3xl text-ink mb-6">NTP 231.370-2014</h2>
                <p className="text-base text-ink/65 leading-relaxed">
                  La Norma Técnica Peruana NTP 231.370-2014 establece los requisitos para la esquila, recolección, acondicionamiento, clasificación y almacenamiento de la fibra de alpaca. Es el primer estándar peruano que formaliza el proceso de esquila con base en criterios científicos de bienestar animal y calidad de fibra, fruto del trabajo conjunto entre Pacomarca, el INDECOPI y el sector académico.
                </p>
              </div>
              {/* Sello NTP — reemplazar con <Image> cuando esté disponible */}
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-beige border border-sand/60 flex items-center justify-center">
                  <p className="text-xs text-ink/30 text-center px-4">Sello NTP<br />231.370-2014</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
