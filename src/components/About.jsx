import React from 'react';
import { motion } from 'framer-motion';
import { CardSpotlight } from '../Design/CardSpotlight';

const educationData = [
  {
    degree: 'Computer Engineering',
    institution: 'L.D. College of Engineering (GTU)',
    duration: '2023 - 2027',
    status: 'Currently in 3rd Year',
  },
  {
    degree: 'Higher Secondary (Science)',
    institution: 'Sheth C.M. Higher Secondary School',
    duration: '2021 - 2023',
    status: 'Grade 11-12 Completed',
  },
];

const About = () => {
  return (
    <div className="bg-black text-white w-full">
      {/* === About Me Section === */}
      <section id="about" className="py-16 px-4 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl shadow-2xl bg-gradient-to-b from-zinc-900 to-black"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            I'm <span className="text-purple-400 font-semibold">Vraj Patel</span>, a Computer Engineering student at
            <span className="text-purple-400 font-semibold"> L.D. College of Engineering</span>. My coding journey began during my 11-12th Science years at
            <span className="text-purple-400 font-semibold"> Sheth C.M. Higher Secondary School</span>. Since then, I’ve explored tools like
            <span className="text-purple-400 font-semibold"> React, Node.js, SQL</span>, and more to build meaningful projects.
          </p>
          <p className="text-gray-400 mt-4 text-md leading-relaxed max-w-3xl mx-auto">
            I’m passionate about learning, experimenting with new technologies, and creating smooth digital experiences. Let’s connect and collaborate on something impactful!
          </p>
        </motion.div>
      </section>

      {/* === Education Section === */}
      <section id="education" className="py-14 px-4 max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Education
        </h3>
        <div className="space-y-6">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <CardSpotlight
                idx={idx}
                className="mb-6 rounded-2xl p-6 bg-gradient-to-r from-[#1F1C2C] via-[#928DAB] to-[#1F1C2C] shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                  <div className="text-left mb-4 md:mb-0 z-10">
                    <h3 className="text-2xl font-bold text-white drop-shadow-sm">{item.degree}</h3>
                    <p className="text-pink-200 text-lg mt-1 font-medium">{item.institution}</p>
                    <p className="text-gray-300 text-md mt-2 italic">{item.status}</p>
                  </div>
                  <div className="bg-pink-500 text-white px-5 py-2 rounded-full font-semibold text-md whitespace-nowrap z-10 shadow-md">
                    {item.duration}
                  </div>
                </div>
              </CardSpotlight>

            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
