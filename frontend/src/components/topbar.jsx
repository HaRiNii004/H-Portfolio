// import React from "react";
// import "../styles/topbar.css";

// const TopBar = ({ setActivePage }) => {
//   return (
//     <div className="topbar">
//       <button className="menu-item" onClick={() => setActivePage(0)}>Home</button>
//       <button className="menu-item" onClick={() => setActivePage(1)}>About</button>
//       <button className="menu-item" onClick={() => setActivePage(2)}>Projects</button>
//       <button className="menu-item" onClick={() => setActivePage(3)}>Skills</button>
//       <button className="menu-item" onClick={() => setActivePage(4)}>Contact</button>
//     </div>
//   );
// };

// export default TopBar;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/topbar.css";

// const TopBar = () => {
//   return (
//     <div className="topbar">
//       <Link to="/" className="menu-item">Home</Link>
//       <Link to="/about" className="menu-item">About</Link>
//       <Link to="/projects" className="menu-item">Projects</Link>
//       <Link to="/skills" className="menu-item">Skills</Link>
//       <Link to="/contact" className="menu-item">Contact</Link>
//     </div>
//   );
// };

const TopBar = () => {
  return (
    <div className="topbar">
      <a className="menu-item" href="#home">Home</a>
      <a className="menu-item" href="#about">About</a>
      <a className="menu-item" href="#projects">Projects</a>
      <a className="menu-item" href="#skills">Skills</a>
      <a className="menu-item" href="#contact">Contact</a>
    </div>
  );
};


export default TopBar;
