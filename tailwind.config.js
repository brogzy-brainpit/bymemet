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
      zIndex: {
        'preloader':'999999',
        'header':'99999',

      },
        colors: {
         'brand-accent':"rgb(116, 97, 195)", //accent for links, hover state 
        'brand-secondaryx':"#FDEB87", //orange best
        'brand-secondary':"#FFB347", //blue best  #10B981
        'brand-white':"#FFFFFF", //blue best  #10B981
        'brand-black':"#262626", //blue best  #10B981
        // 'brand-secondary':"#0096A5", //blue best  #10B981
        
      },
       fontSize:{
          //  'heading': 'clamp(4.2em, 12vw, 9em)',
           'heading': 'clamp(5.8em, 14vw, 16em)',
           'heading2': 'clamp(3.8em, 9vw, 9em)',
           'heading3': 'clamp(1.5em, 2.4vw, 7.5em)',
           'display': 'clamp(130px, 33vw, 490px)',
           'para': 'clamp(1.2em, 1vw, 1.4em)',
        'button': 'clamp(14px, 3.5vw, 18px)',
      },
      fontFamily:{
        // 'custom':['Arapey','Arial'],
        'custom':["var(--font-custom)", "Arial"],
        'custom2':["var(--font-custom2)", "Arial"],
        'body':["var(--font-body)", "Arial"],
        'accent':["var(--font-accent)", "Arial"],
        // 'custom':['ConthraxBold','Poppins'],
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
