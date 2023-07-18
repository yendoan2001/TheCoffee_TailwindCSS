/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Karla: ['Karla', 'sans-serif']
            },
            colors: {
                'coffee': {
                    50: '#E8D6D0',
                    200: '#C89F94',
                    400: '#A25F4B',
                    600: '#744838',
                }
            },
            keyframes: {
                slideDown: {
                    '0%': {transform: 'translateY(-100%)'},
                    '100%': {transform: 'translateY(0)'},
                },
                fadeIn: {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1}
                }
            },
            animation: {
                slideDown: 'slideDown .4s ease-in-out',
                fadeIn: 'fadeIn .4s ease-in-out',
            },
            backgroundImage: {
                'slider': "url('img/slider.jpg')",
            }
        },
    },
    plugins: [],
}
