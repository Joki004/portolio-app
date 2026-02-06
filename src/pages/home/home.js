import { useState, useEffect, useRef } from "react";
import SocialLinks from "../../utils/components/socialLinks";
import { useElements } from "../../utils/functions/context";
import {
  getFontSizeHeader,
  getFontsizeContent,
  getTextColor,
} from "../../utils/functions/function";

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
    getTextColor(darkMode, backgroundColorBody),
  );

  const HomeStyle = {
    HomeBox: {
      flex: 1,
      gap: "20px",
      padding: "10px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      color: textColor,
    },
    image: {
      width: windowWidth > 1000 ? "25%" : "50%",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      border: "2px solid",
      borderColor: mainColor,
      backgroundColor: mainColor,
      objectFit: "cover",
    },
    description: {
      fontSize: getFontSizeHeader("h3"),
      fontWeight: "bold",
      borderRadius: "20px",
      backgroundColor: mainColor,
      height: "55px",
      width: windowWidth > 1000 ? "15em" : "80%",
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
      borderColor: mainColor10Lighter,
      border: "1px solid",
    },
    person: {
      fontSize: getFontSizeHeader("h2"),
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
      fontSize: getFontsizeContent("body2"),
    },
  };

  useEffect(() => {
    setTextColor(getTextColor(darkMode, backgroundColorBody));
    HomeStyle.HomeBox.color = textColor;
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [
    windowWidth,
    darkMode,
    backgroundColorBody,
    textColor,
    updateWindowWidth,
    HomeStyle.HomeBox,
  ]);
  return (
    <div ref={elementRef} style={{ ...HomeStyle.HomeBox }}>
      <img
        src={imageURL}
        alt={person.firstName}
        style={{ ...HomeStyle.image, objectFit: "cover" }}
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
