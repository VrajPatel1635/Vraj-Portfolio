import React, { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava
} from 'react-icons/fa';
import { SiJavascript, SiC, SiMysql } from 'react-icons/si';
import { motion } from 'framer-motion';

const getLevel = (percent) => {
  if (percent >= 90) return 'Expert';
  if (percent >= 75) return 'Advanced';
  if (percent >= 60) return 'Intermediate';
  return 'Beginner';
};

const SkillBar = ({ name, percent }) => (
  <motion.div
    className="mb-4 group transition-all duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between text-sm font-medium mb-1">
      <span className="text-gray-200 group-hover:text-purple-400 transition-colors duration-300">{name}</span>
      <span className="text-gray-400 group-hover:text-purple-300 transition-colors duration-300">{getLevel(percent)}
      </span>
    </div>
    <div className="relative w-full h-2 rounded-full bg-gray-700 overflow-hidden">
      <motion.div
        className="absolute h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);


const SkillBox = ({ icon, label }) => {
  const [rotationKey, setRotationKey] = useState(0);

  const handleClick = () => {
    setRotationKey(prev => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="p-8 rounded-2xl"
    >
      <div
        onClick={handleClick}
        className="group cursor-pointer flex flex-col items-center justify-center shadow-md p-4 rounded-xl w-36 h-32 
             transition-transform duration-500 transform hover:scale-105 hover:shadow-purple-400 hover:shadow-md animate-fadeIn">
        <div
          key={rotationKey}
          className="text-4xl mb-2 transition-transform duration-500 animate-spin-once"
        >
          {icon}
        </div>
        <p className="text-sm font-semibold group-hover:text-purple-600 transition-colors duration-300">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-gray-900 to-black" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
          <div className="w-40 h-1 bg-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-600">Here are the technologies and tools I've been working with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="rounded-xl p-6 shadow-md transition-transform duration-500 transform hover:scale-105 hover:shadow-purple-400 hover:shadow-md">
            <h3 className="text-lg font-bold text-center text-purple-700">Programming Languages</h3>
            <div className="w-20 h-1 mx-auto bg-purple-400 mb-4 rounded"></div>
            <SkillBar name="C" percent={85} />
            <SkillBar name="Java" percent={60} />
            <SkillBar name="JavaScript" percent={75} />
            <SkillBar name="SQL" percent={75} />
          </div>

          <div className="rounded-xl p-6 shadow-md transition-transform duration-500 transform hover:scale-105 hover:shadow-purple-400 hover:shadow-md">
            <h3 className="text-lg font-bold text-center text-purple-700">Web Technologies</h3>
            <div className="w-20 h-1 mx-auto bg-purple-400 mb-4 rounded"></div>
            <SkillBar name="HTML" percent={95} />
            <SkillBar name="CSS" percent={90} />
            <SkillBar name="React" percent={65} />
            <SkillBar name="Node.js" percent={35} />
          </div>

          <div className="rounded-xl p-6 shadow-md transition-transform duration-500 transform hover:scale-105 hover:shadow-purple-400 hover:shadow-md">
            <h3 className="text-lg font-bold text-center text-purple-700">Tools & Platforms</h3>
            <div className="w-20 h-1 mx-auto bg-purple-400 mb-4 rounded"></div>
            <SkillBar name="Git" percent={80} />
            <SkillBar name="GitHub" percent={85} />
            <SkillBar name="VS Code" percent={90} />
            <SkillBar name="Database Management" percent={75} />
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Technologies I Work With</h3>
          <div className="w-50 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 ml-5">
          <SkillBox icon={<FaHtml5 className="text-orange-600" />} label="HTML" />
          <SkillBox icon={<FaCss3Alt className="text-blue-600" />} label="CSS" />
          <SkillBox icon={<SiJavascript className="text-yellow-400" />} label="JavaScript" />
          <SkillBox icon={<FaReact className="text-cyan-400" />} label="React" />
          <SkillBox icon={<FaJava className="text-[#007396]" />} label="Java" />
          <SkillBox icon={<SiMysql className="text-[#00758F]" />} label="MySQL" />
          <SkillBox icon={<FaNodeJs className="text-green-600" />} label="Node JS" />
          <SkillBox icon={<SiC className="text-blue-800" />} label="C Language" />
          <SkillBox icon={<FaGithub />} label="GitHub" />
          <SkillBox icon={<FaGitAlt className="text-red-500" />} label="Git" />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
