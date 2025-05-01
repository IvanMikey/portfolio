// Footer.jsx
import { motion } from "framer-motion"
import React from "react"
import { FaGithub, FaInstagram, FaTelegram, FaVk } from "react-icons/fa"
import { Link } from "react-router-dom"

const socialLinks = [
    {
        icon: FaGithub,
        url: "https://github.com/IvanMikey",
        color: "text-indigo-500",
        hoverColor: "text-indigo-400",
        label: "GitHub"
    },
    {
        icon: FaInstagram,
        url: "ссылка-на-Instagram",
        color: "text-purple-500",
        hoverColor: "text-purple-400",
        label: "Instagram"
    },
    {
        icon: FaTelegram,
        url: "tg://resolve?domain=Ivan_Mikey",
        color: "text-blue-500",
        hoverColor: "text-blue-400",
        label: "Telegram"
    },
    {
        icon: FaVk,
        url: "https://vk.com/johan_smith",
        color: "text-indigo-500",
        hoverColor: "text-indigo-400",
        label: "VKontakte"
    }
]

const navLinks = [
    { path: "/portfolio/home", label: "HOME" },
    { path: "/portfolio/portfolio", label: "PORTFOLIO" },
    { path: "/portfolio/contacts", label: "CONTACTS" }
]

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 text-white p-1"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-orange-400 text-3xl font-bold mb-4">
                        Ivan Voitekhovich
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Full-stack Developer
                    </p>
                </motion.div>

                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.color} hover:${social.hoverColor} transition-colors duration-300`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            aria-label={social.label}
                        >
                            <social.icon size={40} />
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center space-x-8 mb-8"
                >
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.path}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to={link.path}
                                className="text-orange-400 text-sm hover:text-orange-300 transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center border-t border-gray-700 pt-6"
                >
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Ivan Voitekhovich — Full-stack Developer
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
