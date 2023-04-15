/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0070f3',
        'secondary': '#db2b42',
        'tertiary': '#ff6600',
        'accent': '#db2b42',
        'primary-dark': '#0070f3',
        'secondary-dark': '#ff6600',
        'tertiary-dark': '#ff6600',
        'dark-gray': '#9C9C93',
        'soft-black': '#1e1e1e',
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        'inter': ['F1', 'Calps Sans', 'Inter', 'sans-serif'],
        'flag': ['Twemoji Country Flags', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
