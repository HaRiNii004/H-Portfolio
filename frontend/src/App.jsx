import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HorizontalScroll from './components/Horizontalscroll';
import TopBar from './components/topbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import CircularMenu from './components/circularmenu';

function App() {
  const pages = [
    { id: "home", content: <Home />, color: "#ffffff" },
    { id: "about", content: <About />, color: "#FFD93D" },
    { id: "projects", content: <Projects />, color: "#6BCB77" },
    { id: "skills", content: <Skills />, color: "#4D96FF" },
    { id: "contact", content: <Contact />, color: "#9D4EDD" }
  ];

  // Scroll to the vertical position that triggers horizontal slide
  const handleSetActivePage = (pageIndex) => {
    const vh = window.innerHeight;
    window.scrollTo({
      top: pageIndex * vh,
      behavior: 'smooth'
    });
  };

  return (
   <Router>
      <TopBar setActivePage={handleSetActivePage} />
      <HorizontalScroll pages={pages} />
      <CircularMenu />

      <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
    
  );
}

export default App;
