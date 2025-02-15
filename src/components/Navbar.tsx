import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Ticket, User, MessageCircle, LogIn, Moon, Sun } from 'lucide-react';

function Navbar() {
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-xl dark:text-white">RobuxStore</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/shop" className="nav-link">
              <Store className="w-5 h-5" />
              <span>Tienda</span>
            </Link>
            <Link to="/raffle" className="nav-link">
              <Ticket className="w-5 h-5" />
              <span>Sorteo</span>
            </Link>
            <Link to="/profile" className="nav-link">
              <User className="w-5 h-5" />
              <span>Perfil</span>
            </Link>
            <Link to="/support" className="nav-link">
              <MessageCircle className="w-5 h-5" />
              <span>Soporte</span>
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <Moon className="w-5 h-5 hidden dark:block text-gray-300" />
              <Sun className="w-5 h-5 block dark:hidden text-gray-600" />
            </button>
            <button className="flex items-center space-x-1 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              <LogIn className="w-5 h-5" />
              <span>Iniciar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;