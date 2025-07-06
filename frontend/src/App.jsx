import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HorizontalScroll from './components/Horizontalscroll';
import TopBar from './components/topbar';
import Home from './pages/Home';
import About from './pages/About/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact';
import CircularMenu from './components/circularmenu';

function App() {
  const pages = [
    { id: "home", content: <Home />, color: "#ffffff" },
    { id: "about", content: <About />, color: "#FFD93D" },
    { id: "projects", content: <Projects />, color: "#6BCB77" },
    { id: "skills", content: <Skills />, color: "#ffffff" },
    { id: "contact", content: <Contact />, color: "#9D4EDD" }
  ];

  // Scroll to the vertical position that triggers horizontal slide
  // const handleSetActivePage = (pageIndex) => {
  //   const vh = window.innerHeight;
  //   window.scrollTo({
  //     top: pageIndex * vh,
  //     behavior: 'smooth'
  //   });
  // };

  return (
    <Router>
      {/* <TopBar setActivePage={handleSetActivePage} /> */}
      <TopBar />
      <HorizontalScroll pages={pages} />
      <CircularMenu />
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

      </Routes> */}
    </Router>

  );
}

export default App;
