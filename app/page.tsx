'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'


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
  const inView = useInView(ref, { once: true, margin: '-60px' })

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
  {
    number: '8',
    label: 'Cabañas del pastor construidas',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    number: '1',
    label: 'Invernadero comunitario',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
  },
  {
    number: '1,512',
    label: 'Alpacas donadas a familias',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    number: '9',
    label: 'Módulos de esquila implementados',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <circle cx="6" cy="6" r="3" />
        <path d="M8.12 8.12 12 12" />
        <path d="M20 4 8.12 15.88" />
        <circle cx="6" cy="18" r="3" />
        <path d="M14.8 14.8 20 20" />
      </svg>
    ),
  },
  {
    number: '32',
    label: 'Artículos científicos publicados',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.066 9.066 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    number: '8,400+',
    label: 'Kits Abrigando Corazones',
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
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
    image: '/programas/cabana-del-pastor/portada.jpg',
    stat: '8 construidas',
  },
  {
    title: 'Lote de Machos',
    href: '/programas/lote-de-machos',
    description: 'Donación de reproductores genéticamente seleccionados para mejorar la calidad de la fibra de las comunidades.',
    image: '/programas/lote-de-machos/portada.jpg',
    stat: '1,512 alpacas donadas',
  },
  {
    title: 'Tejiendo Corazones',
    href: '/programas/tejiendo-corazones',
    description: 'Kits de abrigo para niños y adultos mayores en las zonas más vulnerables de las comunidades andinas.',
    image: '/programas/tejiendo-corazones/portada.jpg',
    stat: '8,400+ kits donados',
  },
]

const fibers = [
  { name: 'Divine', label: 'Divine Alpaca', href: '/fibras/divine', description: 'Bajo % de medulación. La suavidad perfecta.', image: '/fibras/fibra-divine-imperial-sixteen.jpg' },
  { name: 'Sixteen', label: 'Sixteen Alpaca', href: '/fibras/sixteen', description: '< 17 micras. La más fina del mundo.', image: '/fibras/fibra-divine-imperial-sixteen.jpg' },
  { name: 'Imperial', label: 'Imperial Alpaca', href: '/fibras/imperial', description: '< 18 micras. Certificación RAS.', image: '/fibras/fibra-divine-imperial-sixteen.jpg' },
  { name: 'Black', label: 'Black Alpaca', href: '/fibras/black', description: 'Negro natural puro. 0.07% producción.', image: '/fibras/fibra-black.jpg' },
  { name: 'Colores Naturales', label: 'Colores Naturales', href: '/fibras/colores-puros', description: '22+ tonalidades. Sin tinturas químicas.', image: '/fibras/fibra-colores.jpg' },
]

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const cinemaRef = useRef(false)
  const [cinema, setCinema] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [animateHeight, setAnimateHeight] = useState(true)
  const scrolledAway = useRef(false)

  const enterCinema = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = false
      videoRef.current.play().catch(() => {})
    }
    setMuted(false)
    setCinema(true)
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      // Si termino, reinicia desde el inicio antes de reproducir
      if (v.ended || v.currentTime >= v.duration - 0.1) v.currentTime = 0
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }

  useEffect(() => {
    // El video arranca pausado: solo se reproduce al dar play
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.pause()
    }
    const resetVideo = () => {
      setMuted(true)
      setPlaying(false)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        videoRef.current.muted = true
      }
    }
    const onScroll = () => {
      const y = window.scrollY
      const vh = window.innerHeight
      if (y > vh * 0.4) scrolledAway.current = true

      // Al terminar de pasar la seccion del video: volver a normal sin salto visible
      if (cinemaRef.current && sectionRef.current && y >= sectionRef.current.offsetHeight) {
        const oldH = sectionRef.current.offsetHeight
        scrolledAway.current = false
        setAnimateHeight(false) // sin animacion: el hero crece fuera de la vista
        setCinema(false)
        resetVideo()
        requestAnimationFrame(() => {
          if (sectionRef.current) window.scrollBy(0, sectionRef.current.offsetHeight - oldH)
          requestAnimationFrame(() => setAnimateHeight(true))
        })
        return
      }

      // Al volver arriba del todo: reset completo, como reingresar a la web
      if (y <= 5 && scrolledAway.current) {
        scrolledAway.current = false
        setCinema(false)
        resetVideo()
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Avisa al navbar para que se oculte mientras se reproduce el video
  useEffect(() => {
    cinemaRef.current = cinema
    window.dispatchEvent(new CustomEvent('hero-cinema', { detail: cinema }))
  }, [cinema])


  return (
    <>
      {/* HERO */}
      <section
        ref={sectionRef}
        className={`relative w-full overflow-hidden bg-ink ${
          animateHeight ? 'transition-[height] duration-700 ease-in-out' : ''
        } ${cinema ? 'h-[42.71vw] min-h-[300px]' : 'h-screen'}`}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          poster="/home/hero-poster.jpg"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home/20240813163648.mp4" type="video/mp4" />
        </video>

        {/* Overlay oscuro (se desvanece en modo video) */}
        <motion.div
          animate={{ opacity: cinema ? 0 : 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 bg-ink pointer-events-none"
        />

        {/* Controles — solo en modo video */}
        {cinema && (
          <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
            {/* Play / Pausa */}
            <button
              onClick={togglePlay}
              className="bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
              aria-label={playing ? 'Pausar' : 'Reproducir'}
            >
              {playing ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Volumen */}
            <button
              onClick={() => {
                if (!videoRef.current) return
                videoRef.current.muted = !videoRef.current.muted
                setMuted(videoRef.current.muted)
              }}
              className="bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
              aria-label={muted ? 'Activar sonido' : 'Silenciar'}
            >
              {muted ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
        )}

        {/* Texto + botón "Ver video" (se ocultan en modo video) */}
        <motion.div
          animate={{ opacity: cinema ? 0 : 1, y: cinema ? -20 : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`relative z-10 h-full flex items-center justify-center text-center px-6 ${cinema ? 'pointer-events-none' : ''}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-white mb-6 font-medium">
              Grupo Inca — Perú
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-semibold leading-tight mb-8 max-w-4xl mx-auto">
              <motion.span
                className="inline"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
              >
                {['El', 'principal', 'Ecosistema', 'de', 'Alpaca', 'Sostenible', 'del', 'mundo'].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light mb-10">
              Impulsado por el Grupo Inca
            </p>
            <button
              onClick={enterCinema}
              className="inline-flex items-center gap-3 border border-white/50 text-white text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-white hover:text-ink transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              Ver video
            </button>
          </motion.div>
        </motion.div>
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
              Nuestra estación científica es reconocida internacionalmente por sus avances en mejora genética, trazabilidad y bienestar animal. Sin embargo, más allá de los laboratorios, la verdadera innovación está en llevar este conocimiento de regreso a los criadores altoandinos, quienes mejoran sus rebaños y la calidad de la fibra que producen. De esta manera, cada avance científico se traduce en un beneficio concreto para las familias alpaqueras y para toda la industria.
            </p>
            <p className="text-base text-ink/60 leading-relaxed mb-8">
              En Pacomarca trabajamos para que el legado de la alpaca se mantenga vivo, conectando a los productores con consumidores y marcas que valoran la transparencia, la calidad y la sostenibilidad. Ser parte de Pacomarca es integrarse a un ecosistema global que entiende que la verdadera sostenibilidad solo es posible cuando todos ganan: los alpaqueros, la naturaleza y quienes buscan en la alpaca un lujo auténtico.
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
                src="/home/foto-1.jpg"
                alt="Comunidad alpaquera peruana"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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
                  <div className="text-gold/70 mb-4 flex justify-center">{stat.icon}</div>
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
              Red de más de 30 investigadores de unas 23 Universidades y Centros de Investigación generando conocimiento científico a nivel mundial.
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
                        sizes="(max-width: 768px) 100vw, 33vw"
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
                Las fibras más exclusivas del mundo
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
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 ring-1 ring-gold/30 group-hover:ring-gold transition-all duration-300 relative">
                      <Image src={fiber.image} alt={fiber.label} fill sizes="112px" className="object-cover scale-[1.2] object-center" />
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

      {/* BLOG */}
      <section className="py-28 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Blog</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-ink">Últimas publicaciones</h2>
            </div>
            <Link href="/blog" className="text-xs tracking-[0.2em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-gold hover:text-gold transition-colors whitespace-nowrap">
              Ver todos los artículos
            </Link>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'LCA de la fibra de alpaca: ¿qué hacemos con el metano?',
              desc: 'Pacomarca y la IAEA unen fuerzas para medir y reducir las emisiones de los camélidos sudamericanos.',
              category: 'Sostenibilidad · IAEA',
              date: 'Marzo 2026',
              image: '/blog/blog-1/foto-1.jpg',
              href: '/blog',
            },
            {
              title: 'Los genes que definen el negro en la alpaca Huacaya: ASIP y MC1R',
              desc: 'Estudio realizado en Pacomarca identifica, por primera vez, los genotipos que permiten predecir el color oscuro en la fibra.',
              category: 'Investigación · Genómica',
              date: 'Enero 2026',
              image: '/blog/blog-2/foto-1.jpg',
              href: '/blog',
            },
          ].map((post, i) => (
            <FadeUp key={post.title} delay={i * 0.1}>
              <Link href={post.href}>
                <div className="group overflow-hidden bg-white border border-sand/40 hover:border-gold/40 hover:shadow-lg transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="px-6 py-3 flex items-center justify-between bg-cream">
                    <span className="text-xs tracking-[0.15em] uppercase text-gold">{post.category}</span>
                    <span className="text-xs text-ink/35">{post.date}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-gold transition-colors leading-snug">{post.title}</h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{post.desc}</p>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
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
