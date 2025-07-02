// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PreLoader from './components/PreLoader'

function App() {
  return (
    <>
    <PreLoader></PreLoader>
    <div className="bg-black text-white min-h-screen w-full">
      <Navbar />
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
