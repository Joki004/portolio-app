import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useElements } from "../../utils/functions/context";

const Technologies = ({ Technologies }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Technologies.map((technology, idx) => (
        <p key={idx}>{technology}</p>
      ))}
    </div>
  );
};

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div>
        <Technologies Technologies={project.technologies} />
      </div>
      <div>
        {project.weblink !== " " ? <a>See </a> : null}
        <a>Github Link</a>
      </div>
    </div>
  );
};

const ProjectImages = (images) => {
  const { mainColor10Lighter } = useElements();
  const projectImagesStyles = {
    box: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      gap: "10px",
      height: "100%",
      width: "65%",
      padding: "10px",
    },
    carrousel: {
      width: "100%",
      height: "100%",

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
    },
    imageBox: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "3px solid",
      borderColor: mainColor10Lighter,
      borderRadius: "10px",
    },
  };
  const [autoplay, setAutoplay] = useState(true);
  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };
  const { images: imageArray } = images;

  return (
    <div style={{ ...projectImagesStyles.box }}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        autoPlay={autoplay}
        interval={5000}
        infiniteLoop
        stopOnHover
        style={{ border: "1px solid red" }}
      >
        {imageArray.map((imageUrl, index) => (
          <div key={index} style={{ ...projectImagesStyles.carrousel }}>
            <div style={{ ...projectImagesStyles.imageBox }}>
              <img
                src={imageUrl}
                alt={`Project  ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        ))}
      </Carousel>

      <button onClick={toggleAutoplay}>
        {autoplay ? "Pause" : "Play"} Autoplay
      </button>
    </div>
  );
};

const projectStyles = {
  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  smallScreenBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    margin: "10px",
  },
  bigScreen: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Projects = ({ projectsData }) => {
  const [autoplay, setAutoplay] = useState(true);
  const { windowWidth } = useElements();
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    if (windowWidth < 1000) {
      setIsScreenSmall(true);
    } else {
      setIsScreenSmall(false);
    }
  }, [windowWidth]);
  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  // Helper function to chunk the projects into groups of 3
  const chunkProjects = (projects, size) => {
    const chunkedProjects = [];
    for (let i = 0; i < projects.length; i += size) {
      chunkedProjects.push(projects.slice(i, i + size));
    }
    return chunkedProjects;
  };

  const chunkedProjects = chunkProjects(projectsData, 3); // Split projects into groups of 3
  const RenderBigScreen = ({ index, project }) => {
    if (index % 2 === 0) {
      return (
        <div style={{ ...projectStyles.bigScreen }}>
          <ProjectDetails project={project} />
          <div style={{ ...projectStyles.image }}>
            <ProjectImages images={project.images[0]} />
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ ...projectStyles.smallScreenBox }}>
          <div style={{ ...projectStyles.image }}>
            <ProjectImages images={project.images[0]} />
          </div>
          <ProjectDetails project={project} />
        </div>
      );
    }
  };
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        autoPlay={autoplay}
        interval={5000} // Change interval duration as needed
        infiniteLoop
        stopOnHover
      >
        {chunkedProjects.map((group, index) => (
          <div key={index}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {group.map((project, idx) => (
                <div key={idx} style={{ flex: 1, margin: "0 10px" }}>
                  {isScreenSmall ? (
                    <div style={{ ...projectStyles.smallScreenBox }}>
                      <ProjectDetails project={project} />
                      <div style={{ ...projectStyles.image }}>
                        <ProjectImages images={project.images[0]} />
                      </div>
                    </div>
                  ) : (
                    <RenderBigScreen index={idx} project={project} />
                  )}

                  {/* Add more project details as needed */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <button onClick={toggleAutoplay}>
        {autoplay ? "Pause" : "Play"} Autoplay
      </button>
    </div>
  );
};

export default Projects;
