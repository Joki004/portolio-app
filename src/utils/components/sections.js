import React, { useEffect, useState, useRef } from "react";

import { motion, useAnimation } from "framer-motion";
import {
  getElementByIdHeightPosition,
  DetermineTitleSectionColor,
  DetermineTitleWidth,
} from "../functions/function";
import { useElements } from "../functions/context";

const Section = ({ title, id, content }) => {
  const [TopPostion, setTopPosition] = useState(0);
  const [BottomPostion, setBottomPosition] = useState(0);
  const [shouldFill, setShouldFill] = useState(false);
  const controls = useAnimation();
  const { darKMode, mainColor, activeTitle } = useElements();

  const sectionRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);

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
    const updateElementWidth = () => {
      if (sectionRef.current) {
        setElementWidth(sectionRef.current.offsetWidth);
      }
    };
    updateElementWidth();
    const element = document.getElementById(id);
    if (element) {
      const { top, bottom } = getElementByIdHeightPosition(id);
      setBottomPosition(bottom);
      setTopPosition(top);
    }
    if (id === activeTitle) {
      setShouldFill(true);
    } else setShouldFill(false);
    const widthStyle = DetermineTitleWidth(shouldFill, elementWidth);

    controls.start({
      x: shouldFill ? 0 : -10,
      width: widthStyle,
      backgroundColor: shouldFill ? mainColor : "rgba(255, 255, 255, 0)",
      transition: { duration: shouldFill ? 1 : 0.3 },
    });

    return () => {
      observer.disconnect();
    };
  }, [
    TopPostion,
    BottomPostion,
    
    shouldFill,
    elementWidth,
    id,
    mainColor,
    controls,
    activeTitle,
  ]);

  const SectionStyle = {
    title: {
      height: "60px",
      marginTop: "50px",
      marginBottom: "20px",
      border: "1px solid",
      borderColor: mainColor,
      backgroundColor: "white",
      borderRadius: "0px 8px 8px 00px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      color: DetermineTitleSectionColor(darKMode, shouldFill),
      transition: "all",
    },
    content: {
      padding: "10px",
    },
  };
  return (
    <div id={id} ref={sectionRef}>
      <motion.div
        animate={controls}
        style={{
          ...SectionStyle.title,
        }}
      >
        {<p>{shouldFill}</p>}
        {title}
      </motion.div>
      <motion.div
        style={{
          ...SectionStyle.content,
        }}
      >
        {` ${TopPostion}`} {content}
      </motion.div>
    </div>
  );
};

export default Section;
