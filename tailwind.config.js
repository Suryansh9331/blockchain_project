
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        kanit: ['Kanit', 'Helvetica', 'Arial', 'PingFang SC', 'Microsoft Yahei', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      animation: {
        'pulse-glow': 'pulseGlow 1.5s infinite alternate',
      },  keyframes: {
        pulseGlow: {
          '0%': {
            boxShadow: '0 0 15px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.3), 0 0 45px rgba(0, 255, 0, 0.1)',
          },
          '100%': {
            boxShadow: '0 0 25px rgba(0, 255, 0, 1), 0 0 50px rgba(0, 255, 0, 0.7), 0 0 75px rgba(0, 255, 0, 0.5)',
          },
        },
      },
    },
  },
  plugins: [],



}
