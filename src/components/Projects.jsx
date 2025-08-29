import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiMysql, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiMongodb, SiFramer } from 'react-icons/si';
import { CheckCircle } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projects = [
    {
        title: 'CineMaster',
        description: 'A movie recommender web application featuring trailers, watchlist, authentication, and premium UI/UX design.',
        keyFeatures: [
            'Search movies & fetch trailers',
            'Add to watchlist with authentication',
            'Dynamic navbar with profile management',
            'Responsive and animated dark theme UI'
        ],
        tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Framer Motion'],
        codeLink: 'https://github.com/VrajPatel1635/CineMaster',
        live: 'https://cine-master-flame.vercel.app/'
    },
    {
        title: 'Spotify Clone',
        description: 'A responsive music streaming platform clone built with HTML, CSS, and JavaScript.',
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
        description: 'A comprehensive web application for managing employee data built with React.',
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
    'CSS3': SiCss3, // Added for consistency
    JavaScript: SiJavascript,
    React: FaReact,
    'Next.js': SiNextdotjs,
    'Node.js': FaNodeJs,
    MongoDB: SiMongodb,
    'Framer Motion': SiFramer,
    MySQL: SiMysql,
    Java: FaJava,
};

const handleMouseMove = (e, index) => {
    const card = document.getElementById(`card-${index}`);
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
    }
};

const Projects = () => {
    return (
        <section id="projects" className="w-full py-16 px-4 bg-black text-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
                    Projects
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mx-auto mt-2 rounded-full"></div>
                <p className="text-slate-400 mt-3">Here are a few of my recent works</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <Tilt key={index}>
                        <motion.div
                            id={`card-${index}`}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            className="bg-gradient-to-br from-[#1f2d2b] via-[#2c3e50] to-[#1a252f] p-6 rounded-2xl shadow-md ring-1 ring-sky-400/20 transition-all hover:ring-sky-300/40 hover:shadow-sky-700/20 h-full flex flex-col"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                                <p className="text-slate-300 mb-4">{project.description}</p>

                                <div className="mt-4">
                                    <h4 className="text-md font-semibold text-violet-300 mb-2">Key Features:</h4>
                                    <ul className="space-y-1 text-slate-300">
                                        {project.keyFeatures.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                    {project.tech.map((techItem, i) => {
                                        const IconComponent = techIcons[techItem] || null;
                                        return (
                                            <span
                                                key={i}
                                                className="bg-[#111827] text-slate-200 text-sm px-3 py-1 rounded-full font-medium flex items-center gap-1 border border-cyan-600/30 hover:bg-cyan-600/20 hover:scale-105 transition-transform"
                                            >
                                                {IconComponent && <IconComponent className="w-4 h-4 text-cyan-400" />}
                                                {techItem}
                                            </span>
                                        );
                                    })}
                                </div>

                                <div className="flex gap-4 mt-3">
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-fuchsia-400 hover:underline cursor-pointer"
                                    >
                                        GitHub →
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-semibold text-emerald-400 hover:underline cursor-pointer"
                                        >
                                            Live Preview →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Projects;