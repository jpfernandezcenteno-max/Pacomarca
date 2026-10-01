import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Lanzamiento de El Quintal del Inca 2026/2027',
  description:
    'Pacomarca e Inca Tops convocan al concurso El Quintal del Inca 2026/2027. Recepción de fibra hasta el 30 de abril de 2027. Conoce los premios.',
  openGraph: {
    title: 'El Quintal del Inca 2026/2027 | Pacomarca',
    description:
      'Pacomarca e Inca Tops convocan al concurso El Quintal del Inca 2026/2027. Recepción de fibra hasta el 30 de abril de 2027. Conoce los premios.',
    url: 'https://www.pacomarca.com/blog/el-quintal-del-inca-2026-2027',
    images: [{ url: '/concurso/premio-cabana.jpg' }],
  },
  alternates: { canonical: 'https://www.pacomarca.com/blog/el-quintal-del-inca-2026-2027' },
}

const premios = [
  'Gran premio: una Cabaña del Pastor construida en el fundo del ganador, con dormitorio con muro trombe, cocina mejorada, servicios higiénicos con biodigestor, panel solar, tanque de agua y cuyera.',
  '2.º y 3.er puesto: lotes de 6 y 4 alpacas, respectivamente.',
  '4.º y 5.º puesto: un reproductor tipo A de Pacomarca y un kit de esquila.',
  'Premio especial: un lote de 6 alpacas negras para el mejor quintal de color negro.',
]

export default function Page() {
  return (
    <>
      <PageHeader
        section="Blog · Noticias / Concursos"
        title="Pacomarca e Inca Tops lanzan El Quintal del Inca 2026/2027, el concurso nacional que premia la excelencia alpaquera"
        subtitle="Con una Cabaña del Pastor equipada y lotes de alpacas como premios centrales, el certamen abre una nueva convocatoria nacional para reconocer a los criadores comprometidos con la mejora de la fibra andina."
        imageUrl="/concurso/premio-cabana.jpg"
        imagePosition="object-center"
      />

      <article className="py-20 max-w-3xl mx-auto px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors mb-12"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Volver al blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-xs tracking-[0.2em] uppercase text-gold">Noticias · Concursos</span>
          <span className="text-ink/20">·</span>
          <span className="text-xs text-ink/40">Septiembre 2026</span>
          <span className="text-ink/20">·</span>
          <span className="text-xs text-ink/40">3 min de lectura</span>
        </div>

        <div className="space-y-5 text-base text-ink/70 leading-relaxed">
          <p>
            Pacomarca e Inca Tops anunciaron la convocatoria oficial para la edición 2026/2027 de El Quintal del Inca, el
            concurso nacional que, desde 2012, premia el esfuerzo y las buenas prácticas en la crianza de alpacas en el Perú.
          </p>
          <p>
            A diferencia de un acopio tradicional, el certamen adquiere la fibra participante directamente al productor. El
            personal técnico clasifica cada lote y el micronaje se valida en laboratorio.
          </p>

          <h2 className="font-serif text-2xl text-ink mt-12 mb-2">Más de una década impulsando la esquila responsable</h2>
          <p>
            El concurso nació para visibilizar a quienes sostienen la cadena alpaquera: las familias y comunidades criadoras.
            Con sus ediciones anteriores, se busca fomentar la técnica Inca Esquila, desarrollada por Pacomarca y validada por
            el MIDAGRI, que apunta a una esquila higiénica, eficiente y respetuosa con el animal.
          </p>
          <p>
            El concurso también impulsa la producción de fibra en colores naturales y otorga un premio especial al mejor
            quintal de color negro.
          </p>

          <h2 className="font-serif text-2xl text-ink mt-12 mb-4">Premios para transformar el fundo</h2>
          <ul className="space-y-4">
            {premios.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="text-gold mt-1 shrink-0">◆</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p>
            Todos los premios incluyen la compra del lote completo a un precio preferencial para la siguiente campaña.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden my-10">
            <Image
              src="/concurso/evento.jpg"
              alt="Edición anterior de El Quintal del Inca"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <h2 className="font-serif text-2xl text-ink mt-12 mb-2">Cómo se evalúa</h2>
          <p>
            Los quintales se califican sobre 100 puntos. Los criterios que más pesan son la finura (50 puntos) y la densidad
            (30 puntos). También se evalúan la presencia de pelos de color, las impurezas y la certificación RAS con Inca Tops.
          </p>
          <p>
            Se seleccionan los seis quintales de distintos productores con mayor puntaje, y los resultados se darán a conocer
            en la ceremonia de premiación de julio de 2027, en la Estación Científica Pacomarca (Llalli, Melgar, Puno).
          </p>

          <h2 className="font-serif text-2xl text-ink mt-12 mb-2">¿Cómo participar?</h2>
          <p>
            Pueden participar los productores alpaqueros relacionados comercialmente con Inca Tops, con fibra huacaya blanca o
            negra. La recepción se realiza en los centros autorizados del sur del país (Juliaca, Arequipa, Pacomarca, Sicuani y
            otras localidades del Cusco y Arequipa) y de la zona centro (Huancayo, Huancavelica y Cerro de Pasco).
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gold mt-1 shrink-0">◆</span>
              <span>
                <strong className="text-ink font-medium">Recepción de fibra:</strong> ya está abierta y se extiende hasta el 30
                de abril de 2027.
              </span>
            </li>
          </ul>
          <p>
            Si eres productor y quieres conocer los requisitos de entrega, las especificaciones de embalaje y descargar la
            ficha de inscripción, ingresa a la página oficial del concurso:
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/el-quintal-del-inca"
            className="inline-flex items-center gap-3 bg-ink text-white text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-gold transition-colors duration-300"
          >
            Conoce las bases completas y puntos de entrega
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-sand/40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-ink/50 hover:text-gold transition-colors"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Volver al blog
          </Link>
        </div>
      </article>
    </>
  )
}
