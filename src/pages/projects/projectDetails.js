import { useElements } from "../../utils/functions/context";
import { Technologies } from "./technologies";
import { Box, Typography, Button } from "@mui/material";

const ProjectDetails = ({ project, color, isEvenIndex }) => {
  const { windowWidth } = useElements();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems:
          windowWidth < 768
            ? "center"
            : isEvenIndex
            ? "flex-start"
            : "flex-end",
        padding: "10px",
      }}
    >
      <Typography
        variant={windowWidth < 768 ? "h4" : "h2"}
        sx={{ marginBottom: "10px" }}
      >
        {project.name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: "10px" }}
      >{`Status: ${project.state}`}</Typography>

      {project.description.map((desc, index) => (
        <Typography
          key={`project-desc-${index}`}
          variant="body2"
          sx={{
            marginBottom: "10px",
            borderLeft: `3px solid ${color}`,
            paddingLeft: "10px",
          }}
        >
          {desc}
        </Typography>
      ))}
      <Technologies technologies={project.technologies} />
      <Box sx={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        {project.weblink !== " " && (
          <Button
            variant="contained"
            href={project.weblink}
            target="_blank"
            sx={{ textTransform: "none", backgroundColor: color }}
          >
            See Project
          </Button>
        )}
        <Button
          variant="outlined"
          href={project.githublink}
          target="_blank"
          sx={{ textTransform: "none", borderColor: color }}
        >
          Github Link
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
