import React, { createContext, useContext, useState } from "react";

const ElementsColor = createContext();

export const ElementsColorProvider = ({ children }) => {
  let colorCSS = "var(--primary-color)";
  const [color, setColor] = useState(colorCSS);
  const [outlineColor, setOutlineColor] = useState("var(--secondary-color)");
  const updateColor = (newColor) => {
    setColor(newColor);
  };
  const updateOutlineColor = (newColor) => {
    setOutlineColor(newColor);
  };

  return (
    <ElementsColor.Provider
      value={{ color, updateColor, outlineColor, updateOutlineColor }}
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
