import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Animated from './components/AnimatedParticles.jsx'
import Floating from './components/FloatIcon.jsx';
import Footer from './components/footer.jsx';
import NavigationAuto from './components/Nav.jsx';
import Mouse from './components/Mouse.jsx';
import ImageSlideshow from './components/ImageSlideShow.jsx';


const ConstructionHomepage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="w-full bg-black text-white relative">
       
      
        <Mouse/>
        <Animated/>
        <Floating/>
        <NavigationAuto/>
        
        {/* Fixed Social Media Icons */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
          {/* WhatsApp Icon */}
          <a 
            href="https://wa.me/9121597836" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/25"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
            </svg>
          </a>

          {/* Instagram Icon */}
          <a 
            href="https://www.instagram.com/feets_infra_projects?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        {/* Hero Section - Full screen content */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Geometric pattern background for the hero section */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #ea580c 25%, transparent 25%, transparent 75%, #ea580c 75%, #ea580c),
                  linear-gradient(45deg, #ea580c 25%, transparent 25%, transparent 75%, #ea580c 75%, #ea580c)
                `,
                backgroundSize: '60px 60px',
                backgroundPosition: '0 0, 30px 30px',
              }}
            />
          </div>

          {/* Main content of the hero section */}
          <div className="relative z-10 text-center w-full px-6">
            <div className="space-y-8">
              {/* Animated title */}
              <div className="overflow-hidden">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <span className="text-white">BUILDING</span>
                  </span>
                  <br />
                  <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <span className="text-white">TOMORROW</span>
                  </span>
                </h1>
              </div>

              {/* Subtitle with fade-in effect */}
              <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto">
                  Crafting extraordinary structures with precision, passion, and innovation. 
                  <span className="text-white font-medium"> Where vision meets reality.</span>
                </p>
              </div>

              {/* Stats counter section */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1.2s' }}>
                {[
                  { number: '20+', label: 'Projects Completed' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '100%', label: 'Client Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Call-to-action (CTA) Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1.6s' }}>
                <a
                href='/contact'
                className="group relative px-6 py-3 bg-orange-500 text-white rounded-full font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/25">
                  <span className="relative z-10">Get Free Quote</span>
                  {/* Hover effect for button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </a>
                
                <a 
                  href="/projects" 
                  className="group relative px-6 py-3 border-2 border-orange-400 text-orange-400 rounded-full font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 flex items-center gap-2 justify-center"
                >
                  <span className="relative z-10">
                    View Projects
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section 
          id="about-section"
          data-animate
          className="relative w-full py-20 bg-gray-900/30"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* About Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight animate-slide-left ${visibleSections.has('about-section') ? 'visible' : ''}`}>
                    About <span className="text-orange-500">Our Company</span>
                  </h2>
                  <div className={`h-1 bg-orange-400 line-expand ${visibleSections.has('about-section') ? 'visible' : ''}`}></div>
                </div>
                
                <p className={`text-gray-300 text-lg leading-relaxed animate-slide-left animate-stagger-1 ${visibleSections.has('about-section') ? 'visible' : ''}`}>
                  With over 7 years of excellence in construction, we've built our reputation on delivering 
                  exceptional quality and innovative solutions. From residential homes to commercial complexes, 
                  our skilled team transforms visions into reality.
                </p>
                
                <p className={`text-gray-400 leading-relaxed animate-slide-left animate-stagger-2 ${visibleSections.has('about-section') ? 'visible' : ''}`}>
                  We combine traditional craftsmanship with modern technology to ensure every project meets 
                  the highest standards of quality, safety, and sustainability.
                </p>
                
                <div className={`flex flex-wrap gap-4 pt-4 animate-slide-left animate-stagger-3 ${visibleSections.has('about-section') ? 'visible' : ''}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full floating-animation"></div>
                    <span className="text-gray-300">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full floating-animation" style={{ animationDelay: '0.5s' }}></div>
                    <span className="text-gray-300">Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
                    <span className="text-gray-300">Quality Materials</span>
                  </div>
                </div>
              </div>

              {/* Image Slideshow */}
              <div className={`relative animate-slide-right animate-stagger-2 ${visibleSections.has('about-section') ? 'visible' : ''}`}>
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <ImageSlideshow />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          id="services-section"
          data-animate
          className="relative w-full py-20 bg-black"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 animate-on-scroll ${visibleSections.has('services-section') ? 'visible' : ''}`}>
                Our <span className="text-orange-500">Services</span>
              </h2>
              <div className={`w-20 h-1 bg-orange-400 mx-auto mb-6 line-expand ${visibleSections.has('services-section') ? 'visible' : ''}`}></div>
              <p className={`text-gray-300 text-lg max-w-2xl mx-auto animate-on-scroll animate-stagger-1 ${visibleSections.has('services-section') ? 'visible' : ''}`}>
                Comprehensive construction solutions tailored to meet your unique needs and vision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Commercial Construction */}
              <div className={`group bg-gray-900/70 border border-gray-800 rounded-lg p-8 hover:border-orange-400 transition-all duration-300 hover:transform hover:scale-105 pulse-glow animate-stagger-up animate-stagger-1 ${visibleSections.has('services-section') ? 'visible' : ''}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 floating-animation">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Commercial Construction</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Building modern office complexes, retail spaces, and industrial facilities with cutting-edge design and functionality. 
                    We deliver projects that enhance business operations and create lasting impressions.
                  </p>
                </div>
              </div>

              {/* Residential Building */}
              <div className={`group bg-gray-900/70 border border-gray-800 rounded-lg p-8 hover:border-orange-400 transition-all duration-300 hover:transform hover:scale-105 pulse-glow animate-stagger-up animate-stagger-2 ${visibleSections.has('services-section') ? 'visible' : ''}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 floating-animation" style={{ animationDelay: '0.5s' }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Residential Building</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Crafting dream homes and residential complexes with attention to comfort, style, and sustainability. 
                    From luxury villas to affordable housing, we create spaces where families thrive.
                  </p>
                </div>
              </div>

              {/* Open Plots */}
              <div className={`group bg-gray-900/70 border border-gray-800 rounded-lg p-8 hover:border-orange-400 transition-all duration-300 hover:transform hover:scale-105 pulse-glow animate-stagger-up animate-stagger-3 ${visibleSections.has('services-section') ? 'visible' : ''}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 floating-animation" style={{ animationDelay: '1s' }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16V4C21 2.9 20.1 2 19 2H5C3.9 2 3 2.9 3 4V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16ZM7 14L9.5 11.5L11 13L14.5 9.5L17 12V14H7Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Open Plots</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Premium residential and commercial plots in prime locations with complete infrastructure and legal clearances. 
                    Perfect investment opportunities for building your future projects with full development support.
                  </p>
                </div>
              </div>

              {/* Joint Venture */}
              <div className={`group bg-gray-900/70 border border-gray-800 rounded-lg p-8 hover:border-orange-400 transition-all duration-300 hover:transform hover:scale-105 pulse-glow animate-stagger-up animate-stagger-4 ${visibleSections.has('services-section') ? 'visible' : ''}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 floating-animation" style={{ animationDelay: '1.5s' }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4C16.55 4 17 4.45 17 5V8.5C17 9.33 16.33 10 15.5 10C14.67 10 14 9.33 14 8.5V7H12V8.5C12 9.33 11.33 10 10.5 10C9.67 10 9 9.33 9 8.5V5C9 4.45 9.45 4 10 4H16ZM12 12C13.66 12 15 13.34 15 15V18C15 19.66 13.66 21 12 21S9 19.66 9 18V15C9 13.34 10.34 12 12 12Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Joint Venture</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Strategic partnerships with landowners and investors for large-scale development projects. 
                    We provide expertise, funding, and execution while sharing profits and risks for mutual growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer/>
      </div>
    </>
  );
};

export default ConstructionHomepage;