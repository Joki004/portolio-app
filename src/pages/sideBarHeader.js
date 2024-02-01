import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Typography } from "../utils/components/typography";
import { CustomIcon } from "../utils/components/icons";
import { useElementsColor } from "../utils/functions/context";

const SideBarHeader = ({ children, boxsize, collapsed, size, color }) => {
  const { mainColor,mainColor10Lighter } = useElementsColor();
  const sideBarHeaderStyle = {
    marginTop: "10px",
    marginBottom: "20px",
    marginRight: "10px",
    marginLeft: collapsed === true ? "5px" : "10px",
    maxwidth: "100%",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    gap: "10px",
  };
  const sideBarHeaderMenuStyle = {
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    border: "1px solid black",
  };
  return (
    <div style={{ ...sideBarHeaderStyle }}>
      <div>
        <CustomIcon
          size={size}
          iconName={"qrCodeIcon"}
          boxsize={boxsize}
          collapsed={false}
          colorIcon={mainColor}
        />
      </div>
      {collapsed === true ? null : (
        <Typography variant="h6" fontWeight={800} color={mainColor10Lighter}>
          {children}
        </Typography>
      )}
    </div>
  );
};

export default SideBarHeader;
