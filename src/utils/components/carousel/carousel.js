import React, { useState } from "react";
import { CarouselItem } from "./carouselItems";
import "./myCarousel.css";
import { ReactComponent as ArrowBack } from "../../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/solid/bxs-left-arrow-circle.svg";
import { ReactComponent as ArrowForward } from "../../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/solid/bxs-right-arrow-circle.svg";
import { getFontSizeHeader } from "../../functions/function";

import { useElements } from "../../functions/context";
export const MyCarousel = ({ projectList = [] }) => {
  const projectsDataWithIds = projectList.map((project, index) => ({
    ...project,
    id: `project-${index}`,
  }));

  const { darkMode, mainColor10Lighter } = useElements();
  const [activeIndex, setActiveIndex] = useState(0);
  const [click, setClick] = useState("none");

  const updateIndex = (newIndex, direction) => {
    setClick(direction);
    if (newIndex < 0) {
      newIndex = projectList.length - 1;
    } else if (newIndex >= projectList.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div>
      <div className="ButtonsArows">
        <button
          className="direction-button"
          onClick={() => updateIndex(activeIndex - 1, "left")}
        >
          <ArrowBack
            style={{
              width: "50px",
              height: "50px",
              fill: darkMode ? mainColor10Lighter : "black",
            }}
          />
        </button>
        <div className="indicators-button" style={{fontSize:getFontSizeHeader("h1")}}>
          {`${activeIndex + 1}/${projectsDataWithIds.length}`}
        </div>

        <button
          className="direction-button"
          onClick={() => updateIndex(activeIndex + 1, "right")}
        >
          <ArrowForward
            style={{
              width: "50px",
              height: "50px",
              fill: darkMode ? mainColor10Lighter : "black",
            }}
          />
        </button>
      </div>

      <div className="myCarousel">
        <div
          className="myCarousel-inner"
          style={{
            width: `${100}%`,
          }}
        >
          {projectsDataWithIds.map((item, index) => (
            <CarouselItem
              key={`carousel-item-${index}`}
              item={item}
              index={index}
              activeIndex={activeIndex}
              width={`${100}%`}
              click={click}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
