import React, { useState, useEffect } from 'react';
const ImageSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Sample construction images - replace with your actual images
    const images = [
      {
        src: 'https://images.unsplash.com/photo-1541976590-713941681591?w=600&h=400&fit=crop',
        alt: 'Modern residential construction'
      },
      {
        src: 'https://images.unsplash.com/photo-1584952618398-a03e1b8b21df?w=600&h=400&fit=crop',
        alt: 'Commercial building project'
      },
      {
        src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
        alt: 'Construction site overview'
      },
      {
        src: 'https://images.unsplash.com/photo-1590725175023-6c1c5e6b2e63?w=600&h=400&fit=crop',
        alt: 'Architectural detail work'
      }
    ];
  
    // Auto-advance slideshow
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer);
    }, [images.length]);
  
    return (
      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          ))}
        </div>
  
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
  
        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300"
        >
          →
        </button>
  
        {/* Image caption */}
        <div className="absolute bottom-12 left-4 right-4 text-white">
          <p className="text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
            {images[currentSlide].alt}
          </p>
        </div>
      </div>
    );
  };
export default ImageSlideshow;
  