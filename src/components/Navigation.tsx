import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Facebook, Instagram } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Our Stylish Setup', href: '#setup' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Skip to content link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded">
        Skip to content
      </a>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Social Links */}
          <div className="flex justify-start items-center py-2 border-b border-gray-100">
            <div className="flex space-x-2">
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="text-center flex-1 md:flex-none">
              <div className="text-pink-500 font-bold text-lg tracking-wider">
                COCKTAIL CARAVAN
              </div>
              <div className="text-xs text-gray-500 tracking-widest">
                SIP SHAKE AND CELEBRATE
              </div>
              <div className="text-xs text-gray-400">Mobile Bar</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium pb-1 ${
                    index === 0 ? 'border-b-2 border-pink-500 text-pink-500' : 'border-b-2 border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block text-gray-700 hover:text-pink-500 transition-colors duration-200 font-medium ${
                    index === 0 ? 'text-pink-500' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navigation;