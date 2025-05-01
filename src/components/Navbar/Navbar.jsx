import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const projects = [
    { 
        id: 1, 
        title: "Shop Project", 
        description: "Описание", 
        path: "/portfolio/shop", 
        associatedWords: ["shop", "store", "ecommerce"], 
        image: "shop-image.jpg" 
    },
    { 
        id: 2, 
        title: "Portfolio Project", 
        description: "Описание", 
        path: "/projects/portfolio", 
        associatedWords: ["portfolio", "website", "development"], 
        image: "portfolio-image.jpg" 
    },
    { 
        id: 3, 
        title: "Game Web", 
        description: "Описание", 
        path: "/projects/game", 
        associatedWords: ["game", "store"], 
        image: "game-image.jpg" 
    },
];

const ProjectCard = ({ project }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mb-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
    >
        <Link to={project.path} className="block">
            <h3 className="text-lg font-bold text-orange-400">{project.title}</h3>
            <p className="text-sm text-gray-300 mt-1">{project.description}</p>
            <div className="mt-2">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-md w-24 h-24 object-cover"
                />
            </div>
        </Link>
    </motion.div>
);

function ProjectList({ projects }) {
    return (
        <div className="flex flex-col overflow-y-auto max-h-64 pr-2">
            <AnimatePresence>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </AnimatePresence>
        </div>
    );
}

function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [menuActive, setMenuActive] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const location = useLocation();

    const handleSearch = useCallback((e) => {
        const input = e.target.value.toLowerCase();
        setSearchTerm(input);

        const filtered = projects.filter((project) => {
            const searchTerms = [
                project.title.toLowerCase(),
                project.description.toLowerCase(),
                ...project.associatedWords.map(word => word.toLowerCase())
            ];
            return searchTerms.some(term => term.includes(input));
        });

        setFilteredProjects(filtered);
    }, []);

    useEffect(() => {
        setMenuActive(false);
    }, [location]);

    const navLinks = [
        { path: "/home", label: "Home" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/contacts", label: "Contacts" }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="p-1 bg-gray-800 shadow-lg"
        >
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-orange-400 font-bold text-2xl md:text-3xl"
                >
                    <Link to="/home">
                        <h1>Portfolio</h1>
                    </Link>
                </motion.div>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map(({ path, label }) => (
                        <motion.div
                            key={path}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to={path}
                                className={`text-gray-300 font-bold cursor-pointer hover:text-orange-400 transition-colors duration-300 ${
                                    location.pathname === path ? "text-orange-400" : ""
                                }`}
                            >
                                {label}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="relative w-64">
                    <motion.input
                        whileFocus={{ scale: 1.02 }}
                        placeholder="Search Projects"
                        type="text"
                        className="text-center w-full p-2 placeholder-orange-400 border border-orange-500 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        value={searchTerm}
                        onChange={handleSearch}
                    />

                    <AnimatePresence>
                        {searchTerm && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute bg-gray-800 p-4 mt-2 w-full rounded-lg shadow-xl z-50"
                            >
                                <ProjectList projects={filteredProjects} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMenuActive(!menuActive)}
                    className="md:hidden text-gray-300 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </motion.button>
            </nav>

            <AnimatePresence>
                {menuActive && (
                    <motion.nav
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        className="bg-gray-800 text-white fixed top-0 left-0 bottom-0 w-64 z-50 shadow-xl"
                    >
                        <div className="p-4">
                            <button
                                onClick={() => setMenuActive(false)}
                                className="absolute top-4 right-4 text-gray-300 hover:text-orange-400"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <ul className="mt-16 space-y-4">
                                {navLinks.map(({ path, label }) => (
                                    <motion.li
                                        key={path}
                                        whileHover={{ x: 10 }}
                                        className="border-b border-gray-700"
                                    >
                                        <Link
                                            to={path}
                                            className={`block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors duration-300 ${
                                                location.pathname === path ? "text-orange-400" : ""
                                            }`}
                                        >
                                            {label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Navbar;