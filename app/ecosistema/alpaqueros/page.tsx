'use client'

import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
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

const departments = ['Apurímac', 'Cusco', 'Puno', 'Arequipa', 'Huancavelica']

export default function AlpaquerosPage() {
  return (
    <>
      <PageHeader
        section="ECOSISTEMA"
        title="Alpaqueros"
        subtitle="Las familias que custodian la fibra más fina del mundo"
        imageUrl="/ecosistema/alpaqueros/portada.jpg"
        imagePosition="object-[center_15%]"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Pacochayllu</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Familias andinas en el corazón del ecosistema
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                Las comunidades alpaqueras son el pilar fundamental sobre el que se construye todo el ecosistema Pacomarca. Organizadas bajo la red <strong className="text-ink font-medium">Pacochayllu</strong> —término quechua que evoca la comunidad de alpacas—, estas familias son las guardianas de un recurso genético que la humanidad ha cultivado durante miles de años.
              </p>
              <p>
                Son aproximadamente <strong className="text-ink font-medium">1,000 familias alpaqueras</strong> distribuidas en las zonas altoandinas del Perú, viviendo y trabajando desde los <strong className="text-ink font-medium">3,800 metros sobre el nivel del mar</strong>, en condiciones de gran dureza climática, con temperaturas que pueden descender a -20°C durante las heladas.
              </p>
              <p>
                Su conocimiento ancestral sobre el manejo de alpacas, combinado con los programas científicos de Pacomarca, crea una sinergia única que beneficia tanto a las comunidades como a la calidad de la fibra que llega al mercado internacional.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/ecosistema/alpaqueros/foto-1.jpg"
                alt="Familia alpaquera andina"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-beige py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp>
              <div className="text-center p-10 bg-white">
                <p className="font-serif text-6xl text-gold mb-3">~1,000</p>
                <p className="text-sm text-ink/60 uppercase tracking-[0.15em]">Familias alpaqueras</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="text-center p-10 bg-white">
                <p className="font-serif text-6xl text-gold mb-3">3,800+</p>
                <p className="text-sm text-ink/60 uppercase tracking-[0.15em]">Metros sobre el nivel del mar</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="text-center p-10 bg-white">
                <p className="font-serif text-6xl text-gold mb-3">5</p>
                <p className="text-sm text-ink/60 uppercase tracking-[0.15em]">Departamentos</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Presencia geográfica</p>
            <h2 className="font-serif text-3xl text-ink mb-8">Departamentos de origen</h2>
            <div className="space-y-4">
              {departments.map((dept, i) => (
                <div key={dept} className="flex items-center gap-4 py-4 border-b border-sand/40">
                  <span className="font-serif text-2xl text-gold/40">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-xl text-ink">{dept}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Beneficios del programa</p>
            <h2 className="font-serif text-3xl text-ink mb-8">Lo que reciben las familias</h2>
            <div className="space-y-6">
              {[
                { title: 'Mejora genética', desc: 'Acceso a reproductores machos de alta genética que mejoran la calidad de la fibra de todo el hato familiar.' },
                { title: 'Infraestructura', desc: 'Cabañas del pastor, módulos de esquila e invernaderos comunitarios construidos y entregados a las comunidades.' },
                { title: 'Precio justo', desc: 'Gracias a la trazabilidad y certificación, las familias reciben mejores precios por su fibra en el mercado.' },
                { title: 'Capacitación', desc: 'Programas de formación en bienestar animal, sanidad, manejo del hato y uso de software PacoPro.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 bg-gold flex-shrink-0 mt-1" style={{ height: 'auto' }} />
                  <div>
                    <h4 className="font-serif text-lg text-ink mb-1">{item.title}</h4>
                    <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Únete a la red</p>
            <h2 className="font-serif text-3xl text-white mb-6">
              ¿Eres alpaquero y quieres ser parte de Pacomarca?
            </h2>
            <p className="text-base text-white/60 mb-10 leading-relaxed">
              Si eres criador de alpacas y te interesa acceder a mejoras genéticas, programas de bienestar animal, capacitaciones y mejores precios para tu fibra, nos gustaría conocerte.
            </p>
            <Link
              href="/contacto?rol=alpaquero"
              className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors"
            >
              Soy alpaquero y me interesa conocer más
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
