import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                lg: "50px",
                xl: "100px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: "Poppins, sans-serif",
            },
            colors: {
                "dark-indigo": "#242649",
                primary: "#222B68",
                secondary: "#65A7D3",
                "butter-yellow": "#65A7D3",
                "lavender-pink": "#386CAF",
                "persian-pink": "#000",
                "iron-grey": "#B2D3EB",
                "pastel-purple": "#CDDFEF",
                "bluish-purple": "#364989",
                "smoke-purple": "#FFFFFF"
            },
        },
    },

    plugins: [forms, typography],
};
