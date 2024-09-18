import React from "react";
import { useElements } from "../../utils/functions/context";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const AllProjectsGrid = ({ projectList }) => {
  const navigate = useNavigate();
  const { mainColor10Lighter } = useElements();
 
  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", mt: 5 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ marginBottom: "20px", backgroundColor: mainColor10Lighter }}
      >
        Go Back to Homepage
      </Button>

      <Grid container spacing={3}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={`project-${index}`}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={Array.isArray(project.images[0]) ? project.images[0][0] : project.images[0]}
                alt={project.name}
              />
              <CardContent>
                <Typography variant="h5">{project.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description[0]}
                </Typography>
              </CardContent>
              <Button
                size="small"
                sx={{ color: mainColor10Lighter }}
                onClick={() => navigate(`/projects/${index}`)}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
