"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const addHoverEvents = () => {
      const hoverables = document.querySelectorAll("a, button, .cursor-hover");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };
    addHoverEvents();
  }, []);


  // Smooth trail
  useEffect(() => {
    const follow = () => {
      setTrail((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
      requestAnimationFrame(follow);
    };
    follow();
  }, [position]);

  return (
    <>
      {/* Outer Circle */}
      <div
        className={`fixed z-[9999] ${isHovering ? 'scale-150' : 'scale-100'} w-12 h-12 border-2 border-teal-400 rounded-full pointer-events-none transition duration-200 ease-out mix-blend-difference`}
        style={{
          left: trail.x - 24,
          top: trail.y - 24,
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed z-[9999] w-2 h-2 bg-teal-400 rounded-full pointer-events-none mix-blend-difference"
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      />
    </>
  );
};

export default CustomCursor;
