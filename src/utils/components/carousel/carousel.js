import React, { useState } from "react";
import { CarouselItem } from "./carouselItems";
import "./myCarousel.css";
import {  IconButton, Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { getFontSizeHeader } from "../../functions/function";
import { useElements } from "../../functions/context";
import { useNavigate } from 'react-router-dom';
export const MyCarousel = ({ projectList = [] }) => {
  const projectsDataWithIds = projectList.map((project, index) => ({
    ...project,
    id: `project-${index}`,
  }));

  const { darkMode, mainColor10Lighter } = useElements();
  const [activeIndex, setActiveIndex] = useState(0);
  const [click, setClick] = useState("none");
  const navigate = useNavigate();

  const updateIndex = (newIndex, direction) => {
    setClick(direction);
    if (newIndex < 0) {
      newIndex = projectList.length - 1;
    } else if (newIndex >= projectList.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
       
        <IconButton
          onClick={() => updateIndex(activeIndex - 1, "left")}
          sx={{
            backgroundColor: darkMode ? mainColor10Lighter : "#fff",
            color: darkMode ? "#000" : "black",
            '&:hover': {
              backgroundColor: darkMode ? '#fff' : '#e0e0e0',
            },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 40 }} />
        </IconButton>

        <Typography variant="h5" sx={{ fontSize: getFontSizeHeader("h1"), color: darkMode ? mainColor10Lighter : 'black' }}>
          {`${activeIndex + 1}/${projectsDataWithIds.length}`}
        </Typography>

        <IconButton
          onClick={() => updateIndex(activeIndex + 1, "right")}
          sx={{
            backgroundColor: darkMode ? mainColor10Lighter : "#fff",
            color: darkMode ? "#000" : "black",
            '&:hover': {
              backgroundColor: darkMode ? '#fff' : '#e0e0e0',
            },
          }}
        >
          <ArrowForwardIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      <Box sx={{ width: '100%', mt: 3 }}>
        <Box className="myCarousel-inner" sx={{ width: '100%' }}>
          {projectsDataWithIds.map((item, index) => (
            <CarouselItem
              key={`carousel-item-${index}`}
              item={item}
              index={index}
              activeIndex={activeIndex}
              width="100%"
              click={click}
            />
          ))}
        </Box>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/all-projects')}
        sx={{ marginTop: '20px',textTransform: "none", backgroundColor: mainColor10Lighter }}
      >
        See All Projects
      </Button>

    </Box>
  );
};
