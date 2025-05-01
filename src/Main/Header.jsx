import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown, FaGithub, FaInstagram, FaTelegram, FaVk } from "react-icons/fa";
import work from './image/pngwing.png'; // Update the path to the actual location of your image

const socialLinks = [
    { 
        href: "https://github.com/IvanMikey", 
        icon: <FaGithub size={24} />, 
        color: "text-indigo-500", 
        hoverColor: "hover:text-indigo-400",
        label: "GitHub"
    },
    { 
        href: "ссылка-на-Instagram", 
        icon: <FaInstagram size={24} />, 
        color: "text-purple-500", 
        hoverColor: "hover:text-purple-400",
        label: "Instagram"
    },
    { 
        href: "tg://resolve?domain=Ivan_Mikey", 
        icon: <FaTelegram size={24} />, 
        color: "text-blue-500", 
        hoverColor: "hover:text-blue-400",
        label: "Telegram"
    },
    { 
        href: "https://vk.com/johan_smith", 
        icon: <FaVk size={24} />, 
        color: "text-indigo-500", 
        hoverColor: "hover:text-indigo-400",
        label: "VKontakte"
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const AboutUs = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="min-h-screen bg-gray-800 flex items-center p-1"
        >
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        variants={fadeInUp}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="mb-8"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-orange-400 mb-4">
                                Ivan Voitekhovich
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-300">
                                Full-stack Developer
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex justify-center lg:justify-start gap-4 mb-8"
                        >
                            {socialLinks.map(({ href, icon, color, hoverColor, label }) => (
                                <motion.a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${color} ${hoverColor} p-3 rounded-full bg-gray-700/50 backdrop-blur-sm transition-all duration-300`}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={label}
                                >
                                    {icon}
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm mb-8"
                        >
                            <p className="text-gray-300 leading-relaxed">
                                This awesome website is where you can check out my creative baggage – projects I've dug up
                                before. Right at the top, there's the "Portfolio" tab, or if you're feeling lazy, just
                                type "game" or "shop" in the search, and bam, projects with those keywords will pop up
                                in your face.
                                <br /><br />
                                I haven't forgotten the cool part – registration and login! It's not just about clicking on
                                pictures here, but about interacting. Register, log in – immerse yourself in the vibe
                                of my ideas. And remember, this isn't just a portfolio; it's a story of how I spun my
                                projects. Enjoy the spin through the pages!
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex gap-4"
                        >
                            <motion.a
                                href="#/portfolio"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-300 text-center"
                            >
                                View Portfolio
                            </motion.a>
                            <motion.button
                                onClick={scrollToAbout}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <span>Learn More</span>
                                <FaArrowDown />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="lg:w-1/2"
                    >
                        <div className="relative group">
                            <motion.img
                                src={work}
                                alt="Work illustration"
                                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutUs;