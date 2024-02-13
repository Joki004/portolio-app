import React, { useEffect, useState } from "react";
import SideBar from "../sideBar/sideBar";
import Informations from "../informations";
import { AnimatePresence } from "framer-motion";
import { useElements } from "../../utils/functions/context";
import { getBackground, getTextColor } from "../../utils/functions/function";
import { ReactComponent as MenuIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-menu.svg";

const Body = () => {
  const { darkMode, backgroundColorBody, windowWidth } = useElements();
  const [textColor, setTextColor] = useState(
    getTextColor(darkMode, backgroundColorBody)
  );
  const [showSidebar, setShowSidebar] = useState(windowWidth >= 700);
  useEffect(() => {
    setTextColor(getTextColor(darkMode, backgroundColorBody));

    const handleResize = () => setShowSidebar(window.innerWidth >= 700);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [backgroundColorBody, darkMode]);

  const toggleSidebar = (event) => {
    event.stopPropagation();
    setShowSidebar(!showSidebar);
  };

  const handlePageClick = (e) => {
    if (e.target.id !== "sidebar-toggle" && windowWidth < 700) {
      setShowSidebar(false);
    }
  };

  function getsidebarStyles() {
    if (windowWidth < 700) {
      return {
        position: "fixed",
        height: "100%",
        width: "250px",
        left: showSidebar ? "0" : "-250px",
        top: "0",
        transition: "left 0.5s ease-in-out",
        display: "flex",
        flexDirection: "column",
        zIndex: "99",
      };
    } else {
      return null;
    }
  }
  const sidebarStyles = getsidebarStyles();

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
      backgroundColor: getBackground(darkMode, backgroundColorBody),
      color: textColor,
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
    sidebarButton: {
      position: "fixed",
      top: "15px",
      left: "15px",

      zIndex: "100",
      cursor: "pointer",
      display: windowWidth < 700 ? "block" : "none", // Only display the button on smaller screens
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

        <div
          id="sidebar-toggle"
          onClick={toggleSidebar}
          style={BodyStyle.sidebarButton}
        >
          <MenuIcon
            style={{
              fill: darkMode ? "white" : "black",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div style={{ ...sidebarStyles }}>{showSidebar && <SideBar />}</div>

        <div style={{ ...BodyStyle.container }} onClick={handlePageClick}>
          <Informations />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Body;
