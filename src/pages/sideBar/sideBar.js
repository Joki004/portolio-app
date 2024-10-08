import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
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
import { sideBarSections } from "../../utils/datas";
import SocialLinks from "../../utils/components/socialLinks";
import SideBarSectionsMenus from "../../utils/components/sideBarSectionsMenus";
import { ImageLinks } from "../../utils/datas";
import Chevron from "./chevron";



const SideBar = () => {
  const [collapsed, setCollapsed] = useLocalStorageState("collapsed", false);
  const {
    mainColor,
    mainColor10Lighter,
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
    //HandleChevronDisplay();
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

                <SocialLinks
                  backgroundColorBox={
                    sideBarBackgroundMode === "regular"
                      ? "black"
                      : "transparent"
                  }
                />
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
      <div className="sideBarcollapse" style={{ ...sideBarcollapseDiv }}>
        <Chevron handleCollapsed={handleCollapsed} collapsed={collapsed} />
      </div>
    </div>
  );
};

export default SideBar;
