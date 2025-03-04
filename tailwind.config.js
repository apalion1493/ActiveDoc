const options = require('./config') //options from config.js

const allPlugins = {
    typography: require('@tailwindcss/typography'),
    forms: require('@tailwindcss/forms'),
    containerQueries: require('@tailwindcss/container-queries'),
}

const plugins = Object.keys(allPlugins)
    .filter(k => options.plugins[k])
    .map(k => {
        if (k in options.plugins && options.plugins[k]) {
            return allPlugins[k]
        }
    })

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,php}'],
    darkMode: 'class',
    theme: {
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '100%': '100%',
            '100-auto': '100% auto',
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        fontSize: {
            none: ['0px', '0px'],
            base: ['18px', '130%'],
            h1: ['70px', '100%'],
            h2: ['48px', '120%'],
            h3: ['40px', '130%'],
            h4: ['32px', '130%'],
            h1Mob: ['56px', '120%'],
            h2Mob: ['30px', '120%'],
            Top1: ['24px', '130%'],
            Top2: ['22px', '130%'],
            Top3: ['20px', '130%'],
            Top4: ['36px', '100%'],
            Top5: ['28px', '100%'],
            Top6: ['44px', '110%'],
            body: ['16px', '130%'],
            body2: ['14px', '120%'],
            body3: ['8px', '120%'],
            body4: ['12px', '120%'],
        },
        screens: {
            '2xl': {max: '1549px'},
            xl: {max: '1344px'},
            lg: {max: '1023px'},
            md: {max: '767px'},
            sm: {max: '639px'},
            sm2: {max: '480px'},
            sm3: {max: '360px'},

            minsm: {min: '640px'},
            minmd: {min: '768px'},
            minlg: {min: '1024px'},
            minxl: {min: '1345px'},
            min2xl: {min: '1550px'},
        },
        container: {
            center: true,
            padding: {
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            lineHeight: {
                '100': '100%'
            },
            boxShadow: {
                'v1': '0px 0px 16px 0px rgba(37, 51, 126, 0.05)',
                'v2': '0px 0px 15px 0px rgba(5, 25, 68, 0.05)',
                'v3': '0px 2px 8px 0px rgba(5, 25, 68, 0.08)',
            },
            borderRadius: {
                '4xl': '32px',
                '5xl': '40px',
                '6xl': '20px',
            },
            colors: {
                transparent: 'transparent',
                Blue: '#005795',
                BlueStroke: '#D5E1EA',
                BodyText: '#505B71',
                TitleText: '#051944',
                LightGrey: '#F7F8F9',
                Stroke: '#EAF1F6',
                Yellow: '#FCAF17',
                White50: '#FFFFFF80',
                White20: '#FFFFFF33',
            },
            letterSpacing: {
                '018': '-0.18px'
            },
            padding: {
                '1/4': '25%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '5/6': '83.333333%',
                '1/24': '4.166667%',
                '2/24': '8.333333%',
                '3/24': '12.5%',
                '4/24': '16.666667%',
                '5/24': '20.833333%',
                '6/24': '25%',
                '7/24': '29.166667%',
                '8/24': '33.333333%',
                '2.5': '10px',
            },
        },
    },
    plugins: plugins,
}
