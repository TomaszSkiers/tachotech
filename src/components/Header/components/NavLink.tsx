import React from "react";
import { Link } from "react-router-dom";
import type { NavLinkProps } from "../Header.types"; // Importujemy typ z naszego pliku typów

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  return (
    <Link
      to={href}
      className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md text-md font-medium"
    >
      {label}
    </Link>
  );
};

export default NavLink;
