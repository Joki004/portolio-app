import React from "react";
import { Grid } from "@mui/material";
import "../carousel/myCarousel.css";
import { useElements } from "../../functions/context";
import ProjectDetails from "../../../pages/projects/projectDetails";
import ProjectImages from "../../../pages/projects/projectImages";

export const CarouselItem = ({ item, index, activeIndex, click }) => {
  const { windowWidth,mainColor10Lighter } = useElements();
  const isEvenIndex = index % 2 === 0;
  const isActive = activeIndex === index;

  return (
    <Grid
      container
      spacing={2}
      direction={windowWidth < 950 ? "column" : isEvenIndex ? "row" : "row-reverse"}
      sx={{
        backgroundColor: "background.paper",
        padding: "20px",
        borderRadius: "8px",
        display: isActive ? "flex" : "none",
      }}
    >
      <Grid item xs={12} md={6}>
        <ProjectDetails project={item} color={mainColor10Lighter} />
      </Grid>

      <Grid item xs={12} md={6}>
        <ProjectImages images={item.images[0]} />
      </Grid>
    </Grid>
  );
};
