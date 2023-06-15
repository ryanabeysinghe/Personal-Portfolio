/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      colors: {
        dark: "#28282B", // Matte Black
        light: "#FFF1E6", // Coconut
        primary: "#FF2400", // Scarlet 
        primaryDark: "#E3735E", // Terra Cotta
        salmon: "#FA8072", // Salmon

        // dark: "#1b1b1b",
        // light: "#f5f5f5",
        // primary: "#B63E96", // 240,86,199
        // primaryDark: "#58E6D9", // 80,230,217
        // customRed: "#e31b23",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '479px' },
      // => @media (max-width: 479px) { ... }

      'xxs': { max: '415px' },
      // => @media (max-width: 415px) { ... }

      'xxxs': { max: '350px' },
      // => @media (max-width: 350px) { ... }
    },
  },
  plugins: [],
};