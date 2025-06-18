
// import React, { useRef, useEffect, useState } from 'react';
// import '../styles/Horizontalscroll.css';

// import Home from '../pages/Home';
// import About from '../pages/About';
// import Skills from '../pages/Skills';
// import Projects from '../pages/Projects';
// import Contact from '../pages/Contact';

// const pages = [Home, About, Skills, Projects, Contact];

// const HorizontalScroll = () => {
//   const scrollRef = useRef();

//   const onWheel = (e) => {
//     if (!scrollRef.current || e.deltaY === 0) return;
//     e.preventDefault();
//      container.scrollLeft += e.deltaY * 0.5;
    // scrollRef.current.scrollBy({
    //   right: e.deltaY,
    //   behavior: 'smooth',
    // });
//   };

//   useEffect(() => {
//     const ref = scrollRef.current;
//     if (ref) {
//       ref.addEventListener('wheel', onWheel, { passive: false });
//     }
//     return () => {
//       if (ref) {
//         ref.removeEventListener('wheel', onWheel);
//       }
//     };
//   }, []);
//   return (
//     <div className="scroll-wrapper">
//       <div className="scroll-container" ref={scrollRef}>
//         {pages.map((PageComponent, index) => (
//           <div className="section" key={index}>
//             <PageComponent />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HorizontalScroll;

import React, { useRef, useEffect } from 'react';
import '../styles/Horizontalscroll.css'; // Make sure the path is correct

const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const HorizontalScroll = () => {
  const scrollRef = useRef();

  const onWheel = (e) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('wheel', onWheel, { passive: false });
    }
    return () => {
      if (ref) {
        ref.removeEventListener('wheel', onWheel);
      }
    };
  }, []);

  return (
    <div className="scroll-wrapper">
      <div className="scroll-container" ref={scrollRef}>
        {sections.map((label, index) => (
          <div className="section" key={index}>
            <h1>{label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
