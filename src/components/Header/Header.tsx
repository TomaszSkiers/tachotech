import React from "react";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const navLinks = [
    { label: "Usługi", href: "/uslugi" },
    { label: "Cennik", href: "/cennik" },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header className="shadow-md bg-transparent sticky top-0">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between pt-1 items-center h-11 md:h-16">
          <div className="flex-shrink-0 ">
            <Logo />
          </div>
          <NavLinks links={navLinks} />
          <span className="text-blue-600 pr-2">tel. 512 221 184</span>
        </div>
      </div>
      <div className="absolute  p-2 right-0">
        <Link
          className="p-2 bg-white text-blue-600 rounded-full opacity-80 md:hidden block border border-black"
          to={navLinks[1].href}
        >
          {navLinks[1].label}
        </Link>
        <Link
          className="p-2 bg-white text-blue-600 rounded-full opacity-80 md:hidden block mt-2 border border-black"
          to={navLinks[2].href}
        >
          {navLinks[2].label}
        </Link>
        <Link
          className="p-2 bg-white text-blue-600 rounded-full opacity-80 md:hidden block mt-2 border border-black"
          to={navLinks[2].href}
        >
          {navLinks[2].label}
        </Link>
      </div>
    </header>
  );
};

export default Header;
