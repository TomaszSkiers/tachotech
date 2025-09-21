import React from "react";

import { useState } from "react";


interface MobileHeaderProps {
  companyName: string;
  logoSvg?: React.ReactNode; // Opcjonalnie, jeśli chcesz przekazać logo SVG jako komponent
  onMenuClick?: () => void; // Funkcja do obsługi kliknięcia menu
}

const Header: React.FC<MobileHeaderProps> = ({
  companyName,
  logoSvg,
  onMenuClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Możesz wykorzystać ten stan do otwierania/zamykania menu

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <header
      className="
      relative z-10
      flex items-center justify-between
      w-full p-4
      bg-gradient-to-r from-red-600 to bg-red-400
      text-white shadow-lg
      md:hidden lg:hidden xl:hidden
      h-16
      border-t-2 border-b-2 border-blue-600
    "
    >
      {/* Logo/Nazwa Firmy */}
      <div className="flex items-center space-x-2">
        {logoSvg ? (
          <div className="w-8 h-8 flex items-center justify-center">
            {logoSvg}
          </div>
        ) : (
          // Przykładowa ikona koła zębatego, jeśli nie przekazano logoSvg
          <div className="w-8 h-8 flex items-center justify-center text-blue-300">
          {/* Ikonka handyman zamiast tachoTechLogoSvg */}
          <span className="material-symbols-outlined text-3xl">
            handyman
          </span>
        </div>
        )}
        <span className="text-3xl font-semibold font-goldman">
          {companyName}
        </span>
      </div>

      {/* Ikona Hamburger Menu */}
      <button
        onClick={handleMenuToggle}
        className="
          p-2
          focus:outline-none 
          rounded-md border bg-red-800
        "
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6 text-white  "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            // Ikona X, gdy menu jest otwarte (opcjonalnie)
            <path
            
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Ikona Hamburgera, gdy menu jest zamknięte
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Tutaj możesz dodać komponent menu bocznego, który będzie widoczny po otwarciu */}
      {/* {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-800 shadow-md">
          <nav className="flex flex-col p-4 space-y-2">
            <a href="#" className="block py-2 px-3 hover:bg-blue-700 rounded-md">Strona Główna</a>
            <a href="#" className="block py-2 px-3 hover:bg-blue-700 rounded-md">Usługi</a>
            <a href="#" className="block py-2 px-3 hover:bg-blue-700 rounded-md">Kontakt</a>
          </nav>
        </div>
      )} */}
    </header>
  );
};

// {
//   const navLinks = [
//     { label: "Usługi", href: "/uslugi" },
//     { label: "Cennik", href: "/cennik" },
//     { label: "Kontakt", href: "/kontakt" },
//   ];

//   return (

//     <header className="shadow-md bg-white sticky top-0 ">
//       <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
//         <div className="flex justify-between pt-1 items-center h-11 md:h-16">
//           <div className="flex-shrink-0 ">
//             <Logo />
//           </div>
//           <NavLinks links={navLinks} />
//           <span className="text-blue-600 pr-2">tel. 512 221 184</span>
//         </div>
//       </div>
//       <div className="absolute  p-2 right-0">
//         <Link
//           className="p-2 bg-white text-blue-600 rounded-full opacity-80 md:hidden block border border-black"
//           to={navLinks[1].href}
//         >
//           {navLinks[1].label}
//         </Link>
//         <Link
//           className="p-2 bg-white text-blue-600 rounded-full opacity-80 md:hidden block mt-2 border border-black"
//           to={'/contakt'}
//         >
//           kontakt
//         </Link>
//         <Link
//           className="p-2 bg-white text-blue-600 rounded-full opacity-80 md:hidden block mt-2 border border-black"
//           to={'/about'}
//         >
//           o mnie
//         </Link>
//       </div>
//     </header>
//   );
// };

export default Header;
