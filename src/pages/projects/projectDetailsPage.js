import React from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Technologies } from "./technologies";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { projectsData } from "../../utils/projects/projectsData";
import { useElements } from "../../utils/functions/context";

import {
  getProjectImages,
  getProjectStatus,
  getProjectSummary,
  hasProjectLink,
} from "../../utils/projects/projectHelpers";

const CaseStudySection = ({
  title,
  content,
  darkMode,
}) => {
  if (!content) {
    return null;
  }

  return (
    <Box
      component="section"
      sx={{
        padding: {
          xs: 2.5,
          md: 3,
        },

        borderRadius: "16px",

        border: `1px solid ${
          darkMode
            ? "rgba(255,255,255,0.12)"
            : "rgba(24,51,161,0.13)"
        }`,

        backgroundColor: darkMode
          ? "rgba(255,255,255,0.04)"
          : "#ffffff",
      }}
    >
      <Typography
        component="h2"
        sx={{
          marginBottom: 1.25,
          fontSize: "1.15rem",
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: darkMode
            ? "rgba(255,255,255,0.74)"
            : "#475467",

          lineHeight: 1.75,
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    darkMode,
    mainColor,
    mainColor10Lighter,
  } = useElements();

  const project =
    projectsData[Number(id)];

     const technologies = project.technologies?.slice(0, 10) || [];

  if (!project) {
    return (
      <Box
        sx={{
          minHeight: "100vh",

          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",

          gap: 2,
          padding: 3,
        }}
      >
        <Typography variant="h4">
          Project not found
        </Typography>

        <Button
          onClick={() =>
            navigate("/all-projects")
          }
        >
          View projects
        </Button>
      </Box>
    );
  }

  const images =
    getProjectImages(project);

  const summary =
    getProjectSummary(project);

  const hasStructuredCaseStudy = Boolean(
    project.caseStudy &&
      Object.values(
        project.caseStudy
      ).some(Boolean)
  );

  const isPrivate =
    project.visibility === "private" ||
    project.confidential;

  const caseStudySections = [
    {
      title: "Challenge",
      content:
        project.caseStudy?.challenge,
    },
    {
      title: "Solution",
      content:
        project.caseStudy?.solution,
    },
    {
      title: "My contribution",
      content:
        project.caseStudy?.contribution,
    },
    {
      title: "Architecture",
      content:
        project.caseStudy?.architecture,
    },
    {
      title: "Outcome",
      content:
        project.caseStudy?.outcome,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",

        padding: {
          xs: "26px 18px 70px",
          md: "48px 40px 100px",
        },

        color: darkMode
          ? "#ffffff"
          : "#101828",

        backgroundColor: darkMode
          ? "#303030"
          : "#fafafa",
      }}
    >
      <Box
        sx={{
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          justifyContent="space-between"
          spacing={1}
          sx={{
            marginBottom: {
              xs: 4,
              md: 6,
            },
          }}
        >
          <Button
            startIcon={
              <ArrowBackRoundedIcon />
            }
            onClick={() => navigate("/")}
            sx={{
              width: "fit-content",
              color: mainColor10Lighter,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Portfolio
          </Button>

          <Button
            onClick={() =>
              navigate("/all-projects")
            }
            sx={{
              width: "fit-content",
              color: mainColor10Lighter,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            All projects
          </Button>
        </Stack>

        <Box
          sx={{
            maxWidth: 900,

            marginBottom: {
              xs: 4,
              md: 6,
            },
          }}
        >
          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            spacing={1}
            sx={{
              marginBottom: 2.5,
            }}
          >
            <Chip
              size="small"
              label={getProjectStatus(
                project.state
              )}
              sx={{
                color: mainColor10Lighter,

                border: `1px solid ${mainColor10Lighter}`,

                backgroundColor:
                  "transparent",

                fontWeight: 700,
              }}
            />

            {project.category && (
              <Chip
                size="small"
                label={project.category}
              />
            )}

            {isPrivate && (
              <Chip
                size="small"
                icon={
                  <LockOutlinedIcon />
                }
                label="Selected details private"
              />
            )}
          </Stack>

          <Typography
            component="h1"
            sx={{
              marginBottom: 2,

              fontSize: {
                xs: "2.6rem",
                md: "4.8rem",
              },

              fontWeight: 850,
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            {project.name}
          </Typography>

          {project.role && (
            <Typography
              sx={{
                marginBottom: 2,
                color: mainColor10Lighter,
                fontSize: "1.05rem",
                fontWeight: 750,
              }}
            >
              {project.role}
            </Typography>
          )}

          <Typography
            sx={{
              maxWidth: 800,

              color: darkMode
                ? "rgba(255,255,255,0.76)"
                : "#475467",

              fontSize: {
                xs: "1rem",
                md: "1.12rem",
              },

              lineHeight: 1.8,
            }}
          >
            {summary}
          </Typography>
        </Box>

        {images.length > 0 && (
          <Box
            sx={{
              marginBottom: {
                xs: 4,
                md: 6,
              },

              overflow: "hidden",
              borderRadius: "20px",

              border: `1px solid ${
                darkMode
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(24,51,161,0.13)"
              }`,

              backgroundColor: darkMode
                ? "#242424"
                : "#f1f3f8",
            }}
          >
            <Carousel
              showThumbs={
                images.length > 1
              }
              showStatus={
                images.length > 1
              }
              showArrows={
                images.length > 1
              }
              infiniteLoop={
                images.length > 1
              }
              useKeyboardArrows
              stopOnHover
            >
              {images.map(
                (imageUrl, index) => (
                  <Box
                    key={imageUrl}
                    sx={{
                      height: {
                        xs: 320,
                        md: 620,
                      },

                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "center",

                      padding: {
                        xs: 1,
                        md: 3,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={imageUrl}
                      alt={`${project.name} screen ${
                        index + 1
                      }`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                )
              )}
            </Carousel>
          </Box>
        )}

        {hasStructuredCaseStudy ? (
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
              },

              gap: 2,
              marginBottom: 4,
            }}
          >
            {caseStudySections.map(
              (section) => (
                <CaseStudySection
                  key={section.title}
                  title={section.title}
                  content={
                    section.content
                  }
                  darkMode={darkMode}
                />
              )
            )}
          </Box>
        ) : (
          <Stack
            spacing={2}
            sx={{
              maxWidth: 900,
              marginBottom: 4,
            }}
          >
            {project.description
              ?.slice(1)
              .map((paragraph) => (
                <Typography
                  key={paragraph}
                  sx={{
                    color: darkMode
                      ? "rgba(255,255,255,0.74)"
                      : "#475467",

                    lineHeight: 1.8,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
          </Stack>
        )}

        {project.highlights?.length >
          0 && (
          <Box
            sx={{
              maxWidth: 900,
              marginBottom: 4,
            }}
          >
            <Typography
              component="h2"
              sx={{
                marginBottom: 1.5,
                fontSize: "1.35rem",
                fontWeight: 800,
              }}
            >
              Key highlights
            </Typography>

            <Box
              component="ul"
              sx={{
                margin: 0,
                paddingLeft: 3,
              }}
            >
              {project.highlights.map(
                (highlight) => (
                  <Typography
                    component="li"
                    key={highlight}
                    sx={{
                      marginBottom: 1,

                      color: darkMode
                        ? "rgba(255,255,255,0.74)"
                        : "#475467",

                      lineHeight: 1.7,
                    }}
                  >
                    {highlight}
                  </Typography>
                )
              )}
            </Box>
          </Box>
        )}

        {project.confidentialityNote && (
          <Box
            sx={{
              maxWidth: 900,
              marginBottom: 4,
              padding: 2.5,

              borderLeft: `4px solid ${mainColor}`,

              backgroundColor: darkMode
                ? "rgba(255,255,255,0.05)"
                : "rgba(24,51,161,0.05)",
            }}
          >
            <Typography
              sx={{
                lineHeight: 1.7,
              }}
            >
              {
                project.confidentialityNote
              }
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            marginBottom: 4,
          }}
        >
          <Typography
            component="h2"
            sx={{
              marginBottom: 1.5,
              fontSize: "1.35rem",
              fontWeight: 800,
            }}
          >
            Technology
          </Typography>

          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            spacing={1}
          >
              <Technologies technologies={technologies} justifyContent="flex-start" />
          </Stack>
        </Box>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={1.5}
        >
          {hasProjectLink(
            project.weblink
          ) && (
            <Button
              variant="contained"
              endIcon={
                <OpenInNewRoundedIcon />
              }
              href={
                project.weblink.trim()
              }
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                padding: "10px 18px",
                borderRadius: "10px",
                backgroundColor:
                  mainColor,
                textTransform: "none",
                fontWeight: 750,
              }}
            >
              Visit live project
            </Button>
          )}

          {hasProjectLink(
            project.githublink
          ) && (
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={
                project.githublink.trim()
              }
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                padding: "10px 18px",
                borderRadius: "10px",
                borderColor:
                  mainColor10Lighter,
                color:
                  mainColor10Lighter,
                textTransform: "none",
                fontWeight: 750,
              }}
            >
              View source
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};