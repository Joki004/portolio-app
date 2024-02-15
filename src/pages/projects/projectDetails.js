import { useElements } from "../../utils/functions/context";
import {
  getFontSizeHeader,
  getFontsizeContent,
} from "../../utils/functions/function";

const Technologies = ({ Technologies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", 
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {Technologies.map((technology, idx) => (
        <p
          key={`technology-${idx}`}
          style={{ border: "1px solid", padding: "10px", borderRadius: "10px" }}
        >
          {technology}
        </p>
      ))}
    </div>
  );
};

const ProjectDetails = ({ project, color, isEvenIndex }) => {
  
  const { windowWidth } = useElements();
  const baseStyle = {
    boxSizing: "border-box",
  };

  const styles = {
    box: {
      ...baseStyle,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: isEvenIndex ? "flex-start" : "flex-end",
      gap: "10px",
      maxWidth: "100%",
      height: "100%",
      padding: "10px",
    },
    box2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "10px",

      height: "100%",
      padding: "10px",
    },
    title: {
      ...baseStyle,
      with: "100%",
      textAlign: "left",
      border: "1px solid",
      fontSize: getFontSizeHeader("h1"),
      padding: "10px",
      borderRadius: "8px",
    },
    content: {
      wordWrap: "break-word",
      borderLeft: "3px solid",
      borderColor: color,
      textAlign: "justify",
      padding: "10px",
      fontSize: getFontsizeContent("body2"),
    },
    links: {
      border: "1px solid",
      padding: "10px",
      borderRadius: "10px",
      backgroundColor: color,
      textDecoration: "none",
      color: "inherit",
      cursor: "pointer",
    },
  };
  const mobileStyles =
    windowWidth < 768
      ? {
          box: {
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          },
          title: {
            fontSize: getFontSizeHeader("h3"),
          },
          content: {
            padding: "5px",
          },
        }
      : {};
  return (
    <div style={{ ...styles.box, ...mobileStyles.box }}>
      <div style={{ ...styles.box2 }}>
        <h2 style={{ ...styles.title, ...mobileStyles.title }}>
          {project.name}
        </h2>
        <p>{`Status : ${project.state}`}</p>
        {project.description.map((desc, index) => (
          <p key={`project${index}`} style={{ ...styles.content, ...mobileStyles.content }}>
            {desc}
          </p>
        ))}

        <div>
          <Technologies Technologies={project.technologies} />
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {project.weblink !== " " ? (
            <a
              href={project.weblink}
              target="_blanck"
              style={{ ...styles.links }}
            >
              See Project
            </a>
          ) : null}
          <a
            style={{ ...styles.links }}
            target="_black"
            href={project.githublink}
          >
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
