import React, { useRef , useEffect } from "react";
import { motion, useScroll, useTransform , useAnimation } from "framer-motion";
import "../styles/Horizontalscroll.css";

const HorizontalScroll = ({ pages, activePage}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(pages.length - 1) * 100}vw`]);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: `-${activePage * 100}vw`,
      transition: { duration: 0.5 }
    });
  }, [activePage, controls]);

  return (
    <div ref={containerRef} className="container" style={{ height: `${pages.length * 100}vh` }}>
      <motion.div className="horizontal-container" style={{ x }}>
        {pages.map((page, index) => (
          <div className="page" id={page.id} key={index} style={{ backgroundColor: page.color }}>
            {page.content}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ✅ Correct export
export default HorizontalScroll;

