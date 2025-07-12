"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

// Nav Links
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Toggle switch component
const SplashToggle = ({ enabled, setEnabled }) => {
  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer border transition-colors duration-300 ${
        enabled ? "border-green-400" : "border-gray-500"
      }`}
      style={{ backgroundColor: "#1f2b38" }}
    >
      <motion.div
        className={`w-1/2 h-full flex items-center justify-center rounded-full text-xs font-bold ${
          enabled ? "text-green-400" : "text-white"
        }`}
        animate={{ x: enabled ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {enabled ? "ON" : "OFF"}
      </motion.div>
    </div>
  );
};

// Main Navbar Component
const Navbar = ({ showSplashCursor, setShowSplashCursor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [navbarWidth, setNavbarWidth] = useState("w-[88%]");
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      setLastScrollY(scrollY);
      setScrolled(scrollY > 10);
      setNavbarWidth(scrollY > 10 ? "w-[68%]" : "w-[88%]");

      const sectionOffsets = navLinks.map((link) => {
        const el = document.querySelector(link.href);
        return { label: link.label, top: el?.offsetTop || 0 };
      });

      const current = sectionOffsets.reduce((closest, section) =>
        Math.abs(scrollY - section.top) < Math.abs(scrollY - closest.top)
          ? section
          : closest
      );

      setActiveSection(current.label);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-2 left-1/2 -translate-x-1/2 z-[999] rounded-full transition-all duration-300 ease-in-out
        ${navbarWidth}
        ${scrolled ? "bg-black/70 shadow-lg backdrop-blur-md" : "bg-black/40"}
        ${scrollDirection === "down" && window.innerWidth < 1000 ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">
        {/* Logo or Name */}
        <h1 className="mx-5 text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-fade-in font-[Poppins]">
          Vraj Patel
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 relative text-blue-400 font-medium text-base animate-fade-in">
          <LayoutGroup>
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative px-3 py-1 cursor-pointer"
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
              >
                {(hovered === link.label || activeSection === link.label) && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 bg-white/100 rounded-2xl z-[-1]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      mass: 0.4,
                    }}
                  />
                )}

                <a href={link.href} className="relative inline-block mb-[0.5px]">
                  <span className="hover:text-black transition">{link.label}</span>

                  <AnimatePresence mode="wait">
                    {hovered === link.label && (
                      <motion.div
                        key="underline"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute left-0 h-[2px] bg-black rounded"
                      />
                    )}
                  </AnimatePresence>
                </a>
              </div>
            ))}
          </LayoutGroup>

          {/* Toggle Splash Cursor Button (Desktop) */}
          <div className="ml-4  border-sky-500">
            <SplashToggle
              enabled={showSplashCursor}
              setEnabled={setShowSplashCursor}
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-5 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-white text-sm hover:text-[#a78bfa]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Toggle Splash Cursor Button (Mobile) */}
          <div className="mt-2">
            <SplashToggle
              enabled={showSplashCursor}
              setEnabled={(value) => {
                setShowSplashCursor(value);
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
