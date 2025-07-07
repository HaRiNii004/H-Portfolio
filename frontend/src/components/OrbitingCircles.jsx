// OrbitingCircles.jsx
import React from "react";
import { motion } from "framer-motion";

// Sample skill arrays
const skillsOrbit1 = [
  { name: "JavaScript", image: "/github.png" },
  { name: "React", image: "/github.png" },
  { name: "TypeScript", image: "/github.png" },
];

const skillsOrbit2 = [
  { name: "MongoDB", image: "/github.png" },
  { name: "Prisma", image: "/github.png" },
  { name: "Framer Motion", image: "/github.png" },
  { name: "TailwindCSS", image: "/github.png" },
];

const skillsOrbit3 = [
  { name: "Next.js", image: "/github.png" },
  { name: "ShadCN UI", image: "/github.png" },
  { name: "Google Docs", image: "/github.png" },
];

const Orbit = ({ skills, size, duration, reverse }) => {
  return (
    <motion.div
      className="absolute rounded-full border-2 border-dashed border-white/30"
      style={{ width: size, height: size }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
    >
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          className="absolute w-12 h-12"
          style={{
            // top: "50%",
            left: "50%",
            transform: `rotate(${(i / skills.length) * 360}deg) translate(-50%, -50%) translateX(${parseInt(
              size
            ) / 2}px)`,
            transformOrigin: "0 0",
          }}
        >
          <img
            src={skill.image}
            alt={skill.name}
            className="w-full h-full rounded-full object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const OrbitingCircles = () => {
  return (
    <div className="relative w-[500px] h-[500px] mx-auto my-20">
      {/* Central Skill */}
      <motion.div className="absolute w-24 h-24 rounded-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md">
        <img
          src="/nextjs.png"
          alt="Next.js"
          className="rounded-full w-[90px] h-[90px]"
        />
      </motion.div>

      {/* Orbits */}
      <Orbit skills={skillsOrbit1} size="200px" duration={30} reverse={false} />
      <Orbit skills={skillsOrbit2} size="300px" duration={45} reverse={true} />
      <Orbit skills={skillsOrbit3} size="400px" duration={60} reverse={false} />
    </div>
  );
};

export default OrbitingCircles;
