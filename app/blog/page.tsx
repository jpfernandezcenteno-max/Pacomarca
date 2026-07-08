'use client'

import React from 'react'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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

type Post = {
  id: number
  date: string
  category: string
  image: string | null
  images: string[]
  imageInsertAfter: number[]
  imageStartIndex: number
  title: string
  desc: string
  content: string
  location?: string
  readTime?: string
  journal?: string
  doi?: string
  doiUrl?: string
  authors?: string
}

const posts: Post[] = [
  {
    id: 1,
    date: 'Marzo 2026',
    category: 'Sostenibilidad · IAEA',
    location: 'Puno, Perú · 4 100 m s.n.m.',
    readTime: '4 min de lectura',
    image: '/blog/blog-1/foto-1.jpg',
    images: ['/blog/blog-1/foto-1.jpg', '/blog/blog-1/foto-2.jpg', '/blog/blog-1/foto-3.jpg'],
    imageStartIndex: 1,
    imageInsertAfter: [4, 10],
    title: 'LCA de la fibra de alpaca: ¿qué hacemos con el metano?',
    desc: 'Pacomarca y la IAEA unen fuerzas para medir y reducir las emisiones de los camélidos sudamericanos — y cambiar el relato de las fibras naturales frente a los sintéticos.',
    content: `## Las fibras naturales en desventaja: el sesgo del LCA

Los estudios de Análisis de Ciclo de Vida (LCA, por sus siglas en inglés) han sido, históricamente, poco amables con las fibras naturales. Alpaca, lana ovina, Cashmere: todas han salido menos beneficiadas frente a los sintéticos cuando se aplica el estándar convencional de comparación.

El problema está en cómo se contabiliza. El estándar actual no tiene en cuenta el ciclo de vida completo del producto. Y hay un factor que pesa mucho en la balanza: los animales, por el simple hecho de vivir —comer, respirar, orinar, defecar— aportan metano a la atmósfera.

"Los animales por el hecho de vivir aportan metano a la atmósfera. Pero eso no cuenta toda la historia."

## La alpaca ya es resiliente — pero podemos ir más lejos

La alpaca es un animal extraordinariamente adaptado a condiciones extremas: vive por encima de los 4 000 m s.n.m., aprovecha pastos que ningún otro rumiante podría digerir, y produce una fibra de valor único en el mundo. Comparada con la oveja merino o la cabra de Cashmere, su huella ambiental ya es más ligera.

Pero el Grupo Inca, a través de Pacomarca, tiene claro que "ya somos buenos" no es suficiente. La pregunta que nos hacemos es: ¿cuánto metano emite realmente una alpaca, y qué podemos hacer para reducirlo genéticamente?

## La IAEA aprueba y financia el proyecto MET-SACs

La Agencia Internacional de Energía Atómica (IAEA) ha aprobado oficialmente el proyecto de investigación presentado por el Dr. Carlos Alfredo Gómez Bravo de la Universidad Nacional Agraria La Molina (UNALM): el proyecto MET-SACs (Integrating Phenotypic and Genetic Approaches to Assess Methane Emissions in South American Camelids Under Extensive Rangeland Conditions), con un financiamiento aprobado de €45 000 bajo el Coordinated Research Project D31034.

El proyecto se desarrollará en colaboración entre tres instituciones que combinan ciencia de vanguardia con conocimiento profundo del territorio andino: Iowa State University (Ames, Iowa, EE. UU.), UNALM (Lima, Perú) y Pacomarca (Laraqueri, Puno — Grupo Inca, Perú).

## Medir hoy para criar el animal del mañana

El propósito de MET-SACs va mucho más allá de medir gases en una estación experimental. La meta de largo plazo es identificar los rasgos genéticos asociados a menores emisiones de metano en alpacas que viven bajo condiciones reales de pastoreo extensivo en la puna.

Con esa información, el programa de mejora genética de Pacomarca —que ya lleva más de veinte años seleccionando animales por la finura y el color de su fibra— podrá incorporar un nuevo criterio de selección: la eficiencia metabólica y la menor huella de carbono. Un camélido más resiliente para el planeta.

"El Grupo Inca, a través de Pacomarca, tiene claro que es necesario evaluar las emisiones de metano en la crianza de alpaca y, a futuro, generar un animal mucho más resiliente con el planeta."

## ¿Qué significa esto para la industria?

Si logramos demostrar científicamente que la alpaca —bien gestionada genéticamente— tiene una huella de metano notablemente menor que otros animales productores de fibra, el LCA de la alpaca cambiará. Y con él, la narrativa frente a los sintéticos. Este proyecto es el primer paso hacia ese futuro.`,
  },
  {
    id: 2,
    date: 'Enero 2026',
    category: 'Investigación · Genómica',
    image: '/blog/blog-2/foto-1.jpg',
    images: ['/blog/blog-2/foto-1.jpg', '/blog/blog-2/foto-2.jpg', '/blog/blog-2/foto-3.jpg'],
    imageStartIndex: 0,
    imageInsertAfter: [3, 7, 11],
    journal: 'Small Ruminant Research, Elsevier',
    doi: '10.1016/j.smallrumres.2026.107704',
    doiUrl: 'https://doi.org/10.1016/j.smallrumres.2026.107704',
    authors: 'R. Pinares · M.S. Daverio · A. Cruz · G.A. Gutiérrez-Reynoso · K.A. Munyard',
    title: 'Los genes que definen el negro en la alpaca Huacaya: ASIP y MC1R como marcadores de selección',
    desc: 'Estudio realizado en Pacomarca en colaboración con UNALM, Iowa State University y Curtin University que identifica, por primera vez, los genotipos que permiten predecir con precisión el color oscuro en la fibra de alpaca Huacaya.',
    content: `## Clasificar el color de la alpaca: del ojo humano a la medición objetiva

La Norma Técnica Peruana 231.301 reconoce ocho colores básicos en el vellón de alpaca. Sin embargo, su asignación ha dependido históricamente de la percepción visual del evaluador — un criterio subjetivo que varía entre personas y regiones, con consecuencias directas en la selección de reproductores y en la valorización de lotes de fibra de color.

Este estudio aborda ese problema desde dos frentes: la colorimetría objetiva mediante el sistema CIE L*a*b* y el análisis genético de los genes ASIP y MC1R, los principales reguladores de la pigmentación en mamíferos.

## La interacción ASIP × MC1R define el negro en la alpaca

El estudio secuenció ambos genes en 89 alpacas Huacaya y 9 vicuñas, y correlacionó las variantes encontradas con los valores colorimétricos de cada animal. El hallazgo central es la caracterización de su interacción epistática: el fenotipo negro y marrón-negro requiere la presencia simultánea del alelo dominante E de MC1R —que activa la síntesis de eumelanina— combinado con dos copias de alelos recesivos de ASIP (a¹, a², a³), que bloquean la producción de feomelanina.

"El 100 % de las alpacas negro/marrón-negro presentó al menos un alelo E de MC1R en combinación con alelos recesivos homocigotos o heterocigotos compuestos de ASIP."

Un hallazgo adicional de relevancia evolutiva: los haplotipos H4 de ASIP y H4 de MC1R se encontraron en homocigosidad en el 100 % de las vicuñas analizadas, permitiendo designarlos como los alelos silvestres A⁺ y E⁺ — la referencia ancestral del color en camélidos sudamericanos, identificada aquí por primera vez.

## Tres consecuencias prácticas para los programas de selección

Marcadores moleculares validados: los genotipos a¹a¹/E-, a¹a²/E-, a³a³/E- y a¹a³/E- pueden incorporarse como criterio de selección para reproductores de fibra negra profunda, complementando la evaluación colorimétrica actual en Pacomarca.

Colorimetría como estándar reproducible: la correlación de Spearman entre grupos de color y valores L*/C* alcanzó 0.85 y 0.92 respectivamente (p < 0.0001), validando la carta de colores Pacomarca como herramienta objetiva de clasificación de lotes.

Próximos pasos — GWAS y lectura larga: los autores proponen complementar estos hallazgos con estudios de asociación genómica amplia y análisis de genes adicionales (TYR, TYRP1/2, MATP, KIT) para una predicción aún más precisa del fenotipo.

## Por qué importa para Pacomarca

Pacomarca mantiene la base de datos de alpacas más completa del mundo y el hato de alpacas negras más grande del planeta. Contar con marcadores moleculares validados permite integrar la genómica al programa de mejora — seleccionar no solo por lo que el animal muestra, sino por lo que transmite.`,
  },
]

export default function BlogPage() {
  const [selected, setSelected] = useState<Post | null>(null)

  return (
    <>
      <PageHeader
        section="BLOG"
        title="Blog"
        subtitle="Noticias y novedades del ecosistema Pacomarca"
        imageUrl="/blog/portada.jpg"
        imagePosition="object-[center_65%]"
      />

      <AnimatePresence mode="wait">
        {selected ? (
          /* ── Post abierto ── */
          <motion.section
            key="post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="py-24 max-w-3xl mx-auto px-6 lg:px-8"
          >
            <button
              onClick={() => setSelected(null)}
              className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors mb-12"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Volver al blog
            </button>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs tracking-[0.2em] uppercase text-gold">{selected.category}</span>
              <span className="text-ink/20">·</span>
              <span className="text-xs text-ink/40">{selected.date}</span>
              {selected.location && (
                <>
                  <span className="text-ink/20">·</span>
                  <span className="text-xs text-ink/40">{selected.location}</span>
                </>
              )}
              {selected.readTime && (
                <>
                  <span className="text-ink/20">·</span>
                  <span className="text-xs text-ink/40">{selected.readTime}</span>
                </>
              )}
            </div>

            <h1 className="font-serif text-4xl text-ink mb-6 leading-snug">{selected.title}</h1>
            <p className="text-lg text-ink/60 leading-relaxed mb-10 border-l-4 border-gold pl-5">{selected.desc}</p>

            {/* Journal / DOI info */}
            {selected.journal && (
              <div className="bg-beige p-6 mb-10 space-y-2">
                <p className="text-xs tracking-[0.15em] uppercase text-gold mb-3">Publicación original</p>
                {selected.authors && <p className="text-sm text-ink/70">{selected.authors}</p>}
                <p className="text-sm text-ink/70 italic">{selected.journal}</p>
                {selected.doiUrl && (
                  <a
                    href={selected.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:underline break-all"
                  >
                    DOI: {selected.doi}
                  </a>
                )}
              </div>
            )}

            {/* Content con imágenes intercaladas */}
            {(() => {
              const paragraphs = selected.content.split('\n\n')
              const imagesToShow = selected.images.slice(selected.imageStartIndex)
              let imgIdx = 0
              return (
                <div className="space-y-5 text-base text-ink/65 leading-relaxed">
                  {paragraphs.map((para, i) => {
                    let block: React.ReactNode
                    if (para.startsWith('## ')) {
                      block = <h2 key={`p-${i}`} className="font-serif text-2xl text-ink mt-10 mb-2">{para.replace('## ', '')}</h2>
                    } else if (para.startsWith('"')) {
                      block = (
                        <blockquote key={`p-${i}`} className="border-l-4 border-gold pl-6 my-6">
                          <p className="font-serif text-lg text-ink/70 italic leading-relaxed">{para}</p>
                        </blockquote>
                      )
                    } else {
                      block = <p key={`p-${i}`}>{para}</p>
                    }

                    const shouldInsertImage = selected.imageInsertAfter.includes(i) && imgIdx < imagesToShow.length
                    const imgSrc = shouldInsertImage ? imagesToShow[imgIdx] : null
                    if (shouldInsertImage) imgIdx++

                    return (
                      <React.Fragment key={i}>
                        {block}
                        {imgSrc && (
                          <div className="relative h-80 w-full overflow-hidden my-8">
                            <Image src={imgSrc} alt={`Foto`} fill className="object-cover" />
                          </div>
                        )}
                      </React.Fragment>
                    )
                  })}
                </div>
              )
            })()}

            <div className="mt-16 pt-8 border-t border-sand/40">
              <button
                onClick={() => setSelected(null)}
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Volver al blog
              </button>
            </div>
          </motion.section>
        ) : (
          /* ── Lista de posts ── */
          <motion.section
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="py-24 max-w-7xl mx-auto px-6 lg:px-8"
          >
            <div className="mb-14">
              <FadeUp>
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Publicaciones</p>
                <h2 className="font-serif text-4xl text-ink">Blog</h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl">
              {posts.map((post, i) => (
                <FadeUp key={post.id} delay={i * 0.1} className="h-full">
                  <button
                    onClick={() => setSelected(post)}
                    className="group bg-white border border-sand/40 hover:border-gold/40 hover:shadow-lg transition-all duration-300 text-left w-full h-full flex flex-col overflow-hidden"
                  >
                    {/* Image or placeholder */}
                    {post.image ? (
                      <div className="relative h-52 w-full shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-52 w-full shrink-0 bg-ink flex flex-col items-center justify-center px-8 text-center">
                        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{post.journal}</p>
                        <p className="font-serif text-white/60 text-sm leading-relaxed">{post.category}</p>
                      </div>
                    )}

                    <div className="px-6 py-3 flex items-center justify-between bg-cream shrink-0">
                      <span className="text-xs tracking-[0.15em] uppercase text-gold">{post.category}</span>
                      <span className="text-xs text-ink/35">{post.date}</span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-lg text-ink mb-3 group-hover:text-gold transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-ink/55 leading-relaxed mb-6 flex-1">{post.desc}</p>
                      <span className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gold group-hover:gap-3 transition-all mt-auto">
                        Leer más
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </FadeUp>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
