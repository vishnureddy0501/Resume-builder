/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			boxShadow: {
        'border': '0 0 0 1px rgba(71, 85, 105, 1)',
      }
		},
  },
  plugins: [],
}

