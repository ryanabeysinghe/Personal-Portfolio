/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
  },
  plugins: [],
};