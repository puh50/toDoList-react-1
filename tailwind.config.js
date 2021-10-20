module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            fill: ['hover', 'focus'],
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
}
