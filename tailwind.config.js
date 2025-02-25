/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'roboto': ["Roboto", "sans-serif"],
            'poppins': ["Poppins", "sans-serif"],
            'ubuntu': ["Ubuntu", "sans-serif"]
        },
        extend: {

        },
    },
    plugins: [],
}