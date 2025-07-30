import React from "react";
import NavLink from "./NavLink";
import type { NavLinkProps as NavLinkType } from "../Header.types"; 

interface NavLinksProps { 
    links: NavLinkType[];
}

const NavLinks: React.FC<NavLinksProps> = ({links}) => {

    return (
        <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                    <NavLink key={link.href} label={link.label} href={link.href}/>
                ))}
            </div>
        </nav>
    )
}

export default NavLinks