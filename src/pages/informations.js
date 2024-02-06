import React, { useEffect, useRef, useState, useCallback } from "react";
import { useElements } from "../utils/functions/context";
import {
  DetermineActiveTitle,
  getLastId,
  handleClickScroll,
  getFirstId,
} from "../utils/functions/function";
import { sideBarSections } from "../utils/functions/datas";
import SectionDisplay from "../utils/components/sectionsDisplay";
import { CustomIcon } from "../utils/components/icons";
const Informations = () => {
  const { activeTitle, updateActiveTitle,mainColor10Lighter } = useElements();
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

  const arrowUpStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "100",
    cursor: "pointer",
  };

  return (
    <div
      style={{ height: "100%", overflowY: "auto" }}
      onScroll={handleScroll}
      id="container"
    >
      <SectionDisplay />
      {getLastId(sideBarSections) === activeTitle ? (
        <div
          style={{ ...arrowUpStyle }}
          onClick={() => handleClickScroll(getFirstId(sideBarSections))}
        >
          <CustomIcon
            size={50}
            boxsize={50}
            sectionId={"arrowUp"}
            iconName={"arrowUpIcon"}
            isSectionActive={false}
            collapsed={false}
            colorIcon={mainColor10Lighter}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Informations;
