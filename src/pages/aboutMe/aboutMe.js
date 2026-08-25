import React from "react";

import Experience from "./experience";
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
    textAlign: "left",
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
  },
};

const AboutMe = ({
  person,
  aboutMeText,
  languageData,
  experienceSections,
}) => {
  return (
    <div style={aboutMeStyle.box}>
      <AboutMeSection
        id="AboutMe"
        name={person.firstName}
        texts={aboutMeText}
        languageData={languageData}
      />

      <Experience
        id="EducationExperience"
        sections={experienceSections}
        title="Experience & Growth"
      />
    </div>
  );
};

export default AboutMe;