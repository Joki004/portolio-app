import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  getElementByIdHeightPosition,
  DetermineTitleSectionColor,
  DetermineTitleWidth,
  getFontsizeTitle
} from "../functions/function";
import { useElements } from "../functions/context";

const Section = ({ title, id, content }) => {
  const controls = useAnimation();
  const { darkMode, mainColor, activeTitle, backgroundColorBody } = useElements();
  
  // Using useRef for values that don't directly trigger re-renders
  const topPositionRef = useRef(0);
  const bottomPositionRef = useRef(0);
  const sectionRef = useRef(null);
  
  const [elementWidth, setElementWidth] = useState(0);
  const [shouldFill, setShouldFill] = useState(false);
  const [textColor, setTextColor] = useState(''); // Initialized empty, will be set inside useEffect
  
  // Separate useEffect for ResizeObserver to adjust elementWidth
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        setElementWidth(newWidth);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []); // Empty dependency array means this runs once on mount

  // useEffect for handling shouldFill and animations
  useEffect(() => {
    // Set shouldFill based on activeTitle
    setShouldFill(id === activeTitle);
    
    // Update text color based on shouldFill state
    setTextColor(DetermineTitleSectionColor(darkMode, shouldFill, backgroundColorBody));

    const widthStyle = DetermineTitleWidth(shouldFill, elementWidth);

    // Start animation
    controls.start({
      x: shouldFill ? 0 : -10,
      width: widthStyle,
      backgroundColor: shouldFill ? mainColor : "rgba(255, 255, 255, 0)",
      transition: { duration: shouldFill ? 0.5 : 0.3 },
    });
  }, [shouldFill, elementWidth, id, mainColor, controls, activeTitle, darkMode, backgroundColorBody]);

  // Update positions without triggering re-renders
  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      const { top, bottom } = getElementByIdHeightPosition(id);
      topPositionRef.current = top;
      bottomPositionRef.current = bottom;
    }
  }, [id]); // This effect depends on id, which shouldn't change often

  const SectionStyle = {
    title: {
      height: "100px",
      marginTop: "50px",
      marginBottom: "40px",
      border: "1px solid",
      borderColor: mainColor,
      backgroundColor: "white",
      borderRadius: "0px 8px 8px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: getFontsizeTitle('t3'),
      textAlign: "center",
      fontWeight: "bold",
      color: textColor,
    },
    content: {
      padding: "10px",
    },
  };

  return (
    <div id={id} ref={sectionRef}>
      <motion.div animate={controls} style={SectionStyle.title}>
        {title}
      </motion.div>
      <motion.div style={SectionStyle.content}>
        {content}
      </motion.div>
    </div>
  );
};

export default Section;
