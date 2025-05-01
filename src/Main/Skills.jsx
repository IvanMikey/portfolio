// Skills.js
import { faCss3, faDocker, faGitAlt, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';

const skillsData = [
  { 
    icon: faHtml5, 
    color: "#E44D26", 
    size: "3x", 
    label: "HTML5",
    level: 90,
    description: "Semantic markup, accessibility, responsive design"
  },
  { 
    icon: faCss3, 
    color: "#1572B6", 
    size: "3x", 
    label: "CSS3",
    level: 85,
    description: "Flexbox, Grid, Animations, Responsive design"
  },
  { 
    icon: faJs, 
    color: "#F0DB4F", 
    size: "3x", 
    label: "JavaScript",
    level: 80,
    description: "ES6+, DOM manipulation, Async programming"
  },
  { 
    icon: faReact, 
    color: "#61DAFB", 
    size: "3x", 
    label: "React",
    level: 85,
    description: "Hooks, Context, Redux, Component architecture"
  },
  { 
    icon: faNode, 
    color: "#339933", 
    size: "3x", 
    label: "Node.js",
    level: 75,
    description: "Express, REST APIs, Authentication"
  },
  { 
    icon: faGitAlt, 
    color: "#F05032", 
    size: "3x", 
    label: "Git",
    level: 80,
    description: "Version control, Collaboration, CI/CD"
  },
  { 
    icon: faDocker, 
    color: "#2496ED", 
    size: "3x", 
    label: "Docker",
    level: 70,
    description: "Containerization, Docker Compose, Deployment"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="p-1 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-6"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const SkillCard = ({ icon, color, size, label, level, description }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-700/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-700/70 transition-colors duration-300"
    >
      <div className="flex items-center space-x-4 mb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <FontAwesomeIcon icon={icon} color={color} size={size} />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-white">{label}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-400 bg-orange-400/10">
              {level}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;