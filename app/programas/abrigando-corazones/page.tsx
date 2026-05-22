'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import ImageCarousel from '@/components/ImageCarousel'
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

const kitItems = [
  { item: 'Mantas', desc: 'De alpaca o mezcla, para protección del frío nocturno extremo.' },
  { item: 'Suéteres', desc: 'Confeccionados con fibra de alpaca para niños y adultos mayores.' },
  { item: 'Medias', desc: 'De alpaca, especialmente eficaces para proteger del frío del suelo altiplánico.' },
  { item: 'Bufandas', desc: 'Para protección del cuello y rostro en las condiciones de viento y frío extremo.' },
  { item: 'Chullos', desc: 'El gorro tradicional andino, confeccionado con fibra de alpaca.' },
  { item: 'Juguetes', desc: 'Para los niños beneficiarios, aportando alegría además de abrigo.' },
  { item: 'Hilos de alpaca', desc: 'Para que las madres y abuelas puedan continuar tejiendo para sus familias.' },
]

export default function AbrigandoCorazonesPage() {
  return (
    <>
      <PageHeader
        section="PROGRAMAS"
        title="Abrigando Corazones"
        subtitle="Abrigo de alpaca para los más vulnerables de las comunidades andinas"
        imageUrl="/programas/abrigando-corazones/portada.jpg"
        imagePosition="object-center"
      />

      {/* Stat + Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <div className="inline-block bg-gold text-white px-8 py-5 mb-10">
              <p className="text-xs tracking-[0.25em] uppercase opacity-80 mb-1">Impacto acumulado</p>
              <p className="font-serif text-4xl">8,400+ kits donados</p>
            </div>

            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Solidaridad andina</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              La fibra más fina del mundo, al servicio de quienes más la necesitan
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                Abrigando Corazones es el programa más cercano al corazón del ecosistema Pacomarca. Su premisa es simple y poderosa: en las zonas donde se produce la fibra de alpaca más fina del mundo, los habitantes más vulnerables —niños y adultos mayores— no siempre tienen acceso a ella.
              </p>
              <p>
                Con el <strong className="text-ink font-medium">40% de la población rural en situación de pobreza</strong> en las zonas altoandinas, el programa recolecta y distribuye kits de abrigo de alpaca entre las familias más vulnerables de las comunidades participantes.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-ink text-white p-10">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-8">El problema</p>
              <div className="text-center py-6">
                <p className="font-serif text-7xl text-gold mb-4">40%</p>
                <p className="text-base text-white/60 mb-6">de la población rural altoandina vive en situación de pobreza</p>
              </div>
              <p className="text-sm text-white/50 leading-relaxed border-t border-white/10 pt-6">
                En las mismas alturas donde se produce la fibra de alpaca valorada en los mercados de lujo del mundo, miles de niños y adultos mayores no tienen acceso a ropa de abrigo adecuada para sobrevivir las heladas andinas.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Kit contents */}
      <section className="bg-beige py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Contenido del kit</p>
              <h2 className="font-serif text-3xl text-ink">¿Qué lleva cada kit Abrigando Corazones?</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kitItems.map((k, i) => (
              <FadeUp key={k.item} delay={i * 0.08}>
                <div className="bg-white p-6 h-full">
                  <h3 className="font-serif text-lg text-ink mb-2">{k.item}</h3>
                  <p className="text-sm text-ink/50 leading-relaxed">{k.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Cómo funciona</p>
            <h2 className="font-serif text-3xl text-ink mb-6">Del excedente productivo al abrigo solidario</h2>
            <div className="space-y-4 text-base text-ink/65 leading-relaxed">
              <p>
                Los kits se confeccionan principalmente con fibra de alpaca producida por las mismas comunidades, incluyendo calidades y colores que no siempre encuentran mercado en el exterior pero que son perfectamente adecuados para prendas de uso diario.
              </p>
              <p>
                Este modelo permite dar valor a fibra que podría desperdiciarse, involucra a artesanas locales en la confección, y genera abrigo para los más necesitados — todo dentro del mismo ecosistema.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Beneficiarios</p>
            <h2 className="font-serif text-3xl text-ink mb-6">¿A quiénes llega el programa?</h2>
            <div className="space-y-3">
              {[
                { title: 'Niños de 0 a 5 años', desc: 'La primera infancia en el altiplano es la más vulnerable a las heladas. Los kits incluyen prendas especialmente diseñadas para proteger a los bebés y niños pequeños.' },
                { title: 'Adultos mayores', desc: 'Las personas mayores de las comunidades alpaqueras frecuentemente carecen de los recursos para adquirir ropa de abrigo adecuada.' },
                { title: 'Familias en extrema vulnerabilidad', desc: 'Los kits se distribuyen priorizando a las familias identificadas como de mayor vulnerabilidad en las comunidades participantes.' },
              ].map((item) => (
                <div key={item.title} className="bg-cream p-6">
                  <h4 className="font-serif text-base text-ink mb-2">{item.title}</h4>
                  <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
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
            <blockquote className="mb-10">
              <p className="font-serif text-2xl text-white/80 italic leading-relaxed">
                "En el mismo lugar donde nace la fibra más preciada del mundo, aseguramos que sus guardianes tengan el abrigo que merecen."
              </p>
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programas" className="inline-block border border-white/30 text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 transition-colors">
                ← Volver a programas
              </Link>
              <Link href="/contacto?tipo=programa" className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold/90 transition-colors">
                Apoyar este programa
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <ImageCarousel images={[
        '/programas/abrigando-corazones/portada.jpg',
        '/programas/cabana-del-pastor/portada.jpg',
        '/programas/cabana-del-pastor/foto-1.jpg',
        '/programas/invernadero/portada.jpg',
        '/programas/invernadero/foto-1.jpg',
        '/programas/lote-de-machos/portada.jpg',
        '/programas/lote-de-machos/foto-1.jpg',
        '/programas/modulo-de-esquila/portada.jpg',
        '/programas/modulo-de-esquila/foto-1.jpg',
        '/programas/fondo-investigacion/portada.jpg',
        '/programas/portada.jpg',
      ]} />
    </>
  )
}
