/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '394',
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1280px',
    },

    extend: {
      colors: {
        primary: '#640d11',
        secondary: '#e4b97b',
        support: '#2b3f32',
        banana: '#ffcf3c',
        papaya: '#f37229',
        aloe: '#00c59f',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        courgette: ['Courgette', 'cursive'],
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
