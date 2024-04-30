/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'mobile': '430px',   // mobile
      'desktop': '1280px',  // desktop
      'wide-desktop': '1280px', // wide desktop
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
};