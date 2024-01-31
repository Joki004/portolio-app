import React,{useState}from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {useElementsColor} from "../utils/functions/context";
const LandingPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {color, updateColor} = useElementsColor();
  return (
  
      <Sidebar 
      style = {{backgroundColor: color}}
      collapsed={collapsed}
      defaultCollapsed={true} >
        <div style={{ color: color }}>
      
      <button onClick={() => updateColor('var(--secondary-color)')}>Change Color</button>
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
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
  );
};

export default LandingPage;
