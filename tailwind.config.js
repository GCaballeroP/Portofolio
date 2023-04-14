/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    /* "./src/**.{js,ts,jsx,tsx,mdx}", */
  ],
  theme: {
    extend: {
      colors: {
          background: "#FBF6F0",
          rose: "#DDB7AC",
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
    },
  },
},
  plugins: [],
}