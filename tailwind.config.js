/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          '950': '#0F172A', // deep navy
          '900': '#1E293B', // dark navy
          '800': '#334155', // medium navy
          '700': '#475569', // light navy
        },
        'electric-blue': {
          '900': '#1E40AF', // darkest
          '800': '#1D4ED8', // darker
          '700': '#2563EB', // dark
          '600': '#3B82F6', // medium
          '500': '#60A5FA', // base
          '400': '#93C5FD', // light
          '300': '#BFDBFE', // lighter
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};