import React, { useEffect, useState } from 'react';
import profileImg from '../assets/profile.png';
import '../styles/Videobackground.css';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (location.pathname === '/home') {
      setAnimate(false);
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="home-container">

        <div className='note'>
          <p className="para-text">Engineering undergraduate student interseted in web development and problem solving</p>
        </div>


        <div className="intro-section">
          <div className={`half-circle ${animate ? 'slide-up' : ''}`} />
          <img src={profileImg} alt="Profile" className="profile-image" />
          <h5 className="welcome-heading">Heyy !! Welcome to my portfolio</h5>
          <h6 className="name-heading">Hii, I'm Harini Selvaraj</h6>
          <a href="/hariniresume.pdf" target="_blank" rel="noopener noreferrer" className="cv-box">
            View CV
          </a>
        </div>
        <div style={{ backgroundColor: "green", flex: "1" }}>
        </div>





      </div>
    </>

  );
};

export default Home;

