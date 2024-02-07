import React, { useEffect } from "react";
import { useElements } from "../../utils/functions/context";

const aboutMeStyle = {
  box: {
   // border: "1px solid black",
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
const AboutMeSectionStyle = {
  box: {
    width: "100%",
    gap: "20px",
    display: "flex",
    flexDirection: "column",
    
  },
  title: {
    gap: "20px",
    display: "flex",
    with: "100%",
    textAlign: "flex-start",
    
    
  },
  nameStyle: {
    display: "inline",
    color: "red",
  },
  body:{
    borderLeft: "3px solid",
    paddingLeft: "10px",
  },
  sectionTitle:{
    fontSize: "40px",
    fontWeight: "bold",
    borderRadius: "20px",
    height: "55px",
    width: "50%",
    textAlign: "center",
    whiteSpace: "nowrap",
    color: "white",
    
    padding: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
};
const AboutMeSection = ({ name, texts }) => {
  const { mainColor, mainColor10Lighter } = useElements();
  
 //var  highlight = texts.aboutmeText1.replace(/(DISCOVERING)/g, '<span class="highlight">$1</span>');
 AboutMeSectionStyle.sectionTitle.color=mainColor;
  return (
    <div style={{...AboutMeSectionStyle.box}}>
      <span>
      <h1 style={{...AboutMeSectionStyle.sectionTitle}}>About Me</h1>
      <h1 style={{ ...AboutMeSectionStyle.title }}>
        Hi, I am <span  style={{  color: mainColor}}>{name}</span >
      </h1>
      <p style={{ ...AboutMeSectionStyle.body,borderColor:mainColor10Lighter }}>{texts.aboutmeText1}</p>
      <p style={{ ...AboutMeSectionStyle.body,borderColor:mainColor10Lighter }}>{texts.aboutmeText2}</p>
      
      </span>
      <span></span>
     
    </div>
  );
};

const AboutMe = ({ person, aboutMeText }) => {
  return (
    <div style={{ ...aboutMeStyle.box }}>
      <AboutMeSection name={person.firstName} texts={aboutMeText} />
    </div>
  );
};

export default AboutMe;
