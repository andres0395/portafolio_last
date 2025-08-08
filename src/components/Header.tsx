'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Andrés Felipe Muñoz</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre mí</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experiencia</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Habilidades</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Educación</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Proyectos</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contacto</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre mí</a>
              <a href="#experience" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Experiencia</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Habilidades</a>
              <a href="#education" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Educación</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Proyectos</a>
              <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg">Contacto</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}