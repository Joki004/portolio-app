import { SubMenu } from "react-pro-sidebar";
import { CustomIcon } from "./icons";
import { RenderMenuItem } from "../functions/renders";
import { handleClickScroll } from "../functions/function";
export let refs;
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
        key={`sideBarSection-${section.title}`}
        onClick={() => handleClickScroll(section.id)}
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
        {section.subMenu.map((subItem, index) => (
          <div key={subItem.id}>
            {RenderMenuItem(
              subItem,
              true,
              activeTitle,
              collapsed,
              mainColor10Lighter,
              menuItemStyles
            )}
          </div>
        ))}
      </SubMenu>
    ) : (
      <div key={`MenuItem-${section.id}`}>
        {RenderMenuItem(
          section,
          false,
          activeTitle,
          collapsed,
          mainColor10Lighter,
          menuItemStyles
        )}
      </div>
    )
  );
};
export default SideBarSectionsMenus;
