'use client'

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
  { medal: '🥇', place: '1.er lugar', prize: 'Cabaña del pastor', detail: 'Construida en el fundo del ganador', image: '/concurso/premio-cabana.jpg' },
  { medal: '🥈', place: '2.º lugar', prize: 'Lote de 7 alpacas', detail: '1 macho + 6 hembras', image: '/concurso/premio-alpacas.jpg' },
  { medal: '🥉', place: '3.er lugar', prize: 'Lote de 4 alpacas', detail: '1 macho + 3 hembras', image: '/concurso/premio-alpacas2.jpg' },
  { medal: '🏅', place: '4.º y 5.º lugar', prize: '1 reproductor tipo A + kit de esquila', detail: '', image: '/concurso/premio-reproductores.jpg' },
]

// Productores/ganadores (prueba social)
const productores = [
  {
    image: '/concurso/productor-1.jpg',
    nombre: 'Nemesio Ticona',
    comunidad: 'Parina · Lampa · Puno',
    premio: 'Cabaña del pastor',
    testimonio: 'Con la cabaña, mi familia vive mejor en el campo.',
  },
  {
    image: '/concurso/productor-2.jpg',
    nombre: 'Buenaventura Haytara',
    comunidad: 'Phinaya · Canchis · Cusco',
    premio: 'Cabaña del pastor',
    testimonio: 'Este premio mejoró la vida de mi familia.',
  },
]

const faqs = [
  { q: '¿Quiénes pueden participar?', a: 'Productores de fibra de alpaca que cumplan con las condiciones del concurso.' },
  { q: '¿Pueden participar pequeños productores?', a: 'Sí. El concurso está abierto a productores de diferentes tamaños.' },
  { q: '¿Qué tipo de fibra puedo presentar?', a: 'Fibra Huacaya, puede ser negra o blanca.' },
  { q: '¿Qué cantidad de fibra necesito para participar?', a: '46 kg como mínimo.' },
  { q: '¿Qué pasa si vivo lejos?', a: 'Puedes coordinar con tu responsable de zona.' },
  { q: '¿Me pagan si no gano?', a: 'Sí, se pagará por la fibra que se entregue para participar del concurso.' },
]

const basesIncluye = ['Requisitos', 'Fechas', 'Categorías', 'Criterios de evaluación', 'Premios completos']

// Responsables de acopio por zona (número de WhatsApp en formato internacional).
const zonas = [
  { ciudad: 'Puno', localidades: 'Juliaca y toda la región de Puno', responsable: 'Uber Yauri', telefono: '951 676 846', whatsapp: '51951676846' },
  { ciudad: 'Arequipa', localidades: 'Arequipa ciudad', responsable: 'Riketts Cayllahua', telefono: '901 160 886', whatsapp: '51901160886' },
  { ciudad: 'Pacomarca', localidades: 'Pacomarca y Pacochayllu', responsable: 'Julio Huayta', telefono: '943 232 253', whatsapp: '51943232253' },
  { ciudad: 'Cusco', localidades: 'Sicuani, Ocongate, Calca, Ollantaytambo, Condoroma y Caylloma', responsable: 'Samuel Quispe', telefono: '989 992 609', whatsapp: '51989992609' },
  { ciudad: 'Centro', localidades: 'Huancayo, Huancavelica y Cerro de Pasco', responsable: 'Santiago Carlin', telefono: '958 336 191', whatsapp: '51958336191' },
]

const waLink = (n: string) =>
  n ? `https://wa.me/${n}?text=${encodeURIComponent('Hola, quiero participar en El Quintal del Inca 2026/2027.')}` : '#'

function ResponsableCard({ z }: { z: (typeof zonas)[number] }) {
  return (
    <div className="h-full flex flex-col bg-white border border-sand/40">
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Zona</p>
        <h3 className="font-serif text-2xl text-ink">{z.ciudad}</h3>
        <p className="text-sm text-ink/55 mt-2 leading-relaxed flex-1">{z.localidades}</p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-gold mt-6 mb-1">Responsable</p>
        <p className="font-medium text-ink">{z.responsable}</p>
        <a href={`tel:+${z.whatsapp}`} className="text-ink/55 text-sm mt-1 hover:text-gold transition-colors">
          Cel: {z.telefono}
        </a>
        <a
          href={waLink(z.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 border border-ink/30 text-ink text-xs tracking-[0.15em] uppercase px-4 py-3 hover:bg-ink hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default function ElQuintalDelIncaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [zonaSel, setZonaSel] = useState(0)

  return (
    <>
      {/* HERO — centrado */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-ink">
        <Image
          src="/concurso/hero.jpg"
          alt="El Quintal del Inca"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <FadeUp className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/80 mb-6 font-medium">Concurso</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight">
            El Quintal del Inca
          </h1>
          <p className="text-base md:text-lg text-white/75 mt-6 max-w-2xl mx-auto leading-relaxed">
            Demuestra la calidad de tu fibra y recibe el reconocimiento que merece.
          </p>
          <a
            href="#responsables"
            className="mt-10 inline-flex items-center gap-3 border border-white/50 text-white text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-white hover:text-ink transition-colors duration-300"
          >
            Encuentra tu responsable de acopio
          </a>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base md:text-lg font-bold italic text-white/90">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/60" /> 8.ª edición</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/60" /> Organizado por INCA TOPS S.A. y Pacomarca desde 2012</span>
          </div>
        </FadeUp>
      </section>

      {/* 2. Prueba social */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Prueba social</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-snug">Productores como tú ya demostraron la calidad de su fibra</h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {productores.map((p, i) => (
            <FadeUp key={p.nombre} delay={i * 0.1}>
              <div className="bg-white border border-sand/40 h-full flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image src={p.image} alt={p.nombre} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-serif text-lg text-ink">{p.nombre}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-gold mt-1">{p.comunidad}</p>
                  <span className="self-start mt-3 bg-cream text-ink/70 text-xs px-3 py-1">Premio: {p.premio}</span>
                  <p className="text-sm text-ink/60 leading-relaxed italic mt-4">“{p.testimonio}”</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 3. Problema + oportunidad */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
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
      <section className="bg-ink text-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">Cómo funciona</p>
              <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">Participar es sencillo, en 4 pasos</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.1}>
                <div className="group relative h-full bg-white/[0.04] border border-white/10 p-8 overflow-hidden transition-all duration-300 hover:bg-white/[0.09] hover:-translate-y-1.5 hover:border-white/25">
                  <span className="absolute top-0 left-0 h-0.5 w-10 bg-white/40 transition-all duration-500 group-hover:w-full" />
                  <p className="font-serif text-6xl text-white/20 transition-colors duration-300 group-hover:text-white/50">{p.n}</p>
                  <h3 className="font-serif text-xl text-white mt-4 mb-2">{p.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div className="text-center mt-16">
              <a
                href="#responsables"
                className="cta-breathe group relative inline-flex items-center gap-3 overflow-hidden bg-white text-ink text-sm font-medium tracking-[0.2em] uppercase px-12 py-5 hover:bg-gold hover:text-white transition-colors duration-300"
              >
                <span aria-hidden className="cta-shine pointer-events-none absolute inset-0" />
                <span className="relative z-10">Encuentra tu responsable de acopio</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Banda del evento */}
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <Image src="/concurso/evento.jpg" alt="El Quintal del Inca — el concurso" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 flex items-end">
          <FadeUp className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-white/80 mb-3">El concurso en acción</p>
            <h3 className="font-serif text-2xl md:text-3xl text-white max-w-xl leading-snug">Reconociendo la calidad de la fibra de alpaca en cada edición</h3>
          </FadeUp>
        </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premios.map((pr, i) => (
              <FadeUp key={pr.place} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 h-full overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={pr.image} alt={pr.prize} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <div className="p-6 text-center flex flex-col flex-1">
                    <div className="text-3xl mb-3">{pr.medal}</div>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/50 mb-2">{pr.place}</p>
                    <h3 className="font-serif text-xl text-white leading-snug">{pr.prize}</h3>
                    {pr.detail && <p className="text-sm text-white/55 mt-2">{pr.detail}</p>}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="mt-12 border border-white/15 bg-white/5 px-6 py-6 max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg font-medium text-white">
              Todos los ganadores tendrán un <span className="italic">precio preferencial</span> para su fibra la siguiente campaña.
            </p>
          </div>
          <p className="text-center text-sm text-white/40 mt-6">Consulta el detalle completo de los premios en las bases oficiales.</p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 max-w-5xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Preguntas frecuentes</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">Resolvemos tus dudas</h2>
          </div>
        </FadeUp>
        <div className="grid md:grid-cols-2 gap-3 items-start">
          {faqs.map((f, i) => {
            const isOpen = openFaq === i
            return (
              <FadeUp key={f.q} delay={i * 0.05}>
                <div className={`border transition-colors ${isOpen ? 'border-gold' : 'border-sand/50'}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left min-h-[104px]"
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image src="/concurso/bases.jpg" alt="Participa en El Quintal del Inca" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <FadeUp className="p-10 md:p-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Bases y requisitos</p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-8 leading-snug">Todo lo que necesitas saber para participar</h2>
              <ul className="space-y-3 mb-10">
                {basesIncluye.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-ink/70">
                    <span className="text-gold">✔</span> {item}
                  </li>
                ))}
              </ul>
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
        {/* Desktop: las 5 zonas en una sola fila */}
        <FadeUp className="hidden lg:grid lg:grid-cols-5 gap-4 items-stretch">
          {zonas.map((z) => (
            <ResponsableCard key={z.ciudad} z={z} />
          ))}
        </FadeUp>

        {/* Móvil / tablet: dropdown para elegir la zona */}
        <div className="lg:hidden max-w-md mx-auto">
          <label htmlFor="zona-select" className="block text-xs tracking-[0.2em] uppercase text-gold mb-3 text-center">
            Elige tu zona
          </label>
          <div className="relative mb-6">
            <select
              id="zona-select"
              value={zonaSel}
              onChange={(e) => setZonaSel(Number(e.target.value))}
              className="w-full appearance-none bg-white border border-sand/60 text-ink text-sm px-5 py-4 pr-10 focus:outline-none focus:border-gold transition-colors"
            >
              {zonas.map((z, i) => (
                <option key={z.ciudad} value={i}>
                  {z.ciudad} — {z.localidades}
                </option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ResponsableCard z={zonas[zonaSel]} />
        </div>
      </section>
    </>
  )
}
