import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (progress < 100) {
                setProgress(prev => Math.min(prev + 2, 100));
            } else {
                navigate('/home');
            }
        }, 30);

        return () => clearTimeout(timer);
    }, [progress, navigate]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <motion.h1
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-orange-400 mb-8"
                >
                    Portfolio
                </motion.h1>
                
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                        className="h-full bg-orange-400"
                    />
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-gray-400"
                >
                    Loading... {progress}%
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 text-gray-500 text-sm"
            >
                © {new Date().getFullYear()} Ivan Voitekhovich
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen; 