import { motion } from "framer-motion"
import React from "react"
import Me from "./image/me.jpg"

const AboutMe = () => {
    const variants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <>
            <header className="p-1 bg-gray-800">
                <section id="about" className="about flex flex-col items-center">
                    <div className="flex items-center justify-center my-8">
                        <motion.h2
                            className="text-3xl font-bold text-orange-400"
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            ABOUT
                        </motion.h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:w-3/4">
                        <motion.div
                            className="my-6 lg:mr-10"
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <img
                                src={Me}
                                className="rounded-xl mx-auto lg:mx-0 lg:w-[30rem] w-full max-w-xs shadow-lg" // Adjusted class
                                alt="Ivan Voitekhovich"
                            />
                        </motion.div>
                        <motion.div
                            className="lg:w-2/3 pt-4 lg:pt-0 px-4 lg:px-0 text-white"
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            <motion.h3
                                className="font-bold text-2xl text-orange-400 mb-4"
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                            >
                                Web Developer
                            </motion.h3>
                            <motion.div
                                className="flex flex-col lg:flex-row"
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                            >
                                <motion.div
                                    className="lg:w-1/2 mb-6 lg:mb-0"
                                    variants={variants}
                                >
                                    <ul className="list-none text-gray-300 space-y-4">
                                        <li className="flex items-center">
                                            <i className="bi bi-chevron-right text-blue-500 text-lg mr-2"></i>
                                            <strong>Birthday:</strong>
                                            <span className="ml-2">13 February 2007</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-chevron-right text-blue-500 text-lg mr-2"></i>
                                            <strong>Website:</strong>
                                            <span className="ml-2">www.example.com</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-chevron-right text-blue-500 text-lg mr-2"></i>
                                            <strong>Phone:</strong>
                                            <span className="ml-2">None</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-chevron-right text-blue-500 text-lg mr-2"></i>
                                            <strong>City:</strong>
                                            <span className="ml-2">Belarus, Minsk</span>
                                        </li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    className="lg:w-1/2"
                                    variants={variants}
                                >
                                    <ul className="list-none text-gray-300 space-y-4">
                                        <li className="flex items-center">
                                            <i className="bi bi-chevron-right text-blue-500 text-lg mr-2"></i>
                                            <strong>Age:</strong>
                                            <span className="ml-2">17</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-chevron-right text-blue-500 text-lg mr-2"></i>
                                            <strong>Degree:</strong>
                                            <span className="ml-2">Beginner</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-chevron-right text-blue-500 text-lg mr-2"></i>
                                            <strong>Email:</strong>
                                            <span className="ml-2">ivan.mikey1@gmail.com</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="bi bi-chevron-right text-blue-500 text-lg mr-2"></i>
                                            <strong>Freelance:</strong>
                                            <span className="ml-2">Closed</span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </motion.div>
                            <motion.p
                                className="text-gray-300 mt-6"
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                            >
                                Hi, I'm Ivan - a web developer, creative enthusiast, and lover of creating unique online projects. My passion for coding is combined with a design eye, which allows me to translate ideas into elegant and functional websites. Welcome to the world of my creative and technical solutions!
                            </motion.p>
                        </motion.div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default AboutMe;