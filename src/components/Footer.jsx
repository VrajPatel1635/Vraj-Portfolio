import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Name + Tagline */}
        <div>
          <h2 className="text-lg font-bold text-white">Vraj Patel</h2>
          <p className="mt-2">Computer Engineering Student & Web Developer</p>
          <p className="text-sm mt-1">Building the future, one line of code at a time.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li> {/* Changed hover color */}
            <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Connect Buttons */}
        <div>
          <h3 className="text-lg font-semibold text-white">Connect</h3>
          <div className="flex flex-wrap gap-3 mt-3">
            <a href="https://github.com/VrajPatel1635/" target="_blank" rel="noreferrer"
               className="flex items-center gap-1 border border-purple-600 px-4 py-1 rounded-md text-purple-400 hover:bg-purple-600 hover:text-white transition duration-300"> {/* Updated button styling */}
              GitHub
              <FaGithub className='text-white' />
            </a>
            <a href="https://www.linkedin.com/in/vraj-patel-1a28762ba/" target="_blank" rel="noreferrer"
               className="flex items-center gap-1 border border-purple-600 px-4 py-1 rounded-md text-purple-400 hover:bg-purple-600 hover:text-white transition duration-300"> {/* Updated button styling */}
              LinkedIn
              <FaLinkedin className='text-blue-500'/>
            </a>
            <a href="mailto:vrajrpatel6261@gmail.com"
               className="flex items-center gap-1 border border-purple-600 px-4 py-1 rounded-md text-purple-400 hover:bg-purple-600 hover:text-white transition duration-300"> {/* Updated button styling */}
              Email
              <FaEnvelope className='text-blue-500' />
            </a>
          </div>
        </div>

        {/* Column 4: Technologies */}
        <div>
          <h3 className="text-lg font-semibold text-white">Technologies</h3>
          <p className="mt-2">
            React • JavaScript • HTML • CSS • Node.js • Git
          </p>
        </div>
      </div>

      {/* Bottom Bar - Updated line styling */}
      <div className="mt-10 pt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-400 relative"> {/* Added relative to contain absolute child */}
        {/* The subtle line */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,rgba(102,126,234,0.5)_50%,transparent)] w-full absolute left-0 right-0 top-0"></div> {/* Subtle line */}
        <p>© 2025 Vraj Patel. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <FaHeart className="text-red-500 w-4 h-4 animate-pulse" /> using React 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
