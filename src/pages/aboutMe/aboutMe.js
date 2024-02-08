import React, { useEffect } from "react";

import AboutMeSection from "./aboutPart";
const aboutMeStyle = {
  box: {
    padding: "10px",
    flex: 1,
    gap: "20px",
    alignItems: "flex-start",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    textAlign: "justify",
  },
};

const AboutMe = ({ person, aboutMeText, languageData }) => {
  return (
    <div style={{ ...aboutMeStyle.box }}>
      <AboutMeSection
        name={person.firstName}
        texts={aboutMeText}
        languageData={languageData}
      />
    </div>
  );
};

export default AboutMe;
