module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#04248B',
          350: '#074E8C',
          250: '#A9D8F4'
        },
      },
      height: theme => ({
        "screen-8": "80vh",
        
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
