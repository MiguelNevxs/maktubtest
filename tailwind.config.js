/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maktub: {
          red: {
            DEFAULT: '#883235',
            hover: '#9a3c40',
            light: '#b04a4f',
            dark: '#6e2427',
            darker: '#50171a',
            deep: '#360d0f'
          },
          gold: {
            DEFAULT: '#D8B26E',
            light: '#F2D898',
            lighter: '#FCF3DA',
            dark: '#B88F44',
            darker: '#8C6926'
          },
          cream: {
            DEFAULT: '#FAF6EE',
            light: '#FCFAF5',
            dark: '#EFE7D6',
            border: '#E2D5BE'
          },
          charcoal: {
            DEFAULT: '#191214',
            light: '#281E21',
            card: '#22171A',
            dark: '#110C0D'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'wine-gradient': 'linear-gradient(135deg, #883235 0%, #50171a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F2D898 0%, #D8B26E 50%, #B88F44 100%)',
      },
      boxShadow: {
        'gold': '0 10px 25px -5px rgba(216, 178, 110, 0.3)',
        'wine': '0 10px 30px -5px rgba(136, 50, 53, 0.4)',
        'elegant': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
