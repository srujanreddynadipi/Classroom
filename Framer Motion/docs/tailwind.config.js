/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
      // Add any other file paths that contain your content
    ],
    theme: {
      extend: {
        // Extend the default Tailwind theme here
        colors: {
          // Add custom colors
          primary: '#3b82f6',
          secondary: '#10b981',
        },
        animation: {
          // Add animations that work well with Framer Motion
          'spin-slow': 'spin 3s linear infinite',
          'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }
      },
    },
    plugins: [
      // Add Tailwind plugins here
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }