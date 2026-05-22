'use client'

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

const posts = [
  {
    id: 1,
    date: 'Marzo 2024',
    category: 'Noticias',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=800&q=85',
    title: 'Pacomarca presenta nuevos resultados del programa genético Black Alpaca',
    desc: 'La estación científica anuncia el registro de las alpacas número 3,000 en el programa de conservación del color negro puro, un hito histórico para la preservación genética de la especie.',
    content: `La estación científica anuncia el registro de las alpacas número 3,000 en el programa de conservación del color negro puro, un hito histórico para la preservación genética de la especie.

El programa Black Alpaca fue iniciado hace más de dos décadas con el objetivo de rescatar, preservar y mejorar la alpaca de color negro puro, en riesgo de extinción por la preferencia histórica del mercado por la fibra blanca. Hoy, gracias a décadas de selección rigurosa y al apoyo de las comunidades alpaqueras, el programa cuenta con más de 3,000 individuos registrados en el sistema PacoPro.

Este hito representa no solo un logro científico, sino también un impacto económico real para las familias alpaqueras que cuidan estas alpacas. La fibra negra certificada Pacomarca ha recuperado su valor de mercado y es utilizada por marcas de lujo como Kuna, Amano y The Inoue Brothers en colecciones exclusivas.

El programa continúa con nuevos objetivos de selección orientados a incrementar la proporción de animales negros en el rebaño y mejorar la calidad de la fibra producida.`,
  },
  {
    id: 2,
    date: 'Febrero 2024',
    category: 'Ciencia',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=85',
    title: 'Publicación en Journal of Animal Breeding and Genetics sobre finura de alpaca Huacaya',
    desc: 'Un nuevo artículo co-autorado por investigadores de Pacomarca, UNAP y la Universidad Complutense de Madrid presenta avances en la estimación de parámetros genéticos para la finura de fibra.',
    content: `Un nuevo artículo co-autorado por investigadores de Pacomarca, UNAP y la Universidad Complutense de Madrid presenta avances en la estimación de parámetros genéticos para la finura de fibra.

La publicación, disponible en el Journal of Animal Breeding and Genetics, presenta los resultados de un análisis de más de 13 millones de datos genéticos y productivos registrados en el sistema PacoPro de Pacomarca. Los investigadores estimaron parámetros de heredabilidad y correlaciones genéticas para el diámetro medio de fibra (DMF) en alpacas Huacaya.

Los resultados confirman que la finura de la fibra tiene una heredabilidad media-alta, lo que valida la efectividad del programa de selección genética de Pacomarca para producir fibras extrafinas certificadas como Divine, Sixteen e Imperial Alpaca.

Esta es la publicación número 33 del programa científico de Pacomarca en revistas indexadas internacionales.`,
  },
  {
    id: 3,
    date: 'Enero 2024',
    category: 'Programas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=85',
    title: 'Entrega de la octava Cabaña del Pastor en la comunidad de Llalli',
    desc: 'Pacomarca completó la construcción y entrega de su octava cabaña del pastor, beneficiando a una familia alpaquera de la comunidad de Llalli en la región de Puno.',
    content: `Pacomarca completó la construcción y entrega de su octava cabaña del pastor, beneficiando a una familia alpaquera de la comunidad de Llalli en la región de Puno.

Las Cabañas del Pastor son viviendas dignas construidas en las zonas altoandinas donde las familias alpaqueras viven y trabajan, a altitudes que superan los 4,000 m.s.n.m. y donde las temperaturas pueden descender a -20°C durante la noche.

Cada cabaña incluye sistema de calefacción, agua potable, baño y espacio de almacenamiento para implementos de trabajo. La octava cabaña fue construida para la familia Mamani, criadores de alpacas participantes en el programa Lote de Machos desde hace más de 10 años.

El programa Cabaña del Pastor es parte del compromiso de Pacomarca con el bienestar de las comunidades que hacen posible la producción de las mejores fibras del mundo.`,
  },
  {
    id: 4,
    date: 'Diciembre 2023',
    category: 'Fibras',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    title: 'Sixteen Alpaca premiada en la feria Première Vision de París',
    desc: 'La fibra más fina de alpaca del mundo recibió reconocimiento internacional en la principal feria textil de lujo como fibra innovadora y sostenible del año.',
    content: `La fibra más fina de alpaca del mundo recibió reconocimiento internacional en la principal feria textil de lujo como fibra innovadora y sostenible del año.

Première Vision, la feria textil de referencia para las marcas de lujo a nivel mundial, reconoció a Sixteen Alpaca como una de las fibras más innovadoras y sostenibles presentadas en la edición de diciembre 2023. La distinción fue otorgada en la categoría de fibras naturales de alto rendimiento.

Sixteen Alpaca, con un diámetro inferior a 17 micras, es la fibra de alpaca más fina disponible comercialmente en el mundo. Es el resultado de décadas de selección genética en el programa de fibras extrafinas de Pacomarca y está disponible exclusivamente a través del ecosistema certificado.

El reconocimiento refuerza la posición de Pacomarca como líder mundial en innovación en fibras naturales sostenibles.`,
  },
  {
    id: 5,
    date: 'Noviembre 2023',
    category: 'Programas',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85',
    title: 'Abrigando Corazones supera los 8,000 kits distribuidos',
    desc: 'El programa de donación de abrigos de alpaca alcanzó un nuevo récord histórico, protegiendo del frío a más de 8,400 niños y adultos mayores en cinco departamentos del Perú.',
    content: `El programa de donación de abrigos de alpaca alcanzó un nuevo récord histórico, protegiendo del frío a más de 8,400 niños y adultos mayores en cinco departamentos del Perú.

Abrigando Corazones es el programa social de Pacomarca que distribuye kits de abrigo de alpaca a las poblaciones más vulnerables de las comunidades altoandinas: niños en edad escolar y adultos mayores que viven en condiciones de extrema friaje.

Cada kit incluye mantas, suéteres, medias, bufandas y chullos elaborados con fibra de alpaca certificada. En la campaña 2023, se distribuyeron 1,200 kits adicionales en las regiones de Puno, Cusco, Arequipa, Apurímac y Huancavelica, superando por primera vez la barrera de los 8,000 kits acumulados desde el inicio del programa.

El programa es financiado por las marcas aliadas del ecosistema Pacomarca como parte de su compromiso con el desarrollo comunitario.`,
  },
  {
    id: 6,
    date: 'Octubre 2023',
    category: 'Alianzas',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=85',
    title: 'The Inoue Brothers visita Pacomarca y lanza colección Black Alpaca',
    desc: 'Los diseñadores daneses visitaron la estación científica y las comunidades alpaqueras de Puno, resultando en el lanzamiento de una colección exclusiva de Black Alpaca para el mercado europeo.',
    content: `Los diseñadores daneses visitaron la estación científica y las comunidades alpaqueras de Puno, resultando en el lanzamiento de una colección exclusiva de Black Alpaca para el mercado europeo.

Andreas y Peter Inoue, fundadores de The Inoue Brothers, realizaron una visita de tres días a Pacomarca y las comunidades alpaqueras de la región de Puno. La visita incluyó un recorrido por la estación científica, participación en el proceso de esquila y reuniones con las familias alpaqueras que cuidan las alpacas negras del programa.

La experiencia inspiró el lanzamiento de su colección "Black Origin", elaborada íntegramente con fibra Black Alpaca certificada Pacomarca. La colección fue presentada en Copenhague y está disponible en sus puntos de venta en Europa y a través de su tienda online.

"Ver de dónde viene la fibra, conocer a las familias que cuidan estos animales extraordinarios, es lo que da sentido a todo lo que hacemos", declaró Andreas Inoue durante la presentación de la colección.`,
  },
]

export default function ActualidadPage() {
  const [selected, setSelected] = useState<typeof posts[0] | null>(null)

  return (
    <>
      <PageHeader
        section="BLOG"
        title="Blog"
        subtitle="Noticias y novedades del ecosistema Pacomarca"
        imageUrl="/blog/portada.jpg"
        imagePosition="object-center"
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

            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{selected.category} · {selected.date}</p>
            <h1 className="font-serif text-4xl text-ink mb-8 leading-snug">{selected.title}</h1>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              {selected.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {posts.map((post, i) => (
                <FadeUp key={post.id} delay={i * 0.08} className="h-full">
                  <button
                    onClick={() => setSelected(post)}
                    className="group bg-white border border-sand/40 hover:border-gold/40 hover:shadow-lg transition-all duration-300 text-left w-full h-full flex flex-col overflow-hidden"
                  >
                    <div className="relative h-44 w-full shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
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

      {/* Newsletter CTA */}
      {!selected && (
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
              <a
                href="/contacto"
                className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors"
              >
                Contactar para suscribirse
              </a>
            </FadeUp>
          </div>
        </section>
      )}
    </>
  )
}
