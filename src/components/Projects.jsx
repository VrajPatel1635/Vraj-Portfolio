import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiMysql, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { CheckCircle } from 'lucide-react';

const projects = [
    {
        title: 'Spotify Clone',
        description: 'A responsive music streaming platform clone built with HTML, CSS, and JavaScript. Features include music player interface, playlist management, and responsive design.',
        keyFeatures: [
            'Interactive music player interface',
            'Responsive design for all devices',
            'Clean and modern UI',
            'Playlist navigation'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        codeLink: 'https://github.com/VrajPatel1635/MySpotify',
        live: 'https://vrajpatel1635.github.io/MySpotify/'
    },
    {
        title: 'Employee Management System',
        description: 'A comprehensive web application for managing employee data built with React. Includes features for adding, editing, deleting, and viewing employee information.',
        keyFeatures: [
            'CRUD operations for employee data',
            'Search and filter functionality',
            'Responsive user interface',
            'Data persistence with local storage'
        ],
        tech: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
        codeLink: 'https://github.com/VrajPatel1635/EMS',
        live: 'https://gorgeous-phoenix-95425c.netlify.app/#/'
    }
];

const techIcons = {
    HTML: SiHtml5,
    CSS: SiCss3,
    JavaScript: SiJavascript,
    React: FaReact,
    'Node.js': FaNodeJs,
    MySQL: SiMysql,
    Java: FaJava,
};

const Projects = () => {
    return (
        <section id="projects" className="py-12 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Projects</h2>
                <div className="w-15 h-1 bg-purple-500 mx-auto rounded-full"></div>
                <p className="text-gray-400 mt-2">Here are a few of my recent projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500 transition-shadow duration-300 transform hover:-translate-y-1"
                    >
                        {/* Optional image */}
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                        )}

                        <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Features:</h4> {/* Darker text */}
                            <ul className="list-none space-y-1 text-gray-600"> {/* Darker text */}
                                {project.keyFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> {/* Green checkmark */}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4 mt-4">
                            {project.tech.map((techItem, i) => {
                                const IconComponent = techIcons[techItem] || null;
                                return (
                                    <span
                                        key={i}
                                        className="bg-purple-700 text-white text-sm px-3 py-1 rounded-full font-medium flex items-center gap-1 transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-400 hover:to-purple-600"
                                    >
                                        {IconComponent && <IconComponent className="w-4 h-4" />}
                                        {techItem}
                                    </span>
                                );
                            })}
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition"
                            >
                                GitHub →
                            </a>

                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-green-400 hover:text-green-300 transition"
                                >
                                    Live Preview →
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
