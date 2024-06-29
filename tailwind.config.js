/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chal: 'Chal, times, serif',
        cinzel: 'Cinzel, times, serif',
        cin: 'Cin, times, serif',
      },
      colors: {
        terracota: "#5D331A",
        salmon: "#A8836B",
        clay: "#E7E2BF",
        marble: "#E3DFC3"
      }
    },
  },
  plugins: [],
};
