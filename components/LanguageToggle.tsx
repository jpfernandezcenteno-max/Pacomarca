'use client'

import { useState, useEffect } from 'react'

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const [lang, setLang] = useState<'es' | 'en'>('es')

  useEffect(() => {
    setLang(document.cookie.includes('googtrans=/es/en') ? 'en' : 'es')
  }, [])

  const change = (target: 'es' | 'en') => {
    if (target === lang) return
    const host = window.location.hostname
    if (target === 'en') {
      const v = '/es/en'
      document.cookie = `googtrans=${v};path=/`
      document.cookie = `googtrans=${v};path=/;domain=${host}`
      document.cookie = `googtrans=${v};path=/;domain=.${host}`
    } else {
      const exp = 'expires=Thu, 01 Jan 1970 00:00:00 GMT'
      document.cookie = `googtrans=;path=/;${exp}`
      document.cookie = `googtrans=;path=/;domain=${host};${exp}`
      document.cookie = `googtrans=;path=/;domain=.${host};${exp}`
    }
    window.location.reload()
  }

  return (
    <div
      translate="no"
      className={`notranslate flex items-center gap-1.5 text-xs tracking-[0.15em] font-medium select-none ${className}`}
    >
      <button
        type="button"
        onClick={() => change('es')}
        aria-label="Español"
        className={`transition-opacity duration-200 ${lang === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
      >
        ES
      </button>
      <span className="opacity-30">|</span>
      <button
        type="button"
        onClick={() => change('en')}
        aria-label="English"
        className={`transition-opacity duration-200 ${lang === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
      >
        EN
      </button>
    </div>
  )
}
