import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
            <p className="text-gray-400 max-w-md">
              Building exceptional digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="p-3 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              title="Back to Top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Professional Portfolio. Made with 
            <Heart className="mx-2 text-red-500" size={16} />
            and dedication.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            All rights reserved. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;