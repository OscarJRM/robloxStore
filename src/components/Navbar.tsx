import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, Ticket, User, MessageCircle, LogIn, Moon, Sun, X, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LoginModal } from './LoginModal';

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') 
      ? 'dark' 
      : 'light';
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo y botón móvil */}
            <div className="flex items-center justify-between w-full">
              <Link to="/" className="flex items-center space-x-2">
                <Store className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="font-bold text-xl dark:text-white">RobuxStore</span>
              </Link>
              
              <div className="flex md:hidden items-center gap-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Moon className="w-5 h-5 hidden dark:block text-gray-300" />
                  <Sun className="w-5 h-5 block dark:hidden text-gray-600" />
                </button>
                
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 ">
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
            {user ? (
                <button onClick={signOut} className="flex items-center space-x-1  bg-blue-600 dark:bg-blue-500 text-white px-6 py-1.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors min-w-[140px]">
                <LogIn className="w-4 h-4" />
                <span>Cerrar Sesión</span>
                </button>
              ) : (
                <button onClick={() => setIsLoginModalOpen(true)} className="flex items-center space-x-1  bg-blue-600 dark:bg-blue-500 text-white px-6 py-1.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors min-w-[140px]">
                <LogIn className="w-4 h-4" />
                <span>Iniciar Sesión</span>
                </button>
            )}     
             </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col space-y-4 pb-4 border-t dark:border-gray-700 mt-2">
              <Link 
                to="/shop" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Store className="w-5 h-5" />
                <span>Tienda</span>
              </Link>
              
              <Link 
                to="/raffle" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Ticket className="w-5 h-5" />
                <span>Sorteo</span>
              </Link>
              
              <Link 
                to="/profile" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Perfil</span>
              </Link>
              
              <Link 
                to="/support" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Soporte</span>
              </Link>

              <div className="flex flex-col space-y-2 px-4">
                {user ? (
                  <button
                    onClick={() => {
                      signOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex justify-center items-center space-x-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Cerrar Sesión</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex justify-center items-center space-x-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Iniciar Sesión</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}

export default Navbar;