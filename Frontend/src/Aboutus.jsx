import React, { useState, useEffect } from 'react';
import Navigation from './components/Nav.jsx';
import FloatingIcon from './components/FloatIcon.jsx';
import Footer from './components/footer.jsx';
import Animated from './components/AnimatedParticles.jsx';
import Mouse from './components/Mouse.jsx';

const AboutUsPage = () => {
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
  // --- END THEME STATE LOGIC ---

  const teamMembers = [
    {
      name: "Leela Akshith",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "25+ years in construction management, leading projects worth over $500M."
    },
    {
      name: "Sarah Chen",
      position: "Chief Architect",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Award-winning architect specializing in sustainable commercial designs."
    },
    {
      name: "David Thompson",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in large-scale residential and infrastructure projects."
    },
    {
      name: "Elena Martinez",
      position: "Safety Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      description: "Ensuring the highest safety standards across all construction sites."
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Precision",
      description: "Every detail matters. We ensure accuracy in every aspect of construction."
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability."
    },
    {
      icon: "🔄",
      title: "Innovation",
      description: "Embracing new technologies and sustainable building practices."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "Committed to delivering superior quality in every project."
    }
  ];

  return (
    // Updated root container for theme switching
    <div className="w-screen min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden relative transition-colors duration-300">

      <Mouse/>    
      <Animated theme={theme}/>
      <FloatingIcon/>
      <Navigation theme={theme} toggleTheme={toggleTheme}/>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-5 dark:opacity-10"
            style={{
              // Swapped colors for light/dark mode
              backgroundImage: theme === 'light' ? `
                linear-gradient(30deg, #111827 12%, transparent 12.5%, transparent 87%, #111827 87.5%, #111827),
                linear-gradient(150deg, #111827 12%, transparent 12.5%, transparent 87%, #111827 87.5%, #111827),
                linear-gradient(30deg, #111827 12%, transparent 12.5%, transparent 87%, #111827 87.5%, #111827),
                linear-gradient(150deg, #111827 12%, transparent 12.5%, transparent 87%, #111827 87.5%, #111827)
              ` : `
                linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
                linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff)
              `,
              backgroundSize: '80px 140px',
              backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
            }}
          />
        </div>

        <div className="relative z-10 text-center w-full px-6">
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span>ABOUT</span>
                </span>
                <br />
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <span className="text-orange-500">FEETS INFRA PROJECTS</span>
                </span>
              </h1>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light tracking-wide max-w-4xl mx-auto">
                Established in 2010, we've been 
                <span className="text-gray-800 dark:text-white font-medium"> transforming visions into reality </span>
                with unwavering commitment to excellence.
              </p>
            </div>

            <div className="animate-scale-in flex justify-center space-x-8 md:space-x-12" style={{ animationDelay: '1.2s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">15+</div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">200+</div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">$500M+</div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400">Total Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="relative w-full py-20 px-6 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-orange-500">Our</span>
                <span> Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                <p>
                  Feets Infra Projects was founded nine years ago with a vision to redefine excellence in the construction industry. 
                  What began as an ambitious dream during our undergraduate years has now grown into a trusted and dynamic provider of comprehensive construction solutions.
                </p>
                <p>
                  At a time when most were just beginning their careers, we took the bold step of establishing a company grounded in passion, determination, and a commitment to quality. Since then, we have successfully delivered a wide range of residential, commercial, and infrastructure projects across Telangana and Andhra Pradesh.
                </p>
                <p>
                  Our journey has been shaped by relentless hard work, unwavering values, and a team that shares our dedication to excellence. At Feets Infra Projects, we believe that quality is non-negotiable — and this principle continues to be the foundation of every project we undertake.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop" 
                alt="Company building"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent dark:from-white/10 rounded-2xl" />
              
              <div className="absolute -top-8 -right-8 bg-white text-black p-6 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-orange-500">2016</div>
                <div className="text-xs opacity-90">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full py-20 px-6 bg-white dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-orange-500">Our</span>
              <span> Values</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every structure we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gray-50 dark:bg-gray-900/70 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-orange-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-20 px-6 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-orange-500">Meet Our</span>
              <span> Team</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The experienced professionals behind every successful project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-gray-900/70 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-orange-500 transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 text-sm font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
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
            <span>Ready to </span>
            <span className="text-orange-500">Build Together?</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's transform your vision into reality. Contact us today to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
             href='/contact'
             className="group relative px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:scale-105">
              <span className="relative z-10">Get In Touch</span>
            </a>
            
            <a
             href='/projects'
             className="group relative px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div> 
        </div>
      </section>

      <Footer/>
     
    </div>
  );
};

export default AboutUsPage;