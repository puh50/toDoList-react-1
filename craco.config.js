module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    resolve: {
        alias: {
            '@material-ui/styled-engine': '@material-ui/styled-engine-sc',
        },
    },
}