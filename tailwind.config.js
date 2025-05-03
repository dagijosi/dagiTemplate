export default {
  theme: {
    extend: {
      colors: {
        'cyan': {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        'blue': {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        'purple': {
          500: '#a855f7',
          600: '#9333ea',
        },
        'gray': {
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        'red': {
          500: '#ef4444',
        },
        'green': {
          400: '#4ade80',
          500: '#22c55e',
        },
        'yellow': {
          500: '#eab308',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
} 