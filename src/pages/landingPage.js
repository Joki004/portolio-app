import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useElementsColor } from "../utils/functions/context";
import { CustomIcon } from "../utils/components/icons";
const LandingPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { color, updateColor } = useElementsColor();
  let boxsize = "50px";
  let sideBarstyle = {
    height: "100vh",
    postion: "absolute",
  };
  return (
    <Sidebar
      style={{ ...sideBarstyle, backgroundColor: color }}
      collapsed={collapsed}
      defaultCollapsed={true}
    >
      <div style={{ color: color }}>
        <button onClick={() => updateColor("var(--secondary-color)")}>
          Change Color
        </button>
      </div>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem
          icon={
            <CustomIcon size="30px" iconName={"HomeIcon"} boxsize={boxsize} />
          }
        >
          {" "}
          Home{" "}
        </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default LandingPage;
