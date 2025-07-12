import React, { useState, useEffect } from 'react';
import myImage from '../assets/vraj.jpg';
import Silk from '../Design/Silk';
import profile from '../assets/Adobe_Express-file.png';
import Particles from '../Design/Particles'
import { Send, FolderOpen } from 'lucide-react';

const Hero = () => {
  const words = [
    'Computer Engineering Student',
    'React Developer',
    'Web Designer',
    'Problem Solver',
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullTxt = words[currentWordIndex];
      const updatedText = isDeleting
        ? fullTxt.substring(0, currentText.length - 1)
        : fullTxt.substring(0, currentText.length + 1);

      setCurrentText(updatedText);
      setTypingSpeed(isDeleting ? 80 : 120);

      if (!isDeleting && updatedText === fullTxt) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed]);


  return (
    <section
      id="home"
      className="w-full relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute h-full w-full">
        <div className="absolute inset-0 bg-black z-0" />

        {/* Particles Overlay */}
        <Particles
          particleColors={['#ffffff', '#00f0ff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="bg-transparent relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">Vraj Patel</span> 👋
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 font-mono">
          {currentText}<span className="animate-blink">|</span>
        </h2>

        <div className="flex flex-wrap gap-6 justify-center items-center mt-6">
          {/* View Projects Button */}
          <a
            href="#projects"
            className="relative group flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-black text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-lg transition-all duration-500 transform hover:scale-115 hover:shadow-2xl hover:from-cyan-400 hover:via-pink-500 hover:to-purple-500"
          >
            <FolderOpen
              className="w-7 h-7 text-white bg-black/20 p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            View Projects
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="relative group flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white text-lg border-2 border-transparent shadow-lg transition-all duration-500 transform hover:scale-115 bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-300 hover:from-yellow-300 hover:via-orange-400 hover:to-rose-500 hover:shadow-2xl"
          >
            <Send
              className="w-7 h-7 text-white bg-black/20 p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            Contact Me
          </a>
        </div>

      </div>

      
    </section>


  );
};

export default Hero;
