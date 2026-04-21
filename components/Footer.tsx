import Link from 'next/link'
import Image from 'next/image'

const footerSections = [
  {
    title: 'Ecosistema',
    links: [
      { label: 'El ecosistema', href: '/ecosistema' },
      { label: 'Alpaqueros', href: '/ecosistema/alpaqueros' },
      { label: 'Científicos', href: '/ecosistema/cientificos' },
      { label: 'Marcas aliadas', href: '/ecosistema/marcas-aliadas' },
      { label: 'Trazabilidad', href: '/ecosistema/trazabilidad' },
    ],
  },
  {
    title: 'Conocimiento',
    links: [
      { label: 'Alpaca (Vicugna pacos)', href: '/conocimiento/alpaca' },
      { label: 'Programa genético', href: '/conocimiento/programa-genetico' },
      { label: 'Inca Esquila', href: '/conocimiento/inca-esquila' },
      { label: 'Publicaciones', href: '/conocimiento/publicaciones' },
      { label: 'Pasantías', href: '/conocimiento/pasantias' },
    ],
  },
  {
    title: 'Programas',
    links: [
      { label: 'Cabaña del pastor', href: '/programas/cabana-del-pastor' },
      { label: 'Invernadero', href: '/programas/invernadero' },
      { label: 'Lote de machos', href: '/programas/lote-de-machos' },
      { label: 'Módulo de esquila', href: '/programas/modulo-de-esquila' },
      { label: 'Fondo a la investigación', href: '/programas/fondo-investigacion' },
      { label: 'Abrigando corazones', href: '/programas/abrigando-corazones' },
    ],
  },
  {
    title: 'Fibras',
    links: [
      { label: 'Divine Alpaca', href: '/fibras/divine' },
      { label: 'Sixteen Alpaca', href: '/fibras/sixteen' },
      { label: 'Imperial Alpaca', href: '/fibras/imperial' },
      { label: 'Black Alpaca', href: '/fibras/black' },
      { label: 'Colores Puros', href: '/fibras/colores-puros' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="font-serif text-2xl tracking-[0.25em] text-white block mb-3">
                PACOMARCA
              </span>
            </Link>
            <p className="text-xs tracking-[0.15em] text-white/40 uppercase mb-6">
              Sustainable Alpaca Network
            </p>
            <Link href="/libro-reclamaciones" title="Libro de Reclamaciones Virtual" className="inline-block mb-8">
              <Image
                src="/libro-reclamaciones-badge.png"
                alt="Libro de Reclamaciones"
                width={120}
                height={86}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              El principal Ecosistema de Alpaca Sostenible del mundo. Impulsado por el Grupo Inca.
            </p>

            {/* Social */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs tracking-[0.15em] text-white/30 uppercase mb-2">
                Oficina central
              </p>
              <p className="text-sm text-white/50">
                Miguel Forga 348, Parque Industrial, Arequipa – Perú
              </p>
              <p className="text-sm text-white/50">T++ 51 54 602500 Anexo 460/461</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] text-white/30 uppercase mb-2">
                Estación científica
              </p>
              <p className="text-sm text-white/50">
                Carretera Llalli-Ocuviri, Llalli, Melgar, Puno – Perú
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Pacomarca — Grupo Inca. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/contacto" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Contacto
              </Link>
              <Link href="/actualidad" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Blog
              </Link>
              <Link href="/politica-privacidad" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/politica-cookies" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Política de Cookies
              </Link>
              <Link href="/terminos-condiciones" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/terminos-condiciones-especificos" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Términos Específicos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
