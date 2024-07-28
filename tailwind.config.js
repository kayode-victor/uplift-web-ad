/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#307d7e",
        secondary: "#FF9800",
        accent: "#8BC34A",
        background: "#F5F5F5",
        text: "#212121",
      },
      clipPath: {
        "trapezium-left": "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
        "trapezium-right": "polygon(5% 0, 100% 0, 100% 100%, 0 100%)",
        "trapezium-left-upside-down":
          "polygon(0 100%, 100% 100%, 95% 0, 0% 0%)",
        "trapezium-right-upside-down":
          "polygon(5% 100%, 100% 100%, 100% 0, 0 0)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-trapezium-left": {
          clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
        },
        ".clip-trapezium-right": {
          clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)",
        },
        ".clip-trapezium-left-upside-down": {
          clipPath: "polygon(0 100%, 100% 100%, 95% 0, 0% 0%)",
        },
        ".clip-trapezium-right-upside-down": {
          clipPath: "polygon(5% 100%, 100% 100%, 100% 0, 0 0)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
