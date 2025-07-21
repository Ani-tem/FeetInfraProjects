import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle'; // Import the new component

const NavigationAuto = ({ theme, toggleTheme }) => { // Accept theme props
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const getCurrentPage = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/' || path === '/home') return 'home';
      return path.substring(1);
    }
    return 'home';
  };

  useEffect(() => {
    setCurrentPage(getCurrentPage());
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item) => {
    setCurrentPage(item.toLowerCase());
    closeMobileMenu();
  };

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <>
      {/* Updated nav classes for theme switching */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <a href='/home' onClick={() => handleNavClick('home')}>
              <div className="text-2xl sm:text-3xl font-bold tracking-wider cursor-pointer">
                {/* Updated text colors */}
                <span className="text-gray-900 dark:text-white">FEET INFRA</span>
                <span className="text-orange-500">Projects</span>
              </div>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isActive = item.toLowerCase() === currentPage.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => handleNavClick(item)}
                    className={`relative group transition-colors duration-300 font-medium cursor-pointer ${
                      isActive ? 'text-orange-500' : 'text-gray-800 dark:text-white hover:text-orange-500'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
               {/* --- THEME TOGGLE ADDED HERE --- */}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            
            <div className="md:hidden flex items-center gap-4">
               {/* --- THEME TOGGLE FOR MOBILE --- */}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-800 dark:text-white hover:text-orange-500 transition-colors duration-300 p-2"
                aria-label="Toggle mobile menu"
              >
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-90' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800/50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => {
              const isActive = item.toLowerCase() === currentPage.toLowerCase();
              return (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 font-medium cursor-pointer ${
                    isActive 
                      ? 'text-orange-500 bg-orange-500/10 border-l-4 border-orange-500' 
                      : 'text-gray-800 dark:text-white hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:border-l-4 hover:border-orange-500'
                  }`}
                  style={{ 
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.3s ease-in-out ${index * 0.1}s`
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item}
                    {isActive && (
                      <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default NavigationAuto;