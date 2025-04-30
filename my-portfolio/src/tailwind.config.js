/** @type {import('tailwindcss').Config} */
export default {
    // ← tell Tailwind where your JSX lives
    content: ["./src/**/*.{js,jsx}"],
    theme: { extend: { fontFamily: { sans: ["Inter", "ui-sans-serif"] } } },
    plugins: [],
    darkMode: 'class',
  };
  