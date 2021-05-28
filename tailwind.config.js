module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('https://picsum.photos/1600/500?blur=4')" 
      })
    },
    colors: {
      primary: '#818487',
      light: '#f0eeef',
      dark: '#272c29',
      highlight: '#737079'
    },
    fontFamily: {
      body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Liberation Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      logo: ['Comfortaa']
    },
    container: {
      center: true,
    },
    letterSpacing: {
      widest: '.188em'
    },
    flex: {
      card: '3 2 20em'
    },
    minHeight: {
      '1/2': '50vh',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
