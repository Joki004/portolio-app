import React, { useState } from "react";
import { useElements } from "../../utils/functions/context";
import {
  getFontsizeContent,
  getFontSizeHeader,
} from "../../utils/functions/function";
import { CustomIcon } from "../../utils/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import "./aboutMe.css";

const Experience = ({ timeline, title }) => {
  const { mainColor, windowWidth, mainColor10Lighter, mainColor20Lighter } =
    useElements();
  const [isCollapsed, setIsCollapsed] = useState(
    new Array(timeline.length).fill(false)
  );
  const [hoverStates, setHoverStates] = useState(
    new Array(timeline.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setHoverStates(hoverStates.map((state, i) => (i === index ? true : state)));
  };

  const handleMouseLeave = (index) => {
    setHoverStates(
      hoverStates.map((state, i) => (i === index ? false : state))
    );
  };

  const styles = {
    h1: {
      fontSize: getFontSizeHeader("h1"),
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: "50px",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      borderLeft: "3px solid ",
      padding: "20px",
      borderColor: mainColor,
      width: windowWidth > 1000 ? "100%" : "100%",
      position: "relative",
      
    },
    circle: {
      position: "absolute",
      top: windowWidth > 768 ? "23%" : "18%",
      left: "-10px", // Adjust as needed
      transform: "translateY(-50%)",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: mainColor, // Change color as needed
    },
    header: {
      display: "flex",
      flexDirection: windowWidth > 768 ? "row" : "column",
      justifyContent: "flex-start",
      width: "100%",
      gap: "20px",
      cursor: "pointer",
    },
    date: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "10em",
      color: "white",
      borderRadius: "20px",
      height: "40px",
      whiteSpace: "nowrap",
      fontSize: getFontsizeContent("body2"),
      backgroundColor: mainColor10Lighter,
    },
    organization: {
      fontSize: getFontsizeContent("body1"),
      fontWeight: "bold",
      whiteSpace: "nowrap",
    },
    infos: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    position: {
      fontSize: getFontsizeContent("body2"),
      fontStyle: "oblique",
      whiteSpace: windowWidth > 768 ? "nowrap" : "wrap",
    },
    description: {
      display: "flex",
      cursor: "pointer",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      height: "70px",
    },
    descriptionText: {
      fontSize: getFontsizeContent("body1"),
      display: "flex",

      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "10px",
      height: "70px",
    },
    readMoreButton: {
      cursor: "pointer",
      fontSize: getFontsizeContent("body1"), // Adjust this to make it larger if necessary
      fontWeight: "bold", // Make the text bold
      color: mainColor, // Use the main color for better visibility
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px", // Add some space between text and icon
      padding: "10px 20px", // Add some padding for better clickability

      backgroundColor: "transparent", // Default background
      textDecoration: "none", // No underline by default
      transition: "all 0.3s ease",
    },
  };
  const updateCollapsed = (index) => {
    const updatedIsCollapsed = [...isCollapsed];
    updatedIsCollapsed[index] = !updatedIsCollapsed[index];
    setIsCollapsed(updatedIsCollapsed);
  };

  const getDescriptionAnimation = (index) => {
    return {
      animate: isCollapsed[index] ? "open" : "closed",
      variants: {
        open: {
          height: "auto",
          border: "1px solid",
          padding: "10px",
          borderRadius: "8px",
        },
        closed: { height: "0px" },
      },
      transition: { duration: 0.5 },
      style: {
        overflow: "hidden",
        width: "100%",
      },
    };
  };

  return (
    <AnimatePresence>
      <div style={{ width: "100%" }}>
        <h1 style={{ ...styles.h1 }}>{title}</h1>
        {timeline.map((data, index) => (
          <div key={index} style={{ ...styles.body }}>
            <div
              style={{ ...styles.header }}
              onClick={() => {
                updateCollapsed(index);
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div style={styles.circle}></div>
              <div
                style={{
                  ...styles.date,
                  backgroundColor: hoverStates[index]
                    ? mainColor
                    : mainColor20Lighter,
                }}
              >
                {data.date}
              </div>
              <div style={{ ...styles.infos }}>
                <div style={{ ...styles.organization }}>
                  {data.organization}
                </div>
                <div style={{ ...styles.position }}>{data.position}</div>
              </div>
            </div>
            <div>
              {data.description && (
                <div style={{ width: windowWidth > 1000 ? "50%" : "90%" }}>
                  <div
                    style={{ ...styles.description }}
                    onClick={() => {
                      updateCollapsed(index);
                    }}
                  >
                    <p
                      style={{
                        ...styles.readMoreButton,
                        fontSize: hoverStates[index]
                          ? getFontsizeContent("body1")
                          : getFontsizeContent("body2"),
                        textDecoration: hoverStates[index]
                          ? "underline"
                          : "none",
                      }}
                    >
                      Read more
                    </p>
                    <span style={{ ...styles.descriptionText }}>
                      <CustomIcon
                        iconName={
                          isCollapsed[index] ? "arrowUpIcon" : "arrowDownIcon"
                        }
                        boxsize="30px" // Adjust icon size as necessary
                        colorIcon={mainColor}
                      />
                    </span>
                  </div>
                  <motion.div {...getDescriptionAnimation(index)}>
                    {data.description}
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default Experience;
