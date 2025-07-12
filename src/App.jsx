// src/App.jsx
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
import SplashCursor from './Design/SplashCursor'; // Only used when enabled

function App() {
  const [showSplashCursor, setShowSplashCursor] = useState(false);

  return (
    <>
      <PreLoader />
      <div className="text-white min-h-screen w-full">
        {/* Always show the main custom cursor */}
        <CustomCursor />
        {/* Conditionally show splash effect */}
        {showSplashCursor && <SplashCursor />}

        {/* Pass toggle control to Navbar */}
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
