'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
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

const tabs = [
  {
    id: 'black',
    label: 'Black Alpaca',
    title: 'Programa Black Alpaca',
    objetivo: 'Rescatar y fortalecer la población de alpacas de color negro puro para producir fibra en su tonalidad natural, preservando un recurso genético único que forma parte de la diversidad y riqueza de los Andes.',
    logros: [
      'Se han registrado más de 3,000 alpacas negras.',
      'Cada año se mantiene un promedio de 1,000 ejemplares vivos en Pacomarca, conformando una de las poblaciones más grandes y organizadas de esta variedad en el mundo.',
    ],
    impacto: 'La fibra negra natural, antes en riesgo de desaparecer, ha recuperado su valor en el mercado y hoy alcanza precios similares a la fibra blanca, generando nuevas oportunidades para las familias alpaqueras.',
    color: 'bg-ink text-white',
    accent: 'border-gold',
    image: '/conocimiento/programa-genetico/foto-1.jpg',
  },
  {
    id: 'extrafinas',
    label: 'Fibras Extrafinas',
    title: 'Programa Fibras Extrafinas',
    objetivo: 'Producir fibra extrafina de alpaca, posicionándola al nivel de las fibras de lujo más exclusivas del mundo.',
    logros: [
      'Pacomarca ha desarrollado categorías únicas de fibra: Sixteen (<17 μm), Imperial (<18 μm) y Royal (<20 μm).',
      'Todas superiores a la calidad estándar Baby Alpaca (<23 μm).',
    ],
    impacto: 'Gracias a este avance, entre 80.000 y 150.000 familias alpaqueras producen hoy cerca del 40% de la fibra superfina del país.',
    color: 'bg-cream',
    accent: 'border-gold',
    image: '/conocimiento/programa-genetico/foto-2.jpg',
  },
  {
    id: 'confort',
    label: 'Fibras de Confort Superior',
    title: 'Programa Fibras de Confort Superior',
    objetivo: 'Reducir la medulación de la fibra de alpaca mediante el mejoramiento genético, eliminando la sensación de picazón y ofreciendo una experiencia de confort y suavidad excepcionales.',
    logros: [
      'Reducción aproximada del 30% en el porcentaje de fibras meduladas asociadas a la sensación de picazón.',
      'Mejora significativa de la suavidad y calidad al tacto de la fibra.',
    ],
    impacto: 'Aunque este programa aún no se ha implementado en las comunidades alpaqueras, ha dado origen al Divine Alpaca, una fibra con características comparables al Cashmere por su suavidad y confort. Se proyecta que, en dos generaciones de alpacas, entre el 5% y 10% de la población pueda producir fibra con estas cualidades, posicionando a la alpaca como una alternativa competitiva en el mercado de fibras de lujo.',
    color: 'bg-beige',
    accent: 'border-gold',
    image: '/conocimiento/programa-genetico/foto-3.jpg',
  },
]

export default function ProgramaGeneticoPage() {
  const [activeTab, setActiveTab] = useState('black')
  const activeData = tabs.find((t) => t.id === activeTab)!

  return (
    <>
      <PageHeader
        section="CONOCIMIENTO"
        title="Programa Genético"
        subtitle="El programa de mejora genética de alpacas más riguroso del mundo"
        imageUrl="/conocimiento/programa-genetico/portada.jpg"
        imagePosition="object-center"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">PacoPro</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Décadas de selección genética sistemática
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                El futuro sostenible de la alpaca depende de que su fibra alcance un valor competitivo frente a otras fibras de lujo en el mercado mundial. Solo así las nuevas generaciones de criadores verán en la alpaca una oportunidad de vida digna y sostenible.
              </p>
              <p>
                En Pacomarca, nuestro programa genético se centra en tres grandes retos: rescatar a las alpacas de color negro puro (que estuvieron a punto de desaparecer), lograr una fibra extrafina (que compita con otras fibras finas a nivel mundial) y lograr una fibra con una menor medulación (disminuyendo la sensación de picazón). Estos objetivos son la base de nuestra estrategia de mejora genética y el camino hacia una fibra de mayor valor y un futuro más prometedor para toda la cadena.
              </p>
              <p>
                Pacomarca ha desarrollado el <strong className="text-ink font-medium">PacoPro</strong>. Un software con un sistema de gestión genética que permite registrar y analizar información relevante de cada alpaca. Integra datos genealógicos, peso, características de la fibra y otros indicadores clave, convirtiéndose en una herramienta esencial para orientar los programas de reproducción y mejora genética. Actualmente el sistema tiene datos de más de <strong className="text-ink font-medium">17 mil individuos</strong>.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '17,000+', label: 'Individuos en PacoPro' },
                { num: '13M+', label: 'Datos genéticos' },
                { num: '3', label: 'Líneas de selección' },
                { num: '40%', label: 'Fibra superfina del país' },
              ].map((s) => (
                <div key={s.label} className="bg-beige p-8 text-center">
                  <p className="font-serif text-4xl text-gold mb-2">{s.num}</p>
                  <p className="text-xs text-ink/55 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Líneas de mejora</p>
            <h2 className="font-serif text-4xl text-ink">Tres programas de selección</h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row border border-sand/50 mb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-ink text-white'
                    : 'bg-white text-ink/50 hover:bg-cream hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`${activeData.color} border-t-4 ${activeData.accent}`}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={activeData.image}
                alt={activeData.title}
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="p-10 lg:p-16">
            <h3 className="font-serif text-3xl mb-10">{activeData.title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60">Objetivo</p>
                <p className="text-sm leading-relaxed opacity-80">{activeData.objetivo}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60">Logros</p>
                <ul className="space-y-3">
                  {activeData.logros.map((logro) => (
                    <li key={logro} className="flex gap-3 text-sm leading-relaxed opacity-80">
                      <span className="text-gold mt-1 flex-shrink-0">◆</span>
                      <span>{logro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-4 opacity-60">Impacto</p>
                <p className="text-sm leading-relaxed opacity-80">{activeData.impacto}</p>
              </div>
            </div>
            </div>
          </motion.div>
        </FadeUp>
      </section>

      {/* CTA */}
      <section className="bg-beige py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-base text-ink/65 mb-8">
              Las fibras desarrolladas por el programa genético de Pacomarca son la base de las líneas certificadas Divine, Sixteen, Imperial, Black Alpaca y Colores Puros.
            </p>
            <Link
              href="/fibras"
              className="inline-block bg-ink text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-ink/90 transition-colors"
            >
              Conocer las fibras certificadas
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
