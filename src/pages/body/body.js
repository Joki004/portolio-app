import React from "react";
import SideBar from "../sideBar/sideBar";
import Informations from "../informations";
import { AnimatePresence } from "framer-motion";

const Body = () => {
  const BodyStyle = {
    body: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      height: "95%",
      backgroundColor: "white",
    },
    container: {
     
      maxWidth: "100vw",
      
      height: "100vh",
      overflow: "auto",
      scrollbar: {
        width: "5px", 
      },
      scrollbarThumb: {
        backgroundColor: "#888", 
        borderRadius: "4px", 
      },
      scrollbarTrack: {
        backgroundColor: "#f1f1f1", 
      },
    },
  };

  


  return (
    <AnimatePresence>
      <div style={{ ...BodyStyle.body }}>
        <style>
          {`
          ::-webkit-scrollbar {
            width: ${BodyStyle.container.scrollbar.width};
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${BodyStyle.container.scrollbarThumb.backgroundColor};
            border-radius: ${BodyStyle.container.scrollbarThumb.borderRadius};
          }

          ::-webkit-scrollbar-track {
            background-color: ${BodyStyle.container.scrollbarTrack.backgroundColor};
          }
        `}
        </style>
        <SideBar />
        <div style={{ ...BodyStyle.container }}>
          <Informations />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Body;
