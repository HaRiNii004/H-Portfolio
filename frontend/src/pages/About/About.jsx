// import React, { useEffect, useState } from "react";
// import './About.css';
// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {

//   return (
//     <div className="about-section">
//       <h2 className="about-title" data-aos="fade-up" data-aos-duration="700" data-aos-delay="5">ABOUT</h2>
//       <div className="about-box">
//         <p>
//           Hello! I'm a web developer with a good grasp of JavaScript and hands-on experience in
//           popular frameworks like Node.js, React, and Express.
        
//           My technical skills are complemented by a keen eye for design, thanks to my proficiency
//           in creativity, which allows me to craft intuitive and visually appealing user interfaces.
        
//           As a good learner, I am always eager to embrace new challenges and technologies. I am
//           always on the lookout for opportunities to expand my knowledge and stay updated with the
//           latest industry trends.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useEffect } from "react";
import './About.css';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,   // global default duration
      once: false,      // animate only once per page load
    });
    AOS.refresh(); // Important: refresh after initialization
  }, []);

  return (
    <div className="about-section">
      <h2
        className="about-title"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="100"
      >
        ABOUT
      </h2>

      <div
        className="about-box"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <p>
          Hello! I'm a web developer with a good grasp of JavaScript and hands-on experience in
          popular frameworks like Node.js, React, and Express.
          My technical skills are complemented by a keen eye for design, thanks to my proficiency
          in creativity, which allows me to craft intuitive and visually appealing user interfaces.
          As a good learner, I am always eager to embrace new challenges and technologies. I am
          always on the lookout for opportunities to expand my knowledge and stay updated with the
          latest industry trends.
        </p>
      </div>
    </div>
  );
};

export default About;
