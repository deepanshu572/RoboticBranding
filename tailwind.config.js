// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)"],
        code: ["var(--font-code)"],
        grotesk: ["var(--font-grotesk)"],
      },
    },
  },
  plugins: [],
};
