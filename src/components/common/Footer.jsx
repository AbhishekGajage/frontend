import React from 'react';
import logo from '../../assets/collixy-logo-icon.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white py-2">
      <div className="px-0">
        <div className="h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Collixy Logo" 
                className="h-40 w-auto"
              />
            </div>
            
            <div className="flex gap-3 md:gap-4">
              <button className="text-white font-bold text-lg md:text-xl hover:text-gray-300 whitespace-nowrap">
                Features
              </button>
              <button className="text-white font-bold text-lg md:text-xl hover:text-gray-300 whitespace-nowrap">
                Learn More
              </button>
              <button className="text-white font-bold text-lg md:text-xl hover:text-gray-300 whitespace-nowrap">
                Support
              </button>
            </div>
          </div>
          
          {/* Responsive social icon sizes */}
          <div className="flex gap-2">
            <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
              <span className="font-bold text-sm md:text-lg">𝕏</span>
            </button>
            <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
              <span className="font-bold text-sm md:text-lg">in</span>
            </button>
            <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
              <span className="font-bold text-sm md:text-lg">⎘</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-2">
          <div className="text-center text-gray-400 text-xs">
            © Collixy {currentYear}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;