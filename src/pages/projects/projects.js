import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useElements } from "../../utils/functions/context";
import ProjectImages from "./projectImages";
import ProjectDetails from "./projectDetails";
import { CustomIcon, customIcon } from "../../utils/components/icons";

const Projects = ({ projectsData }) => {
  const { windowWidth, mainColor10Lighter } = useElements();
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    setIsScreenSmall(windowWidth < 1000);
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
        <div style={{ flex: 1 }}>
          <ProjectDetails project={project} color={mainColor10Lighter} />
        </div>
        <div style={{ flex: 1 }}>
          <ProjectImages images={project.images[0]} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={true}
        showArrows={true}
        showIndicators={false}
        autoPlay={autoplay}
        interval={8000}
        infiniteLoop
        stopOnHover
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
                    <div>
                      <ProjectDetails
                        project={project}
                        color={mainColor10Lighter}
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
