/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F4EE',
        shell: '#EEE9DF',
        beige: '#F3EDE3',
        line: '#DDD7CC',
        ink: '#211C1A',
        graphite: '#625B55',
        muted: '#6E6962',
        saffron: '#B88A3B',
        gold: '#D8C7A2',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { shell: '1200px' },
      transitionTimingFunction: { soft: 'cubic-bezier(0.22, 0.61, 0.36, 1)' },
      keyframes: {
        fade: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        fade: 'fade 0.9s ease both',
        rise: 'rise 0.9s cubic-bezier(0.22,0.61,0.36,1) both',
      },
    },
  },
  plugins: [],
}
