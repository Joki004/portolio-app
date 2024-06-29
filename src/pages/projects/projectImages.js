import { useElements } from "../../utils/functions/context";
import { useState,useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageModal from "../../utils/components/imageModal";
const ProjectImages = (images) => {
  const { mainColor10Lighter, darkMode,windowWidth } = useElements();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(windowWidth < 768);

  useEffect(() => {
    setIsMobile(windowWidth < 768);
  }, [windowWidth]);
  const projectImagesStyles = {
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      height: "100%",
      width: "100%",
      padding: "10px",
    },
    carrousel: {
      width: "100%",
      height: isMobile?"400px":"900px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
    },
    imageBox: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "3px solid",
      borderColor: mainColor10Lighter,
      borderRadius: "10px",
      backgroundColor: darkMode
        ? "var(--dark-theme-surface)"
        : "var(--light-theme-surface)",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "contain", 
      cursor: "pointer"
    },
  };
  /*const [autoplay, setAutoplay] = useState(true);
    const toggleAutoplay = () => {
      setAutoplay(!autoplay);
    };*/
  const { images: imageArray } = images;

  const handleImageClick = (event ,imageUrl) => {
    event.stopPropagation();
    console.log('Image clicked:', imageUrl);
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  }
  return (
    <div style={{ ...projectImagesStyles.box }}>
      <Carousel
        showThumbs={false}
        showStatus={true}
        showArrows={true}
        showIndicators={false}
        autoPlay={true}
        interval={6000}
        infiniteLoop
        stopOnHover
      >
        {imageArray.map((imageUrl, index) => (
          <div
            key={`projectImage${index}`}
            style={{ ...projectImagesStyles.carrousel }}
          >
            <div style={{ ...projectImagesStyles.imageBox }}>
              <img
                src={imageUrl}
                alt={`Project  ${index}`}
                style={projectImagesStyles.image}
                onClick={(event) => handleImageClick(event, imageUrl)}
              />
            </div>
          </div>
        ))}
      </Carousel>
      {modalOpen && (
        <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProjectImages;
