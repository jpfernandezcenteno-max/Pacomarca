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
                "El acceso a la base de datos de Pacomarca fue determinante para mi investigación. Sin ese apoyo, mi tesis doctoral sobre genética cuantitativa en alpacas hubiera sido imposible de completar con la solidez científica que logré."
              </p>
              <cite className="text-xs tracking-[0.15em] uppercase text-gold not-italic">
                — Alan Cruz, PhD en Genética Animal
              </cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '32+', label: 'Artículos en revistas indexadas' },
                { num: '13M+', label: 'Datos disponibles' },
                { num: '23+', label: 'Universidades colaboradoras' },
                { num: '30+', label: 'Investigadores financiados' },
              ].map((s) => (
                <div key={s.label} className="bg-beige p-8 text-center">
                  <p className="font-serif text-4xl text-gold mb-2">{s.num}</p>
                  <p className="text-xs text-ink/55 leading-snug">{s.label}</p>
                </div>
              ))}
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
                  El Fondo a la Investigación de Pacomarca financia proyectos de investigación científica sobre alpacas y el ecosistema andino. Las investigaciones se desarrollan en colaboración entre la estación científica de Pacomarca y universidades e institutos de investigación de todo el mundo.
                </p>
                <p>
                  El fondo provee acceso a los datos, las instalaciones y el rebaño de Pacomarca como infraestructura de investigación. En muchos casos, también incluye apoyo financiero directo para los investigadores y sus proyectos.
                </p>
                <p>
                  A cambio, los resultados se publican en revistas científicas de acceso abierto o se ponen a disposición de las comunidades, generando conocimiento aplicable que mejora las condiciones de los alpaqueros.
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
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=85',
        'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=85',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=85',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85',
      ]} />
    </>
  )
}
