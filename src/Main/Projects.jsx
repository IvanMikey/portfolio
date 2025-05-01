import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

// Import Images
import imageExam from './image/pngwing.png';

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-featured online shopping platform with user authentication, product management, and payment integration.",
        image: imageExam,
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/yourusername/project1",
        live: "https://project1.com"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A modern portfolio website showcasing projects and skills with smooth animations and responsive design.",
        image: imageExam,
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/yourusername/project2",
        live: "https://project2.com"
    },
    {
        id: 3,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team features.",
        image: imageExam,
        technologies: ["React", "Firebase", "Material-UI"],
        github: "https://github.com/yourusername/project3",
        live: "https://project3.com"
    },
    {
        id: 4,
        title: "Social Media Dashboard",
        description: "A comprehensive dashboard for managing social media accounts and analytics.",
        image: imageExam,
        technologies: ["React", "D3.js", "Express"],
        github: "https://github.com/yourusername/project4",
        live: "https://project4.com"
    }
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/80 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
            <div className="relative group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-orange-400 transition-colors duration-300"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-orange-400 transition-colors duration-300"
                        >
                            <FaExternalLinkAlt size={24} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm bg-orange-400/10 text-orange-400 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-1 bg-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
                        PROJECTS
                    </h2>
                    <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper rounded-xl overflow-hidden"
                        style={{ maxWidth: '100%', height: '400px' }}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <div className="relative h-full">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                            <p className="mb-4 text-gray-200">{project.description}</p>
                                            <div className="flex gap-4">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-white"
                                                >
                                                    <FaGithub />
                                                    <span>View Code</span>
                                                </a>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors duration-300 text-white"
                                                >
                                                    <FaExternalLinkAlt />
                                                    <span>Live Demo</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;