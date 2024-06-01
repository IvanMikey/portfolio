// Footer.jsx
import React from "react"
import { FaGithub, FaInstagram, FaTelegram, FaVk } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <header className="p-1">
            <footer className="py-8 text-center font-pla text-white">
                <div>
                    <h1 className="text-orange-400 text-3xl font-bold mb-4">Ivan Voitekhovich</h1>
                </div>

                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/IvanMikey" className="mx-2 text-indigo-500 hover:text-indigo-400" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={40} />
                    </a>
                    <a href="ссылка-на-Instagram" className="mx-2 text-purple-500 hover:text-purple-400" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={40} />
                    </a>
                    <a href="tg://resolve?domain=Ivan_Mikey" className="mx-2 text-blue-500 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                        <FaTelegram size={40} />
                    </a>
                    <a href="https://vk.com/johan_smith" className="mx-2 text-indigo-500 hover:text-indigo-400" target="_blank" rel="noopener noreferrer">
                        <FaVk size={40} />
                    </a>
                </div>

                <div className="mt-4">
                    <div className="flex justify-center space-x-6">
                        <Link to="/" className="text-orange-400 text-xs hover:text-orange-300">
                            HOME
                        </Link>
                        <Link to="/Portfolio" className="text-orange-400 text-xs hover:text-orange-300">
                            PORTFOLIO
                        </Link>
                        <Link to="/Contacts" className="text-orange-400 text-xs hover:text-orange-300">
                            CONTACT'S
                        </Link>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-gray-400">©2024 Ivan Voitekhovich --- Full-stack Developer</p>
                </div>
            </footer>
        </header>
    );
};

export default Footer;
