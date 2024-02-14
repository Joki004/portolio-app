import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useElements } from "../../utils/functions/context";
import ProjectImages from "./projectImages";
import ProjectDetails from "./projectDetails";
import { CustomIcon } from "../../utils/components/icons";

const Projects = ({ projectsData }) => {
  const { windowWidth, mainColor10Lighter, darkMode } = useElements();
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(windowWidth < 768);

  useEffect(() => {
    setIsScreenSmall(windowWidth < 1000);
    setIsMobile(windowWidth < 768);
   
  }, [windowWidth]);

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  const chunkProjects = (projects, size) => {
    const chunkedProjects = [];
    for (let i = 0; i < projects.length; i += size) {
      chunkedProjects.push(projects.slice(i, i + size));
    }
    return chunkedProjects;
  };

  const chunkedProjects = chunkProjects(projectsData, 3);

  const RenderBigScreen = ({ index, project }) => {
    const isEvenIndex = index % 2 === 0;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: isEvenIndex ? "row" : "row-reverse",
        }}
      >
        <div
          style={{
            width: "60%",
          }}
        >
          <ProjectDetails
            project={project}
            color={mainColor10Lighter}
            isEvenIndex={isEvenIndex}
          />
        </div>
        <div style={{ width: "40%" }}>
          <ProjectImages images={project.images[0]} />
        </div>
      </div>
    );
  };

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
        maxWidth: isMobile ? "100%" : "80%",
        margin: "0 auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",

        gap: "10px",
      }}
    >
      <button
        onClick={toggleAutoplay}
        style={{
          borderRadius: "8px",
          padding: "5px",
          border: "2px solid #ccc",
          cursor: "pointer",
        }}
      >
        {autoplay
          ? `you can pause the carousel by clicking here.`
          : `you can play the carousel by clicking here.`}
      </button>
      <Carousel
        className="main-carousel carousel-slider"
        showThumbs={false}
        showStatus={true}
        showArrows={true}
        showIndicators={false}
        autoPlay={autoplay}
        interval={8000}
        infiniteLoop
        stopOnHover
        swipeable={isMobile}
        swipeScrollTolerance={5}
        width={"100%"}
      >
        {chunkedProjects.map((group, groupIndex) => (
          <div key={groupIndex}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              {group.map((project, projectIndex) => (
                <div key={projectIndex} style={{ margin: "0 10px" }}>
                  {isScreenSmall ? (
                    <div style={{maxWidth:'100%'}}>
                      <ProjectDetails
                        project={project}
                        color={mainColor10Lighter}
                        isEvenIndex={false}
                      />
                      <ProjectImages images={project.images[0]} />
                    </div>
                  ) : (
                    <RenderBigScreen index={projectIndex} project={project} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={toggleAutoplay}
          style={{
            borderRadius: "50%",
            padding: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {autoplay ? (
            <CustomIcon iconName="pauseIcon" size="50px" />
          ) : (
            <CustomIcon iconName="playIcon" boxsize="50px" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Projects;
