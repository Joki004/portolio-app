import React, { useState, useEffect, useRef } from "react";
import SocialLinks from "../../utils/components/socialLinks";
import { useElements } from "../../utils/functions/context";

const HomeStyle = {
  HomeBox: {
    flex: 1,
    gap: "20px",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: window.innerWidth > 1000 ? "15%" : "30%",
    height: "auto",
    borderRadius: "50%",
    border: "2px solid",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    borderRadius: "20px",
    backgroundColor: "black",
    height: "55px",
    width: window.innerWidth > 500 ? "50%" : "80%",
    textAlign: "center",
    whiteSpace: "nowrap",
    color: "white",
    border: "1px solid",
    padding: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    color: "var(--dark-theme-surface)",
  },
};

const Home = ({ imageURL, person, text }) => {
  const { mainColor, mainColor10Lighter } = useElements();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const elementRef = useRef(null);

  HomeStyle.title.backgroundColor = mainColor;
  HomeStyle.social.borderColor = mainColor10Lighter;
  HomeStyle.image.backgroundColor = mainColor;
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    console.log(windowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [windowWidth]);

  HomeStyle.image.width = windowWidth > 1000 ? "18%" : "50%";
  HomeStyle.title.width = windowWidth > 1000 ? "15em" : "80%";
  HomeStyle.title.fontSize = windowWidth > 1000 ? "30px" : "20px";
  HomeStyle.person.fontSize = windowWidth > 1000 ? "50px" : "40px";
  HomeStyle.person.fontSize = windowWidth < 550 ? "30px" : "40px";
  return (
    <div ref={elementRef} style={{ ...HomeStyle.HomeBox }}>
      <img
        src={imageURL}
        alt={person.firstName}
        style={{ ...HomeStyle.image }}
      />
      <h1 style={{ ...HomeStyle.person }}>
        {person.firstName} {person.lastName}
      </h1>
      <p style={{ ...HomeStyle.title }}>{text}</p>
      <div style={{ ...HomeStyle.social }}>
        {" "}
        <SocialLinks size={"18px"} />
      </div>

      <p style={{ ...HomeStyle.extra }}>feel free to contact me</p>
    </div>
  );
};
export default Home;
