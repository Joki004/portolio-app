import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useElementsColor } from "../utils/functions/context";
import { CustomIcon } from "../utils/components/icons";
import "../pages/sideBar.css";
import SideBarHeader from "../pages/sideBarHeader";
import { Typography } from "../utils/components/typography";
import { SettingModal } from "../utils/functions/function";

const ImageLinks = {
  image1:
    "https://images.unsplash.com/photo-1701086292958-f753f3bb5d27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    mainColor,
    mainColor10Lighter,
    mainColor20Lighter,
    updateColor,
    subtitle2,
    chevronBackground,
  } = useElementsColor();
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {}, [collapsed]);
  let sideBarstyle = {
    height: "100vh",
    postion: "absolute",
  };
  let sideBarCss = {
    display: "flex",
    height: "100vh",
    maxWidth: "max-content",
  };
  const sideBarcollapseDiv = {
    width: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: chevronBackground,
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
      IconSize: "20px",
      IconBorder: "20px",
      logoSize: "50px",
      logoBoxsize: "50px",
      subIconSize: "15px",
      subIconBorder: "15px",
    },
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
    console.log(collapsed);
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
          backgroundColor: mainColor,
          borderColor: chevronBackground,
        }}
        collapsed={collapsed}
        image={image}
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
            <MenuItem
              style={{
                ...menuItemStyles.MenuItem,
              }}
              icon={
                <CustomIcon
                  size={menuItemStyles.size.IconSize}
                  iconName={"HomeIcon"}
                  boxsize={menuItemStyles.size.IconBorder}
                  collapsed={collapsed}
                  colorIcon={mainColor10Lighter}
                />
              }
            >
              {" "}
              Home{" "}
            </MenuItem>

            <SubMenu
              icon={
                <CustomIcon
                  size={menuItemStyles.size.IconSize}
                  iconName={"aboutIcon"}
                  boxsize={menuItemStyles.size.IconBorder}
                  collapsed={collapsed}
                  colorIcon={mainColor10Lighter}
                />
              }
              style={{ ...menuItemStyles.MenuItem }}
              label="About"
            >
              <MenuItem
                icon={
                  <CustomIcon
                    size={menuItemStyles.size.subIconSize}
                    iconName={"aboutIcon"}
                    boxsize={menuItemStyles.size.subIconBorder}
                    collapsed={collapsed}
                    colorIcon={mainColor10Lighter}
                  />
                }
                style={{ ...menuItemStyles.MenuItem }}
              >
                {" "}
                About me{" "}
              </MenuItem>
              <MenuItem
                icon={
                  <CustomIcon
                    size={menuItemStyles.size.IconSize}
                    iconName={"educationIcon"}
                    boxsize={menuItemStyles.size.subIconBorder}
                    collapsed={collapsed}
                    colorIcon={mainColor10Lighter}
                  />
                }
                style={{ ...menuItemStyles.MenuItem }}
              >
                {" "}
                Education Experience{" "}
              </MenuItem>
            </SubMenu>

            <MenuItem
              style={{
                ...menuItemStyles.MenuItem,
              }}
              icon={
                <CustomIcon
                  size={menuItemStyles.size.IconSize}
                  iconName={"workIcon"}
                  boxsize={menuItemStyles.size.IconBorder}
                  collapsed={collapsed}
                  colorIcon={mainColor10Lighter}
                />
              }
            >
              {" "}
              projects{" "}
            </MenuItem>

            <MenuItem
              style={{
                ...menuItemStyles.MenuItem,
              }}
              icon={
                <CustomIcon
                  size={menuItemStyles.size.IconSize}
                  iconName={"bugIcon"}
                  boxsize={menuItemStyles.size.IconBorder}
                  collapsed={collapsed}
                  colorIcon={mainColor10Lighter}
                />
              }
            >
              {" "}
              Skills{" "}
            </MenuItem>

            <MenuItem
              style={{
                ...menuItemStyles.MenuItem,
              }}
              icon={
                <CustomIcon
                  size={menuItemStyles.size.IconSize}
                  iconName={"emailIcon"}
                  boxsize={menuItemStyles.size.IconBorder}
                  collapsed={collapsed}
                  colorIcon={mainColor10Lighter}
                />
              }
            >
              {" "}
              Get in touch{" "}
            </MenuItem>
          </div>
          <div style={{ ...menuDivs.socialBox }}>
            {collapsed === false ? (
              <div style={{ ...menuDivs.socials }}>
                <Typography variant="body1" fontWeight={700} color={subtitle2}>
                  Socials
                </Typography>
                <div style={{ ...menuDivs.socialsLinksBox }}>
                  <a
                    style={{
                      ...menuDivs.socialsLinks,
                      backgroundColor: "#0a66c2",
                      borderColor: "#0a66c2",
                    }}
                    href="https://www.linkedin.com/in/joki-8b40a7244/"
                    target="_blank"
                  >
                    <box-icon
                      type="logo"
                      size={"30px"}
                      name="linkedin"
                      color="#fff"
                    ></box-icon>
                  </a>
                  <a
                    style={{ ...menuDivs.socialsLinks }}
                    href="https://github.com/Joki004"
                    target="_blank"
                  >
                    {" "}
                    <box-icon
                      name="github"
                      size={"30px"}
                      type="logo"
                    ></box-icon>
                  </a>
                  <a
                    style={{ ...menuDivs.socialsLinks }}
                    href="mailto:jorammumb15.jm@gmail.com"
                    target="_blank"
                  >
                    {" "}
                    <box-icon name="envelope" size={"30px"}></box-icon>
                  </a>
                </div>
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

        <div style={{ color: mainColor10Lighter }}>
          <button
            onClick={() => updateColor("var(--primary-color)")}
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Change Color 1
          </button>
          <button
            onClick={() => updateColor("var(--secondary-color)")}
            style={{ backgroundColor: "var(--secondary-color)" }}
          >
            Change Color 2
          </button>
        </div>
      </Sidebar>

      <div className={"sideBarcollapse"} style={{ ...sideBarcollapseDiv }}>
        <div
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
        </div>
        <div
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
        </div>
      </div>
    </div>
  );
};

export default SideBar;
