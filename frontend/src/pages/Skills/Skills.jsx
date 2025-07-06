import React, { useEffect, useState } from 'react';
import './Skills.css';
import {
  FaJava, FaReact, FaFigma, FaHtml5, FaCss3Alt,
  FaJs, FaGithub, FaCode
} from 'react-icons/fa';
import { SiC, SiMysql } from 'react-icons/si';

const skills = [
  { icon: <FaJava />, name: 'Java' },
  { icon: <SiC />, name: 'C' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaFigma />, name: 'Figma' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaCode />, name: 'VS Code' },
  { icon: <FaGithub />, name: 'GitHub' },
];

// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <h2 className="skills-header">Skills</h2>
//       <div className="orbit-container">
//         <div className="orbit">
//           {skills.map((skill, index) => (
//             <div className="orbit-item" key={index} title={skill.name}>
//               {skill.icon}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const Skills = () => {
  
  return (

      <div className="skills-container">

        <h2 className="skills-header">Skills</h2>

        <div className="skills-content">

          <div className="circle-wrapper">
            <div className="orbit-outer">
              <div className="orbit-inner"></div>
              {skills.map((skill, index) => {
                const angle = (360 / skills.length) * index;
                return (
                  <div
                    key={index}
                    className="orbit-icon"
                    style={{
                      transform: `rotate(${angle}deg) translate(180px) rotate(-${angle}deg)`
                    }}
                    title={skill.name}
                  >
                    <div className="icon-inner">{skill.icon}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

  );
};

export default Skills;
