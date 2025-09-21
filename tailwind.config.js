/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Kolory bazowe
        primary: "#2A4B8D", // Główny granat - dla przycisków, nagłówków, ważnych sekcji
        secondary: "#4A70B4", // Jasny niebieski - dla tła sekcji, akcentów, linków
        accent: "#E6B800", // Złoty/musztardowy - dla przycisków CTA (Call to Action), ikon

        // Kolory tekstu i tła
        background: "#F8F8F8", // Prawie białe tło strony
        text: "#333333", // Ciemny szary dla głównego tekstu
        lightText: "#666666", // Jaśniejszy szary dla tekstu pomocniczego, opisów
        heading: "#1A2B4D", // Bardzo ciemny granat/grafit dla nagłówków

        // Neutralne kolory (opcjonalne, przydatne do obramowań, cieni)
        border: "#DDDDDD",
        shadow: "rgba(0, 0, 0, 0.1)",
      },
      // Jeśli chcesz dodać niestandardowe rozmiary tekstu, spacje itp.
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      // Możesz też rozszerzyć inne właściwości, np. fonty
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Przykład dodania customowych fontów
        montserrat: ["Montserrat", "sans-serif"],
        goldman: ["Goldman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
