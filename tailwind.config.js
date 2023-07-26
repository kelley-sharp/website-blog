/** @type {import('tailwindcss').Config} */
module.exports = {
  /**
   * content provides an array of globs letting TailwindCSS know which files it
   * should analyze for purging extra classes not used in your application.
   * If we didn't configure this, the result would be every single
   * class TailwindCSS has to offer being shipped with our application.
   **/
  content: [
    "./src/pages/**/*.{tsx,mdx}",
    "./src/components/**/*.{tsx,mdx}",
    "./src/app/**/*.{tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
