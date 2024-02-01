import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useElementsColor } from "../utils/functions/context";
import { CustomIcon } from "../utils/components/icons";
import "../pages/sideBar.css";
import SideBarHeader from "../pages/sideBarHeader";
import { Typography } from "../utils/components/typography";

const ImageLinks = {
  image1:
    "https://images.unsplash.com/photo-1701086292958-f753f3bb5d27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { color, updateColor, subtitle2, outlineColor } = useElementsColor();
  const [image, setImage] = useState(null);

  useEffect(() => {}, [collapsed]);
  let boxsize = "50px";
  let sideBarstyle = {
    height: "100vh",
    postion: "absolute",
  };
  let sideBarCss = {
    display: "flex",
    height: "100vh",
    border: "1px solid black",
    maxWidth: "max-content",
  };
  const sideBarcollapseDiv = {
    width: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
      border: "1px solid red",
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
      height: "60px",
      width: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      borderRadius: "8px",
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
        style={{ ...sideBarstyle, paddingLeft: "10px", backgroundColor: color }}
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
            color={outlineColor}
          >
            My portfolio
          </SideBarHeader>
          <div style={{height:"50px"}}>
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
                  colorIcon={outlineColor}
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
                  colorIcon={outlineColor}
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
                    colorIcon={outlineColor}
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
                    colorIcon={outlineColor}
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
                  colorIcon={outlineColor}
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
                  colorIcon={outlineColor}
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
                  colorIcon={outlineColor}
                />
              }
            >
              {" "}
              Get in touch{" "}
            </MenuItem>
          </div>
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
                    size={"50px"}
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
                  <box-icon name="github" size={"50px"} type="logo"></box-icon>
                </a>
                <a
                  style={{ ...menuDivs.socialsLinks }}
                  href="mailto:jorammumb15.jm@gmail.com"
                  target="_blank"
                >
                  {" "}
                  <box-icon name="envelope" size={"50px"}></box-icon>
                </a>
              </div>
            </div>
          ) : null}

          {collapsed === false ? (
            <Typography variant="body1" fontWeight={700} color={subtitle2}>
              Settings
            </Typography>
          ) : null}
          <MenuItem
            style={{
              ...menuItemStyles.MenuItem,
              position: "absolute",
            }}
            icon={
              <CustomIcon
                size={menuItemStyles.size.IconSize}
                iconName={"settingsIcon"}
                boxsize={menuItemStyles.size.IconBorder}
                collapsed={collapsed}
                colorIcon={outlineColor}
              />
            }
          >
            {" "}
            Setings{" "}
          </MenuItem>
        </Menu>

        <div style={{ color: color }}>
          <button onClick={() => updateColor("var(--secondary-color)")}>
            Change Color
          </button>
        </div>
      </Sidebar>

      <div className={"sideBarcollapse"} style={{ ...sideBarcollapseDiv }}>
        <div className="chevronLeft .chevron" onClick={handleCollapsed}>
          <box-icon
            type="solid"
            name="chevron-left"
            animation={"fade-left-hover"}
          ></box-icon>
        </div>
        <div className="chevronRight .chevron" onClick={handleCollapsed}>
          <box-icon
            type="solid"
            name="chevron-right"
            animation={"fade-right-hover"}
          ></box-icon>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
