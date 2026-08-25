import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Technologies } from "./technologies";
import { useElements } from "../../utils/functions/context";

import {
  getProjectCover,
  getProjectStatus,
  getProjectSummary,
} from "../../utils/projects/projectHelpers";

export const AllProjectsGrid = ({ projectList = [] }) => {
  const navigate = useNavigate();

  const { mainColor, mainColor10Lighter, darkMode } = useElements();

  return (
    <Box
      sx={{
        minHeight: "100vh",

        padding: {
          xs: "28px 18px 60px",
          md: "48px 40px 90px",
        },

        color: darkMode ? "#ffffff" : "#101828",

        backgroundColor: darkMode ? "#303030" : "#fafafa",
      }}
    >
      <Box
        sx={{
          maxWidth: 1320,
          margin: "0 auto",
        }}
      >
        <Button
          startIcon={<ArrowBackRoundedIcon />}
          onClick={() => navigate("/")}
          sx={{
            marginBottom: {
              xs: 4,
              md: 6,
            },

            color: mainColor10Lighter,
            textTransform: "none",
            fontWeight: 700,
          }}
        >
          Back to portfolio
        </Button>

        <Box
          sx={{
            maxWidth: 760,

            marginBottom: {
              xs: 4,
              md: 6,
            },
          }}
        >
          <Typography
            sx={{
              marginBottom: 1,
              color: mainColor10Lighter,

              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Project archive
          </Typography>

          <Typography
            component="h1"
            sx={{
              marginBottom: 2,

              fontSize: {
                xs: "2.5rem",
                md: "4rem",
              },

              fontWeight: 850,
              lineHeight: 1.04,
              letterSpacing: "-0.045em",
            }}
          >
            Selected projects and experiments.
          </Typography>

          <Typography
            sx={{
              color: darkMode ? "rgba(255,255,255,0.72)" : "#475467",

              lineHeight: 1.7,
            }}
          >
            Production work, academic engineering projects and earlier builds
            that document the progression of my software-development practice.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projectList.map((project, index) => {
            const coverImage = getProjectCover(project);

            const summary = getProjectSummary(project);

            const technologies = project.technologies?.slice(0, 4) || [];

            return (
              <Grid item xs={12} sm={6} lg={4} key={`project-${index}`}>
                <Card
                  component="article"
                  sx={{
                    height: "100%",

                    display: "flex",
                    flexDirection: "column",

                    overflow: "hidden",
                    borderRadius: "18px",

                    border: `1px solid ${
                      darkMode
                        ? "rgba(255,255,255,0.12)"
                        : "rgba(24,51,161,0.13)"
                    }`,

                    color: darkMode ? "#ffffff" : "#101828",

                    backgroundColor: darkMode ? "#393939" : "#ffffff",

                    boxShadow: darkMode
                      ? "0 16px 36px rgba(0,0,0,0.18)"
                      : "0 16px 36px rgba(24,51,161,0.07)",

                    transition: "transform 180ms ease, box-shadow 180ms ease",

                    "&:hover": {
                      transform: "translateY(-4px)",

                      boxShadow: darkMode
                        ? "0 22px 42px rgba(0,0,0,0.28)"
                        : "0 22px 46px rgba(24,51,161,0.13)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 220,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      padding: 2,
                      overflow: "hidden",

                      backgroundColor: darkMode ? "#252525" : "#f2f4f8",
                    }}
                  >
                    {coverImage ? (
                      <Box
                        component="img"
                        src={coverImage}
                        alt={`${project.name} preview`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <Typography
                        sx={{
                          opacity: 0.6,
                        }}
                      >
                        Preview coming soon
                      </Typography>
                    )}
                  </Box>

                  <CardContent
                    sx={{
                      flex: 1,

                      display: "flex",
                      flexDirection: "column",

                      padding: 3,
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
                        <Chip size="small" label={project.category} />
                      )}
                    </Stack>

                    <Typography
                      component="h2"
                      sx={{
                        marginBottom: 1.5,
                        fontSize: "1.45rem",
                        fontWeight: 800,
                        lineHeight: 1.2,
                      }}
                    >
                      {project.name}
                    </Typography>

                    <Typography
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 4,

                        marginBottom: 2.5,

                        color: darkMode ? "rgba(255,255,255,0.72)" : "#475467",

                        fontSize: "0.95rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {summary}
                    </Typography>

                    <Box sx={{ marginBottom: 3 }}>
                      <Technologies
                        technologies={technologies}
                        justifyContent="flex-start"
                      />
                    </Box>

                    <Button
                      endIcon={<ArrowForwardRoundedIcon />}
                      onClick={() => navigate(`/projects/${index}`)}
                      sx={{
                        width: "fit-content",
                        marginTop: "auto",
                        padding: 0,
                        color: mainColor,
                        textTransform: "none",
                        fontWeight: 800,
                      }}
                    >
                      View case study
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
