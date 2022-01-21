module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'nunito': 'nunito',
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
