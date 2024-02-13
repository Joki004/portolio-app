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
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = true;
    setHoverStates(updatedHoverStates);
  };
  const handleMouseLeave = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = false;
    setHoverStates(updatedHoverStates);
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
      top: "23%",
      left: "-10px", // Adjust as needed
      transform: "translateY(-50%)",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: mainColor, // Change color as needed
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      width: "100%",
      gap: "20px",
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
      whiteSpace: "nowrap",
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
      <div>
        <h1 style={{ ...styles.h1 }}>{title}</h1>
        {timeline.map((data, index) => (
          <div key={index} style={{ ...styles.body }}>
            <div
              style={{ ...styles.header }}
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
                    <p style={{ ...styles.descriptionText }}>Read more</p>
                    <span style={{ ...styles.descriptionText }}>
                      {!isCollapsed[index] ? (
                        <CustomIcon
                          iconName="arrowDownIcon"
                          boxsize="50px"
                          colorIcon={mainColor20Lighter}
                        />
                      ) : (
                        <CustomIcon
                          iconName="arrowUpIcon"
                          boxsize="50px"
                          colorIcon={mainColor20Lighter}
                        />
                      )}
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
