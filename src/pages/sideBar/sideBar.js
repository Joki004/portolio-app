import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import { useElements } from "../../utils/functions/context";
import { CustomIcon } from "../../utils/components/icons";
import "../sideBar/sideBar.css";
import SideBarHeader from "./sideBarHeader";
import { Typography } from "../../utils/components/typography";
import { SettingModal } from "../../utils/components/settingModal";
import {
  useLocalStorageState,
  determineSidebarColor,
} from "../../utils/functions/function";
import { sideBarSections } from "../../utils/functions/datas";

import SocialLinks from "../../utils/components/socialLinks";
import SideBarSectionsMenus from "../../utils/components/sideBarSectionsMenus";


const ImageLinks = {
  image1:
    "https://images.unsplash.com/photo-1701086292958-f753f3bb5d27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useLocalStorageState("collapsed", false);
  const {
    mainColor,
    mainColor10Lighter,
    mainColor20Lighter,
    subtitle2,
    chevronBackground,
    sideBarBackgroundMode,
    darkMode,
    activeTitle,
  } = useElements();
  // const [image, setImage] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const determineSidebarColorChevron = () => {
    if (sideBarBackgroundMode === "color") {
      return chevronBackground;
    } else if (
      sideBarBackgroundMode === "image" ||
      sideBarBackgroundMode === "regular"
    ) {
      return darkMode ? "#b9b9b9" : "var(--light-theme-app-bar)";
    } else {
      return "var(--light-theme-app-bar)";
    }
  };

  useEffect(() => {}, [collapsed]);
  let sideBarstyle = {
    height: "100vh",
  };
  let sideBarCss = {
    display: "flex",
    height: "100vh",
    maxWidth: "max-content",
  };

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    button: {
      // the active class will be added automatically by react router
      // so we can use it to style the active menu item
      [`&.active`]: {
        backgroundColor: "#13395e",
        color: "#b6c8d9",
      },
    },
    MenuItem: {
      height: "50px",

      marginTop: "10px",
      fontSize: "15px",
    },
    size: {
      IconSize: collapsed ? "40px" : "35px",
      IconBorder: collapsed ? "40px" : "35px",
      logoSize: "50px",
      logoBoxsize: "50px",
      subIconSize: "30px",
      subIconBorder: "30px",
    },
    sideBarBackground: {
      backgroundColor: determineSidebarColor(
        sideBarBackgroundMode,
        mainColor,
        darkMode
      ),
    },
  };
  const sideBarcollapseDiv = {
    width: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: determineSidebarColorChevron(),
    borderRight: "1px solid",
    borderColor: chevronBackground,
  };

  const menuDivs = {
    socials: {
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      height: "100px",
    },
    socialsLinksBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      padding: "10px",
    },
    socialsLinks: {
      border: "1px solid black",
      height: "40px",
      width: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      borderRadius: "8px",
    },
    titleBox: { padding: "10px", height: "20px" },
    socialBox: {
      height: "110px",
    },
  };

  /*-------------------------------handle functions------------------------- */

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
    HandleChevronDisplay();
  };

  const HandleChevronDisplay = () => {
    let chevronLeft = document.querySelector(".chevronLeft");
    let chevronRight = document.querySelector(".chevronRight");
    if (!collapsed) {
      chevronLeft.style.display = "none";
      chevronRight.style.display = "flex";
    } else {
      chevronLeft.style.display = "flex";
      chevronRight.style.display = "none";
    }
  };

  return (
    <div className="SideBar" style={{ ...sideBarCss }}>
      <Sidebar
        style={{
          ...sideBarstyle,
          backgroundColor: menuItemStyles.sideBarBackground.backgroundColor,
          borderColor: chevronBackground,
          borderRight: "none",
        }}
        collapsed={collapsed}
        image={sideBarBackgroundMode === "image" ? ImageLinks.image1 : null}
        transitionDuration={500}
      >
        <Menu
          menuItemStyles={{
            menuItemStyles,
          }}
        >
          <SideBarHeader
            size={menuItemStyles.size.logoSize}
            boxsize={menuItemStyles.size.logoBoxsize}
            collapsed={collapsed}
            color={mainColor10Lighter}
          >
            My portfolio
          </SideBarHeader>

          <div style={{ ...menuDivs.titleBox }}>
            {collapsed === false ? (
              <Typography variant="body1" fontWeight={700} color={subtitle2}>
                General
              </Typography>
            ) : null}
          </div>

          <div className="MenuItemsClass">
           
            <SideBarSectionsMenus
              sideBarSections={sideBarSections}
              activeTitle={activeTitle}
              collapsed={collapsed}
              mainColor10Lighter={mainColor10Lighter}
              menuItemStyles={menuItemStyles}
            />
          </div>

          <div style={{ ...menuDivs.socialBox }}>
            {collapsed === false ? (
              <div style={{ ...menuDivs.socials }}>
                <Typography variant="body1" fontWeight={700} color={subtitle2}>
                  Socials
                </Typography>

                <SocialLinks />
              </div>
            ) : null}
          </div>

          <div style={{ ...menuDivs.titleBox }}>
            {" "}
            {collapsed === false ? (
              <Typography variant="body1" fontWeight={700} color={subtitle2}>
                Settings
              </Typography>
            ) : null}
          </div>

          <MenuItem
            style={{
              ...menuItemStyles.MenuItem,
              marginTop: "20px",
            }}
            icon={
              <CustomIcon
                size={parseInt(menuItemStyles.size.IconSize) + 20}
                iconName={"settingsIcon"}
                boxsize={parseInt(menuItemStyles.size.IconBorder) + 10}
                collapsed={false}
                colorIcon={mainColor10Lighter}
              />
            }
            onClick={() => handleShow()}
          >
            {" "}
            Setings{" "}
          </MenuItem>

          <SettingModal
            show={show}
            handleClose={() => handleClose()}
            handleShow={() => handleShow()}
          />
        </Menu>

        <div style={{ color: mainColor10Lighter }}></div>
      </Sidebar>

      <div className={"sideBarcollapse"} style={{ ...sideBarcollapseDiv }}>
        {collapsed?( <div
          className="chevronLeft .chevron"
          onClick={handleCollapsed}
          style={{ height: "50px", width: "90%" }}
        >
        
          <box-icon
            type="solid"
            name="chevron-left"
            size="50px"
            color={mainColor20Lighter}
            animation={"fade-left-hover"}
          ></box-icon>
        </div>):(<div
          className="chevronRight .chevron"
          onClick={handleCollapsed}
          style={{ height: "50px", width: "90%" }}
        >
          <box-icon
            type="solid"
            name="chevron-right"
            size="50px"
            color={mainColor20Lighter}
            animation={"fade-right-hover"}
          ></box-icon>
        </div>)}
       
        
      </div>
    </div>
  );
};

export default SideBar;
