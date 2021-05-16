module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2.3': '25px'
      },
      borderWidth: {
        '1': '1px'
      },
      colors: {
        'body-color': '#8BBEB2',//b5c2b7, FFFDDD, 55bcc9
        'dark-gray': '#84838b', //84838b
        'white': '#ffffff',
        'black': '#26252d',
        'role-color': '#84838b',
        'blue': '#0175b2',
        'red': '#cc6666',
        'skyblue': '#C9F0FF',
        'lighterblue': '#EAFFFD',
        'color1': '#c2e1e5',
        'color2': '#EAFFFD',
      },
      fontFamily: {
        bodyFont: ['Roboto'],
        NameFont: ['Itim'],
      },
      width: {
        '62.5': '62.5rem',
        'calc': '504px',
        '37/100': '37%',
        '63/100': '63%',
        '7.25': '115px',
        '9/10': '90%',
        '19/20': '95%',
      },
      margin: {
        '1.25': '0.313rem'
      },
      padding: {
        '8.75': '2.188rem'
      },
      inset: {
        '1.25': '5px'
      },
      letterSpacing: {
        title: '0.25rem'
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
  ],
}