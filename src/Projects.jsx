import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Auto-rotate mega project images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % megaProject.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const Particle = ({ delay, size, x, y }) => (
    <div
      className="absolute rounded-full bg-orange-500 opacity-20 animate-pulse"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animation: `float 6s ease-in-out infinite ${delay}s`,
      }}
    />
  );

  const FloatingIcon = ({ icon, delay, x, y }) => (
    <div
      className="absolute text-4xl text-orange-500 opacity-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `iconFloat 8s ease-in-out infinite ${delay}s`,
      }}
    >
      {icon}
    </div>
  );

  const megaProject = {
    title: "Skyline Commercial Complex",
    category: "Commercial Development",
    location: "Downtown Metro City",
    value: "$45M",
    duration: "36 months",
    status: "Completed 2024",
    description: "A revolutionary 40-story mixed-use complex featuring office spaces, retail outlets, and luxury residences. This project redefined the city skyline with its innovative sustainable design and cutting-edge smart building technology.",
    highlights: [
      "LEED Platinum Certification",
      "40 floors, 1.2M sq ft",
      "Smart building automation",
      "Rooftop garden & solar panels",
      "Underground parking for 500 cars"
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    ]
  };

  const projects = [
    {
      title: "Riverside Luxury Homes",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      value: "$12M",
      duration: "18 months",
      description: "Exclusive gated community with 24 luxury homes featuring modern architecture and premium finishes."
    },
    {
      title: "Tech Hub Office Park",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1565378420513-b67b62c4fee3?w=400&h=300&fit=crop",
      value: "$28M",
      duration: "24 months",
      description: "State-of-the-art office complex designed for technology companies with flexible co-working spaces."
    },
    {
      title: "Green Valley Hospital",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop",
      value: "$35M",
      duration: "30 months",
      description: "Modern medical facility with advanced equipment and patient-centered design principles."
    },
    {
      title: "Marina Shopping Center",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1555529669-2269763671c0?w=400&h=300&fit=crop",
      value: "$18M",
      duration: "20 months",
      description: "Waterfront retail destination with 150 stores, restaurants, and entertainment venues."
    },
    {
      title: "Industrial Logistics Hub",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
      value: "$22M",
      duration: "16 months",
      description: "Automated warehouse and distribution center with advanced logistics technology."
    },
    {
      title: "University Science Center",
      category: "Educational",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      value: "$40M",
      duration: "32 months",
      description: "Cutting-edge research facility with laboratories, lecture halls, and collaborative spaces."
    }
  ];

  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-100px) rotate(180deg); opacity: 0.6; }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes slide-up {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Dynamic background with mouse follow effect */}
      <div 
        className="fixed inset-0 opacity-30 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 53, 0.1), transparent 40%)`,
        }}
      />

      {/* Animated particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Particle
            key={i}
            delay={i * 0.4}
            size={Math.random() * 25 + 8}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
      </div>

      {/* Floating construction icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingIcon icon="🏗️" delay={0} x={5} y={15} />
        <FloatingIcon icon="🏢" delay={2} x={90} y={10} />
        <FloatingIcon icon="⚒️" delay={4} x={10} y={80} />
        <FloatingIcon icon="🏭" delay={6} x={85} y={70} />
        <FloatingIcon icon="🔧" delay={1} x={45} y={5} />
        <FloatingIcon icon="⛑️" delay={3} x={95} y={45} />
        <FloatingIcon icon="🏠" delay={5} x={5} y={50} />
      </div>

    {/* Fixed Navigation */}
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-95 backdrop-blur-lg border-b border-gray-800/50">
        <div className="w-full px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="text-3xl font-bold tracking-wider cursor-pointer">
              <span className="text-white">BUILD</span>
              <span className="text-orange-500">CRAFT</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`relative group transition-colors duration-300 font-medium cursor-pointer ${
                    item === 'Projects' ? 'text-orange-500' : 'text-white hover:text-orange-500'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                    item === 'Projects' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              ))}
            </div>
           </div>
         </div>
    </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #ff6b35 25%, transparent 25%, transparent 75%, #ff6b35 75%, #ff6b35),
                linear-gradient(45deg, #ff6b35 25%, transparent 25%, transparent 75%, #ff6b35 75%, #ff6b35)
              `,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px',
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center w-full px-6">
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Animated title */}
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span className="text-white">OUR</span>
                </span>
                <br />
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <span className="text-orange-500">PROJECTS</span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto">
                Discover our portfolio of 
                <span className="text-orange-500 font-medium"> exceptional constructions </span>
                that shape skylines and transform communities.
              </p>
            </div>

            {/* Stats */}
            <div className="animate-scale-in flex justify-center space-x-8 md:space-x-12" style={{ animationDelay: '1.2s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">500+</div>
                <div className="text-sm md:text-base text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">$2B+</div>
                <div className="text-sm md:text-base text-gray-400">Total Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500">25</div>
                <div className="text-sm md:text-base text-gray-400">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mega Project Section - Takes up half the page */}
      <section className="relative w-full min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Featured</span>
              <span className="text-orange-500"> Mega Project</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Our crown jewel that showcases our capability to handle large-scale, complex constructions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Project Images */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={megaProject.images[activeImageIndex]}
                  alt={megaProject.title}
                  className="w-full h-96 lg:h-[500px] object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {megaProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeImageIndex ? 'bg-orange-500' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating project stats */}
              <div className="absolute -top-8 -right-8 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">{megaProject.value}</div>
                <div className="text-xs opacity-90">Project Value</div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-500 rounded-full text-sm font-semibold mb-4">
                  {megaProject.category}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {megaProject.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {megaProject.description}
                </p>
              </div>

              {/* Project Info Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-semibold">{megaProject.location}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-400">Duration</div>
                  <div className="text-white font-semibold">{megaProject.duration}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-400">Status</div>
                  <div className="text-green-400 font-semibold">{megaProject.status}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-400">Value</div>
                  <div className="text-orange-500 font-bold">{megaProject.value}</div>
                </div>
              </div>

              {/* Project Highlights */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Key Highlights</h4>
                <ul className="space-y-2">
                  {megaProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="group relative px-8 py-4 bg-orange-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:scale-105">
                <span className="relative z-10">View Full Case Study</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative w-full py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Recent</span>
              <span className="text-orange-500"> Projects</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse portfolio of completed projects across various sectors.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/70 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-orange-500/50 transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-orange-500/90 text-white text-sm font-semibold rounded-full">
                    {project.category}
                  </div>
                  
                  {/* Value badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                    {project.value}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{project.duration}</span>
                    <button className="text-orange-500 hover:text-orange-400 transition-colors duration-300 font-semibold text-sm">
                      View Details →
                    </button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-white">Ready to Start Your</span>
            <span className="text-orange-500"> Next Project?</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            From concept to completion, we bring your vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:scale-105">
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <button className="group relative px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:text-white hover:scale-105">
              <span className="relative z-10">Download Portfolio</span>
              <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold tracking-wider mb-4">
                <span className="text-white">BUILD</span>
                <span className="text-orange-500">CRAFT</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Building exceptional structures with precision, innovation, and unwavering commitment to excellence since 1998.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-white">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-white">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-white">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Commercial Construction</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Residential Building</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Renovations</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Project Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Construction Ave</li>
                <li>Building City, BC 12345</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">(555) 123-4567</li>
                <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">info@buildcraft.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuildCraft Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;