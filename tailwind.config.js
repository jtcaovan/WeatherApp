module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2.25rem',
      '5xl': '3.5rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '10rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
