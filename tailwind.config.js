/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme colors
        lightPrimary: "#000",
        lightGray: "#E5E7EB",
        lightText: "#000",
        lightBackground: "#FFF",
        lightIcon: "#FFF",
        lightCircularIndicator: "#FFA500", // Yellow-500
        // Dark theme colors
        darkPrimary: "#FFF",
        darkText: "#FFF",
        darkBackground: "#1F2937", // Gray-800
        darkIcon: "#FFF",
        darkCircularIndicator: "#FCD34D", // Yellow-300
        // Common colors
        commonStraightLineLoader: "#10B981", // Green-500
        commonText: "#9CA3AF", // Gray-500
      },
    },
  },
  plugins: [],
};
