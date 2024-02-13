import React, { useState, useEffect, useRef } from "react";
import SocialLinks from "../../utils/components/socialLinks";
import { useElements } from "../../utils/functions/context";
import {
  getFontSizeHeader,
  getFontsizeContent,
  getTextColor
} from "../../utils/functions/function";
const HomeStyle = {
  HomeBox: {
    flex: 1,
    gap: "20px",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    color: "black",
  },
  image: {
    width: window.innerWidth > 1000 ? "15%" : "30%",
    height: "auto",
    borderRadius: "50%",
    border: "2px solid",
  },
  description: {
    fontSize: "30px",
    fontWeight: "bold",
    borderRadius: "20px",
    backgroundColor: "black",
    height: "55px",
    width: window.innerWidth > 500 ? "50%" : "80%",
    textAlign: "center",
    whiteSpace: "nowrap",
    border: "1px solid",
    padding: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  social: {
    borderRadius: "20px",
    borderColor: "red",
    border: "1px solid",
  },
  person: {
    fontSize: "50px",
    fontWeight: "bold",
    height: "55px",
    textAlign: "center",
    whiteSpace: "nowrap",
    padding: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  extra: {
    fontSize: "20px",
  },
};

const Home = ({ imageURL, person, text }) => {
  const {
    mainColor,
    mainColor10Lighter,
    windowWidth,
    updateWindowWidth,
    darkMode,
    backgroundColorBody,
  } = useElements();

  const elementRef = useRef(null);
  const [textColor, setTextColor] = useState(
    getTextColor(darkMode, backgroundColorBody)
  );

  HomeStyle.description.backgroundColor = mainColor;
  HomeStyle.social.borderColor = mainColor10Lighter;
  HomeStyle.image.backgroundColor = mainColor;
 

  useEffect(() => {
    setTextColor(getTextColor(darkMode, backgroundColorBody));
    HomeStyle.HomeBox.color = textColor;
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [windowWidth, darkMode, backgroundColorBody,textColor,updateWindowWidth]);

  HomeStyle.image.width = windowWidth > 1000 ? "18%" : "50%";
  HomeStyle.description.width = windowWidth > 1000 ? "15em" : "80%";
  HomeStyle.description.fontSize = getFontSizeHeader("h3");
  HomeStyle.person.fontSize = getFontSizeHeader("h2");
  HomeStyle.extra.fontSize = getFontsizeContent("body2");

  return (
    <div ref={elementRef} style={{ ...HomeStyle.HomeBox }}>
      <img
        src={imageURL}
        alt={person.firstName}
        style={{ ...HomeStyle.image,objectFit:"fit" }}
      />
      <h1 style={{ ...HomeStyle.person }}>
        {person.firstName} {person.lastName}
      </h1>
      <p style={{ ...HomeStyle.description }}>{text}</p>
      <div style={{ ...HomeStyle.social }}>
        {" "}
        <SocialLinks size={"18px"} />
      </div>

      <p style={{ ...HomeStyle.extra }}>feel free to contact me</p>
    </div>
  );
};
export default Home;
