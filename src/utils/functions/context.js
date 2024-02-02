import React, { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../functions/function";

const Elements = createContext();

export const ElementsProvider = ({ children }) => {
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

  const [sideBarBackgroundMode, setSideBarBackgroundMode] = useLocalStorageState("sideBarBackground","color");

  
  const [darkMode,setDarkMode] = useLocalStorageState("darkMode",false);

  
const updatesideBarBackground = (mode) => {
  setSideBarBackgroundMode(mode);
};


  const updateColor = (newColor) => {
    if (newColor === "var(--primary-color)") {
      setMainColor(newColor);
      setmainColor10Lighter("var(--primary-color-10-lighter)");
      setmainColor20Lighter("var(--primary-color-20-lighter)");
      setChevronBackground("#b3c1cd");
    } else if (newColor === "var(--secondary-color)") {
      setMainColor(newColor);
      setmainColor10Lighter("var(--secondary-color-30-lighter)");
      setmainColor20Lighter("var( --secondary-color-60-lighter)");
      setChevronBackground("#b1e1d4");
    }
  };

  const updateSubtitle2 = (newColor) => {
    setSubtitle2(newColor);
  };

  const updateDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

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
        updateColor,
        updateDarkMode,
        updatesideBarBackground,
        updateSubtitle2,
      }}
    >
      {children}
    </Elements.Provider>
  );
};

export const useElements = () => {
  const context = useContext(Elements);
  if (context === undefined) {
    throw new Error(
      "useElements must be used within a ElementsProvider"
    );
  }
  return context;
};
