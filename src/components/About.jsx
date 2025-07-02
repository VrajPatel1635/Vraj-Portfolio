import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Computer Engineering',
    institution: 'L.D. College of Engineering (GTU)',
    duration: '2023 - 2027',
    status: 'Currently in 3rd Year'
  },
  {
    degree: 'Higher Secondary (Science)',
    institution: 'Sheth C.M. Higher Secondary School',
    duration: '2021 - 2023',
    status: 'Grade 11-12 Completed'
  }
];

const About = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-black to-gray-900'>
      {/* About Me Section */}
      <section id="about" className="py-10 px-4 max-w-6xl mx-auto text-center ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl shadow-xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2 text-white">About Me</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-300 text-lg">
              A little bit about my journey and passions.
            </p>
          </div>

          <div className="space-y-6 text-left transition-all duration-500">
            <p className="text-lg leading-relaxed text-gray-300">
              I'm <span className="font-semibold text-purple-400">Vraj Patel</span>, currently pursuing my Computer Engineering degree at
              <span className="font-semibold text-purple-400"> L.D. College of Engineering</span>, affiliated with GTU.
              I’ve recently completed my 2nd year and I'm passionate about building useful and engaging digital experiences.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              My journey into programming began during my 11-12th Science studies at
              <span className="font-semibold text-purple-400"> Sheth C.M. Higher Secondary School</span>. Since then, I’ve explored technologies like
              <span className="font-semibold text-purple-400"> React, Node.js, and SQL</span> to turn ideas into working products.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              I am always eager to learn new technologies and contribute to impactful projects. Let's connect and build something amazing!
            </p>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-10 px-4 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl "
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2 text-white">Education</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-300 text-lg">My academic journey and qualifications.</p>
          </div>

          <div className="space-y-8">
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center transform transition duration-300 hover:scale-[1.02] hover:shadow-purple-700"
              >
                <div className="text-left mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-white">{item.degree}</h3>
                  <p className="text-purple-400 text-lg mt-1">{item.institution}</p>
                  <p className="text-gray-400 text-md mt-2">{item.status}</p>
                </div>
                <div className="bg-purple-600 text-white px-5 py-2 rounded-full font-semibold text-md whitespace-nowrap">
                  {item.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      </div>
    </>

  );
};

export default About;
