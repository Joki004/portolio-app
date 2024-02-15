import React from "react";
import "../carousel/myCarousel.css";
export const CarouselItem = ({ item, width }) => {

  return (
    <div  className="myCarousel-item" style={{ width: width }}>
      <div></div>
      <img className="myCarousel-img" src={item.image} alt={'icon'}  />
      <div className="myCarousel-item-text">{item.description}</div>
    
    </div>
  );
};