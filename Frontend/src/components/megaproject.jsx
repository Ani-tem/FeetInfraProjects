import React, { useState, useEffect } from 'react';

const MegaProjectItem = ({ project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Auto-rotate images for this specific project
  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setActiveImageIndex((prev) => (prev + 1) % project.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [project.images]);

  // Check if the project is completed to apply conditional styling
  const isCompleted = project.status.toLowerCase().startsWith('completed');

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={project.images[activeImageIndex]}
            alt={project.title}
            className="w-full h-96 lg:h-[500px] object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeImageIndex ? 'bg-orange-500' : 'bg-gray-400 dark:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute -top-8 -right-8 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
          <div className="text-2xl font-bold">{project.value}</div>
          <div className="text-xs opacity-90">Project Value</div>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${isCompleted ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
            {project.category}
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1">
            <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
            <div className="font-semibold">{project.location}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
            <div className="font-semibold">{project.duration}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500 dark:text-gray-400">Status</div>
            <div className={`font-semibold ${isCompleted ? 'text-green-500' : 'text-blue-500'}`}>{project.status}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500 dark:text-gray-400">Value</div>
            <div className="text-orange-500 font-bold">{project.value}</div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Key Highlights</h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                <span className={`w-2 h-2 rounded-full mr-3 flex-shrink-0 ${isCompleted ? 'bg-green-500' : 'bg-blue-500'}`} />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <button className="group relative px-8 py-4 bg-orange-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:scale-105">
          <span className="relative z-10">View Full Case Study</span>
        </button>
      </div>
    </div>
  );
};

export default MegaProjectItem;