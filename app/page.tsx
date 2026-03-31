'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function useTypewriter(text: string, speed = 40, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayed, done }
}

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const stats = [
  { number: '8', label: 'Cabañas del pastor construidas' },
  { number: '1', label: 'Invernadero comunitario' },
  { number: '1,512', label: 'Alpacas donadas a familias' },
  { number: '9', label: 'Módulos de esquila implementados' },
  { number: '32', label: 'Artículos científicos publicados' },
  { number: '8,400+', label: 'Kits Abrigando Corazones' },
]

const actors = [
  {
    title: 'Alpaqueros',
    href: '/ecosistema/alpaqueros',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: 'Comunidades alpaqueras de los Andes que son el corazón del ecosistema. Familias que desde los 3,800m de altitud custodian la fibra más fina del mundo.',
  },
  {
    title: 'Científicos',
    href: '/ecosistema/cientificos',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: 'Red de más de 30 investigadores y 23 universidades generando conocimiento científico para mejorar la genética alpaquera.',
  },
  {
    title: 'Marcas Aliadas',
    href: '/ecosistema/marcas-aliadas',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Marcas del Grupo Inca y aliados estratégicos globales que validan y comercializan las fibras certificadas del ecosistema.',
  },
  {
    title: 'Sociedad Civil',
    href: '/ecosistema',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Organizaciones, consumidores e instituciones que eligen la sostenibilidad y apoyan el comercio justo de la fibra andina.',
  },
]

const programs = [
  {
    title: 'Cabaña del Pastor',
    href: '/programas/cabana-del-pastor',
    description: 'Viviendas dignas para familias alpaqueras en las alturas andinas, con servicios básicos y equipamiento.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    stat: '8 construidas',
  },
  {
    title: 'Lote de Machos',
    href: '/programas/lote-de-machos',
    description: 'Donación de reproductores genéticamente seleccionados para mejorar la calidad de la fibra de las comunidades.',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=85',
    stat: '1,512 alpacas donadas',
  },
  {
    title: 'Abrigando Corazones',
    href: '/programas/abrigando-corazones',
    description: 'Kits de abrigo para niños y adultos mayores en las zonas más vulnerables de las comunidades andinas.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&q=85',
    stat: '8,400+ kits donados',
  },
]

const fibers = [
  { name: 'Divine', label: 'Divine Alpaca', href: '/fibras/divine', description: 'Cero medulación. La suavidad perfecta.' },
  { name: 'Sixteen', label: 'Sixteen Alpaca', href: '/fibras/sixteen', description: '< 17 micras. La más fina del mundo.' },
  { name: 'Imperial', label: 'Imperial Alpaca', href: '/fibras/imperial', description: '< 18 micras. Certificación RAS.' },
  { name: 'Black', label: 'Black Alpaca', href: '/fibras/black', description: 'Negro natural puro. 0.07% producción.' },
  { name: 'Colores Puros', label: 'Colores Puros', href: '/fibras/colores-puros', description: '22+ tonalidades. Sin tinturas químicas.' },
]

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const { displayed, done } = useTypewriter('El principal Ecosistema de Alpaca Sostenible del mundo', 80)
  const textOpacity = useTransform(scrollY, [0, 40], [1, 0])
  const textY = useTransform(scrollY, [0, 40], [0, -30])
  const overlayOpacity = useTransform(scrollY, [0, 40], [0.6, 0])

  useEffect(() => {
    let jumping = false

    const handleWheel = (e: WheelEvent) => {
      const y = window.scrollY
      const vh = window.innerHeight
      // Si estamos en la zona del video (texto ya desapareció) y scrolleamos hacia abajo
      if (y > 40 && y < vh * 1.9 && e.deltaY > 0 && !jumping) {
        e.preventDefault()
        jumping = true
        window.scrollTo({ top: vh * 2, behavior: 'smooth' })
        setTimeout(() => { jumping = false }, 1000)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <>
      {/* HERO — 200vh para efecto inmersivo */}
      <section ref={heroRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Video — reemplazar src con el video real */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/856010/856010-hd_1920_1080_25fps.mp4" type="video/mp4" />
            {/* Fallback imagen mientras no haya video */}
            <img
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=2400&q=90"
              alt="Pacomarca"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>

          {/* Overlay que desaparece al scrollear */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-ink"
          />

          {/* Texto que desaparece al scrollear */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="relative z-10 h-full flex items-center justify-center text-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <p className="text-xs tracking-[0.35em] uppercase text-gold mb-6 font-medium">
                Grupo Inca — Perú
              </p>
              <h1 className="relative font-serif text-4xl md:text-5xl lg:text-7xl text-white font-semibold leading-tight mb-8 max-w-4xl mx-auto">
                {/* Reserva el espacio completo desde el inicio */}
                <span className="invisible">El principal Ecosistema de Alpaca Sostenible del mundo</span>
                {/* Texto animado superpuesto */}
                <span className="absolute inset-0">
                  {displayed}
                  {!done && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-10 font-light">
                Impulsado por el Grupo Inca
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/ecosistema"
                  className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/90 transition-colors duration-200"
                >
                  Conocer el ecosistema
                </Link>
                <Link
                  href="/fibras"
                  className="inline-block border border-white/50 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors duration-200"
                >
                  Ver fibras
                </Link>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              style={{ opacity: textOpacity }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs tracking-[0.2em] text-white/50 uppercase">Scroll</span>
                <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Nuestra historia</p>
            <blockquote className="font-serif text-2xl lg:text-3xl text-ink leading-relaxed mb-8">
              "En las alturas de los Andes peruanos, donde la relación entre el ser humano y la alpaca se ha tejido durante milenios, nace Pacomarca."
            </blockquote>
            <p className="text-base text-ink/60 leading-relaxed mb-6">
              Pacomarca es la estación científica de alpacas más importante del mundo. Desde aquí, articulamos un ecosistema único que une a comunidades alpaqueras, científicos, marcas de lujo y la sociedad civil en torno a un objetivo común: la sostenibilidad real de la fibra de alpaca.
            </p>
            <p className="text-base text-ink/60 leading-relaxed mb-8">
              Con más de 13 millones de datos genéticos acumulados y décadas de investigación científica, hemos desarrollado las fibras más finas y sostenibles del mundo, transformando vidas en las comunidades altoandinas del Perú.
            </p>
            <Link
              href="/ecosistema"
              className="inline-block text-xs tracking-[0.2em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Descubrir el ecosistema
            </Link>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85"
                alt="Comunidad alpaquera peruana"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Impacto real</p>
              <h2 className="font-serif text-4xl text-ink">Números que transforman comunidades</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center p-8 bg-white/60">
                  <p className="font-serif text-5xl lg:text-6xl text-gold mb-3">{stat.number}</p>
                  <p className="text-sm text-ink/60 leading-snug">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Sustainable Alpaca Network</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-6">Un ecosistema vivo</h2>
            <p className="text-base text-ink/60 max-w-2xl mx-auto leading-relaxed">
              La verdadera sostenibilidad de la alpaca solo es posible cuando todos los actores de la cadena trabajan juntos, con objetivos claros y beneficios compartidos.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actors.map((actor, i) => (
            <FadeUp key={actor.title} delay={i * 0.1}>
              <Link href={actor.href}>
                <div className="group p-8 border border-sand/50 hover:border-gold/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-gold mb-6">{actor.icon}</div>
                  <h3 className="font-serif text-xl text-ink mb-4 group-hover:text-gold transition-colors">
                    {actor.title}
                  </h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{actor.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Conocer más</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="bg-cream py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Programas</p>
                <h2 className="font-serif text-4xl lg:text-5xl text-ink">
                  Comprometidos con las comunidades
                </h2>
              </div>
              <Link
                href="/programas"
                className="text-xs tracking-[0.2em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-gold hover:text-gold transition-colors whitespace-nowrap"
              >
                Ver todos los programas
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <FadeUp key={program.title} delay={i * 0.15}>
                <Link href={program.href}>
                  <div className="group overflow-hidden bg-white">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-gold text-white text-xs tracking-[0.1em] px-3 py-1">
                        {program.stat}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-sm text-ink/55 leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FIBRAS */}
      <section className="bg-ink py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Fibras de excepción</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">
                Las fibras más finas del mundo
              </h2>
              <p className="text-base text-white/50 max-w-2xl mx-auto">
                Cada fibra Pacomarca es el resultado de décadas de investigación científica, selección genética rigurosa y el cuidado de cientos de familias alpaqueras.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {fibers.map((fiber, i) => (
              <FadeUp key={fiber.name} delay={i * 0.1}>
                <Link href={fiber.href}>
                  <div className="group border border-white/10 hover:border-gold/50 p-8 text-center transition-all duration-300">
                    <div className="w-16 h-16 rounded-full border border-gold/30 group-hover:border-gold mx-auto mb-6 flex items-center justify-center transition-colors duration-300">
                      <span className="font-serif text-lg text-gold">{fiber.name.charAt(0)}</span>
                    </div>
                    <h3 className="font-serif text-base text-white mb-2 group-hover:text-gold transition-colors">
                      {fiber.label}
                    </h3>
                    <p className="text-xs text-white/40 leading-relaxed">{fiber.description}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.5}>
            <div className="text-center">
              <Link
                href="/fibras"
                className="inline-block border border-gold text-gold text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold hover:text-white transition-all duration-300"
              >
                Explorar todas las fibras
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=90"
          alt="Andes peruanos"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <FadeUp>
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <svg className="w-8 h-6 text-gold mx-auto mb-8 opacity-60" fill="currentColor" viewBox="0 0 32 24">
              <path d="M0 24V14.4C0 6.528 5.016 1.392 15.048 0L16.8 2.976C12.624 3.984 9.888 5.616 8.592 8.112H14.4V24H0zm17.6 0V14.4C17.6 6.528 22.616 1.392 32.648 0L34.4 2.976C30.224 3.984 27.488 5.616 26.192 8.112H32V24H17.6z" />
            </svg>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-relaxed">
              La verdadera sostenibilidad solo es posible cuando todos ganan.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-beige py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Únete</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ink mb-4">Sé parte del ecosistema.</h2>
            <p className="text-base text-ink/60 max-w-xl mx-auto mb-16">
              El ecosistema Pacomarca crece con la participación de diferentes actores. ¿Cuál es tu rol?
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Soy alpaquero', role: 'alpaquero', desc: 'Accede a programas, capacitación y mejoras genéticas para tu hato.' },
              { label: 'Soy científico', role: 'cientifico', desc: 'Colabora con nuestra red de investigación y accede a datos únicos.' },
              { label: 'Soy una marca', role: 'marca', desc: 'Trabaja con fibras certificadas y trazables de la más alta calidad.' },
            ].map((cta, i) => (
              <FadeUp key={cta.role} delay={i * 0.1}>
                <Link href={`/contacto?rol=${cta.role}`}>
                  <div className="group bg-white border border-sand/40 p-8 hover:border-gold/50 hover:shadow-md transition-all duration-300 h-full">
                    <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors">
                      {cta.label}
                    </h3>
                    <p className="text-sm text-ink/55 leading-relaxed mb-6">{cta.desc}</p>
                    <span className="text-xs tracking-[0.15em] uppercase text-gold">
                      Escribenos →
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
