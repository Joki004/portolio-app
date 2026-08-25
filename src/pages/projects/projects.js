import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useElements } from "../../utils/functions/context";
import { Technologies } from "./technologies";
import {
  getFeaturedProjects,
  getProjectCover,
  getProjectStatus,
  getProjectSummary,
  hasProjectLink,
} from "../../utils/projects/projectHelpers";

const FeaturedProject = ({ project, position }) => {
  const navigate = useNavigate();

  const { darkMode, mainColor, mainColor10Lighter } = useElements();

  const coverImage = getProjectCover(project);
  const summary = getProjectSummary(project);

  const technologies = project.technologies?.slice(0, 10) || [];

  const hasLiveProject = hasProjectLink(project.weblink);

  const isPrivate = project.visibility === "private" || project.confidential;

  return (
    <Box
      component="article"
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          md: "minmax(280px, 0.9fr) 1.1fr",
        },

        minHeight: {
          md: 360,
        },

        overflow: "hidden",
        borderRadius: "22px",

        border: `1px solid ${
          darkMode ? "rgba(255,255,255,0.14)" : "rgba(24,51,161,0.16)"
        }`,

        backgroundColor: darkMode
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.94)",

        boxShadow: darkMode
          ? "0 22px 50px rgba(0,0,0,0.18)"
          : "0 22px 55px rgba(24,51,161,0.09)",
      }}
    >
      <Box
        sx={{
          position: "relative",

          minHeight: {
            xs: 240,
            md: "100%",
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          overflow: "hidden",

          padding: {
            xs: 2,
            md: 3,
          },

          backgroundColor: darkMode ? "#242424" : "#f3f5fb",
        }}
      >
        <Typography
          component="span"
          sx={{
            position: "absolute",
            top: 18,
            left: 18,
            zIndex: 1,

            minWidth: 42,
            padding: "6px 10px",

            borderRadius: "999px",

            color: "white",
            backgroundColor: mainColor,

            fontWeight: 800,
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
            textAlign: "center",
          }}
        >
          {String(position + 1).padStart(2, "0")}
        </Typography>

        {coverImage ? (
          <Box
            component="img"
            src={coverImage}
            alt={`${project.name} interface`}
            sx={{
              width: "100%",
              height: "100%",

              maxHeight: {
                xs: 300,
                md: 390,
              },

              objectFit: "contain",
              borderRadius: "14px",
            }}
          />
        ) : (
          <Typography sx={{ opacity: 0.65 }}>
            Project preview coming soon
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          padding: {
            xs: 3,
            md: 5,
          },
        }}
      >
        <Stack
          direction="row"
          useFlexGap
          flexWrap="wrap"
          spacing={1}
          sx={{
            marginBottom: 2,
          }}
        >
          <Chip
            size="small"
            label={getProjectStatus(project.state)}
            sx={{
              color: mainColor10Lighter,
              border: `1px solid ${mainColor10Lighter}`,
              backgroundColor: "transparent",
              fontWeight: 700,
            }}
          />

          {project.category && (
            <Chip
              size="small"
              label={project.category}
              sx={{
                fontWeight: 600,
              }}
            />
          )}

          {isPrivate && (
            <Chip
              size="small"
              icon={<LockOutlinedIcon />}
              label="Selected details private"
              sx={{
                fontWeight: 600,
              }}
            />
          )}
        </Stack>

        <Typography
          component="h3"
          sx={{
            marginBottom: 1.5,

            color: darkMode ? "#ffffff" : "#101828",

            fontSize: {
              xs: "2rem",
              md: "2.6rem",
            },

            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
          }}
        >
          {project.name}
        </Typography>

        {project.role && (
          <Typography
            sx={{
              marginBottom: 1.5,
              color: mainColor10Lighter,
              fontWeight: 700,
            }}
          >
            {project.role}
          </Typography>
        )}

        <Typography
          sx={{
            marginBottom: 2.5,
            maxWidth: 700,

            color: darkMode ? "rgba(255,255,255,0.76)" : "#475467",

            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          {summary}
        </Typography>

        <Technologies technologies={technologies} justifyContent="flex-start" />

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={1.5}
          sx={{
            marginTop: 3,
          }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={() => navigate(`/projects/${project.projectIndex}`)}
            sx={{
              width: {
                xs: "100%",
                sm: "fit-content",
              },

              padding: "10px 18px",
              borderRadius: "10px",
              backgroundColor: mainColor,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            View case study
          </Button>

          {hasLiveProject && (
            <Button
              variant="outlined"
              endIcon={<OpenInNewRoundedIcon />}
              href={project.weblink.trim()}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: {
                  xs: "100%",
                  sm: "fit-content",
                },

                padding: "10px 18px",
                borderRadius: "10px",
                borderColor: mainColor10Lighter,
                color: mainColor10Lighter,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Visit live project
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

const Projects = ({ projectsData = [] }) => {
  const navigate = useNavigate();

  const { darkMode, mainColor, mainColor10Lighter } = useElements();

  const featuredProjects = getFeaturedProjects(projectsData);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",

        padding: {
          xs: "70px 18px",
          md: "96px 40px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: 820,

          marginBottom: {
            xs: 5,
            md: 7,
          },
        }}
      >
        <Typography
          sx={{
            marginBottom: 1.5,
            color: mainColor10Lighter,

            fontSize: "0.82rem",
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Selected work
        </Typography>

        <Typography
          component="h2"
          sx={{
            marginBottom: 2,

            color: darkMode ? "#ffffff" : "#101828",

            fontSize: {
              xs: "2.5rem",
              md: "4rem",
            },

            fontWeight: 850,
            lineHeight: 1.02,
            letterSpacing: "-0.045em",
          }}
        >
          Projects built around real problems.
        </Typography>

        <Typography
          sx={{
            maxWidth: 720,

            color: darkMode ? "rgba(255,255,255,0.72)" : "#475467",

            fontSize: {
              xs: "1rem",
              md: "1.08rem",
            },

            lineHeight: 1.75,
          }}
        >
          A focused selection of production products, full-stack systems and
          interdisciplinary work. Each case study explains the problem, the
          engineering decisions and my contribution.
        </Typography>
      </Box>

      <Stack
        spacing={{
          xs: 3,
          md: 4,
        }}
      >
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={`${project.name}-${project.projectIndex}`}
            project={project}
            position={index}
          />
        ))}
      </Stack>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          marginTop: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <Button
          variant="outlined"
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={() => navigate("/all-projects")}
          sx={{
            padding: "11px 20px",
            borderRadius: "10px",
            borderColor: mainColor,
            color: mainColor10Lighter,
            textTransform: "none",
            fontWeight: 750,
          }}
        >
          Explore all projects
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
