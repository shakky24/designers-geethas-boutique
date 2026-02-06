import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, soft, fabric-like tones
        cream: {
          50: '#fdfcfa',
          100: '#faf8f5',
          200: '#f5f2ed',
          300: '#ebe6dd',
          400: '#e0d8cc',
          500: '#d4c9ba',
          600: '#c2b5a3',
          700: '#a89786',
          800: '#8a7967',
          900: '#6e614f',
        },
        sand: {
          50: '#faf9f7',
          100: '#f4f2ee',
          200: '#e9e4dc',
          300: '#ddd5c8',
          400: '#cfc3b0',
          500: '#bfaf97',
          600: '#a89479',
          700: '#8a7860',
          800: '#6f604a',
          900: '#594d3b',
        },
        rust: {
          50: '#fdf5f3',
          100: '#fae8e4',
          200: '#f5d1c9',
          300: '#ebb3a4',
          400: '#de8b74',
          500: '#c96949',
          600: '#a94e32',
          700: '#8a3f28',
          800: '#6f3422',
          900: '#5a2b1e',
        },
        maroon: {
          50: '#faf5f5',
          100: '#f4e8e8',
          200: '#e9d0cf',
          300: '#d9aeac',
          400: '#c3847f',
          500: '#a95f58',
          600: '#8a423a',
          700: '#6f3530',
          800: '#5a2c28',
          900: '#4a2523',
        },
        sage: {
          50: '#f6f7f4',
          100: '#eaeee4',
          200: '#d5ddc9',
          300: '#b8c5a4',
          400: '#97a87b',
          500: '#7a8c5d',
          600: '#607047',
          700: '#4c5839',
          800: '#3e4730',
          900: '#343c29',
        },
        olive: {
          50: '#f7f8f4',
          100: '#edeee6',
          200: '#d9ddcc',
          300: '#bec5ab',
          400: '#a0a884',
          500: '#848b66',
          600: '#6a704f',
          700: '#545841',
          800: '#454837',
          900: '#3a3d2f',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.15em',
        'wide': '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 1s ease-out',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
