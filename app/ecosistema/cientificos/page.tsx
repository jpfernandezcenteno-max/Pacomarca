'use client'

import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const cientificosFotos = [
  '/ecosistema/cientificos/foto-1.jpg',
  '/ecosistema/cientificos/foto-2.jpg',
  '/ecosistema/cientificos/foto-3.jpg',
  '/ecosistema/cientificos/foto-4.jpg',
  '/ecosistema/cientificos/foto-5.jpg',
]

function AutoCarousel({ images, className = '' }: { images: string[]; className?: string }) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % images.length), 4000)
    return () => clearInterval(t)
  }, [images.length])
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Ver foto ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: 'easeOut' }} className={className}>
      {children}
    </motion.div>
  )
}

const scientists = [
  'Cruz Alan', 'Gutiérrez Juan Pablo', 'Burgos Alonso', 'Morante Renzo',
  'Gutiérrez-Reynoso GA', 'Cervantes Isabel', 'Wurzinger Maria', 'Pinares Rubén',
  'Quispe EC', 'Quispe Max David', 'Torres Richard', 'Yucra Alex',
  'Formoso-Rafferty N', 'Daverio María Silvana', 'Di Rocco Florencia',
  'Mancisidor Betsy', 'McGregor BA', 'Menéndez-Buxadera Alberto',
  'More MJ', 'Morón JA', 'Murillo Yanin', 'Paucar-Chanca Rufino',
  'Poma Adolfo', 'Ponce de León Federico Abel', 'Quispe Christian C',
  'Quispe-Ccalluari Carlos', 'Sedano Jorge', 'Veli Eudosio A',
]

const universities = [
  'University of Natural Resources and Life Sciences (BOKU) – Austria',
  'Universidad Complutense de Madrid – España',
  'Universidad Nacional Agraria La Molina – Perú',
  'Universidad Nacional San Antonio de Abad del Cusco – Perú',
  'Universidad Católica de Santa María – Perú',
  'Max Corp Techonologies SAC – Perú',
  'Texas A&M University – USA',
  'University of Minnesota – USA',
  'Universidad Politécnica de Madrid – España',
  'Natural Fiber Tech SAC – Perú',
  'Iowa State University – USA',
  'Neural X SAC – Perú',
  'INIA – Perú',
  'Universidad Nacional de Huancavelica – Perú',
  'Deakin University – Australia',
  'Descosur – Perú',
  'IMBICE – Argentina',
  'Universidad Nacional de la Plata – Argentina',
  'Universidad Nacional Micaela Bastidas de Apurímac – Perú',
  'Universidad de Córdoba – España',
  'Universidad la Rioja – Argentina',
  'Universidad Católica de Córdoba – Argentina',
  'SERIDA – Somió, España',
  'Universidad de Zaragoza – España',
]

function Accordion({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-sand/50">
      <button
        className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-cream/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-xl text-ink">{title}</span>
        <span className="text-xs tracking-[0.15em] uppercase text-gold">{open ? '— Cerrar' : '+ Ver lista'}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-1 text-xs">◆</span>
                  <span className="text-sm text-ink/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CientificosPage() {
  return (
    <>
      <PageHeader
        section="ECOSISTEMA"
        title="Científicos"
        subtitle="Conocimiento riguroso al servicio de las comunidades andinas"
        imageUrl="/ecosistema/cientificos/portada.jpg"
        imagePosition="object-center"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Red científica</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              13 millones de datos genéticos y creciendo
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                En Pacomarca, la investigación científica es el motor que impulsa la sostenibilidad de la alpaca y de quienes dependen de ella. Con más de <strong className="text-ink font-medium">13 millones de datos genéticos recopilados</strong> y múltiples publicaciones científicas, el centro se ha consolidado como un referente internacional en genética, trazabilidad y bienestar animal, trabajando de la mano con <strong className="text-ink font-medium">más de 30 investigadores</strong> afiliados a <strong className="text-ink font-medium">más de 23 universidades</strong> y centros de investigación en el Perú y el mundo.
              </p>
              <p>
                Lo más importante, sin embargo, es que el conocimiento generado regresa a las comunidades: capacitaciones, pasantías y programas de transferencia tecnológica convierten la ciencia en mejoras tangibles para los productores y sus familias. En Pacomarca, la ciencia no se queda en los laboratorios: se vive en los Andes, transformando la relación entre alpaqueros, naturaleza y mercado.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: '13M+', label: 'Datos genéticos' },
                { num: '30+', label: 'Investigadores' },
                { num: '23+', label: 'Universidades' },
                { num: '32', label: 'Artículos publicados' },
                { num: '5', label: 'Continentes' },
                { num: '1', label: 'Base de datos única' },
              ].map((s) => (
                <div key={s.label} className="bg-cream p-6 text-center">
                  <p className="font-serif text-3xl text-gold mb-2">{s.num}</p>
                  <p className="text-xs text-ink/55 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
            <AutoCarousel images={cientificosFotos} className="mt-6 h-64" />
          </FadeUp>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-beige py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Objetivos científicos</p>
              <h2 className="font-serif text-4xl text-ink">Tres líneas de investigación</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Rescatar el negro puro',
                desc: 'Rescatar a las alpacas de color negro puro, que estuvieron a punto de desaparecer, preservando un recurso genético único de los Andes.',
              },
              {
                num: '02',
                title: 'Lograr una fibra extrafina',
                desc: 'Lograr una fibra extrafina que compita con otras fibras finas a nivel mundial, elevando la calidad textil de la alpaca.',
              },
              {
                num: '03',
                title: 'Reducir la medulación',
                desc: 'Lograr una fibra con una menor medulación, disminuyendo la sensación de picazón y asegurando un futuro atractivo y rentable para los criadores altoandinos.',
              },
            ].map((obj) => (
              <FadeUp key={obj.num} delay={Number(obj.num) * 0.1}>
                <div className="bg-white p-10">
                  <p className="font-serif text-5xl text-gold/30 mb-6">{obj.num}</p>
                  <h3 className="font-serif text-xl text-ink mb-4">{obj.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{obj.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion lists */}
      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">La red</p>
            <h2 className="font-serif text-4xl text-ink mb-4">Investigadores y universidades colaboradoras</h2>
            <p className="text-base text-ink/55 max-w-xl mx-auto">
              Una colaboración global que abarca desde Puno hasta Viena, desde Nueva Zelanda hasta Madrid.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-4">
            <Accordion title="Científicos colaboradores" items={scientists} />
            <Accordion title="Universidades e instituciones" items={universities} />
          </div>
        </FadeUp>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Colaboración científica</p>
            <h2 className="font-serif text-3xl text-white mb-6">
              ¿Eres investigador y quieres colaborar con Pacomarca?
            </h2>
            <p className="text-base text-white/60 mb-10 leading-relaxed">
              Nuestra estación científica está abierta a la colaboración con investigadores y universidades interesados en la genética, el bienestar animal y la sostenibilidad de la alpaca. Contamos con la mayor base de datos genéticos del mundo.
            </p>
            <Link
              href="/contacto?rol=cientifico"
              className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors"
            >
              Soy científico y me interesa conocer más
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
