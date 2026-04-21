'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const inputClass = "w-full border border-sand/50 bg-white px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors"
const labelClass = "block text-xs tracking-[0.15em] uppercase text-ink/50 mb-2"

export default function LibroReclamacionesPage() {
  const [tipo, setTipo] = useState<'reclamo' | 'queja'>('reclamo')
  const [esmenor, setEsMenor] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [codigoGenerado] = useState(() => {
    const fecha = new Date()
    const año = fecha.getFullYear()
    const num = Math.floor(Math.random() * 9000) + 1000
    return `LR-${año}-${num}`
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center py-24">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-ink mb-4">Reclamo registrado</h2>
          <p className="text-sm text-ink/60 mb-3">
            Tu {tipo} ha sido registrado correctamente. Se enviará una copia al correo electrónico indicado.
          </p>
          <p className="text-xs text-ink/40 mb-8">
            Código de referencia: <strong className="text-ink/70">{codigoGenerado}</strong>
          </p>
          <p className="text-xs text-ink/50 mb-10">
            INCA TOPS S.A. atenderá tu {tipo} en el plazo establecido por la Ley 29571, Código de Protección y Defensa del Consumidor.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs tracking-[0.15em] uppercase text-gold border-b border-gold pb-1 hover:text-ink hover:border-ink transition-colors"
          >
            Registrar otro reclamo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24">

        {/* Badge oficial */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-16">
          <div className="shrink-0">
            <Image
              src="/libro-reclamaciones-badge.png"
              alt="Libro de Reclamaciones"
              width={160}
              height={114}
              priority
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">INCA TOPS S.A.</p>
            <h1 className="font-serif text-3xl text-ink mb-3">Libro de Reclamaciones Virtual</h1>
            <p className="text-sm text-ink/55 leading-relaxed">
              Conforme a lo establecido en el Decreto Supremo 011-2011-PCM y su modificatoria DS 006-2014-PCM.
              Todos los reclamos serán atendidos en el plazo legal correspondiente.
            </p>
          </div>
        </div>

        {/* Info empresa */}
        <div className="bg-beige p-6 mb-10 text-sm text-ink/70 space-y-1">
          <p><strong className="text-ink">Razón social:</strong> INCA TOPS S.A.</p>
          <p><strong className="text-ink">RUC:</strong> 20100199743</p>
          <p><strong className="text-ink">Domicilio:</strong> Avenida Miguel Forga 348 Z.I. Parque Industrial, Arequipa, Perú</p>
          <p><strong className="text-ink">Código del formulario:</strong> {codigoGenerado}</p>
          <p><strong className="text-ink">Fecha:</strong> {new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Tipo */}
          <div>
            <p className={labelClass}>Tipo de registro <span className="text-gold">*</span></p>
            <div className="grid grid-cols-2 gap-3">
              {(['reclamo', 'queja'] as const).map((t) => (
                <label
                  key={t}
                  className={`flex items-center gap-3 p-4 border cursor-pointer transition-all duration-200 ${
                    tipo === t ? 'border-gold bg-gold/5 text-ink' : 'border-sand/50 text-ink/50 hover:border-gold/40'
                  }`}
                >
                  <input type="radio" name="tipo" value={t} checked={tipo === t} onChange={() => setTipo(t)} className="sr-only" />
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${tipo === t ? 'border-gold' : 'border-sand'}`}>
                    {tipo === t && <div className="w-2 h-2 rounded-full bg-gold" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium capitalize">{t}</p>
                    <p className="text-xs text-ink/40 mt-0.5">
                      {t === 'reclamo' ? 'Disconformidad sobre producto/servicio' : 'Malestar sin efecto legal'}
                    </p>
                  </div>
                </label>
              ))}
            </div>
            <p className="text-xs text-ink/40 mt-3">
              <strong>Reclamo:</strong> disconformidad relacionada a los productos o servicios. <strong>Queja:</strong> malestar o descontento respecto a la atención al público.
            </p>
          </div>

          {/* Datos del cliente */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6">Datos del cliente</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className={labelClass}>Nombres y apellidos <span className="text-gold">*</span></label>
                <input type="text" required className={inputClass} placeholder="Nombre completo" />
              </div>
              <div>
                <label className={labelClass}>N° DNI / Documento de identidad <span className="text-gold">*</span></label>
                <input type="text" required className={inputClass} placeholder="00000000" />
              </div>
              <div>
                <label className={labelClass}>Teléfono / Celular</label>
                <input type="tel" className={inputClass} placeholder="+51 999 999 999" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Dirección de domicilio <span className="text-gold">*</span></label>
                <input type="text" required className={inputClass} placeholder="Calle, número, distrito, ciudad" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass}>Correo electrónico <span className="text-gold">*</span></label>
                <input type="email" required className={inputClass} placeholder="tu@correo.com" />
                <p className="text-xs text-ink/40 mt-1">Recibirás una copia automática de tu {tipo} en este correo.</p>
              </div>
            </div>
          </div>

          {/* Menor de edad */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={esmenor}
                onChange={(e) => setEsMenor(e.target.checked)}
                className="w-4 h-4 accent-gold"
              />
              <span className="text-sm text-ink/70">El cliente es menor de edad (requiere datos del padre/representante)</span>
            </label>

            {esmenor && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 border-l-2 border-gold/30 pl-6">
                <p className="sm:col-span-2 text-xs tracking-[0.15em] uppercase text-gold">Datos del padre / representante legal</p>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Nombres y apellidos del representante <span className="text-gold">*</span></label>
                  <input type="text" required={esmenor} className={inputClass} placeholder="Nombre completo del representante" />
                </div>
                <div>
                  <label className={labelClass}>N° DNI del representante <span className="text-gold">*</span></label>
                  <input type="text" required={esmenor} className={inputClass} placeholder="00000000" />
                </div>
                <div>
                  <label className={labelClass}>Teléfono del representante</label>
                  <input type="tel" className={inputClass} placeholder="+51 999 999 999" />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Domicilio del representante</label>
                  <input type="text" className={inputClass} placeholder="Calle, número, distrito, ciudad" />
                </div>
              </div>
            )}
          </div>

          {/* Producto/servicio */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6">Producto o servicio</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label className={labelClass}>Identificación y descripción del producto/servicio <span className="text-gold">*</span></label>
                <input type="text" required className={inputClass} placeholder="Ej: Fibra Imperial Alpaca, Cono 1kg, color Natural" />
              </div>
              <div>
                <label className={labelClass}>Monto del producto/servicio (USD)</label>
                <input type="number" min="0" step="0.01" className={inputClass} placeholder="0.00" />
              </div>
              <div>
                <label className={labelClass}>Fecha de adquisición</label>
                <input type="date" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Detalle */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-6">Detalle del {tipo}</p>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Descripción detallada <span className="text-gold">*</span></label>
                <textarea
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder={`Describe con detalle el motivo de tu ${tipo}...`}
                />
              </div>
              <div>
                <label className={labelClass}>Solicitud concreta <span className="text-gold">*</span></label>
                <textarea
                  required
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="¿Qué solución o respuesta esperas de INCA TOPS?"
                />
              </div>
            </div>
          </div>

          {/* Aviso legal */}
          <div className="bg-beige p-5 text-xs text-ink/55 leading-relaxed">
            <p>Al registrar este {tipo}, acepta que sus datos personales serán tratados conforme a nuestra{' '}
              <Link href="/politica-privacidad" className="text-gold hover:underline">Política de Privacidad</Link>.
              INCA TOPS atenderá su solicitud en los plazos establecidos por la Ley 29571, Código de Protección y Defensa del Consumidor.
              Los registros serán almacenados por un mínimo de dos (2) años.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ink text-white text-xs tracking-[0.2em] uppercase py-5 hover:bg-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Registrando...' : `Registrar ${tipo}`}
          </button>
        </form>
      </div>
    </div>
  )
}
