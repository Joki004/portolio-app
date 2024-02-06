import { determineSidebarColor } from "../../utils/functions/function";
export const getMenuItemStyles = (collapsed,sideBarBackgroundMode,mainColor,darkMode) => {
    return {
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
        backgroundColor: determineSidebarColor(sideBarBackgroundMode,mainColor,darkMode),
      },
    };
  };
  

  