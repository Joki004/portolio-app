import { MenuItem } from "react-pro-sidebar";
import { handleClickScroll } from "./function";
import { CustomIcon } from "../components/icons";
import { useElements } from "./context";

export const RenderMenuItem = (
  item,
  isSubMenu = false,
  activeTitle,
  collapsed,
  mainColor10Lighter,
  menuItemStyles
) => {
  const { setShowSidebar } = useElements();
  const handleOnClick = (id) => {
    handleClickScroll(id);
    setShowSidebar(false);
  };
  return (
    <MenuItem
      id={`sideBarSection-${item.title}`}
      style={{
        ...menuItemStyles.MenuItem,
        marginTop: isSubMenu ? "0" : "20px",
      }}
      onClick={() => handleOnClick(item.id)}  
      icon={
        <CustomIcon
          size={parseInt(menuItemStyles.size.IconSize) + (isSubMenu ? 0 : 20)}
          boxsize={
            parseInt(menuItemStyles.size.IconBorder) + (isSubMenu ? 0 : 10)
          }
          sectionId={item.id}
          iconName={item.icon}
          isSectionActive={activeTitle === item.id}
          collapsed={collapsed}
          colorIcon={mainColor10Lighter}
        />
      }
      
    >
      {item.label}
    </MenuItem>
  );
};
