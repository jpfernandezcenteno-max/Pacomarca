'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  {
    label: 'Ecosistema',
    href: '/ecosistema',
    children: [
      { label: 'El ecosistema', href: '/ecosistema' },
      { label: 'Alpaqueros', href: '/ecosistema/alpaqueros' },
      { label: 'Científicos', href: '/ecosistema/cientificos' },
      { label: 'Marcas aliadas', href: '/ecosistema/marcas-aliadas' },
      { label: 'Trazabilidad', href: '/ecosistema/trazabilidad' },
    ],
  },
  {
    label: 'Conocimiento',
    href: '/conocimiento',
    children: [
      { label: 'Alpaca (Vicugna pacos)', href: '/conocimiento/alpaca' },
      { label: 'Programa genético', href: '/conocimiento/programa-genetico' },
      { label: 'Inca Esquila', href: '/conocimiento/inca-esquila' },
      { label: 'Publicaciones', href: '/conocimiento/publicaciones' },
      { label: 'Pasantías', href: '/conocimiento/pasantias' },
    ],
  },
  {
    label: 'Programas',
    href: '/programas',
    children: [
      { label: 'Cabaña del pastor', href: '/programas/cabana-del-pastor' },
      { label: 'Invernadero', href: '/programas/invernadero' },
      { label: 'Lote de machos', href: '/programas/lote-de-machos' },
      { label: 'Módulo de esquila', href: '/programas/modulo-de-esquila' },
      { label: 'Fondo a la investigación', href: '/programas/fondo-investigacion' },
      { label: 'Tejiendo Corazones', href: '/programas/tejiendo-corazones' },
    ],
  },
  {
    label: 'Fibras',
    href: '/fibras',
    children: [
      { label: 'Divine Alpaca', href: '/fibras/divine' },
      { label: 'Sixteen Alpaca', href: '/fibras/sixteen' },
      { label: 'Imperial Alpaca', href: '/fibras/imperial' },
      { label: 'Black Alpaca', href: '/fibras/black' },
      { label: 'Colores Puros', href: '/fibras/colores-puros' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setHidden(false)
    }
    // Reset hidden state immediately when pathname changes
    setHidden(false)
    setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomepage])

  // Ocultar el navbar mientras el hero reproduce el video; reaparece al hacer scroll
  useEffect(() => {
    const onCinema = (e: Event) => setHidden((e as CustomEvent).detail === true)
    window.addEventListener('hero-cinema', onCinema)
    return () => window.removeEventListener('hero-cinema', onCinema)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/96 backdrop-blur-md shadow-sm' : 'bg-transparent'
        } ${hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logo.svg"
                alt="Pacomarca"
                className={`h-8 w-auto transition-all duration-300 ${
                  scrolled || mobileOpen ? 'brightness-0' : 'brightness-0 invert'
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 pb-1 border-b border-transparent hover:border-gold ${
                      scrolled ? 'text-ink hover:text-gold' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {item.children && activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white shadow-xl border border-sand/30 min-w-[200px] py-4"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-6 py-2.5 text-sm text-ink/70 hover:text-gold hover:bg-cream transition-colors duration-150"
                            onClick={() => setActiveMenu(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  scrolled || mobileOpen ? 'bg-ink' : 'bg-white'
                } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  scrolled || mobileOpen ? 'bg-ink' : 'bg-white'
                } ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  scrolled || mobileOpen ? 'bg-ink' : 'bg-white'
                } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto"
          >
            <div className="pt-24 pb-12 px-8">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between py-4 border-b border-sand/40">
                      <Link
                        href={item.href}
                        className="font-serif text-2xl text-ink"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() =>
                            setMobileAccordion(
                              mobileAccordion === item.label ? null : item.label
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center text-gold"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileAccordion === item.label ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {item.children && mobileAccordion === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block py-2.5 text-sm text-ink/60 hover:text-gold transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-sand/40">
                <p className="text-xs tracking-[0.25em] text-ink/40 uppercase mb-4">Contacto</p>
                <p className="text-sm text-ink/60">T++ 51 54 602500 Anexo 460/461</p>
                <p className="text-sm text-ink/60">Arequipa, Perú</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
