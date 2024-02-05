import React, { useEffect, useRef, useState, useCallback } from "react";
import Section from "../utils/components/sections";
import { useElements } from "../utils/functions/context";
import { DetermineActiveTitle } from "../utils/functions/function";
import { sideBarSections } from "../utils/functions/datas";

const Informations = () => {
  const { activeTitle, updateActiveTitle } = useElements();
  const [scrollTop, setScrollTop] = useState(0);
  const elementRef = useRef(null);

  const handleScroll = useCallback(() => {
    const newScrollTop = elementRef.current?.scrollTop || 0;
    setScrollTop(newScrollTop);
    updateActiveTitle(
      DetermineActiveTitle(sideBarSections, activeTitle, scrollTop)
    );
  }, [activeTitle, updateActiveTitle, scrollTop]);

  useEffect(() => {
  
    elementRef.current = document.getElementById("container");

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      style={{ height: "100%", overflowY: "auto" }}
      onScroll={handleScroll}
      id="container"
    >
      {sideBarSections.map((section) => (
        <Section
          key={section.id}
          title={section.title}
          id={section.id}
          scrollTop={scrollTop}
          content={section.content}
        />
      ))}
    </div>
  );
};

export default Informations;
