import { useElements } from "../../utils/functions/context";
import { useState } from "react";
import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageModal from "../../utils/components/imageModal";
const ProjectImages = ({ images }) => {
  const { mainColor10Lighter, darkMode, windowWidth } = useElements();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Carousel
        showThumbs={false}
        showStatus={true}
        showArrows={true}
        autoPlay
        interval={6000}
        infiniteLoop
        stopOnHover
        sx={{
          width: "100%",
          height: windowWidth < 768 ? "400px" : "600px",
          borderRadius: "10px",
        }}
      >
        {images.map((imageUrl, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: windowWidth < 768 ? "300px" : "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: `3px solid ${mainColor10Lighter}`,
              borderRadius: "10px",
              backgroundColor: darkMode
                ? "var(--dark-theme-surface)"
                : "var(--light-theme-surface)",
            }}
          >
            <img
              src={imageUrl}
              alt={`Project ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(imageUrl)}
            />
          </Box>
        ))}
      </Carousel>
      {modalOpen && (
        <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </Box>
  );
};

export default ProjectImages;
