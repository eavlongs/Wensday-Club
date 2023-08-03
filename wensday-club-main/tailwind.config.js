/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
        colors: {
            'debian-red': '#CA054D',
            'turquoise-blue': '#7BDEF3',
            'white-smoke': '#F5F5F5',
            'light-gray': '#D9D9D9',
            'light-grey': '#D9D9D9',
        },
        screens: {
            'desktop': '1281px',
        }
    },
  },
  plugins: [],
}
