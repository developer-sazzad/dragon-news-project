/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        openSans: ["Open Sans", "serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

