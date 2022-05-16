module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'apex-banner': "url('/src/images/apexbanner.jpg')"
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'green': '#86dc3d',
      'apexblue': '#6486df',
      'apexred': '#d92a29',
    },
  },
  plugins: [],
}