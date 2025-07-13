import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader';
import CustomCursor from './Design/CustomCursor';
import SplashCursor from './Design/SplashCursor';

function App() {
  const [showSplashCursor, setShowSplashCursor] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false); // 👈 control visibility

  return (
    <>
      {/* PreLoader shows first and triggers setIsAppReady */}
      {!isAppReady && <PreLoader setIsAppReady={setIsAppReady} />}

      {/* Fade in main content after PreLoader */}
      <div
        className={`transition-opacity duration-1000 ${
          isAppReady ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } text-white min-h-screen w-full`}
      >
        <CustomCursor />
        {showSplashCursor && <SplashCursor />}

        <Navbar
          showSplashCursor={showSplashCursor}
          setShowSplashCursor={setShowSplashCursor}
        />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
