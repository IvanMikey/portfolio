import { motion } from "framer-motion";
import React from "react";
import Me from "./image/me.jpg";

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

const AboutMe = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="p-1 bg-gray-800"
        >
            <div id="about" className="max-w-7xl mx-auto px-4 py-12">
                <motion.div 
                    className="text-center mb-6"
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
                        ABOUT ME
                    </h2>
                    <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        variants={fadeInUp}
                        className="lg:w-1/3"
                    >
                        <div className="relative group">
                            <motion.img
                                src={Me}
                                alt="Ivan Voitekhovich"
                                className="rounded-2xl w-full max-w-sm mx-auto shadow-xl transition-transform duration-300 group-hover:scale-105"
                                whileHover={{ scale: 1.02 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="lg:w-2/3 text-white"
                    >
                        <motion.h3
                            variants={fadeInUp}
                            className="text-3xl font-bold text-orange-400 mb-6"
                        >
                            Web Developer
                        </motion.h3>

                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                        >
                            <motion.div variants={fadeInUp}>
                                <ul className="space-y-4">
                                    {[
                                        { label: "Birthday", value: "13 February 2007" },
                                        { label: "Website", value: "www.example.com" },
                                        { label: "Phone", value: "None" },
                                        { label: "City", value: "Belarus, Minsk" }
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={fadeInUp}
                                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                                        >
                                            <span className="text-orange-400">•</span>
                                            <strong className="min-w-[100px]">{item.label}:</strong>
                                            <span>{item.value}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <ul className="space-y-4">
                                    {[
                                        { label: "Age", value: "17" },
                                        { label: "Degree", value: "Junior" },
                                        { label: "Email", value: "ivan.mikey1@gmail.com" },
                                        { label: "Freelance", value: "Closed" }
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={fadeInUp}
                                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                                        >
                                            <span className="text-orange-400">•</span>
                                            <strong className="min-w-[100px]">{item.label}:</strong>
                                            <span>{item.value}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm"
                        >
                            <p className="text-gray-300 leading-relaxed">
                                Hi, I'm Ivan - a web developer, creative enthusiast, and lover of creating unique online projects. 
                                My passion for coding is combined with a design eye, which allows me to translate ideas into elegant 
                                and functional websites. Welcome to the world of my creative and technical solutions!
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 flex gap-4"
                        >
                            <motion.a
                                href="/portfolio"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-300"
                            >
                                View Portfolio
                            </motion.a>
                            <motion.a
                                href="/contacts"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 border-2 border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-colors duration-300"
                            >
                                Contact Me
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutMe;