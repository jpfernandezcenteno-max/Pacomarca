/**
 * Fuerza la traducción exacta de un texto (evita la traducción automática de Google).
 * Muestra `es` por defecto y `en` cuando Google Translate activa el inglés
 * (agrega la clase `translated-ltr` al <html>). Ambas versiones van marcadas
 * como notranslate para que Google no las modifique.
 *
 * Uso:  <T es="Fibra fina" en="Fine fiber" />
 */
export default function T({
  es,
  en,
  className = '',
}: {
  es: string
  en: string
  className?: string
}) {
  return (
    <>
      <span translate="no" className={`notranslate lang-es ${className}`}>
        {es}
      </span>
      <span translate="no" className={`notranslate lang-en ${className}`}>
        {en}
      </span>
    </>
  )
}
