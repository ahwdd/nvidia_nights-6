/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'default': '0 0 2px 0 rgba(0,0,0,0.19), 0 2px 6px 0 rgba(0,0,0,0.19)',
        'default-hover': '0 0 4px 0 rgba(0,0,0,0.17), 0 6px 18px 2px rgba(0,0,0,0.17)'
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.75rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.125rem' }],
      },
      container: {
        center: true, // Centers the container
        padding: "1rem", // Adds default padding (like px-4)
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1650px", // Customize breakpoints if needed
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainGreen: "#74B800",
        mainGrey: "#9E9E9E",
        mainlyGrey: "#999",
        mainGreenOpacity: "#74B80059",
      },
    },
  },
  plugins: [],
};
