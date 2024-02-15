import React, { useState } from "react";
import { CarouselItem } from "./carouselItems";
import "./myCarousel.css";
import { ReactComponent as ArrowBack } from "../../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-arrow-back.svg";
import { ReactComponent as ArrowForward } from "../../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-arrow-to-right.svg";
import { ReactComponent as RadioButtonChecked } from "../../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-radio-circle-marked.svg";
import { ReactComponent as RadioButtonUnchecked } from "../../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-radio-circle.svg";
export const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      image: require("../../../assets/images/PictureOfMe.jpg"),
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
      image: require("../../../assets/images/PictureOfMe.jpg"),
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      image: require("../../../assets/images/PictureOfMe.jpg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
 
  return (
    <div className="myCarousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem key={index} item={item} width={"100%"} />;
        })}
      </div>

      <div className="myCarousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <ArrowBack />
        </button>
        <div className="indicators">
          {items.map((item, idx) => {
            return (
              <button
                key={idx}
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(idx);
                }}
              >
                {idx === activeIndex ? (
                  <RadioButtonChecked />
                ) : (
                  <RadioButtonUnchecked />
                )}
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};
