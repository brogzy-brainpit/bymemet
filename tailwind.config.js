// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontStretch: {
        'ultra-condensed': '50%',
        'extra-condensed': '62.5%',
        'condensed': '75%',
        'semi-condensed': '87.5%',
        'normal': '100%',
        'semi-expanded': '112.5%',
        'expanded': '125%',
        'extra-expanded': '150%',
        'ultra-expanded': '200%',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customColor:"#FFFFFF"
        // customColor:"#debc78"
      },
      fontSize:{
        'regular': 'clamp(20px, 4vw, 24px)',
        'heading2': 'clamp(32px, 5vw, 50px)',
        'heading': 'clamp(40px, 8vw, 130px)',
        'para': 'clamp(16px, 1vw, 28px)',
      },
      fontFamily:{
        // 'custom':['Arapey','Arial'],
        'normal':['Poppins'],
        'custom':['ConthraxBold','Poppins'],
        'custom2':['BriceBold','Poppins'],
        'custom3':['Danfo','Poppins'],
        'custom4':['Antonio', 'sans-serif']
        // 'custom2':['Amatic','Poppins'],
        // 'custom3':['Danfo','Arial'],
        // 'custom4':['Antonio', 'sans-serif']
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
