import React, { useState, useEffect } from 'react';
import Navigation from './components/Nav.jsx';
import FloatingIcon from './components/FloatIcon.jsx';
import Footer from './components/footer.jsx';
import Animated from './components/AnimatedParticles.jsx';
import Mouse from './components/Mouse.jsx';

const AboutUsPage = () => {
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
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden relative">

      <Mouse/>    
      <Animated/>
      <FloatingIcon/>
      <Navigation/>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
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

        {/* Main content */}
        <div className="relative z-10 text-center w-full px-6">
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Animated title */}
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span className="text-white">ABOUT</span>
                </span>
                <br />
                <span className="inline-block animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <span className="text-white">FEET INFRA</span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light tracking-wide max-w-4xl mx-auto">
                Established in 2010, we've been 
                <span className="text-white font-medium"> transforming visions into reality </span>
                with unwavering commitment to excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="animate-scale-in flex justify-center space-x-8 md:space-x-12" style={{ animationDelay: '1.2s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                <div className="text-sm md:text-base text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">200+</div>
                <div className="text-sm md:text-base text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">$500M+</div>
                <div className="text-sm md:text-base text-gray-400">Total Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="relative w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-white">Our</span>
                <span className="text-white"> Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed">
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
                <p>
                  While the past nine years have been a testament to our resilience and growth, we see this as just the beginning. With a clear vision and a passionate team, we are committed to continuing our journey with integrity, innovation, and excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop" 
                alt="Company building"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl" />
              
              {/* Floating badge */}
              <div className="absolute -top-8 -right-8 bg-white text-black p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2010</div>
                <div className="text-xs opacity-90">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>
              <span className="text-white"> Values</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every structure we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gray-900/70 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-white/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Meet Our</span>
              <span className="text-white"> Team</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              The experienced professionals behind every successful project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/70 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-white/50 transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2"
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
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-white text-sm font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-white">Ready to Build</span>
            <span className="text-white"> Together?</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's transform your vision into reality. Contact us today to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
             href='/contact'
             className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-gray-200 hover:scale-105">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            
            <a
            href='/projects'
             className="group relative px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:text-black hover:scale-105">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div> 
        </div>
      </section>

      {/* Footer */}
      <Footer/>
     
    </div>
  );
};

export default AboutUsPage;
