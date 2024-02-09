import React, { useEffect } from "react";
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
    textAlign: "justify",
  },
};

const AboutMe = ({ person, aboutMeText, languageData,  timelineData
}) => {
  return (
    <div style={{ ...aboutMeStyle.box }}>
      <AboutMeSection
        name={person.firstName}
        texts={aboutMeText}
        languageData={languageData}
      />
      <Experience timeline={timelineData} title={'Education &Experience'} />
    </div>
  );
};

export default AboutMe;
