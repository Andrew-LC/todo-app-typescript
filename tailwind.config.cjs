/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    	    colors: {
	    	    'bg': '#643073',
		    'dark-orange': '#ff7079',
		    'darker-bg': '#41106b'
	    }
    },
  },
  plugins: [],
}