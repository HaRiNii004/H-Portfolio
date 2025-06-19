// import React, { useState } from "react";
// import "./Circularmenu.css"; // your CSS
// import "font-awesome/css/font-awesome.min.css"; // ensure Font Awesome is imported

// const CircularMenu = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div id="circularMenu" className={`circular-menu ${isActive ? "active" : ""}`}>
//       <button className="floating-btn" onClick={toggleMenu}>
//         <i className="fa fa-plus" />
//       </button>

//       <menu className="items-wrapper">
//         <div className="menu-item">
//           <i className="fa fa-facebook" />
//         </div>
//         <div className="menu-item">
//           <i className="fa fa-twitter" />
//         </div>
//         <div className="menu-item">
//           <i className="fa fa-google-plus" />
//         </div>
//         <div className="menu-item">
//           <i className="fa fa-linkedin" />
//         </div>
//       </menu>
//     </div>
//   );
// };

// export default CircularMenu;
// import React, { useState } from "react";
// import "font-awesome/css/font-awesome.min.css";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import "./Circularmenu.css";

// const CircularMenu = () => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className={`circular-menu ${isActive ? "active" : ""}`}>
//       <button className="floating-btn" onClick={() => setIsActive(!isActive)}>
//         <i className="fa fa-plus" />
//       </button>

//       <div className="items-wrapper">
//         <a href="#" className="menu-item"><i className="fa fa-facebook" /></a>
//         <a href="#" className="menu-item"><i className="fa fa-twitter" /></a>
//         <a href="#" className="menu-item"><i className="fa fa-google-plus" /></a>
//         <a href="#" className="menu-item"><i className="fa fa-linkedin" /></a>
//       </div>
//     </div>
//   );
// };

// export default CircularMenu;

import React, { useState } from "react";
import mail from "../../assets/mail.png";
import leetcode from '../../assets/leetcode.png'
import github from '../../assets/github.png'
import linkedin from "../../assets/Linkedin.png";
import AddIcon from "@mui/icons-material/Add"; // For the plus icon
import ButtonMailto from "./mailto";

import "../styles/circularmenu.css";

const CircularMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`circular-menu ${isActive ? "active" : ""}`}>
      <button className="floating-btn" onClick={() => setIsActive(!isActive)}>
        <AddIcon style={{ fontSize: "1.3em", transition: "transform 0.2s", transform: isActive ? "rotate(-45deg)" : "rotate(0deg)" }} />
      </button>

      <div className="items-wrapper">
        <a href="mailto:harinis.ec22@bitsathy.ac.in" className="menu-item" aria-label="Write me an E-Mail">
          <img
            src={mail}
            alt="Mail Icon"
            style={{
              position: "relative",
              top: "4px",
              height: "40px",
              width: "40px",
              borderRadius: "80%"
            }}
          />
        </a>


        <a href="https://github.com/HaRiNii004" className="menu-item">
          <img src={github} alt="" style={{ position: "relative", top: "4px", height: "40px", width: "40px", borderRadius: "80%" }}></img>
        </a>
        <a href="https://leetcode.com/u/HaRiNii004/" className="menu-item">
          <img src={leetcode} alt="" style={{ position: "relative", top: "4px", height: "40px", width: "40px", borderRadius: "80%" }}></img>
        </a>
        <a href="https://www.linkedin.com/in/harini-selvaraj-69b849267/" className="menu-item">
          <img src={linkedin} alt="" style={{ position: "relative", top: "4px", height: "40px", width: "40px", borderRadius: "50%" }}></img>
        </a>
      </div>
    </div>
  );
};

export default CircularMenu;

