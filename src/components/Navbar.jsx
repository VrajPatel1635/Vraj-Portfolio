import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react'; // Lucide icons, now including User

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-gradient-to-l from-gray-900 to-black bg-opacity-90 backdrop-blur-sm z-50 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Name with Icon */}
        <div className="flex items-center space-x-2"> {/* Added flex container for icon and text */}
          <User className="w-8 h-8 text-[#646cff]" /> {/* Lucide User icon */}
          <h1 className="font-bold text-[#646cff]">VRAJ PATEL</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-400 transition duration-300 relative group">
                {link.label}
                
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-800 bg-opacity-95">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
