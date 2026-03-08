/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0F172A',
          soft: '#1E293B',
        },
        amber: {
          brand: '#D97706',
          light: '#FEF3C7',
          glow: '#FFFBEB',
        },
      },
    },
  },
  plugins: [],
}
