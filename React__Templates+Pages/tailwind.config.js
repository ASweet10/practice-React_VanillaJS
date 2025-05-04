/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background-dark': '#181818',
        'background-light': '#757575',
        'navbar-dark': '#121212',
        'navbar-light': '#B3B3B3',
        'text-dark': '#121212',
        'text-light': '#dbdbdb',
        'button-hover': '#161616',
      },
      backgroundImage: {
        'register-img': "url('/src/images/deer-trees-sunset-wallpaperflare.jpg')",
        'login-img': "url('/src/images/science-fiction-wallpaperflare.jpg')",
      }
    },
  },
  plugins: [],
}

