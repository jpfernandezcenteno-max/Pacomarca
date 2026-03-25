import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#EBEBEB',   // light gray  (was warm beige)
        sand:  '#C8C8C8',   // mid-light gray (was warm sand)
        cream: '#F5F5F5',   // near-white gray (was warm cream)
        ink:   '#1A1A1A',   // near-black (unchanged)
        gold:  '#4A4A4A',   // dark accent gray (was warm gold)
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}

export default config
