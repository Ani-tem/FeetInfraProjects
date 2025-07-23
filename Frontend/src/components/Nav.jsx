import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle'; // Make sure this component exists in your project

const NavigationAuto = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false); // For desktop dropdown
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false); // For mobile accordion

  const getCurrentPage = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/' || path === '/home') return 'home';
      // For projects, we want the main category to be active even with hash links
      if (path.startsWith('/projects')) return 'projects';
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
      setIsMobileProjectsOpen(false); // Also close sub-menu
  };

  const handleNavClick = (item) => {
    setCurrentPage(item.toLowerCase());
    // Don't close mobile menu if clicking on Projects to allow sub-menu to open
    if (item.toLowerCase() !== 'projects') {
        closeMobileMenu();
    }
  };

  const toggleMobileProjects = (e) => {
    e.stopPropagation(); // Prevent event bubbling to parent
    setIsMobileProjectsOpen(!isMobileProjectsOpen);
  }

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <a href='/home' onClick={() => handleNavClick('home')}>
              <div className="text-2xl sm:text-3xl font-bold tracking-wider cursor-pointer">
                <span className="text-gray-900 dark:text-white">FEET INFRA</span>
                <span className="text-orange-500">Projects</span>
              </div>
            </a>

            {/* --- DESKTOP NAVIGATION --- */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = item.toLowerCase() === currentPage.toLowerCase();

                if (item === 'Projects') {
                  return (
                    <div 
                      key={item}
                      className="relative"
                      onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                      onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                    >
                       <a
                        href={`/${item.toLowerCase()}`}
                        onClick={() => handleNavClick(item)}
                        className={`flex items-center gap-1 relative group transition-colors duration-300 font-medium cursor-pointer ${
                          isActive ? 'text-orange-500' : 'text-gray-800 dark:text-white hover:text-orange-500'
                        }`}
                      >
                        {item}
                        <svg className={`w-4 h-4 transition-transform duration-300 ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </a>
                      {isProjectsDropdownOpen && (
                        /* --- BUG FIX IS HERE --- */
                        /* Removed mt-2 and added pt-2 to fix the hover gap */
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-down">
                          <a href="/projects#ongoing" onClick={() => setIsProjectsDropdownOpen(false)} className="flex justify-between items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">On Going <span className="text-gray-400">&lt;</span></a>
                          <a href="/projects#completed" onClick={() => setIsProjectsDropdownOpen(false)} className="flex justify-between items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Completed <span className="text-gray-400">&lt;</span></a>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => handleNavClick(item)}
                    className={`relative group transition-colors duration-300 font-medium cursor-pointer ${
                      isActive ? 'text-orange-500' : 'text-gray-800 dark:text-white hover:text-orange-500'
                    }`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-800 dark:text-white hover:text-orange-500 transition-colors duration-300 p-2"
                aria-label="Toggle mobile menu"
              >
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* --- MOBILE MENU --- */}
        <div className={`md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800/50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = item.toLowerCase() === currentPage.toLowerCase();

               if (item === 'Projects') {
                 return (
                   <div key={item}>
                     <button
                       onClick={toggleMobileProjects}
                       className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 font-medium cursor-pointer text-left ${
                         isActive 
                           ? 'text-orange-500 bg-orange-500/10' 
                           : 'text-gray-800 dark:text-white hover:text-orange-500 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                       }`}
                     >
                       {item}
                       <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                     </button>
                     {isMobileProjectsOpen && (
                       <div className="pl-8 pt-2 pb-1 space-y-1 animate-fade-in-down">
                         <a href="/projects#ongoing" onClick={closeMobileMenu} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-orange-500">On Going</a>
                         <a href="/projects#completed" onClick={closeMobileMenu} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-orange-500">Completed</a>
                       </div>
                     )}
                   </div>
                 );
               }

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
                >
                  <span className="flex items-center justify-between">{item}</span>
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