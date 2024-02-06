import React, { useState, useRef, useEffect, useCallback } from "react";
import { Player } from "@lordicon/react";
import { useElements } from "../functions/context";

//ALL IMPORTS FROM ICO JSON FILES
const iconHome = require("../../assets/home-system-solid-41.json");
const iconQrCode = require("../../assets/qr-code-wired-lineal-1335.json");
const iconAbout = require("../../assets/account-system-solid-8.json");
const iconEducation = require("../../assets/book-system-solid-19.json");
const iconWork = require("../../assets/work-system-solid-178.json");
const iconBug = require("../../assets/bug-system-solid-21.json");
const iconEmail = require("../../assets/email-system-solid-59.json");
const iconSettings = require("../../assets/rest-api-wired-lineal-1330.json");
const iconArrowUp = require("../../assets/arrow-up-system-solid-11.json");
//ALL STATES FOR EACH ICON

const iconStateMap = {
  HomeIcon: {
    clicked: "in-Home",
    hover1: "hover-home-1",
    hover2: "hover-home-2",
    morph1: "morph-home1",
    morph2: "morph-home2",
  },
  qrCodeIcon: {
    clicked: "loopp-line",
    hover1: "hover-Pinch",
  },
  aboutIcon: {
    clicked: "in-account",
    hover1: "hover-account",
  },
  educationIcon: {
    clicked: "in-book",
    hover1: "hover-book",
    morph1: "morph-book",
  },
  workIcon: {
    clicked: "in-work",
    hover1: "hover-work",
  },
  bugIcon: {
    clicked: "in-bug",
    hover1: "hover-bug-1",
    hover2: "hover-bug-2",
  },
  emailIcon: {
    clicked: "in-email",
    hover1: "hover-email",
  },
  settingsIcon: {
    clicked: "in-reveal",
    hover1: "hover-machine",
    hover2: "hover-pinch",
  },
  arrowUpIcon: {
    clicked: "in-arrow-up",
    hover1: "hover-arrow-up-1",
    hover2: "hover-arrow-up-2",
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
  switch (iconName) {
    case "HomeIcon":
      return iconHome;
    case "qrCodeIcon":
      return iconQrCode;
    case "aboutIcon":
      return iconAbout;
    case "educationIcon":
      return iconEducation;
    case "workIcon":
      return iconWork;
    case "bugIcon":
      return iconBug;
    case "emailIcon":
      return iconEmail;
    case "settingsIcon":
      return iconSettings;
    case "arrowUpIcon":
      return iconArrowUp;
    default:
      return null;
  }
};

const getIconState = (iconName, currentState) => {
  if (!iconStateMap[iconName]) throw new Error("Icon not found");
  const iconState = iconStateMap[iconName];

  switch (iconName) {
    case "HomeIcon":
      return currentState === "enter" ? iconState.hover1 : null;
    case "qrCodeIcon":
      return currentState === "enter" ? iconState.hover1 : null;
    case "aboutIcon":
      return currentState === "enter" ? iconState.hover1 : null;
    case "educationIcon":
      return currentState === "enter" ? iconState.hover1 : null;
    case "workIcon":
      return currentState === "enter" ? iconState.hover1 : null;
    case "bugIcon":
      return currentState === "enter" ? iconState.hover2 : null;
    case "emailIcon":
      return currentState === "enter" ? iconState.hover1 : null;
    case "settingsIcon":
      return currentState === "enter" ? iconState.hover1 : null;
    case "arrowUpIcon":
      return currentState === "enter" ? iconState.hover1 : null;
    default:
      return null;
  }
};

export const CustomIcon = ({
  colorIcon = "#3c3c3c",
  size = "250px",
  iconName,
  boxsize = "50px",
  collapsed = false,
  isSectionActive = false,
}) => {
  const { mainColor20Lighter } = useElements();
  const [state, setState] = useState(null);
  const playerRef = useRef(null);
  const playAnimation = useCallback(() => {
    if (state !== null) {
      playerRef.current?.play();
    }
  }, [state]);
  function determineBorder(collapsed, isSectionActive) {
    if (collapsed) {
      if (isSectionActive) {
        return "solid 6px";
      } else {
        return "solid 3px";
      }
    } else {
      if (isSectionActive) {
        return "solid 6px";
      }
      return "none";
    }
  }
  const iconStyle = {
    ...IconStyle,
    width: parseInt(boxsize) + 10 + "px",
    height: parseInt(boxsize) + 10 + "px",
    color: mainColor20Lighter,
    border: determineBorder(collapsed, isSectionActive),
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
  }, [state, playAnimation]);

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
        size={parseInt(size) + 50}
        icon={icontype} // You can replace this with the appropriate icon based on iconName
        colorize={colorIcon}
      />
    </div>
  );
};
