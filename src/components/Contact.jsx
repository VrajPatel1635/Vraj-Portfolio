import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-screen mx-auto justify-center animate-fadeIn bg-gradient-to-b from-gray-900 to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl shadow-xl"
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

        <div className="gap-12 justify-center items-center ml-130">
          {/* Contact Card */}
          <div className="w-100 bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 transition-transform duration-500 hover:shadow-purple-700 hover:scale-[1.01]">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want
              to say hello, I'd love to hear from you. Feel free to reach out!
            </p>

            <div className="space-y-6 mb-10">
              {/* Email */}
              <div className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-purple-500">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:vrajrpatel6261@example.com"
                    className="text-white font-medium hover:text-purple-400 transition-colors duration-300"
                  >
                    vrajrpatel6261@example.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-purple-500">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Gandhinagar, Gujarat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
