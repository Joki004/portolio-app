import { useElements } from "../../utils/functions/context";
import {
  getFontSizeHeader,
  getFontsizeContent,
} from "../../utils/functions/function";
import { ProgressBar } from "../../utils/components/progressBar/progressBar";
import "./aboutMe.css";

const storySections = [
  { key: "aboutmeText1", title: "Discovery" },
  { key: "aboutmeText2", title: "Software & Data" },
  { key: "aboutmeText3", title: "Beyond IT" },
];

const AboutMeSectionStyle = {
  box: {
    flex: 1,
    width: "100%",
    gap: "36px",
    display: "flex",
    alignItems: "flex-start",
  },
  title: {
    gap: "12px",
    display: "flex",
    width: "100%",
    textAlign: "left",
    fontWeight: "bold",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 0,
  },
  storyList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    width: "100%",
    maxWidth: "72ch",
  },
  storyCard: {
    borderLeft: "4px solid",
    borderRadius: "0 14px 14px 0",
    padding: "16px 18px",
  },
  storyTitle: {
    margin: "0 0 6px",
    fontWeight: 700,
    letterSpacing: "0.01em",
  },
  storyBody: {
    margin: 0,
    lineHeight: 1.65,
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: getFontSizeHeader("h1"),
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
    textDecoration: "underline",
    margin: 0,
  },
  leftBox: {
    flex: 1,
    gap: "22px",
    display: "flex",
    flexDirection: "column",
  },
  rightBox: {
    flex: 1,
    gap: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    alignItems: "center",
    gap: "12px",
  },
  header: {
    display: "flex",
    width: "100%",
    textAlign: "left",
    fontWeight: "bold",
    margin: 0,
  },
  p: {
    width: "110px",
    margin: 0,
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
const AboutMeSection = ({ name, texts, languageData }) => {
  const { mainColor, mainColor10Lighter, windowWidth, darkMode } = useElements();
  const isDesktop = windowWidth > 950;
  const cardBackground = darkMode
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(24, 51, 161, 0.04)";

  return (
    <div
      style={{
        ...AboutMeSectionStyle.box,
        flexDirection: isDesktop ? "row" : "column",
      }}
    >
      <section
        style={{
          ...AboutMeSectionStyle.leftBox,
          width: isDesktop ? "56%" : "100%",
        }}
      >
        <h1 style={{ ...AboutMeSectionStyle.sectionTitle }}>About Me</h1>
        <h2
          style={{
            ...AboutMeSectionStyle.title,
            fontSize: getFontSizeHeader("h1"),
          }}
        >
          Hi, I am <span style={{ color: mainColor }}>{name}</span>
        </h2>

        <div style={{ ...AboutMeSectionStyle.storyList }}>
          {storySections.map((section) => (
            <article
              key={section.key}
              style={{
                ...AboutMeSectionStyle.storyCard,
                borderColor: mainColor10Lighter,
                backgroundColor: cardBackground,
              }}
            >
              <h3
                style={{
                  ...AboutMeSectionStyle.storyTitle,
                  color: mainColor,
                  fontSize: getFontSizeHeader("h5"),
                }}
              >
                {section.title}
              </h3>
              <p
                style={{
                  ...AboutMeSectionStyle.storyBody,
                  fontSize: getFontsizeContent("body2"),
                }}
              >
                {texts[section.key]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <aside
        style={{
          ...AboutMeSectionStyle.rightBox,
          width: isDesktop ? "44%" : "100%",
          padding: isDesktop ? "24px 0 0" : "0",
        }}
      >
        <h2
          style={{
            ...AboutMeSectionStyle.header,
            fontSize: getFontSizeHeader("h2"),
          }}
        >
          Language Knowledge
        </h2>
        <div style={{ ...AboutMeSectionStyle.ProgressBarBox }}>
          {languageData.map((language, index) => (
            <div
              key={`language${index}`}
              style={{ ...AboutMeSectionStyle.ProgressBarBody }}
            >
              <p
                style={{
                  ...AboutMeSectionStyle.p,
                  fontSize: getFontsizeContent("body2"),
                }}
              >
                {language.language}
              </p>
              <div style={{ ...AboutMeSectionStyle.div }}>
                <ProgressBar
                  progress={language.proficiency}
                  color={mainColor}
                  level={language.level}
                />
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default AboutMeSection;