import { Box, Typography, Button } from "@mui/material";

import { useElements } from "../../utils/functions/context";
import {
  getProjectStatus,
  hasProjectLink,
} from "../../utils/projects/projectHelpers";

import { Technologies } from "./technologies";

const ProjectDetails = ({
  project,
  color,
}) => {
  const {
    windowWidth,
    darkMode,
  } = useElements();

  const textColor = darkMode
    ? "#ffffff"
    : "#101828";

  const secondaryTextColor = darkMode
    ? "rgba(255,255,255,0.74)"
    : "#475467";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        alignItems:
          windowWidth < 768
            ? "center"
            : "flex-start",

        padding: "10px",
      }}
    >
      <Typography
        variant={
          windowWidth < 768
            ? "h4"
            : "h2"
        }
        sx={{
          marginBottom: "10px",
          color: textColor,
        }}
      >
        {project.name}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginBottom: "16px",
          color: secondaryTextColor,
          fontWeight: 700,
        }}
      >
        {getProjectStatus(project.state)}
      </Typography>

      {project.description?.map(
        (description, index) => (
          <Typography
            key={`project-description-${index}`}
            variant="body2"
            sx={{
              marginBottom: "10px",
              paddingLeft: "10px",

              borderLeft: `3px solid ${color}`,

              color: secondaryTextColor,
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        )
      )}

      <Technologies
        technologies={
          project.technologies
        }
        justifyContent={
          windowWidth < 768
            ? "center"
            : "flex-start"
        }
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {hasProjectLink(
          project.weblink
        ) && (
          <Button
            variant="contained"
            href={
              project.weblink.trim()
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              backgroundColor: color,
            }}
          >
            Visit project
          </Button>
        )}

        {hasProjectLink(
          project.githublink
        ) && (
          <Button
            variant="outlined"
            href={
              project.githublink.trim()
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              borderColor: color,
              color,
            }}
          >
            View source
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProjectDetails;