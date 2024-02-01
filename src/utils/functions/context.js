import React, { createContext, useContext, useState } from "react";
import {useLocalStorageState} from '../functions/function'

const ElementsColor = createContext();

export const ElementsColorProvider = ({ children }) => {


  
 
  const [subtitle2, setSubtitle2] = useState("var(--dark-theme-background)");
  const [mainColor,setMainColor]=useLocalStorageState('mainColor','var(--primary-color)');
  const [mainColor10Lighter,setmainColor10Lighter]=useLocalStorageState("mainColor10Lighter",'var(--primary-color-10-lighter)');
  const [mainColor20Lighter,setmainColor20Lighter]=useLocalStorageState('mainColor20Lighter','var(--primary-color-20-lighter)');
  const [chevronBackground,setChevronBackground]= useLocalStorageState('chevronBackground',"#b3c1cd")

  const updateColor = (newColor) => {
    if(newColor === 'var(--primary-color)'){
      setMainColor(newColor);
      setmainColor10Lighter('var(--primary-color-10-lighter)')
      setmainColor20Lighter('var(--primary-color-20-lighter)')
      setChevronBackground("#b3c1cd")
    }
    else if(newColor === 'var(--secondary-color)'){
      setMainColor(newColor);
      setmainColor10Lighter('var(--secondary-color-30-lighter)')
      setmainColor20Lighter('var( --secondary-color-60-lighter)')
      setChevronBackground("#b1e1d4")
    }
  };

  const updateSubtitle2 = (newColor) => {
    setSubtitle2(newColor);
  };

  return (
    <ElementsColor.Provider
      value={{
        mainColor,
        mainColor10Lighter,
        mainColor20Lighter,
        chevronBackground,
        updateColor,
       
        subtitle2,
        updateSubtitle2,
      }}
    >
      {children}
    </ElementsColor.Provider>
  );
};

export const useElementsColor = () => {
  const context = useContext(ElementsColor);
  if (context === undefined) {
    throw new Error(
      "useElementsColor must be used within a ElementsColorProvider"
    );
  }
  return context;
};
