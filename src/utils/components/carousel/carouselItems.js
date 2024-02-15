import React, { useEffect } from "react";
import "../carousel/myCarousel.css";
import { motion } from "framer-motion";
import { useElements } from "../../functions/context";
import ProjectDetails from "../../../pages/projects/projectDetails";
import ProjectImages from "../../../pages/projects/projectImages";
export const CarouselItem = ({ item, index, activeIndex, width, click }) => {
  const { windowWidth, mainColor10Lighter,darkMode } = useElements();
  const isEvenIndex = index % 2 === 0;
  const isActive = activeIndex === index;
  useEffect(() => {}, [activeIndex, click]);
  const variants = {
    hidden: {
      x: click === "left" ? windowWidth : -windowWidth,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  function determineDirection() {
    if (windowWidth < 950) {
      return "column";
    } else {
      return isEvenIndex ? "row" : "row-reverse";
    }
  }
  return (
    <motion.div
      className="myCarousel-item"
      style={{
        display: isActive ? "flex" : "none",
        flexDirection: determineDirection(),
        width: width,
        backgroundColor: darkMode ? "var( --dark-theme-surface)" : "var(--light-theme-hover)",
      }}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      exit="hidden"
      variants={variants}
    >
      <div></div>
      <div className="myCarousel-item-text"
      style={{
        width: windowWidth < 950 ? "100%" : "50%",
      }}
      >
        
        <ProjectDetails
          project={item}
          color={mainColor10Lighter}
          isEvenIndex={isEvenIndex}
        />
      </div>
      <div className="myCarousel-img" 
      
      style={{
        width: windowWidth < 950 ? "100%" : "50%",
      }}>
    
        <ProjectImages images={item.images[0]} />
      </div>
    </motion.div>
  );
};
