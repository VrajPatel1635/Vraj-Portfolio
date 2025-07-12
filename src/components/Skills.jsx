import React, { useEffect, useRef, useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava
} from 'react-icons/fa';
import { SiJavascript, SiC, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Helper function to determine skill level based on percentage.
const getLevel = (percent) => {
  if (percent >= 90) return 'Expert';
  if (percent >= 75) return 'Advanced';
  if (percent >= 60) return 'Intermediate';
  return 'Beginner';
};

// Component for individual skill progress bars.
const SkillBar = ({ name, percent }) => (
  // <Tilt>
  <motion.div
    className="mb-4 group transition-all duration-300 w-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between text-sm font-medium mb-1">
      <span className="text-slate-200 group-hover:text-cyan-300 transition-colors duration-300">{name}</span>
      <span className="text-slate-400 group-hover:text-cyan-300 transition-colors duration-300">{getLevel(percent)}</span>
    </div>
    <div className="relative w-full h-2 rounded-full bg-slate-800 overflow-hidden">
      <motion.div
        className="absolute h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 shadow-md shadow-cyan-400/20"
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
  // </Tilt>
);

// Component for the animated cards that hold the skill bars.
const AnimatedCard = ({ title, children }) => (
  <Tilt>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-[90%] relative group p-[2px] rounded-2xl bg-gradient-to-tr from-[#4e54c8] to-[#8f94fb]"
    >
      <div className="bg-gradient-to-br from-[#1f1c2c] to-[#928dab] backdrop-blur-xl bg-opacity-20 rounded-2xl p-6 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-cyan-500/40 h-full">
        <h3 className="text-lg font-bold text-center bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">{title}</h3>
        <div className="w-20 h-1 mx-auto bg-cyan-400 mb-4 rounded"></div>
        {children}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400 animate-borderPulse pointer-events-none"
      />
    </motion.div>
  </Tilt>
);

// Data for the skill icons.
const skillData = [
  { icon: <FaHtml5 className="text-orange-600" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS" },
  { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, label: "React" },
  { icon: <FaJava className="text-[#007396]" />, label: "Java" },
  { icon: <SiMysql className="text-[#00758F]" />, label: "MySQL" },
  { icon: <FaNodeJs className="text-green-600" />, label: "Node.js" },
  { icon: <SiC className="text-blue-800" />, label: "C" },
  { icon: <FaGithub className="text-white" />, label: "GitHub" },
  { icon: <FaGitAlt className="text-red-500" />, label: "Git" }
];

// Corrected infinite circular scrolling component.
const InfiniteSkillCarousel = () => {
  const animationFrameRef = useRef();
  const [x, setX] = useState(0);
  const [rotate, setRotate] = useState(false);
  const handleClick = () => {
    setRotate(prev => prev + 360);
  };

  const speed = 0.5;
  const itemWidth = 112; // w-28
  const gap = 16; // gap-4
  const itemWidthWithGap = itemWidth + gap;
  const scrollWidth = skillData.length * itemWidthWithGap;

  // We repeat the data multiple times to ensure the track is long enough for a seamless loop on all screen sizes.
  const repeatedData = [...skillData, ...skillData, ...skillData, ...skillData];

  useEffect(() => {
    const animate = () => {
      setX(prevX => {
        const newX = prevX - speed;
        // When one full set of original items has scrolled by, reset the position.
        if (newX <= -scrollWidth) {
          return newX + scrollWidth;
        }
        return newX;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollWidth]);

  return (
    <div className="relative w-full h-32 overflow-hidden">
      <div
        className="absolute top-0 left-0 flex gap-4"
        style={{
          transform: `translateX(${x}px)`,
          width: `${repeatedData.length * itemWidthWithGap}px`,
        }}
      >
        {repeatedData.map((skill, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
          >
            <div className="flex-shrink-0 w-32 h-32 carousel-item bg-gradient-to-br from-[#1f1c2c] to-[#928dab] p-[2px] rounded-xl shadow-lg shadow-purple-600/30">
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#0f0c29] rounded-xl cursor-pointer"
                onClick={handleClick}>
                <motion.div
                  animate={rotate ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-3xl sm:text-4xl mb-2"
                >
                  {skill.icon}
                </motion.div>
                <span className="text-sm font-semibold text-white text-center">
                  {skill.label}
                </span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
      {/* Gradient overlays to create a smooth fading effect at the edges. */}
      <div className="absolute top-0 left-0 z-10 w-24 h-full pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute top-0 right-0 z-10 w-24 h-full pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};

// The main Skills section component.
const App = () => {
  return (
    <section className="w-screen min-w-full py-12 px-4 bg-black overflow-x-hidden" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="rounded-2xl"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-slate-400">
            Here are the technologies and tools I’ve been working with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedCard title="Programming Languages">
            <SkillBar name="C" percent={80} />
            <SkillBar name="Java" percent={85} />
            <SkillBar name="JavaScript" percent={75} />
          </AnimatedCard>
          <AnimatedCard title="Frontend">
            <SkillBar name="HTML" percent={90} />
            <SkillBar name="CSS" percent={85} />
            <SkillBar name="React" percent={80} />
          </AnimatedCard>
          <AnimatedCard title="Backend & Database">
            <SkillBar name="Node.js" percent={45} />
            <SkillBar name="MySQL" percent={65} />
          </AnimatedCard>
          <AnimatedCard title="Tools & Platforms">
            <SkillBar name="Git" percent={85} />
            <SkillBar name="GitHub" percent={80} />
          </AnimatedCard>
        </div>

        {/* FIX: Removed text-center from this container */}
        <div className="mt-16 mb-6">
          {/* FIX: Added text-center directly to the heading */}
          <h3 className="text-2xl font-bold mb-2 text-slate-100 text-center">
            Technologies I Work With
          </h3>
          <div className="w-32 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
          {/* This component will now correctly take up the full width */}
          <InfiniteSkillCarousel />
        </div>
      </motion.div>
    </section>
  );
};

export default App;
