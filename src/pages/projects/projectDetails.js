import {
  getFontSizeHeader,
  getFontsizeContent,
} from "../../utils/functions/function";

const Technologies = ({ Technologies }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Technologies.map((technology, idx) => (
        <p
          key={idx}
          style={{ border: "1px solid", padding: "10px", borderRadius: "10px" }}
        >
          {technology}
        </p>
      ))}
    </div>
  );
};

const ProjectDetails = ({ project, color }) => {
  const styles = {
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "10px",
      width: "100%",
      height: "100%",
      padding: "10px",
    },
    title: {
      with: "100%",
      textAlign: "flex-start",
      border: "1px solid",
      fontSize: getFontSizeHeader("h1"),
      padding: "10px",
      borderRadius: "8px",
    },
    content: {
      
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
  return (
    <div style={{ ...styles.box }}>
      <h2 style={{ ...styles.title }}>{project.name}</h2>
      <p>{`Status : ${project.state}`}</p>
      <p style={{ ...styles.content }}>{project.description}</p>
      <div>
        <Technologies Technologies={project.technologies} />
      </div>
      <div>
        {project.weblink !== " " ? (
          <a href={project.weblink} style={{ ...styles.links }}>
            See{" "}
          </a>
        ) : null}
        <a style={{ ...styles.links }} href={project.githublink}>
          Github Link
        </a>
      </div>
    </div>
  );
};


export default ProjectDetails;