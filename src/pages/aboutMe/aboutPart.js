import { useElements } from "../../utils/functions/context";
import {
  getFontSizeHeader,
  getFontsizeContent,
} from "../../utils/functions/function";
import ProgressBar from "react-bootstrap/ProgressBar";

import './aboutMe.css'
const AboutMeSectionStyle = {
    box: {
      flex: 1,
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
      fontSize: "30px",
      fontWeight: "bold",
      flexDirection: "row",
      whiteSpace: "nowrap",
    },
    nameStyle: {
      display: "inline",
      color: "red",
    },
    body: {
      borderLeft: "3px solid",
      paddingLeft: "10px",
      fontSize: "20px",
    },
    sectionTitle: {
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
    },
    leftBox: {
      flex: 1,
      gap: "20px",
      display: "flex",
      flexDirection: "column",
      width: "50%",
    },
    rightBox: {
      flex: 1,
      gap: "20px",
      display: "flex",
      flexDirection: "column",
      width: "50%",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    ProgressBar: {
      width: "100%",
      height: "25px",
      borderRadius: "10px",
      backgroundColor: "white",
      border: "1px solid black",
      textAlign: "center",
    },
    ProgressBarBox: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "5px",
  
    },
    ProgressBarBody: {
      width: "100%",
  
    
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "10px",
    },
    header: {
      gap: "20px",
      display: "flex",
      with: "100%",
      textAlign: "flex-start",
      fontSize: "30px",
      fontWeight: "bold",
      flexDirection: "row",
      whiteSpace: "nowrap",
    },
    p: {
      fontSize: "20px",
      width: "120px",
    
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    
    },
  };
  const AboutMeSection = ({ name, texts,languageData }) => {
    const { mainColor, mainColor10Lighter, windowWidth } = useElements();
  
    AboutMeSectionStyle.sectionTitle.color = mainColor;
    AboutMeSectionStyle.box.flexDirection = windowWidth > 950 ? "row" : "column";
    AboutMeSectionStyle.leftBox.width = windowWidth > 950 ? "50%" : "100%";
    AboutMeSectionStyle.rightBox.width = windowWidth > 950 ? "50%" : "100%";
    AboutMeSectionStyle.title.fontSize = getFontSizeHeader("h1");
    AboutMeSectionStyle.body.fontSize = getFontsizeContent("body1");
    AboutMeSectionStyle.p.fontSize = getFontsizeContent("body1");
    AboutMeSectionStyle.header.fontSize = getFontSizeHeader("h2");
  

    return (
      <div style={{ ...AboutMeSectionStyle.box }}>
        <span style={{ ...AboutMeSectionStyle.leftBox }}>
          <h1 style={{ ...AboutMeSectionStyle.sectionTitle }}>About Me</h1>
          <h1 style={{ ...AboutMeSectionStyle.title }}>
            Hi, I am <span style={{ color: mainColor }}>{name}</span>
          </h1>
          <p
            style={{
              ...AboutMeSectionStyle.body,
              borderColor: mainColor10Lighter,
            }}
          >
            {texts.aboutmeText1}
          </p>
          <p
            style={{
              ...AboutMeSectionStyle.body,
              borderColor: mainColor10Lighter,
            }}
          >
            {texts.aboutmeText2}
          </p>
        </span>
        <span style={{ ...AboutMeSectionStyle.rightBox }}>
          <h1 style={{ ...AboutMeSectionStyle.header }}>Language Knowledge </h1>
          <span style={{ ...AboutMeSectionStyle.ProgressBarBox }}>
            {languageData.map((language, index) => (
              <span key={index} style={{ ...AboutMeSectionStyle.ProgressBarBody }}>
                <p style={{ ...AboutMeSectionStyle.p }}>{language.language}</p>
                <div style={{ ...AboutMeSectionStyle.div }}>
                  <ProgressBar
                    style={{ ...AboutMeSectionStyle.ProgressBar }}
                    now={language.proficiency}
                    label={`${language.level}`}
                    variant="ProgressColor"
                  />
                </div>
              </span>
            ))}
          </span>
        </span>
      </div>
    );
  };

  export default AboutMeSection;