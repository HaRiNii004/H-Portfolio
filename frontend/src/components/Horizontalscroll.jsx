import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/Horizontalscroll.css";

const HorizontalScroll = ({ pages }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(pages.length - 1) * 100}vw`]
  );

  return (
    <div
      ref={containerRef}
      className="container"
      style={{ height: `${pages.length * 100}vh` }}
    >
      <motion.div className="horizontal-container" style={{ x }}>
        {pages.map((page, index) => (
          <div
            className="page"
            id={page.id}
            key={index}
            style={{
              backgroundColor: page.color,
              width: "100vw",
              height: "100vh",
              flexShrink: 0,
            }}
          >
            {page.content}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalScroll;
