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
  { name: 'Grupo Inca', desc: 'Conglomerado empresarial peruano de la industria textil de fibras naturales que da vida y sostiene Pacomarca.', url: 'https://grupoinca.com/es/', logo: '/ecosistema/marcas-aliadas/logos/grupo-inca.svg' },
  { name: 'Inca Tops', desc: 'Empresa del Grupo Inca dedicada al procesamiento y la exportación de tops e hilados de alpaca.', url: 'https://www.incatops.com/stockservice/', logo: '/ecosistema/marcas-aliadas/logos/incatops.svg' },
  { name: 'Incalpaca', desc: 'Empresa textil del Grupo Inca especializada en prendas y tejidos de fibra de alpaca.', url: 'https://www.incalpaca.com/es', logo: '/ecosistema/marcas-aliadas/logos/incalpaca.svg' },
  { name: 'Kuna', desc: 'Marca del Grupo Inca especializada en prendas de alpaca y fibras naturales.', url: 'https://pe.kunastores.com/', logo: '/ecosistema/marcas-aliadas/logos/kuna.svg' },
  { name: 'Alpaca 111', desc: 'Marca del Grupo Inca especializada en prendas de fibra de alpaca.', url: 'https://alpaca111.com/', logo: '/ecosistema/marcas-aliadas/logos/alpaca-111.svg' },
  { name: 'Amano', desc: 'Marca del Grupo Inca especializada en hilados de alpaca.', url: 'https://amanoyarns.com/pe/', logo: '/ecosistema/marcas-aliadas/logos/amano.svg' },
]

const aliadosEstrategicos = [
  { name: 'Intifil', desc: 'Aliado estratégico que apoya los programas de Pacomarca y la sostenibilidad de la cadena de la alpaca.', logo: '/ecosistema/marcas-aliadas/logos/intifil.svg' },
  { name: 'The Inoue Brothers', desc: 'Aliado estratégico que apoya los programas de Pacomarca y la sostenibilidad de la cadena de la alpaca.', logo: '/ecosistema/marcas-aliadas/logos/the-inoue-brothers.svg' },
  { name: 'Sandra Jordan', desc: 'Aliado estratégico que apoya los programas de Pacomarca y la sostenibilidad de la cadena de la alpaca.', logo: '/ecosistema/marcas-aliadas/logos/sandra-jordan.svg' },
  { name: 'Pelipeli', desc: 'Aliado estratégico que apoya los programas de Pacomarca y la sostenibilidad de la cadena de la alpaca.', logo: '/ecosistema/marcas-aliadas/logos/polipeli.svg' },
  { name: 'Alpha Tops', desc: 'Aliado estratégico que apoya los programas de Pacomarca y la sostenibilidad de la cadena de la alpaca.', logo: '/ecosistema/marcas-aliadas/logos/alpha-tops.svg' },
  { name: 'Hessnatur', desc: 'Aliado estratégico que apoya los programas de Pacomarca y la sostenibilidad de la cadena de la alpaca.', logo: '/ecosistema/marcas-aliadas/logos/hessnatur.svg' },
]

function BrandCard({ name, desc, url, logo }: { name: string; desc: string; url?: string; logo?: string }) {
  const inner = (
    <div className="border border-sand/40 p-8 hover:border-gold/40 hover:shadow-md transition-all duration-300 bg-white group h-full flex flex-col">
      <div className="h-20 flex items-center mb-6">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="max-h-full w-auto max-w-[200px] object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        ) : (
          <div className="w-14 h-14 bg-beige flex items-center justify-center group-hover:bg-gold/10 transition-colors">
            <span className="font-serif text-lg text-gold font-semibold">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3 className="font-serif text-lg text-ink mb-3 group-hover:text-gold transition-colors">{name}</h3>
      <p className="text-sm text-ink/55 leading-relaxed flex-1">{desc}</p>
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
                El compromiso de las empresas en la cadena de valor de la alpaca es esencial para alcanzar los objetivos de Pacomarca. Su participación garantiza que la ciencia, la tradición y la innovación se traduzcan en un modelo sostenible que beneficia a todos los actores.
              </p>
              <p>
                Las empresas del Grupo Inca dan vida y sostienen este proyecto, integrando la investigación de Pacomarca con procesos de transformación y comercialización que posicionan la fibra de alpaca en los mercados más exigentes del mundo.
              </p>
              <p>
                A su lado, otras marcas y aliados estratégicos apoyan proyectos que fortalecen a las comunidades alpaqueras, impulsan la trazabilidad de la fibra y promueven la sostenibilidad en toda la cadena. Cada empresa que se suma al ecosistema contribuye a construir un futuro donde la alpaca sea sinónimo de calidad, innovación y responsabilidad compartida.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="bg-cream p-10 h-full flex flex-col justify-center">
              <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">¿Qué ofrece el ecosistema a las marcas?</p>
              <div className="space-y-6">
                {[
                  { title: 'Trazabilidad total', desc: 'Cada fibra es trazable desde el origen hasta el producto final, con datos verificables.' },
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
                <BrandCard name={marca.name} desc={marca.desc} url={marca.url} logo={marca.logo} />
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
                <BrandCard name={aliado.name} desc={aliado.desc} logo={aliado.logo} />
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
