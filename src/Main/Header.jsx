import { motion } from "framer-motion"
import React from "react"
import { FaGithub, FaInstagram, FaTelegram, FaVk } from "react-icons/fa"
import work from './image/IMG_1005.HEIC'; // Update the path to the actual location of your image

const socialLinks = [
    { href: "https://github.com/IvanMikey", icon: <FaGithub size={40} />, color: "text-indigo-500", hoverColor: "hover:text-indigo-400" },
    { href: "ссылка-на-Instagram", icon: <FaInstagram size={40} />, color: "text-purple-500", hoverColor: "hover:text-purple-400" },
    { href: "tg://resolve?domain=Ivan_Mikey", icon: <FaTelegram size={40} />, color: "text-blue-500", hoverColor: "hover:text-blue-400" },
    { href: "https://vk.com/johan_smith", icon: <FaVk size={40} />, color: "text-indigo-500", hoverColor: "hover:text-indigo-400" },
];

const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const AboutUs = () => {
    return (
        <header className="p-1 flex flex-col items-center justify-center lg:flex-row lg:items-start">
            <motion.div
                className="text-center lg:text-left w-full lg:w-1/2 p-4 lg:pl-16"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <motion.h1
                    className="text-orange-400 text-4xl lg:text-5xl font-bold mb-6"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    Ivan Voitekhovich
                </motion.h1>

                <motion.div
                    className="flex justify-center lg:justify-start mb-6"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    {socialLinks.map(({ href, icon, color, hoverColor }) => (
                        <a
                            key={href}
                            href={href}
                            className={`mx-2 ${color} ${hoverColor}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </a>
                    ))}
                </motion.div>

                <motion.h2
                    className="text-gray-300 text-lg lg:text-2xl mb-6"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    This awesome website is where you can check out my creative baggage – projects I've dug up
                    before. Right at the top, there's the "Portfolio" tab, or if you're feeling lazy, just
                    type "game" or "shop" in the search, and bam, projects with those keywords will pop up
                    in your face.
                    <br />
                    <br />
                    I haven't forgotten the cool part – registration and login! It's not just about clicking on
                    pictures here, but about interacting. Register, log in – immerse yourself in the vibe
                    of my ideas. And remember, this isn't just a portfolio; it's a story of how I spun my
                    projects. Enjoy the spin through the pages!
                </motion.h2>
            </motion.div>
            <motion.div
                className="p-20 lg:w-1/2 flex justify-center lg:justify-center hidden lg:flex"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <img className="w-full max-w-lg h-auto" src={work} alt="work" />
            </motion.div>
        </header>
    );
};

export default AboutUs;