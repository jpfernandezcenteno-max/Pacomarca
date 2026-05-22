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

const grupoIncaMarcas = [
  { name: 'Grupo Inca', desc: 'El conglomerado empresarial líder en la industria textil de fibras naturales en el Perú.', url: 'https://grupoinca.com/es/' },
  { name: 'Inca Tops', desc: 'Procesadora y exportadora líder de fibras especiales. Top Maker referente a nivel mundial.', url: 'https://www.incatops.com/stockservice/' },
  { name: 'Incalpaca', desc: 'Empresa textil integrada con presencia internacional, especialista en fibras de alpaca de alta calidad.', url: 'https://www.incalpaca.com/es' },
  { name: 'Kuna', desc: 'Marca de lujo con tiendas en los principales destinos turísticos del mundo, embajadora de la alpaca peruana.', url: 'https://pe.kunastores.com/' },
  { name: 'Alpaca 111', desc: 'Marca especializada en prendas de alpaca para el mercado de lujo internacional.', url: 'https://alpaca111.com/' },
  { name: 'Amano', desc: 'Marca de lujo peruana especializada en prendas de alpaca y fibras exclusivas.', url: 'https://amanoyarns.com/pe/' },
]

const aliadosEstrategicos = [
  { name: 'Intifil', desc: 'Empresa especializada en fibras finas. Socio estratégico en el procesamiento de fibras extrafinas.' },
  { name: 'The Inoue Brothers', desc: 'Marca de moda sostenible danesa con profundo compromiso con las comunidades alpaqueras peruanas.' },
  { name: 'Sandra Jordan', desc: 'Marca de lujo norteamericana pionera en el uso de fibras naturales sostenibles de alta calidad.' },
  { name: 'Pelipeli', desc: 'Empresa europea especializada en accesorios de lujo en fibras naturales peruanas.' },
  { name: 'Alpha Tops', desc: 'Procesadora especializada en la transformación de fibras de alpaca para el mercado textil internacional.' },
  { name: 'Hessnatur', desc: 'Referente europeo en moda sostenible y textiles naturales con certificaciones de sostenibilidad.' },
]

function BrandCard({ name, desc, url }: { name: string; desc: string; url?: string }) {
  const inner = (
    <div className="border border-sand/40 p-8 hover:border-gold/40 hover:shadow-md transition-all duration-300 bg-white group h-full">
      <div className="w-16 h-16 bg-beige flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
        <span className="font-serif text-lg text-gold font-semibold">{name.charAt(0)}</span>
      </div>
      <h3 className="font-serif text-lg text-ink mb-3 group-hover:text-gold transition-colors">{name}</h3>
      <p className="text-sm text-ink/55 leading-relaxed">{desc}</p>
      {url && <p className="text-xs text-gold/70 mt-4 tracking-wide">Visitar sitio →</p>}
    </div>
  )
  if (url) {
    return <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">{inner}</a>
  }
  return inner
}

export default function MarcasAliadasPage() {
  return (
    <>
      <PageHeader
        section="ECOSISTEMA"
        title="Marcas Aliadas"
        subtitle="Embajadoras de la fibra más fina y sostenible del mundo"
        imageUrl="/ecosistema/marcas-aliadas/portada.jpg"
        imagePosition="object-[center_65%]"
      />

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Alianzas estratégicas</p>
            <h2 className="font-serif text-4xl text-ink mb-8 leading-snug">
              Las marcas que llevan Pacomarca al mundo
            </h2>
            <div className="space-y-5 text-base text-ink/65 leading-relaxed">
              <p>
                El ecosistema Pacomarca no sería completo sin las marcas que validan, comercializan y dan visibilidad global a las fibras certificadas. Su participación garantiza la viabilidad económica del sistema y el precio justo para las comunidades.
              </p>
              <p>
                Las marcas del Grupo Inca son las principales promotoras del ecosistema, con presencia en los mercados de lujo de Europa, Norteamérica y Asia. Junto a ellas, un grupo selecto de aliados estratégicos internacionales comparten el compromiso con la sostenibilidad auténtica.
              </p>
              <p>
                Para las marcas, pertenecer al ecosistema Pacomarca significa acceder a fibras con trazabilidad completa, certificación científica y una historia de impacto social real que sus clientes valoran profundamente.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-cream p-10 h-full flex flex-col justify-center">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">¿Qué ofrece el ecosistema a las marcas?</p>
              <div className="space-y-6">
                {[
                  { title: 'Trazabilidad total', desc: 'Cada fibra es trazable desde el animal hasta el producto final, con datos verificables.' },
                  { title: 'Certificación científica', desc: 'Respaldo de 23 universidades y 32 artículos científicos publicados en revistas indexadas.' },
                  { title: 'Historia de impacto', desc: 'Una narrativa auténtica de desarrollo comunitario que conecta con los valores del consumidor de lujo.' },
                  { title: 'Exclusividad', desc: 'Acceso a fibras únicas como Divine, Sixteen o Black Alpaca, disponibles solo a través del ecosistema.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <span className="text-gold font-serif text-lg mt-0.5">◆</span>
                    <div>
                      <h4 className="font-serif text-base text-ink mb-1">{item.title}</h4>
                      <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Grupo Inca Brands */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Familia Pacomarca</p>
              <h2 className="font-serif text-3xl text-ink">Marcas del Grupo Inca</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grupoIncaMarcas.map((marca, i) => (
              <FadeUp key={marca.name} delay={i * 0.08}>
                <BrandCard name={marca.name} desc={marca.desc} url={marca.url} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Allies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-14">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Colaboración global</p>
              <h2 className="font-serif text-3xl text-ink">Aliados estratégicos internacionales</h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aliadosEstrategicos.map((aliado, i) => (
              <FadeUp key={aliado.name} delay={i * 0.08}>
                <BrandCard name={aliado.name} desc={aliado.desc} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">Para marcas</p>
            <h2 className="font-serif text-3xl text-white mb-6">
              ¿Tu marca quiere trabajar con las mejores fibras del mundo?
            </h2>
            <p className="text-base text-white/60 mb-10 leading-relaxed">
              Si tu marca está comprometida con la sostenibilidad y busca fibras de alpaca con trazabilidad total, certificación científica y una historia de impacto real, nos gustaría conocerte.
            </p>
            <Link
              href="/contacto?rol=marca"
              className="inline-block bg-gold text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold/90 transition-colors"
            >
              Soy una marca y me interesa conocer más
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
