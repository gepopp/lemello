const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                green:{
                    100 : "#06D66B",
                    200 : "#06C964",
                    300 : "#05B058",
                    400 : "#048A45",
                    500 : "#024A25",
                },
                orange:{
                    100 : "#F9BF06",
                    200 : "#F7AC16",
                    300 : "#E0AD04",
                    400 : "#D19213",
                    500 : "#BA9004",
                    600 : "#AB770F",
                    700 : "#7A5E02",
                    800 : "#3B2D01",
                }
            },
            fontSize:{
                'xxs': ['10px', '12px']
            }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
