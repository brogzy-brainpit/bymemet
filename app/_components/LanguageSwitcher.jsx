// // app/_components/LanguageSwitcher.js
// "use client"; // This marks the component as a Client Component

// import { useRouter } from 'next/navigation'; // For App Router
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const router = useRouter();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     router.refresh(); // Use `refresh` to re-render the page
//   };

//   return (
//     <div className="flex space-x-2">
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('es')}>Español</button>
//       <button onClick={() => changeLanguage('fr')}>Français</button>
//     </div>
//   );
// };

// export default LanguageSwitcher;
