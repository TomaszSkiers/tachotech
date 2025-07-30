export interface NavLinkProps {
    label: string;
    href: string;
}

export interface HeaderProps {
    companyName: string;
    navLinks: NavLinkProps[];
}