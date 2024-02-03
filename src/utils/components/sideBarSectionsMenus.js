import { SubMenu } from "react-pro-sidebar";
import { CustomIcon } from "./icons";
import { renderMenuItem } from "../functions/renders";

const SideBarSectionsMenus = ({
  sideBarSections,
  activeTitle,
  collapsed,
  mainColor10Lighter,
  menuItemStyles,
}) => {
  return sideBarSections.map((section) =>
    section.subMenu ? (
      <SubMenu
        style={{ ...menuItemStyles.MenuItem }}
        key={section.title}
        icon={
          <CustomIcon
            size={menuItemStyles.size.IconSize}
            iconName={section.icon}
            isSectionActive={activeTitle === section.id}
            boxsize={menuItemStyles.size.IconBorder}
            collapsed={collapsed}
            colorIcon={mainColor10Lighter}
            sectionId={section.id}
          />
        }
        label={section.title}
      >
        {section.subMenu.map((subItem) =>
          renderMenuItem(
            subItem,
            true,
            activeTitle,
            collapsed,
            mainColor10Lighter,
            menuItemStyles
          )
        )}
      </SubMenu>
    ) : (
      renderMenuItem(
        section,
        false,
        activeTitle,
        collapsed,
        mainColor10Lighter,
        menuItemStyles
      )
    )
  );
};
export default SideBarSectionsMenus;
