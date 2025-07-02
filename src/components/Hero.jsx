import React, { useState, useEffect } from 'react';
import myImage from '../assets/vraj.jpg'

const Hero = () => {
  // Words for the typewriter effect
  const words = [
    'Computer Engineering Student',
    'React Developer',
    'Web Designer',
    'Problem Solver'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(60); // Speed for typing and deleting

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullTxt = words[currentWordIndex];
      setCurrentText(
        isDeleting
          ? fullTxt.substring(0, currentText.length - 1)
          : fullTxt.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 60);

      if (!isDeleting && currentText === fullTxt) {
        // Pause at end of word
        setTypingSpeed(1000);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypingSpeed(500); // Pause before typing new word
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    // Cleanup function for the timer
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, currentWordIndex, words]);

  return (
    // The main section with full height, centered content, and relative positioning for the overlay
    <section
      className="relative h-screen flex items-center justify-start px-4 pt-20 overflow-hidden"
      id="home"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1550684376-efcbd6e3f031?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2sl20back20backgroundfGVufDB8fDB8fHww")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability - now with bg-black and very low opacity */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content z-index ensures it's above the overlay */}
      <div className="relative z-10 text-white flex items-center justify-between w-full max-w-7xl mx-auto px-10">
        {/* Left Text Content - Animated from Left */}
        <div className="flex items-center animate-[slideInLeft_1s_ease-out_forwards]">
          {/* Vertical Line Design */}
          <div className="relative h-64 w-2 mr-6 flex-shrink-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-lg"></div>
            <div className="absolute top-2 w-2 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 whitespace-nowrap">
              Hi, I’m <span className="text-gradient-purple-blue text-7xl"> Vraj Patel </span> <span>👋</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-purple-400 mb-8">
              {currentText}
              <span className="cursor-blink">|</span> {/* Custom cursor */}
            </h2>
            <div className="mt-6 space-x-4 flex justify-start">
              {/* Primary Button Styling */}
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:from-purple-800 hover:to-indigo-800 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                View Projects
              </a>
              {/* Secondary Button Styling */}
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Right Profile Photo with Circle Frame - Animated from Right */}
        <div className="flex-shrink-0 hidden md:flex items-center justify-center relative w-64 h-64 rounded-full border-4 border-purple-400 overflow-hidden shadow-xl animate-[slideInRight_1s_ease-out_forwards]">
          <img
            src={myImage} // Placeholder: REPLACE THIS WITH YOUR PUBLIC IMAGE URL
            alt="Vraj Patel Profile"
            className="w-full h-full object-cover" // Image fills the circle
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/256x256/2A004F/FFFFFF?text=Image+Error'; }} // Fallback
          />
        </div>
      </div>
      {/* CSS for custom blinking cursor and new entrance animations */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 0.7s infinite;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
          /* Gradient text for "Vraj Patel" */
        .text-gradient-purple-blue {
            background: linear-gradient(to right, #8B5CF6, #EC4899); /* Purple to Pink gradient */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text; /* Standard property */
            color: transparent; /* Fallback for non-webkit browsers */
        }
      `}</style>
    </section>
  );
};

export default Hero;
