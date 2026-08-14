'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: any
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Solo cargamos Google Translate si el usuario eligio ingles.
    // En espanol (por defecto) no se carga nada -> rendimiento intacto.
    const enActive = document.cookie.includes('googtrans=/es/en')
    if (!enActive) return

    // Parche para evitar el crash "removeChild/insertBefore" de Google Translate + React
    if (!(window as any).__gtPatched) {
      ;(window as any).__gtPatched = true
      const proto = Node.prototype as any
      const originalRemoveChild = proto.removeChild
      proto.removeChild = function (child: any) {
        if (child.parentNode !== this) return child
        return originalRemoveChild.apply(this, arguments as any)
      }
      const originalInsertBefore = proto.insertBefore
      proto.insertBefore = function (newNode: any, referenceNode: any) {
        if (referenceNode && referenceNode.parentNode !== this) return newNode
        return originalInsertBefore.apply(this, arguments as any)
      }
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'en,es',
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    if (!document.getElementById('google-translate-script')) {
      const s = document.createElement('script')
      s.id = 'google-translate-script'
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return <div id="google_translate_element" aria-hidden />
}
