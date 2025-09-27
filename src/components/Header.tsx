import { useState } from "react";
import { useNavigate, useLocation, type To } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path: To) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("/")}
              className=" text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-200"
            >
              AI ResumeMatcher
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick("/")}
              className={`px-3 py-2 rounded-lg  font-medium transition-all duration-100 ${
                isActivePage("/")
                  ? "text-blue-600 bg-blue-50 shadow-md"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/matcher")}
              className={`px-3 py-2 rounded-lg  font-medium transition-all duration-100 ${
                isActivePage("/matcher")
                  ? "text-blue-600 bg-blue-50 shadow-md"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              Matcher
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`px-3 py-2 rounded-lg  font-medium transition-all duration-100 ${
                isActivePage("/about")
                  ? "text-blue-600 bg-blue-50 shadow-md"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              About
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center duration-200 justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t text-center border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => handleNavClick("/")}
              className={`block w-full px-3 py-2 rounded-lg text-base font-medium transition-all duration-100 ${
                isActivePage("/")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("/matcher")}
              className={`block w-full px-3 py-2 rounded-lg text-base font-medium transition-all duration-100 ${
                isActivePage("/matcher")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              Matcher
            </button>
            <button
              onClick={() => handleNavClick("/about")}
              className={`block w-full px-3 py-2 rounded-lg text-base font-medium transition-all duration-100 ${
                isActivePage("/about")
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              }`}
            >
              About
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
