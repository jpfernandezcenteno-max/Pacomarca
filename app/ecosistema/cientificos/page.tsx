'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
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

const scientists = [
  'Cruz Alan', 'Gutiérrez Juan Pablo', 'Burgos Alonso', 'Morante Renzo',
  'Gutiérrez-Reynoso GA', 'Cervantes Isabel', 'Wurzinger Maria', 'Pinares Rubén',
  'Quispe EC', 'Quispe Max David', 'Torres Richard', 'Yucra Alex',
  'Formoso-Rafferty N', 'Daverio María Silvana', 'Di Rocco Florencia',
  'Mancisidor Betsy', 'McGregor BA', 'Menéndez-Buxadera Alberto',
  'More MJ', 'Morón JA', 'Murillo Yanin', 'Paucar-Chanca Rufino',
  'Poma Adolfo', 'Ponce de Leon FA', 'Quispe Christian C',
  'Quispe-Ccalluari Carlos', 'Sedano Jorge', 'Veli Eudosio A',
  'de León Federico Abel Ponce',
]

const universities = [
  'Universidad Nacional del Altiplano (UNAP) – Puno, Perú',
  'Universidad Nacional de San Agustín (UNSA) – Arequipa, Perú',
  'Universidad Nacional Micaela Bastidas de Apurímac – Perú',
  'Universidad Nacional Autónoma de Chota – Perú',
  'Universidad Complutense de Madrid – España',
  'Universidad Politécnica de Madrid – España',
  'Universidad de Córdoba – España',
  'Universidad Autónoma de Barcelona – España',
  'Universitat de Lleida – España',
  'University of Natural Resources and Life Sciences (BOKU) – Viena, Austria',
  'Georg-August-Universität Göttingen – Alemania',
  'International Livestock Research Institute (ILRI) – Nairobi, Kenia',
  'University of New England – Australia',
  'Lincoln University – Nueva Zelanda',
  'Iowa State University – Estados Unidos',
  'Universidad Nacional Mayor de San Marcos – Lima, Perú',
  'Universidad Nacional Agraria La Molina – Lima, Perú',
  'Universidad Nacional de Huancavelica – Perú',
  'Universidad Nacional del Centro del Perú – Junín, Perú',
  'Universidad Andina del Cusco – Perú',
  'Universidad Nacional de San Antonio Abad del Cusco – Perú',
  'Universidad Nacional José María Arguedas – Apurímac, Perú',
  'Instituto Nacional de Innovación Agraria (INIA) – Perú',
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
                Pacomarca alberga la mayor base de datos genéticos de alpacas del mundo. Con más de <strong className="text-ink font-medium">13 millones de registros genéticos</strong>, nuestra estación científica es el centro de referencia mundial para la investigación sobre Vicugna pacos.
              </p>
              <p>
                Esta riqueza científica es el fruto de años de colaboración con <strong className="text-ink font-medium">más de 30 investigadores</strong> y <strong className="text-ink font-medium">23 universidades</strong> de Perú, España, Austria, Alemania, Australia, Nueva Zelanda y Estados Unidos, entre otros países.
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
                title: 'Mejora genética',
                desc: 'Desarrollar y consolidar programas de selección genética que mejoren la calidad de la fibra (finura, uniformidad, ausencia de medulación) y la productividad de las alpacas en las comunidades.',
              },
              {
                num: '02',
                title: 'Bienestar animal',
                desc: 'Investigar y difundir prácticas de manejo que mejoren la salud, el bienestar y la productividad de las alpacas en condiciones altoandinas, incluyendo nutrición, sanidad y prácticas de esquila.',
              },
              {
                num: '03',
                title: 'Sostenibilidad sistémica',
                desc: 'Generar evidencia científica sobre el impacto social y ambiental del ecosistema alpaquero, contribuyendo a políticas públicas y estándares internacionales de certificación.',
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
