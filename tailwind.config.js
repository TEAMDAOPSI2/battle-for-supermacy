/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#0070f3',
                'secondary': '#FFFF09',
                'tertiary': '#ff6600',
                'accent': '#ff6600',
                'primary-dark': '#0070f3',
                'secondary-dark': '#ff6600',
                'tertiary-dark': '#ff6600',
                'dark-gray': '#9C9C93',
                'soft-black': '#282823',
            },
            fontFamily: {
                'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
