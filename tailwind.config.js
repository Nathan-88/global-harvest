/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#E3DBDB",
        brown: "#B38A3A"
      },
      backgroundImage: {
        bible: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('assets/images/blackspray.png')",
        hero: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('assets/images/call_to_action.png')"
      }
    },
  },
  plugins: [],
}

