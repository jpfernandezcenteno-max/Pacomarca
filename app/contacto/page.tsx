'use client'

import PageHeader from '@/components/PageHeader'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
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

const rolLabels: Record<string, string> = {
  alpaquero: 'Alpaquero',
  cientifico: 'Científico',
  marca: 'Empresa o Marca',
  programa: 'Apoyo a programas',
  otro: 'Otro',
}

function ContactForm() {
  const searchParams = useSearchParams()
  const rolParam = searchParams.get('rol') || searchParams.get('tipo') || ''

  const [rol, setRol] = useState(rolParam || 'otro')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (rolParam) setRol(rolParam)
  }, [rolParam])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-cream p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-ink mb-4">Mensaje enviado</h3>
        <p className="text-base text-ink/65 mb-6">
          Gracias por contactarnos, {nombre}. Nuestro equipo se pondrá en contacto contigo a la brevedad posible a través de {email}.
        </p>
        <button
          onClick={() => { setSubmitted(false); setNombre(''); setEmail(''); setMensaje(''); }}
          className="text-xs tracking-[0.15em] uppercase text-gold border-b border-gold pb-1 hover:text-ink hover:border-ink transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Role selection */}
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-ink/50 mb-4">Soy:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {(['alpaquero', 'cientifico', 'marca', 'programa', 'otro'] as const).map((r) => (
            <label
              key={r}
              className={`flex items-center gap-3 p-4 border cursor-pointer transition-all duration-200 ${
                rol === r
                  ? 'border-gold bg-gold/5 text-ink'
                  : 'border-sand/50 text-ink/50 hover:border-gold/40'
              }`}
            >
              <input
                type="radio"
                name="rol"
                value={r}
                checked={rol === r}
                onChange={() => setRol(r)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                rol === r ? 'border-gold' : 'border-sand'
              }`}>
                {rol === r && <div className="w-2 h-2 rounded-full bg-gold" />}
              </div>
              <span className="text-sm">{rolLabels[r]}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">
          Nombre y apellido <span className="text-gold">*</span>
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="w-full border border-sand/50 bg-white px-5 py-4 text-sm text-ink focus:outline-none focus:border-gold transition-colors"
          placeholder="Tu nombre completo"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">
          Correo electrónico <span className="text-gold">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-sand/50 bg-white px-5 py-4 text-sm text-ink focus:outline-none focus:border-gold transition-colors"
          placeholder="tu@email.com"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs tracking-[0.2em] uppercase text-ink/50 mb-3">
          Mensaje <span className="text-gold">*</span>
        </label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          rows={6}
          className="w-full border border-sand/50 bg-white px-5 py-4 text-sm text-ink focus:outline-none focus:border-gold transition-colors resize-none"
          placeholder="¿Cómo podemos ayudarte? Cuéntanos sobre ti y tus intereses..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-ink text-white text-xs tracking-[0.2em] uppercase py-5 hover:bg-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        section="CONTACTO"
        title="Contáctanos"
        subtitle="Cuéntanos quién eres y cómo podemos trabajar juntos"
        imageUrl="/contacto/portada.jpg"
        imagePosition="object-[center_65%]"
      />

      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-8">Encuéntranos</p>

            <div className="space-y-10">
              {/* Oficina */}
              <div>
                <h3 className="font-serif text-lg text-ink mb-4">Oficina central</h3>
                <div className="space-y-2 text-sm text-ink/65">
                  <p>Miguel Forga 348, Parque Industrial</p>
                  <p>Arequipa – Perú</p>
                  <p className="mt-3">T++ 51 54 602500</p>
                  <p>Anexo 460 / 461</p>
                </div>
              </div>

              {/* Estación */}
              <div>
                <h3 className="font-serif text-lg text-ink mb-4">Estación científica</h3>
                <div className="space-y-2 text-sm text-ink/65">
                  <a
                    href="https://maps.app.goo.gl/b3Q1F1Tes3CGsDqAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-gold transition-colors"
                  >
                    Carretera Ayaviri-Ocuviri km 54, Llalli, Melgar, Puno
                  </a>
                  <p className="text-xs text-ink/40 mt-2">4,200 m.s.n.m.</p>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-serif text-lg text-ink mb-4">Redes sociales</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/pacomarca_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-ink/65 hover:text-gold transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/pacomarcaperu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-ink/65 hover:text-gold transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>

              {/* Team intro */}
              <div className="bg-beige p-8">
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">Nuestro compromiso</p>
                <p className="text-sm text-ink/65 leading-relaxed">
                  Respondemos todos los mensajes en un plazo máximo de 48 horas hábiles. Si tu consulta es urgente, por favor indica "URGENTE" en el asunto de tu mensaje.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right: Form */}
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-8">Escríbenos</p>
            <Suspense fallback={<div className="text-sm text-ink/50">Cargando formulario...</div>}>
              <ContactForm />
            </Suspense>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
