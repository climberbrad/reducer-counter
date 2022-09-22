const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        options: {
            safelist: [
                'bg-cyan-100',
                'text-cyan-800',
                'bg-yellow-100',
                'text-yellow-200',
                'text-yellow-400',
                'text-yellow-500',
                'text-yellow-700',
                'bg-indigo-100',
                'text-indigo-200',
                'text-indigo-400',
                'text-indigo-500',
                'text-indigo-700',
                'text-blue-600',
                'text-gray-200',
            ],
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        // make sure to add new configuration in `extend`, otherwise you will overwrite TW defaults
        extend: {
            fontSize: {
                xxs: ['.625rem', '1rem'], // 10px
                tiny: ['.6875rem', '1rem'], // 11px
            },
            spacing: {
                200: '50rem',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                cyan: colors.cyan,
                'gray-900': '#050520',
                'gray-800': '#2A2A41',
                'gray-700': '#505063',
                'gray-600': '#686981',
                'gray-500': '#81839F',
                'gray-400': '#A3A5BA',
                'gray-300': '#C5C6D4',
                'gray-200': '#E1E1E4',
                'gray-100': '#EEEEEF',
                'gray-50': '#F9FAFB',
                'midnight-blue': '#3A0CA3',
                'endgame-blue-900': '#1535D4',
                'endgame-blue-800': '#2D57E4',
                'endgame-blue-700': '#0A67E9',
                'endgame-blue-600': '#006FFF',
                'endgame-blue-500': '#0099FF',
                'endgame-blue-400': '#47B5FF',
                'endgame-blue-300': '#8ED2FF',
                'endgame-blue-200': '#EDF5FE',
                'endgame-blue-100': '#F6F8FE',
                'endgame-blue-50': '#F9FAFE',
                'endgame-blue-25': '#FCFDFF',
                'teal-100': '#CCFBF1',
                'teal-900': '#134E4A',
                charcoal: '#050520',
            },
            width: {
                '304px': '304px',
            },
            screens: {
                '1.5xl': '1400px',
            }
        },
    },
    variants: {
        extend: {
            borderOpacity: ['hover'],
            opacity: ['disabled'],
        },
    },
    plugins: [],
};
