import React, { useState } from "react";
import mail from "../assets/mail.png";
import leetcode from "../assets/leetcode.png";
import github from "../assets/github.png";
import linkedin from "../assets/Linkedin.png";
import AddIcon from "@mui/icons-material/Add";
import "../styles/circularmenu.css";

const CircularMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`circular-menu ${isActive ? "active" : ""}`}>
      <button className="floating-btn" onClick={() => setIsActive(!isActive)}>
        <AddIcon
          style={{
            fontSize: "1.3em",
            transition: "transform 0.2s",
            transform: isActive ? "rotate(-45deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div className="items-wrapper">
        <a
          href="mailto:harinis.ec22@bitsathy.ac.in"
          className="menu-item"
          aria-label="Email"
        >
          <img
            src={mail}
            alt="Mail Icon"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              position: "relative",
              top: "5px",
              right: "-3px",
            }}
          />
        </a>

        <a href="https://github.com/HaRiNii004" className="menu-item">
          <img
            src={github}
            alt="GitHub"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              position: "relative",
              top: "5px",
              right: "-3px"
            }}
          />
        </a>

        <a href="https://leetcode.com/u/HaRiNii004/" className="menu-item">
          <img
            src={leetcode}
            alt="LeetCode"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              position: "relative",
              top: "5px",
              right: "-3px"
            }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/harini-selvaraj-69b849267/"
          className="menu-item"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              position: "relative",
              top: "5px",
              right: "-3px"
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default CircularMenu;
