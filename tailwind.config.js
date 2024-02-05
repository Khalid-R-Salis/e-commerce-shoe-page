// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        yellow: '0 8px 12px -2px rgba(255, 255, 0, 0.2), 0 4px 8px -4px rgba(255, 255, 0, 0.12)',
      },
      colors: {
        custom: 'hsl(26, 100%, 55%)',
        custom2:"hsl(25, 100%, 94%)",
        custom3:"hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
}
