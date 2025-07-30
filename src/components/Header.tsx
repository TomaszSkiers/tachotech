import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo z Linkiem do strony głównej */}
        <Link to="/" className="flex items-center">
          <span className="ml-2 text-xl font-bold text-blue-800">TachoSerwis</span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/uslugi" className="text-gray-700 hover:text-blue-600">Usługi</Link>
          <Link to="/o-nas" className="text-gray-700 hover:text-blue-600">O nas</Link>
          <Link to="/cennik" className="text-gray-700 hover:text-blue-600">Cennik</Link>
          <Link to="/kontakt" className="text-gray-700 hover:text-blue-600">Kontakt</Link>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;