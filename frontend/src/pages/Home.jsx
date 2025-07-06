import React, { useEffect, useState } from 'react';
import profileImg from '../assets/profile.png';
import '../styles/Videobackground.css';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home-container">

        <div className='note'>
          <motion.p className="para-text" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }} >Engineering undergraduate student interseted in web development and problem solving</motion.p>
        </div>


        <div className="intro-section">
          <motion.div className="half-circle"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }} />

          <motion.img src={profileImg} alt="Profile" className="profile-image" initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: false }} />

          <motion.h5 className="welcome-heading" initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: false }}
            delay="100">Heyy !! Welcome to my portfolio</motion.h5>

          <motion.h6
            className="name-heading"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: false }}>
            Hii, I'm Harini Selvaraj
          </motion.h6>

          <motion.a
            href="/hariniresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            viewport={{ once: false }}>
            View CV
          </motion.a>
        </div>
        <div style={{ backgroundColor: "green", flex: "1" }}>
        </div>
      </div>
    </>

  );
};

export default Home;

