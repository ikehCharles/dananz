/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],

    theme: {
        colors: {
            primary: 'rgb(var(--color-brand-1) / <alpha-value>)',
            secondary: 'rgb(var(--color-brand-2) / <alpha-value>)',
            tertiary: 'rgb(var(--color-brand-3) / <alpha-value>)',
            grey: 'rgb(var(--color-brand-4) / <alpha-value>)',
            lightGrey: 'rgb(var(--color-brand-5) / <alpha-value>)',
        },
        extend: {},
    },
    plugins: [],
}