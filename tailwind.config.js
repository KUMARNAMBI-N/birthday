/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F1E3',
          light: '#FBF8F1',
          dark: '#EFE7D3',
        },
        champagne: {
          DEFAULT: '#EFE2C9',
          light: '#F5ECE0',
          dark: '#E2CEAE',
        },
        burgundy: {
          DEFAULT: '#650B1B',
          light: '#821327',
          dark: '#390812',
          deep: '#25050C',
        },
        gold: {
          light: '#EAD196',
          DEFAULT: '#C6A15B',
          dark: '#9A7432',
          rich: '#D4AF37',
        },
        wine: {
          DEFAULT: '#30050D',
          dark: '#200308',
          light: '#420713',
        },
        espresso: {
          DEFAULT: '#30241F',
          muted: '#806B60',
          light: '#4A3B35',
        },
        luxury: {
          text: '#30241F',
          muted: '#806B60',
          border: '#E8DBC5',
          goldBorder: 'rgba(198, 161, 91, 0.4)',
        }
      },
      fontFamily: {
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(57, 8, 18, 0.12), 0 0 25px rgba(198, 161, 91, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(57, 8, 18, 0.2), 0 0 35px rgba(198, 161, 91, 0.25)',
        'gold-glow': '0 0 25px rgba(198, 161, 91, 0.35)',
        'polaroid': '0 10px 25px -5px rgba(48, 36, 31, 0.2), 0 8px 10px -6px rgba(48, 36, 31, 0.1)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #EAD196 0%, #C6A15B 50%, #9A7432 100%)',
        'burgundy-gradient': 'linear-gradient(145deg, #650B1B 0%, #4D0815 50%, #25050C 100%)',
        'parchment': 'radial-gradient(ellipse at top, #FAF4E8 0%, #F5ECDD 60%, #EFE2C9 100%)',
      }
    },
  },
  plugins: [],
}
