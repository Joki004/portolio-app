import React from "react";
import "../carousel/myCarousel.css";
export const CarouselItem = ({ item, index }) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div
      className="myCarousel-item"
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: isEvenIndex ? "row" : "row-reverse",
      }}
    >
      <div></div>
      <img className="myCarousel-img" src={item.image.default} alt={"icon"} />
      <div className="myCarousel-item-text">{item.description}</div>
    </div>
  );
};
