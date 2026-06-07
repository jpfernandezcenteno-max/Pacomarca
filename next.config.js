/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Todas las imágenes son locales; Next las sirve en AVIF/WebP automáticamente.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
}

module.exports = nextConfig
