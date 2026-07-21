'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImageCarouselProps {
  images: string[]
  grayscale?: boolean
}

export default function ImageCarousel({ images, grayscale = true }: ImageCarouselProps) {
  // Triplicar para scroll infinito suave
  const repeated = [...images, ...images, ...images]

  return (
    <section className="py-12 overflow-hidden bg-white">
      <motion.div
        className="flex gap-4"
        animate={{ x: ['0%', `-${100 / 3}%`] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ width: 'max-content' }}
      >
        {repeated.map((src, i) => (
          <div key={i} className="relative w-72 h-52 shrink-0 overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              sizes="288px"
              className={`object-cover ${grayscale ? 'grayscale' : ''}`}
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
