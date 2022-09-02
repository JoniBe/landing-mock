module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,}'],
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primaryBlue: '#3f8dcc',
            secondaryBlue: '#0d3657',
            primaryGreen: '#5fc090',
            secondaryGreen: '#09442f',
            primaryGray: '#939598',
            secondaryGray: '#6d6e71',
            almostBlack: '#2D2D2D',
            almostGray: '#5C5C5C',
            textGray: '#565656',
            errorColor: 'red',
        },
        container: {
            padding: '4rem',
        },
        screens: {
            mobile: '320px',
            // => @media (min-width: 320px) { ... }

            tablet: '640px',
            // => @media (min-width: 640px) { ... }

            laptop: '1024px',
            // => @media (min-width: 1024px) { ... }

            desktop: '1280px',
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [],
};
