import React, { useState, useRef, useEffect } from "react";
import { Player } from "@lordicon/react";
import { useElementsColor } from "../functions/context";

//ALL IMPORTS FROM ICO JSON FILES
const iconHome = require("../../assets/home-system-regular-41.json");

//ALL STATES FOR EACH ICON

const iconStateMap = {
  HomeIcon: {
    clicked: "in-Home",
    hover1: "hover-home-1",
    hover2: "hover-home-2",
    morph1: "morph-home1",
    morph2: "morph-home2",
  },
};
const IconStyle = {
  border: "solid 3px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
};
const getIconType = (iconName) => {
  if (iconName === "HomeIcon") {
    return iconHome;
  }
};

const getIconState = (iconName, currentState) => {
  if (!iconStateMap[iconName]) throw new Error("Icon not found");
  if ((iconName = "HomeIcon")) {
    console.log("HomeIcon");
    const iconState = iconStateMap[iconName];
    return currentState === "enter" ? iconState.hover1 : null;
  }
  return null;
};

export const CustomIcon = ({
  colorIcon = "#3c3c3c",
  size = "250px",
  iconName,
  boxsize="50px",
}) => {
  const { outlineColor } = useElementsColor();
  const [state, setState] = useState(null);
  const playerRef = useRef(null);

  const playAnimation = () => {
    if (state !== null) {
      playerRef.current?.play();
    }
  };

  const iconStyle = {
    ...IconStyle,
    width: parseInt(boxsize) + 10 + "px",
    height: parseInt(boxsize) + 10 + "px",
    color: outlineColor,
  
  };

  const handleClicked = () => {
    setState(iconStateMap[iconName].clicked);
  };
  const handleHover = (type) => {
    setState(getIconState(iconName, type));
  };
  const icontype = getIconType(iconName);

  useEffect(() => {
    playAnimation();
  }, [state]);

  return (
    <div
      onClick={handleClicked}
      onMouseEnter={() => handleHover("enter")}
      onMouseLeave={() => handleHover("leave")}
      style={iconStyle}
    >
      <Player
        ref={playerRef}
        state={state}
        size={parseInt(size)+50}
        icon={icontype} // You can replace this with the appropriate icon based on iconName
        colorize={colorIcon}
        
      />
    </div>
  );
};


