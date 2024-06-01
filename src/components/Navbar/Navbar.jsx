import React, { useState } from "react"
import { Link } from "react-router-dom"

const projects = [
    { id: 1, title: "Shop Project", description: "Описание", path: "/portfolio/shop", associatedWords: ["shop", "store", "ecommerce"], image: "shop-image.jpg" },
    { id: 2, title: "Portfolio Project", description: "Описание", path: "/projects/portfolio", associatedWords: ["portfolio", "website", "development"], image: "portfolio-image.jpg" },
    { id: 3, title: "Game Web", description: "Описание", path: "/projects/game", associatedWords: ["game", "store"], image: "game-image.jpg" },
];

function ProjectList({ projects }) {
    return (
        <div className="flex flex-col overflow-y-auto max-h-64">
            {projects.map((project) => (
                <div key={project.id} className="mb-4 p-4 bg-gray-400 rounded-md">
                    <Link to={project.path}>
                        <h3 className="text-lg font-bold">{project.title}</h3>
                    </Link>
                    <p className="text-sm">{project.description}</p>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="mt-2 rounded-md max-w-full h-auto" 
                        style={{ maxWidth: "100px", maxHeight: "100px" }} 
                    />
                </div>
            ))}
        </div>
    );
}

function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [menuActive, setMenuActive] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const handleSearch = (e) => {
        const input = e.target.value.toLowerCase();
        setSearchTerm(input);

        const filteredProjects = projects.filter((project) => {
            const associatedWordsLower = project.associatedWords.map((word) => word.toLowerCase());
            return associatedWordsLower.some((word) => word.includes(input));
        });

        setFilteredProjects(filteredProjects);
    };

    return (
        <>
            <header className="p-1 bg-gray-800">
                <nav className="flex items-center justify-between max-w-5xl mx-auto">
                    <div className="ml-2 text-orange-400 font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                        <h1>Portfolio</h1>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link to="/home/" className="text-gray-300 font-bold cursor-pointer hover:text-orange-400">
                            Home
                        </Link>
                        <Link to="/portfolio" className="text-gray-300 font-bold cursor-pointer hover:text-orange-400">
                            Portfolio
                        </Link>
                        <Link to="/contacts" className="text-gray-300 font-bold cursor-pointer hover:text-orange-400">
                            Contacts
                        </Link>
                    </div>

                    <div className="relative w-64">
                        <input
                            placeholder="Search Projects"
                            type="text"
                            className="text-center w-full p-2 placeholder-orange-400 border border-orange-500 bg-gray-700 text-white rounded-lg"
                            value={searchTerm}
                            onChange={handleSearch}
                        />

                        {searchTerm && (
                            <div className="absolute bg-gray-800 p-4 mt-2 w-full rounded-lg">
                                <ProjectList projects={filteredProjects} />
                            </div>
                        )}
                    </div>

                    <div className="md:hidden text-center rounded-md shadow-md">
                        <button 
                            onClick={() => setMenuActive(!menuActive)} 
                            className="mr-2 text-gray-300 font-bold text-lg px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            {menuActive && (
                <nav className="bg-gray-800 text-white fixed top-0 left-0 bottom-0 w-48 z-50 transition-all duration-300">
                    <ul className="mt-16 space-y-2">
                        <li>
                            <Link to="/home/" className="block py-2 px-4 text-center hover:bg-gray-700 rounded-lg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className="block py-2 px-4 text-center hover:bg-gray-700 rounded-lg">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/contacts" className="block py-2 px-4 text-center hover:bg-gray-700 rounded-lg">
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Navbar;