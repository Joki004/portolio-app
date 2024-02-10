import { useElements } from "../../utils/functions/context";    
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { useState } from "react";
const ProjectImages = (images) => {
    const { mainColor10Lighter } = useElements();
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
        height: "500px",
  
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
      },
    };
    const [autoplay, setAutoplay] = useState(true);
    const toggleAutoplay = () => {
      setAutoplay(!autoplay);
    };
    const { images: imageArray } = images;
  
    return (
      <div style={{ ...projectImagesStyles.box }}>
        <Carousel
          showThumbs={false}
          showStatus={true}
          showArrows={true}
          showIndicators={false}
          autoPlay={autoplay}
          interval={6000}
          infiniteLoop
          stopOnHover
          style={{ border: "1px solid red" }}
        >
          {imageArray.map((imageUrl, index) => (
            <div key={index} style={{ ...projectImagesStyles.carrousel }}>
              <div style={{ ...projectImagesStyles.imageBox }}>
                <img
                  src={imageUrl}
                  alt={`Project  ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    margin: "0 auto",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          ))}
        </Carousel>
  
       
      </div>
    );
  };

  export default ProjectImages;