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
    objetivo: 'Rescatar, preservar y mejorar la alpaca de color negro puro, en riesgo de extinción por la preferencia histórica del mercado por la fibra blanca.',
    logros: [
      'Más de 3,000 alpacas negras registradas en el programa',
      'Promedio de 1,000 animales negros vivos en el rebaño en todo momento',
      'Parámetros genéticos establecidos para la selección de negro puro',
      'Base genética para el desarrollo de la fibra Black Alpaca comercial',
    ],
    impacto: 'La fibra negra recuperó su valor de mercado gracias a la certificación Pacomarca. Marcas como Kuna, Amano y The Inoue Brothers la usan en colecciones exclusivas, generando nuevos ingresos para las comunidades alpaqueras que cuidan estas alpacas.',
    color: 'bg-ink text-white',
    accent: 'border-gold',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1200&q=85',
  },
  {
    id: 'extrafinas',
    label: 'Fibras Extrafinas',
    title: 'Programa Fibras Extrafinas',
    objetivo: 'Desarrollar animales capaces de producir fibra con diámetros inferiores a los estándares normales de la alpaca, en la categoría "extrafina" comparable a la vicuña.',
    logros: [
      'Sixteen Alpaca: fibra menor a 17 micras, la más fina del mundo en alpaca',
      'Imperial Alpaca: fibra menor a 18 micras con certificación RAS',
      'Royal Alpaca: fibra menor a 20 micras',
      'Representan el 40% de la fibra superfina del país',
    ],
    impacto: 'Beneficia directamente a entre 80,000 y 150,000 familias alpaqueras en el Perú, que reciben mejores precios por su fibra gracias a la clasificación y certificación. El Perú se posicionó como líder mundial en fibras de alpaca extrafinas.',
    color: 'bg-cream',
    accent: 'border-gold',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
  },
  {
    id: 'confort',
    label: 'Fibras de Confort Superior',
    title: 'Programa Fibras de Confort Superior',
    objetivo: 'Reducir el porcentaje de fibras meduladas (huecas) en el vellón, que son las responsables del prickle factor o sensación de picazón en la piel.',
    logros: [
      'Reducción del 30% en las fibras meduladas del rebaño del programa',
      'Desarrollo de herramientas estadísticas para la selección por medulación',
      'Establecimiento de parámetros de heredabilidad para la característica',
      'Origen del Divine Alpaca, la fibra con cero medulación comercial',
    ],
    impacto: 'Dio origen al Divine Alpaca, la fibra de alpaca con el menor porcentaje de medulación del mercado. Esta innovación permitió crear prendas con la suavidad del cachemir pero con las propiedades únicas de la alpaca peruana.',
    color: 'bg-beige',
    accent: 'border-gold',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&q=85',
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
        imageUrl="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=2400&q=85"
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
                El programa genético de Pacomarca es único en el mundo por su rigor científico, la escala de sus datos y su conexión directa con las comunidades alpaqueras. Con más de <strong className="text-ink font-medium">17,000 individuos registrados</strong> en el sistema PacoPro y décadas de evaluaciones periódicas, constituye la mayor base de datos genéticos de alpaca en existencia.
              </p>
              <p>
                Los objetivos de mejora se diseñan en función de las necesidades del mercado y del bienestar de las comunidades: mayor finura, menor medulación, colores específicos y mejor productividad son los ejes principales de selección.
              </p>
              <p>
                Los machos seleccionados del programa se distribuyen entre las comunidades alpaqueras participantes, llevando la mejora genética directamente a los hatos familiares, sin costo para los criadores.
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
