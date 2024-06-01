// Skills.js
import { faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const skillsData = [
  { icon: faHtml5, color: "#E44D26", size: "3x", label: "HTML5" },
  { icon: faCss3, color: "#1572B6", size: "3x", label: "CSS3" },
  { icon: faJs, color: "#F0DB4F", size: "3x", label: "JavaScript" },
  { icon: faReact, color: "#61DAFB", size: "3x", label: "React" },

];

const Skills = () => {
  return (
    <>
      <header className="p-1">
        <div className="flex align-center justify-center my-8">
          <h1 className="text-orange-400 font-bold text-2xl">SKILLS</h1>
        </div>
        <div className="my-8">
          <div className="flex items-center justify-center flex-wrap">
            {skillsData.map((skill, index) => (
              <SkillTag key={index} {...skill} />
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

const SkillTag = ({ icon, color, size, label }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center m-2">
      <FontAwesomeIcon icon={icon} color={color} size={size} />
      <span className="mt-2 text-sm" style={{ color }}>{label}</span>
    </div>
  );
};

export default Skills;