import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useElements } from "../../utils/functions/context";

import { MyCarousel } from "../../utils/components/carousel/carousel";

const Projects = ({ projectsData }) => {
  const { windowWidth, darkMode } = useElements();
  const [isMobile, setIsMobile] = useState(windowWidth < 768);

  useEffect(() => {
    setIsMobile(windowWidth < 768);
  }, [windowWidth]);

  useEffect(() => {
    const arrows = document.getElementsByClassName("control-arrow");

    for (let arrow of arrows) {
      arrow.style.background = "rgba(0, 0, 0, 0.5)";
      arrow.style.borderRadius = "8px";
    }
  }, [darkMode]);

  return (
    <div
      style={{
        maxWidth: isMobile ? "100%" : "100%",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <MyCarousel projectList={projectsData}></MyCarousel>
    </div>
  );
};

export default Projects;
