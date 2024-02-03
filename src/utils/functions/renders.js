import { MenuItem } from "react-pro-sidebar";

import { CustomIcon } from "../components/icons";

export const renderMenuItem = (item, isSubMenu = false, activeTitle, collapsed, mainColor10Lighter, menuItemStyles) => {
  

  return (
    <MenuItem
      key={item.title}
      style={{
        ...menuItemStyles.MenuItem,
        marginTop: isSubMenu ? "0" : "20px",
      }}
      icon={
        <CustomIcon
          size={parseInt(menuItemStyles.size.IconSize) + (isSubMenu ? 0 : 20)}
          boxsize={parseInt(menuItemStyles.size.IconBorder) + (isSubMenu ? 0 : 10)}
          sectionId={item.id}
          iconName={item.icon}
          isSectionActive={activeTitle === item.id}
          collapsed={collapsed}
          colorIcon={mainColor10Lighter}
        />
      }
      onClick={item.onClick || (() => {})}
    >
      {item.label}
    </MenuItem>
  );
};
