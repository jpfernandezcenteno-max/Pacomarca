'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  section: string
  title: string
  subtitle?: string
  imageUrl?: string
  imagePosition?: string
}

export default function PageHeader({
  section,
  title,
  subtitle,
  imageUrl = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=2400&q=90',
  imagePosition = 'object-center',
}: PageHeaderProps) {
  return (
    <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className={`object-cover ${imagePosition}`}
        priority
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/30 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4 font-medium">
            {section}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-white/75 max-w-2xl leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
