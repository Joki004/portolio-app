import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projectsData } from "../../utils/datas";

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projectsData[id];
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", mt: 5, mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Button variant="outlined" onClick={() => navigate("/")}>
          Go to Homepage
        </Button>
        <Button variant="outlined" onClick={() => navigate("/all-projects")}>
          View All Projects
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom>
        {project.name}
      </Typography>

      {project.description.map((paragraph, index) => (
        <Typography key={index} variant="body1" sx={{ marginBottom: "10px" }}>
          {paragraph}
        </Typography>
      ))}

      <Carousel
        showThumbs={true}
        showStatus={true}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        stopOnHover
        interval={4000}
        sx={{ marginBottom: "20px" }}
      >
        {project.images[0].map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={`Project ${index}`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "500px", 
                objectFit: "contain", 
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </Carousel>

     
      <Typography variant="h6" gutterBottom>
        Technologies Used:
      </Typography>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      
      <Box sx={{ marginTop: "20px", display: "flex", gap: 2 }}>
        {project.weblink !== " " && (
          <Button
            variant="contained"
            href={project.weblink}
            target="_blank"
            sx={{ textTransform: "none", backgroundColor: "primary.main" }}
          >
            See Project
          </Button>
        )}
        <Button
          variant="outlined"
          href={project.githublink}
          target="_blank"
          sx={{ textTransform: "none", borderColor: "primary.main" }}
        >
          Github Link
        </Button>
      </Box>
    </Box>
  );
};
