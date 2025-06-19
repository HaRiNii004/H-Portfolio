import React from "react";
import "../styles/topbar.css";

const TopBar = ({ setActivePage }) => {
  return (
    <div className="topbar">
      <button className="menu-item" onClick={() => setActivePage(0)}>Home</button>
      <button className="menu-item" onClick={() => setActivePage(1)}>About</button>
      <button className="menu-item" onClick={() => setActivePage(2)}>Projects</button>
      <button className="menu-item" onClick={() => setActivePage(3)}>Skills</button>
      <button className="menu-item" onClick={() => setActivePage(4)}>Contact</button>
    </div>
  );
};

export default TopBar;
