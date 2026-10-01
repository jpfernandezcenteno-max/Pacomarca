'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

type VideoHeroProps = {
  videoSrc: string
  poster: string
  /** Altura del hero cuando el video se reproduce (proporción del video). Ej: 'h-[56.25vw]' para 16:9. */
  cinemaHeightClass: string
  /** object-fit del video en modo reproducción. 'object-cover' (default) o 'object-contain' para verlo entero. */
  cinemaFitClass?: string
  /** Contenido del hero (texto + CTA). Recibe `enterCinema` para el botón "Ver video". */
  children: (api: { enterCinema: () => void }) => React.ReactNode
}

export default function VideoHero({ videoSrc, poster, cinemaHeightClass, cinemaFitClass = 'object-cover', children }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const cinemaRef = useRef(false)
  const [cinema, setCinema] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [animateHeight, setAnimateHeight] = useState(true)
  const [uiVisible, setUiVisible] = useState(true)
  const [wiping, setWiping] = useState(false)
  const wipe = useMotionValue(0)
  const SOFT = 80
  const LAG = 8
  const SPAN = 100 + LAG + SOFT
  const wipeMask = useTransform(wipe, (v) => {
    const cover = v * SPAN
    const reveal = Math.max(0, cover - LAG)
    return `linear-gradient(90deg, transparent ${reveal - SOFT}%, #000 ${reveal}%, #000 ${cover}%, transparent ${cover + SOFT}%)`
  })
  const posterMask = useTransform(wipe, (v) => {
    const cover = v * SPAN
    const reveal = Math.max(0, cover - LAG)
    return `linear-gradient(90deg, #000 ${reveal - SOFT}%, transparent ${reveal}%)`
  })
  const scrolledAway = useRef(false)

  const enterCinema = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.volume = 1
      videoRef.current.muted = false
      videoRef.current.play().catch(() => {})
    }
    setWiping(false)
    wipe.set(0)
    setMuted(false)
    setCinema(true)
    setUiVisible(false)
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      if (v.ended || v.currentTime >= v.duration - 0.1) v.currentTime = 0
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }

  const goFullscreen = () => {
    const v = videoRef.current as any
    if (!v) return
    try { v.play() } catch {}
    if (v.webkitEnterFullscreen) {
      v.webkitEnterFullscreen()
      return
    }
    const req = v.requestFullscreen || v.webkitRequestFullscreen
    if (req) {
      Promise.resolve(req.call(v))
        .then(() => {
          const o = (screen as any).orientation
          if (o && o.lock) o.lock('landscape').catch(() => {})
        })
        .catch(() => {})
    }
  }

  const endTransition = () => {
    setWiping(true)
    wipe.set(0)
    animate(wipe, 1, { duration: 2.2, ease: 'easeInOut' })
    window.setTimeout(() => {
      setAnimateHeight(true)
      scrolledAway.current = false
      setCinema(false)
      setMuted(true)
      setPlaying(false)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        videoRef.current.muted = true
      }
    }, 2200)
    window.setTimeout(() => {
      setUiVisible(true)
      setWiping(false)
    }, 2900)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.pause()
    }
    const resetVideo = () => {
      setMuted(true)
      setPlaying(false)
      setUiVisible(true)
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

      if (cinemaRef.current && videoRef.current && sectionRef.current) {
        videoRef.current.volume = Math.max(0, Math.min(1, 1 - y / sectionRef.current.offsetHeight))
      }

      if (cinemaRef.current && sectionRef.current && y >= sectionRef.current.offsetHeight) {
        const oldH = sectionRef.current.offsetHeight
        scrolledAway.current = false
        setAnimateHeight(false)
        setCinema(false)
        resetVideo()
        requestAnimationFrame(() => {
          if (sectionRef.current) window.scrollBy(0, sectionRef.current.offsetHeight - oldH)
          requestAnimationFrame(() => setAnimateHeight(true))
        })
        return
      }

      if (y <= 5 && scrolledAway.current) {
        scrolledAway.current = false
        setCinema(false)
        resetVideo()
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    cinemaRef.current = cinema
  }, [cinema])

  // Oculta el navbar mientras la UI del hero no está visible (modo video)
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('hero-cinema', { detail: !uiVisible }))
  }, [uiVisible])

  return (
    <>
      {/* Preload del poster para un LCP rápido */}
      <link rel="preload" as="image" href={poster} fetchPriority="high" />

      <section
        ref={sectionRef}
        className={`relative w-full overflow-hidden bg-ink ${
          animateHeight ? 'transition-[height] duration-700 ease-in-out' : ''
        } ${cinema ? `${cinemaHeightClass} min-h-[300px]` : 'h-screen'}`}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          poster={poster}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={endTransition}
          className={`absolute inset-0 w-full h-full bg-ink ${cinema ? cinemaFitClass : 'object-cover'}`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Overlay oscuro */}
        <motion.div
          animate={{ opacity: uiVisible ? 0.5 : 0 }}
          transition={{ duration: uiVisible ? 1.4 : 0.8, ease: 'easeOut' }}
          className="absolute inset-0 bg-ink pointer-events-none"
        />

        {/* Poster que se revela por detrás del blanco */}
        {wiping && (
          <motion.img
            src={poster}
            alt=""
            aria-hidden
            style={{ WebkitMaskImage: posterMask, maskImage: posterMask }}
            className="absolute inset-0 w-full h-full object-cover z-30 pointer-events-none"
          />
        )}

        {/* Frente blanco que barre */}
        {wiping && (
          <motion.div
            aria-hidden
            style={{ WebkitMaskImage: wipeMask, maskImage: wipeMask }}
            className="absolute inset-0 bg-white z-40 pointer-events-none"
          />
        )}

        {/* Controles — solo en modo video */}
        {cinema && (
          <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
            <button
              onClick={goFullscreen}
              className="md:hidden bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
              aria-label="Ver en pantalla completa"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9V5a1 1 0 011-1h4M20 9V5a1 1 0 00-1-1h-4M4 15v4a1 1 0 001 1h4M20 15v4a1 1 0 01-1 1h-4" />
              </svg>
            </button>

            <button
              onClick={togglePlay}
              className="bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
              aria-label={playing ? 'Pausar' : 'Reproducir'}
            >
              {playing ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>

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

        {/* Contenido (texto + CTA) — se oculta en modo video */}
        <motion.div
          animate={{ opacity: uiVisible ? 1 : 0, y: uiVisible ? 0 : -20 }}
          transition={{ duration: uiVisible ? 1.4 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`relative z-10 h-full flex items-center justify-center text-center px-6 ${uiVisible ? '' : 'pointer-events-none'}`}
        >
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
            {children({ enterCinema })}
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
