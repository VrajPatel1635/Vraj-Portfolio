import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#00c9ff] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Name & Tagline */}
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">Vraj Patel</h2>
          <p className="mt-2 text-sm text-blue-100">Computer Engineering Student & Web Developer</p>
          <p className="text-xs mt-1 text-gray-200">Building the future, one line of code at a time.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-blue-300 pb-1">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {["home", "about", "skills", "projects", "contact"].map(link => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-blue-200 transition duration-300 capitalize"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-blue-300 pb-1">Connect</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://github.com/VrajPatel1635/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-transparent border border-blue-400 px-4 py-2 rounded-full text-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <FaGithub size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vraj-patel-1a28762ba/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-transparent border border-blue-400 px-4 py-2 rounded-full text-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href="mailto:vrajrpatel6261@gmail.com"
              className="flex items-center gap-2 bg-transparent border border-blue-400 px-4 py-2 rounded-full text-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <MdEmail size={20} /> Email
            </a>
          </div>
        </div>


        {/* Technologies */}
        <div>
          <h3 className="text-lg font-semibold text-white border-b border-blue-300 pb-1">Technologies</h3>
          <p className="mt-3 text-sm text-blue-100 leading-relaxed">
            React • JavaScript • HTML • CSS • Node.js • Git
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-blue-200 flex flex-col sm:flex-row justify-between items-center text-sm text-blue-100">
        <p>© 2025 Vraj Patel. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 sm:mt-0">
          Made with <span className="text-pink-400 animate-pulse">❤️</span> using React
        </p>
      </div>
    </footer>

  );
};

export default Footer;
