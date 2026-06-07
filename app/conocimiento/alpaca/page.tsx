'use client'

import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
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

const fiberFacts = [
  { num: '1', title: 'Naturalmente hipoalergénica', desc: 'No contiene lanolina, lo que la hace apta para personas con piel sensible o alérgicas a otras fibras naturales como la lana.' },
  { num: '2', title: 'Aislamiento térmico superior', desc: 'Ofrece un aislamiento térmico superior al de otras fibras, manteniendo el calor en las condiciones más extremas.' },
  { num: '3', title: 'Longitud excepcional', desc: 'Entre 18 y 25 cm por esquila anual. Esta longitud permite obtener hilados de mayor resistencia y brillo.' },
  { num: '4', title: 'Finura extraordinaria', desc: 'Con un diámetro de entre 16 y 32 micras según calidad y raza. Las fibras extrafinas de Pacomarca alcanzan menos de 17 micras.' },
  { num: '5', title: 'Paleta de colores naturales', desc: 'Más de 22 tonalidades reconocidas, desde el blanco puro hasta el negro profundo, pasando por grises, cafés y cremas.' },
]

export default function AlpacaPage() {
  return (
    <>
      <PageHeader
        section="CONOCIMIENTO"
        title="Alpaca (Vicugna pacos)"
        subtitle="Milenios de coevolución entre el ser humano y el camélido más valioso del mundo"
        imageUrl="/conocimiento/alpaca/portada.jpg"
        imagePosition="object-center"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Historia y origen</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Miles de años de vínculo andino
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                Desde hace miles de años, las alpacas han acompañado a los pueblos andinos, ofreciendo abrigo y sustento en uno de los territorios más desafiantes del planeta. En Pacomarca investigamos su genética, su fibra y su bienestar para honrar este legado ancestral y proyectarlo hacia un futuro donde la ciencia y la sostenibilidad se encuentran.
              </p>
              <p>
                La alpaca (<em>Vicugna pacos</em>) es un camélido sudamericano doméstico, perfectamente adaptado a las condiciones extremas de la puna. Se cría principalmente en los departamentos de Apurímac, Cusco, Puno, Arequipa y Huancavelica.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative h-[480px] overflow-hidden">
              <Image
                src="/conocimiento/alpaca/foto-1.jpg"
                alt="Alpacas en los Andes"
                fill
                className="object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Habitat */}
      <section className="bg-beige py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center">
              <p className="font-serif text-xl text-ink/70 italic">
                "Las alpacas habitan las zonas altoandinas, desde los 3,500 a los 5,000 m.s.n.m., en uno de los ecosistemas más extremos del planeta."
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Two breeds */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Razas</p>
            <h2 className="font-serif text-4xl text-ink">Dos razas, dos expresiones de excelencia</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <FadeUp delay={0.1} className="h-full">
            <div className="bg-cream border-t-4 border-gold overflow-hidden h-full flex flex-col">
              <div className="relative h-56 w-full shrink-0">
                <Image
                  src="/conocimiento/alpaca/foto-2.jpg"
                  alt="Alpaca Suri"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-10">
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Raza Suri</p>
                <h3 className="font-serif text-3xl text-ink mb-6">Suri</h3>
                <div className="space-y-4 text-sm text-ink/65 leading-relaxed">
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Fibra lacía:</strong> Las mechas caen en forma de rizos o dreadlocks que pueden alcanzar gran longitud, llegando hasta el suelo en animales adultos.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Tipo dividido:</strong> El vellón se divide naturalmente por la línea dorsal, exponiendo la piel.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Mayor longitud:</strong> Produce mechas de mayor longitud que la Huacaya, lo que la hace especialmente valorada.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Más elástica:</strong> Mayor brillo y lustre que la Huacaya. Textura sedosa comparable a la seda natural.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Escasa:</strong> Representa cerca del 15% de la población de alpacas, lo que la hace especialmente valiosa.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="h-full">
            <div className="bg-cream border-t-4 border-gold overflow-hidden h-full flex flex-col">
              <div className="relative h-56 w-full shrink-0">
                <Image
                  src="/conocimiento/alpaca/foto-3.jpg"
                  alt="Alpaca Huacaya"
                  fill
                  className="object-cover object-[center_60%] grayscale"
                />
              </div>
              <div className="p-10">
                <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Raza Huacaya</p>
                <h3 className="font-serif text-3xl text-ink mb-6">Huacaya</h3>
                <div className="space-y-4 text-sm text-ink/65 leading-relaxed">
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Mechas en rulos:</strong> El vellón forma rizos esponjosos que crecen perpendiculares al cuerpo, dando una apariencia redondeada y esponjosa.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Tipo entero esponjoso:</strong> El vellón cubre uniformemente todo el cuerpo del animal.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Mayor densidad:</strong> Produce más fibra por animal que la Suri, con mayor densidad de mechas.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Versatilidad:</strong> Su finura la hace ideal para prendas de uso diario de alto lujo. Es la base de fibras como Divine, Sixteen e Imperial.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gold mt-1">◆</span>
                    <p><strong className="text-ink font-medium">Predominante:</strong> Representa cerca del 85% de la población alpaquera en el Perú.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Fiber Facts */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Propiedades</p>
              <h2 className="font-serif text-4xl text-ink">Cinco propiedades que la hacen única</h2>
            </div>
          </FadeUp>

          <div className="space-y-6">
            {fiberFacts.map((fact, i) => (
              <FadeUp key={fact.num} delay={i * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start bg-white p-8 border-l-4 border-gold">
                  <div className="md:col-span-1">
                    <span className="font-serif text-3xl text-gold/30">{fact.num}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-serif text-xl text-ink">{fact.title}</h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-sm text-ink/60 leading-relaxed">{fact.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
