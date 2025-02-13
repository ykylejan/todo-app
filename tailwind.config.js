/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
          fontFamily: {
            spacemono: ["SpaceMono", "sans-serif"],
            afacad: ["Afacad", "sans-serif"],
            afacadsemibold: ["Afacad-Semibold", "sans-serif"],
            afacadbold: ["Afacad-Bold", "sans-serif"],
          }
        },
    },
    plugins: [],
};
