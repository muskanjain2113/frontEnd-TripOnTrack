/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          syne: ['var(--font-syne)', 'sans-serif'], // ✅ this must match _app.js
        },
      },
    },
    plugins: [],
  };
  