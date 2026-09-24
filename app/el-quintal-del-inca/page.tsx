'use client'

import PageHeader from '@/components/PageHeader'
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

// Marcador visual para fotos pendientes (se reemplaza por la imagen real)
function PhotoPlaceholder({ label = 'Foto', className = '' }: { label?: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 bg-sand/25 text-ink/40 ${className}`}>
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-[11px] tracking-[0.15em] uppercase">{label}</span>
    </div>
  )
}

const beneficios = [
  'Conocer la calidad de tu producción',
  'Obtener reconocimiento',
  'Acceder a compra preferencial según condiciones del concurso',
]

const pasos = [
  { n: '01', title: 'Prepara tu fibra', desc: 'Alista tu lote de fibra de alpaca según las indicaciones del concurso.' },
  { n: '02', title: 'Contacta a tu responsable', desc: 'Ubica al responsable de acopio de tu zona y coordina la entrega.' },
  { n: '03', title: 'Entrega tu lote', desc: 'Lleva tu fibra al punto de acopio acordado con tu responsable.' },
  { n: '04', title: 'Tu fibra es evaluada', desc: 'Evaluamos la calidad de tu fibra y reconocemos a los mejores productores.' },
]

const premios = [
  { medal: '🥇', place: '1.er lugar', prize: 'Cabaña del pastor' },
  { medal: '🥈', place: '2.º lugar', prize: 'Alpacas' },
  { medal: '🥉', place: '3.er lugar', prize: 'Reproductores y herramientas' },
]

const faqs = [
  { q: '¿Me pagan si no gano?', a: 'Sí, la fibra aprobada es comprada según las condiciones establecidas.' },
  { q: '¿Tiene costo participar?', a: 'No.' },
  { q: '¿Qué pasa si vivo lejos?', a: 'Puedes coordinar con tu responsable de zona.' },
  { q: '¿Pueden participar pequeños productores?', a: 'Sí, cumpliendo los requisitos.' },
]

const basesIncluye = ['Requisitos', 'Fechas', 'Categorías', 'Criterios de evaluación', 'Premios completos']

// Responsables por zona. Completar el número de WhatsApp de cada uno (formato internacional, ej. 51999888777).
const zonas = [
  { zona: 'Puno', responsable: '[Responsable de zona]', whatsapp: '' },
  { zona: 'Arequipa', responsable: '[Responsable de zona]', whatsapp: '' },
  { zona: 'Pacomarca', responsable: '[Responsable de zona]', whatsapp: '' },
  { zona: 'Cusco', responsable: '[Responsable de zona]', whatsapp: '' },
  { zona: 'Centro', responsable: '[Responsable de zona]', whatsapp: '' },
]

const waLink = (n: string) =>
  n ? `https://wa.me/${n}?text=${encodeURIComponent('Hola, quiero participar en El Quintal del Inca 2026/2027.')}` : '#'

export default function ElQuintalDelIncaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <PageHeader
        section="El Quintal del Inca · 8.ª edición · 2026/2027"
        title="Demuestra la calidad de tu fibra y recibe el reconocimiento que merece"
        subtitle="Participa en el concurso nacional que evalúa la calidad de tu fibra de alpaca, compra tu lote y reconoce a los mejores productores."
        imageUrl="/concurso/portada.jpg"
        imagePosition="object-center"
      />

      {/* Barra de confianza + CTA principal */}
      <section className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/75">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50" /> 8.ª edición</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/50" /> Organizado por INCA TOPS S.A. y Pacomarca desde 2012</span>
          </div>
          <a href="#responsables" className="shrink-0 bg-white text-ink text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/85 transition-colors">
            Encuentra tu responsable de acopio
          </a>
        </div>
      </section>

      {/* 2. Prueba social */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Prueba social</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-snug">Productores como tú ya demostraron la calidad de su fibra</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-white border border-sand/40 h-full flex flex-col">
                <PhotoPlaceholder label="Foto del productor" className="aspect-[4/3] w-full" />
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-serif text-lg text-ink">[Nombre del productor]</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-gold mt-1">[Comunidad]</p>
                  <span className="self-start mt-3 bg-cream text-ink/70 text-xs px-3 py-1">Premio: [premio obtenido]</span>
                  <p className="text-sm text-ink/60 leading-relaxed italic mt-4">“[Testimonio del productor sobre su experiencia en el concurso…]”</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="text-center text-xs text-ink/40 mt-8">Espacios reservados para fotos y testimonios reales de ediciones anteriores.</p>
      </section>

      {/* 3. Problema + oportunidad */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">El problema + la oportunidad</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8 leading-snug">No toda la fibra tiene el mismo valor</h2>
            <blockquote className="border-l-4 border-gold pl-6 mb-6">
              <p className="font-serif text-xl text-ink/80 italic leading-relaxed">“Mi fibra es buena, pero me pagan como a cualquiera.”</p>
            </blockquote>
            <p className="text-base text-ink/65 leading-relaxed">
              El Quintal del Inca permite <strong className="text-ink font-medium">evaluar y reconocer la calidad</strong> de tu fibra.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="bg-white p-10">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Beneficios</p>
              <ul className="space-y-4">
                {beneficios.map((b) => (
                  <li key={b} className="flex gap-4 items-start">
                    <span className="text-gold mt-0.5 shrink-0">✔</span>
                    <span className="text-base text-ink/70">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 4. Cómo funciona */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Cómo funciona</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">Participar es sencillo, en 4 pasos</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((p, i) => (
            <FadeUp key={p.n} delay={i * 0.08}>
              <div className="bg-beige p-8 h-full">
                <p className="font-serif text-4xl text-gold/50">{p.n}</p>
                <h3 className="font-serif text-lg text-ink mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <div className="text-center mt-12">
            <a href="#responsables" className="inline-block bg-ink text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold transition-colors duration-300">
              Encuentra tu responsable de acopio
            </a>
          </div>
        </FadeUp>
      </section>

      {/* 5. Premios */}
      <section className="bg-ink text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">Premios</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white">Reconocimiento para los mejores productores</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {premios.map((pr, i) => (
              <FadeUp key={pr.place} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 p-10 text-center h-full">
                  <div className="text-5xl mb-5">{pr.medal}</div>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">{pr.place}</p>
                  <h3 className="font-serif text-2xl text-white">{pr.prize}</h3>
                </div>
              </FadeUp>
            ))}
          </div>
          <p className="text-center text-sm text-white/40 mt-10">Consulta el detalle completo de los premios en las bases oficiales.</p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Preguntas frecuentes</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">Resolvemos tus dudas</h2>
          </div>
        </FadeUp>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i
            return (
              <FadeUp key={f.q} delay={i * 0.05}>
                <div className={`border transition-colors ${isOpen ? 'border-gold' : 'border-sand/50'}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-ink">{f.q}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-gold text-gold rotate-45' : 'border-sand text-ink/40'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="px-6 pb-6 text-base text-ink/65 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </section>

      {/* 7. Bases + requisitos */}
      <section className="bg-beige py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 md:p-14 text-center">
            <FadeUp>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Bases y requisitos</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8 leading-snug">Todo lo que necesitas saber para participar</h2>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
                {basesIncluye.map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-ink/70">
                    <span className="text-gold">✔</span> {item}
                  </span>
                ))}
              </div>
              <a
                href="/concurso/bases-el-quintal-del-inca.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-ink text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Descargar bases oficiales (PDF)
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 8. Contacto final — responsables por zona */}
      <section id="responsables" className="py-24 max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-24">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Contacto</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">Encuentra tu responsable de acopio</h2>
            <p className="text-base text-ink/60 mt-4 max-w-xl mx-auto">Coordina con el responsable de tu zona para preparar y entregar tu lote de fibra.</p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {zonas.map((z, i) => (
            <FadeUp key={z.zona} delay={i * 0.06}>
              <div className="bg-white border border-sand/40 p-6 h-full flex flex-col text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Zona</p>
                <h3 className="font-serif text-xl text-ink mb-1">{z.zona}</h3>
                <p className="text-sm text-ink/50 mb-6">{z.responsable}</p>
                <a
                  href={waLink(z.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 border border-ink/30 text-ink text-xs tracking-[0.15em] uppercase px-5 py-3 hover:bg-ink hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  WhatsApp
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="text-center text-xs text-ink/40 mt-8">Completar el nombre y el número de WhatsApp de cada responsable de zona.</p>
      </section>
    </>
  )
}
