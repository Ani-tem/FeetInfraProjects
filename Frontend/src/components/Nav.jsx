const NavigationAuto = () => {
    // Get current page from URL
    const getCurrentPage = () => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        if (path === '/' || path === '/home') return 'home';
        return path.substring(1); // Remove leading slash
      }
      return 'home';
    };
  
    const currentPage = getCurrentPage();
  
    return (
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-95 backdrop-blur-lg border-b border-gray-800/50">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <a href='/home'>
              <div className="text-3xl font-bold tracking-wider cursor-pointer">
                <span className="text-white">FEET INFRA</span>
                <span className="text-orange-500">Projects</span>
              </div>
            </a>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => {
                const isActive = item.toLowerCase() === currentPage.toLowerCase();
                return (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className={`relative group transition-colors duration-300 font-medium cursor-pointer ${
                      isActive ? 'text-orange-500' : 'text-white hover:text-orange-500'
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
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-orange-500 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
export default NavigationAuto;