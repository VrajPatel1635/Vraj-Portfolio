import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';


const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 px-4 justify-center animate-fadeIn bg-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="p-8"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-white transition duration-700">
            Get In Touch
          </h2>
          <div className="w-30 h-1 bg-purple-500 mx-auto rounded-full"></div>

          <p className="mt-4 text-gray-300 text-lg transition duration-700">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="flex justify-center items-center">
          {/* Contact Card */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.02}
            transitionSpeed={1500}
            trackOnWindow={false}
          >
            <div className="w-[360px] md:w-[480px] bg-gradient-to-br from-[#2e2e2e]/60 to-[#1e1e1e]/80 backdrop-blur-lg p-8 rounded-3xl border border-purple-800/30 shadow-[0_0_30px_rgba(128,0,128,0.3)] transition-transform duration-500 hover:scale-[1.015]">
              <h3 className="text-3xl font-extrabold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want
                to say hello, I'd love to hear from you. Feel free to reach out!
              </p>

              <div className="space-y-6 mb-6">
                {/* Email */}
                <div className="flex items-center bg-black/40 p-4 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:bg-purple-700/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 shadow-inner">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:vrajrpatel6261@example.com"
                      className="text-white font-medium hover:text-purple-400 transition-colors duration-300"
                    >
                      vrajrpatel6261@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center bg-black/40 p-4 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:bg-purple-700/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 shadow-inner">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Gandhinagar, Gujarat</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 justify-center mt-4">
                <a
                  href="https://github.com/VrajPatel1635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition transform hover:scale-125 duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition transform hover:scale-125 duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </Tilt>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
