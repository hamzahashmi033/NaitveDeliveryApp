/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './Navigation.{js,jsx,ts,tsx}',
    './screen/**/*.{js,jsx,ts,tsx}',
    './component/**/*.{js,jsx,ts,tsx}' // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FD5901',
        secondary: '#F78104',
        accent: '#FAAB36',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    // You can add any Tailwind CSS plugins here
  ],
};
