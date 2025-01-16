module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'), // Si vous utilisez des formulaires
    require('@tailwindcss/typography'), // Si vous utilisez des styles typographiques
  ],
};
