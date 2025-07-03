import React, { useState, useEffect } from 'react';
import myImage from '../assets/vraj.jpg';

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
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Background Image + Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl w-full px-6 md:px-12">
        {/* Left: Text Content */}
        <div className="backdrop-blur-sm bg-white/5 p-8 rounded-xl max-w-2xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Vraj Patel</span> 👋
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl mt-4 text-purple-300 font-mono">
            {currentText}
            <span className="animate-blink">|</span>
          </h2>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="relative px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-white/30 after:opacity-0 hover:after:opacity-100 after:transition"
              style={{ overflow: 'hidden' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="relative px-8 py-3 rounded-full font-semibold text-pink-400 border-2 border-pink-400 bg-white/10 shadow-lg transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 after:absolute after:inset-0 after:rounded-full after:ring-2 after:ring-white/30 after:opacity-0 hover:after:opacity-100 after:transition"
              style={{ overflow: 'hidden' }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Profile Image with Neon Glowing Circular Border */}
        <div className="relative flex items-center justify-center w-[260px] h-[260px] md:w-[320px] md:h-[320px] mb-10 md:mb-0 md:ml-16 animate-fade-in">
          <div className="absolute inset-0 rounded-full animate-glow" />
          <img
            src={myImage}
            alt="Vraj Patel"
            className="rounded-full object-cover w-full h-full border-4 border-white shadow-lg relative z-10"
          />
        </div>




      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1 }
          50% { opacity: 0 }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes pulse-shadow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.6), 0 0 20px rgba(236, 72, 153, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(236, 72, 153, 0.6);
          }
        }
        .animate-pulse-shadow {
          animation: pulse-shadow 2s infinite;
        }
          .hexagon-wrapper {
  width: 224px; /* 56 * 4px = 224px (Tailwind's w-56) */
  height: 194px;
  position: relative;
}

.hexagon {
  width: 100%;
  padding-bottom: 86.6%; /* Height of hexagon = width * √3 / 2 */
  background: linear-gradient(to top right, #a855f7, #ec4899);
  clip-path: polygon(
    25% 5%, 75% 5%,
    100% 50%,
    75% 95%, 25% 95%,
    0% 50%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse-shadow 2s infinite;
}

.hexagon img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  clip-path: inherit;
  border: 2px solid white;
}

@keyframes glow {
  0%, 100% {
    box-shadow:
      0 0 40px 10px #00fff7,
      0 0 80px 20px #a855f7,
      0 0 120px 40px #ec4899;
  }
  50% {
    box-shadow: 0 0 64px 16px #a855f7, 0 0 96px 32px #22d3ee, 0 0 128px 48px #ec4899;
  }
}
.animate-glow {
  animation: glow 3s ease-in-out infinite;
}

      `}</style>
    </section>
  );
};

export default Hero;
