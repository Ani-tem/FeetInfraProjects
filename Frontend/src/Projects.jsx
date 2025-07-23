import React, { useState, useEffect } from 'react';
import Animated from './components/AnimatedParticles.jsx';
import Floating from './components/FloatIcon.jsx';
import Footer from './components/footer.jsx';
import NavigationAuto from './components/Nav.jsx';
import Mouse from './components/Mouse.jsx';
import Pro from './data/pro.json';
import MegaProjectItem from './components/megaproject.jsx';
const ProjectsPage = () => {
  // --- THEME STATE LOGIC ---
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const { allMegaProjects, projects } = Pro;

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // A short delay ensures the page has rendered
    }
  }, []); // Empty array ensures this runs only once on page load

  // Filter projects into two groups
  const ongoingMegaProjects = allMegaProjects.filter(p => p.status.toLowerCase().includes('on going'));
  const completedMegaProjects = allMegaProjects.filter(p => p.status.toLowerCase().startsWith('completed'));


  return (
    <div className="w-screen min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white overflow-x-hidden relative transition-colors duration-300">
      <Mouse/>
      <Animated theme={theme} />
      <Floating/>
      <NavigationAuto theme={theme} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-5 dark:opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #1e40af 25%, transparent 25%, transparent 75%, #1e40af 75%, #1e40af),
                linear-gradient(45deg, #1e40af 25%, transparent 25%, transparent 75%, #1e40af 75%, #1e40af)
              `,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px',
            }}
          />
        </div>
        <div className="relative z-10 text-center w-full px-6">
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span>OUR</span>
                </span>
                <br />
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <span className="text-orange-500">PROJECTS</span>
                </span>
              </h1>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide max-w-4xl mx-auto">
                Discover our portfolio of
                <span className="text-orange-500 font-medium"> exceptional constructions </span>
                that shape skylines and transform communities.
              </p>
            </div>
            <div className="animate-scale-in flex justify-center space-x-8 md:space-x-12" style={{ animationDelay: '1.2s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">500+</div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">$2B+</div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400">Total Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">25</div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WRAPPER FOR MEGA PROJECTS SECTIONS --- */}
      <div className="bg-gray-50 dark:bg-black">
        {/* On Going Projects Section */}
        <section id="ongoing" className="relative w-full py-20 px-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-blue-500">On Going</span>
                <span> Mega Projects</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A glimpse into the future we are currently building.
              </p>
            </div>
            <div className="space-y-24">
              {ongoingMegaProjects.map((project, index) => (
                <MegaProjectItem key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Completed Projects Section */}
        <section id="completed" className="relative w-full pt-10 pb-20 px-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-green-500">Completed</span>
                <span> Mega Projects</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our landmark achievements that define our legacy of excellence.
              </p>
            </div>
            <div className="space-y-24">
              {completedMegaProjects.map((project, index) => (
                <MegaProjectItem key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Projects Grid Section (for smaller projects) */}
      <section className="relative w-full py-20 px-6 bg-white dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span>Recent</span>
              <span className="text-orange-500"> Projects</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our diverse portfolio of successfully delivered projects across various sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 dark:bg-gray-900/70 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-orange-500 transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500/90 text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                    {project.value}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{project.duration}</span>
                    <button className="text-orange-500 hover:text-orange-400 transition-colors duration-300 font-semibold text-sm">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span>Ready to Start Your</span>
            <span className="text-orange-500"> Next Project?</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            From concept to completion, we bring your vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
             href='/contact'
            className="group relative px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:scale-105">
              <span className="relative z-10">Get Free Quote</span>
            </a>
            <a
            href='/public/infra.pdf'
            target='_blanck'
            className="group relative px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:text-white hover:scale-105">
              <span className="relative z-10">Download Portfolio</span>
              <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default ProjectsPage;