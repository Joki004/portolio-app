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
  const { color, updateColor, subtitle2 } = useElementsColor();
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
    button: {
      // the active class will be added automatically by react router
      // so we can use it to style the active menu item
      [`&.active`]: {
        backgroundColor: "#13395e",
        color: "#b6c8d9",
      },
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
        style={{ ...sideBarstyle, paddingLeft: "10px" ,backgroundColor:color}}
        collapsed={collapsed}
        defaultCollapsed={true}
        image={image}
      >
        <Menu
          menuItemStyles={{
            menuItemStyles,
          }}
        >
          <SideBarHeader boxsize={boxsize} collapsed={collapsed}>
            My portfolio
          </SideBarHeader>
          <Typography variant="body2" fontWeight={800} color={subtitle2}>
            General
          </Typography>
          <div className="MenuItemsClass">
            <MenuItem
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              icon={
                <CustomIcon
                  size="30px"
                  iconName={"HomeIcon"}
                  boxsize={boxsize}
                />
              }
            >
              {" "}
              Home{" "}
            </MenuItem>
            <MenuItem
              icon={
                <CustomIcon
                  size="30px"
                  iconName={"HomeIcon"}
                  boxsize={boxsize}
                />
              }
            >
              {" "}
              About{" "}
            </MenuItem>
          </div>
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
