'use client'

import PageHeader from '@/components/PageHeader'
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

const news = [
  {
    date: 'Marzo 2024',
    category: 'Noticias',
    title: 'Pacomarca presenta nuevos resultados del programa genético Black Alpaca',
    desc: 'La estación científica anuncia el registro de las alpacas número 3,000 en el programa de conservación del color negro puro, un hito histórico para la preservación genética de la especie.',
  },
  {
    date: 'Febrero 2024',
    category: 'Ciencia',
    title: 'Publicación en Journal of Animal Breeding and Genetics sobre finura de alpaca Huacaya',
    desc: 'Un nuevo artículo co-autorado por investigadores de Pacomarca, UNAP y la Universidad Complutense de Madrid presenta avances en la estimación de parámetros genéticos para la finura de fibra.',
  },
  {
    date: 'Enero 2024',
    category: 'Programas',
    title: 'Entrega de la octava Cabaña del Pastor en la comunidad de Llalli',
    desc: 'Pacomarca completó la construcción y entrega de su octava cabaña del pastor, beneficiando a una familia alpaquera de la comunidad de Llalli en la región de Puno.',
  },
  {
    date: 'Diciembre 2023',
    category: 'Fibras',
    title: 'Sixteen Alpaca premiada en la feria Première Vision de París',
    desc: 'La fibra más fina de alpaca del mundo recibió reconocimiento internacional en la principal feria textil de lujo como fibra innovadora y sostenible del año.',
  },
  {
    date: 'Noviembre 2023',
    category: 'Programas',
    title: 'Abrigando Corazones supera los 8,000 kits distribuidos',
    desc: 'El programa de donación de abrigos de alpaca alcanzó un nuevo récord histórico, protegiendo del frío a más de 8,400 niños y adultos mayores en cinco departamentos del Perú.',
  },
  {
    date: 'Octubre 2023',
    category: 'Alianzas',
    title: 'The Inoue Brothers visita Pacomarca y lanza colección Black Alpaca',
    desc: 'Los diseñadores daneses visitaron la estación científica y las comunidades alpaqueras de Puno, resultando en el lanzamiento de una colección exclusiva de Black Alpaca para el mercado europeo.',
  },
]

export default function ActualidadPage() {
  return (
    <>
      <PageHeader
        section="ACTUALIDAD"
        title="Actualidad"
        subtitle="Noticias y novedades del ecosistema Pacomarca"
        imageUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2400&q=90"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2">
            <FadeUp>
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Lo último</p>
              <h2 className="font-serif text-4xl text-ink mb-6">Noticias del ecosistema</h2>
              <p className="text-base text-ink/65 leading-relaxed">
                Seguimos de cerca todos los avances del ecosistema Pacomarca: publicaciones científicas, entregas de programas comunitarios, reconocimientos internacionales y novedades de las marcas aliadas.
              </p>
            </FadeUp>
          </div>
          <div>
            <FadeUp delay={0.2}>
              <div className="bg-beige p-8">
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Categorías</p>
                <div className="flex flex-wrap gap-2">
                  {['Noticias', 'Ciencia', 'Programas', 'Fibras', 'Alianzas', 'Eventos'].map((cat) => (
                    <span key={cat} className="bg-white border border-sand/50 text-ink/50 text-xs px-4 py-2">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.08}>
              <div className="group bg-white border border-sand/40 hover:border-gold/40 hover:shadow-lg transition-all duration-300">
                <div className="bg-cream px-6 py-4 flex items-center justify-between">
                  <span className="text-xs tracking-[0.15em] uppercase text-gold">{item.category}</span>
                  <span className="text-xs text-ink/35">{item.date}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-ink mb-3 group-hover:text-gold transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Mantente informado</p>
            <h2 className="font-serif text-3xl text-white mb-6">
              Suscríbete a las novedades de Pacomarca
            </h2>
            <p className="text-base text-white/60 mb-10">
              Recibe las últimas noticias sobre el ecosistema, publicaciones científicas, programas comunitarios y novedades de las fibras certificadas.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors"
            >
              Contactar para suscribirse
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
