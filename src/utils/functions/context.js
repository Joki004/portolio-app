import React, { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../functions/function";
import { colorConfig  } from '../datas'
const Elements = createContext();

export const ElementsProvider = ({ children }) => {
  const [activeTitle, setActiveTitle] = useState("Home");
  const [subtitle2, setSubtitle2] = useState("var(--dark-theme-background)");
  const [mainColor, setMainColor] = useLocalStorageState(
    "mainColor",
    "var(--primary-color)"
  );
  const [mainColor10Lighter, setmainColor10Lighter] = useLocalStorageState(
    "mainColor10Lighter",
    "var(--primary-color-10-lighter)"
  );
  const [mainColor20Lighter, setmainColor20Lighter] = useLocalStorageState(
    "mainColor20Lighter",
    "var(--primary-color-20-lighter)"
  );
  const [chevronBackground, setChevronBackground] = useLocalStorageState(
    "chevronBackground",
    "#b3c1cd"
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sideBarBackgroundMode, setSideBarBackgroundMode] =
    useLocalStorageState("sideBarBackground", "color");

  const [darkMode, setDarkMode] = useLocalStorageState("darkMode", false);
  const [backgroundColorBody, setBackgroundColorBody] = useLocalStorageState('backgroundColor', 'regular');
  const updateDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const updateBackgroundColor = (mode) => {
    setBackgroundColorBody(mode);
    setDarkMode(mode === "paralax" ? true : false);
  };
  

  const updatesideBarBackground = (mode) => {
    setSideBarBackgroundMode(mode);
  };
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const updateColor = (newColor) => {
    const colorSetting = colorConfig[newColor];
    if (colorSetting) {
      setMainColor(newColor);
      setmainColor10Lighter(colorSetting.mainColor10Lighter);
      setmainColor20Lighter(colorSetting.mainColor20Lighter);
      setChevronBackground(colorSetting.chevronBackground);
    }
    
  };

  const updateSubtitle2 = (newColor) => {
    setSubtitle2(newColor);
  };

 
  const updateActiveTitle = (title) => {
    setActiveTitle(title);
  };

  return (
    <Elements.Provider
      value={{
        mainColor,
        mainColor10Lighter,
        mainColor20Lighter,
        chevronBackground,
        sideBarBackgroundMode,
        darkMode,
        subtitle2,
        activeTitle,
        windowWidth,
        backgroundColorBody,
        updateBackgroundColor,
        updateColor,
        updateWindowWidth,
        updateDarkMode,
        updatesideBarBackground,
        updateSubtitle2,
        updateActiveTitle,
      }}
    >
      {children}
    </Elements.Provider>
  );
};

export const useElements = () => {
  const context = useContext(Elements);
  if (context === undefined) {
    throw new Error("useElements must be used within a ElementsProvider");
  }
  return context;
};
