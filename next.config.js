/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exporta el sitio como HTML/CSS/JS estático (carpeta "out/") para subir a cPanel.
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  // URLs con barra final -> genera carpeta/index.html (más compatible con Apache/cPanel).
  trailingSlash: true,
  images: {
    // En hosting estático no hay optimizador de imágenes en tiempo real.
    unoptimized: true,
  },
}

module.exports = nextConfig
