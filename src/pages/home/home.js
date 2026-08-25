import { useState, useEffect, useRef } from "react";
import SocialLinks from "../../utils/components/socialLinks";
import { useElements } from "../../utils/functions/context";
import {
  getFontSizeHeader,
  getFontsizeContent,
  getTextColor,
} from "../../utils/functions/function";

const Home = ({ imageURL, person, text, secondaryText }) => {
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
    headlineGroup: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
    },
    description: {
      fontSize: getFontSizeHeader("h3"),
      fontWeight: "bold",
      borderRadius: "999px",
      backgroundColor: mainColor,
      minHeight: "55px",
      width: "fit-content",
      maxWidth: windowWidth > 1000 ? "720px" : "90%",
      textAlign: "center",
      border: "1px solid",
      padding: "10px 26px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      lineHeight: 1.2,
    },
    secondaryDescription: {
      fontSize: getFontsizeContent("body1"),
      fontWeight: "600",
      borderRadius: "999px",
      minHeight: "48px",
      width: "fit-content",
      maxWidth: windowWidth > 1000 ? "760px" : "90%",
      textAlign: "center",
      border: `2px solid ${mainColor10Lighter}`,
      padding: "9px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: textColor,
      lineHeight: 1.25,
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
       Engr.  {person.firstName} {person.lastName}
      </h1>
      <div style={{ ...HomeStyle.headlineGroup }}>
        <p style={{ ...HomeStyle.description }}>{text}</p>
        {secondaryText && (
          <p style={{ ...HomeStyle.secondaryDescription }}>
            {secondaryText}
          </p>
        )}
      </div>
      <div style={{ ...HomeStyle.social }}>
        {" "}
        <SocialLinks size={"18px"} />
      </div>

      <p style={{ ...HomeStyle.extra }}>feel free to contact me</p>
    </div>
  );
};
export default Home;