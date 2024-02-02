import React from "react";
import { Typography } from "../../utils/components/typography";
import { CustomIcon } from "../../utils/components/icons";
import { useElements } from "../../utils/functions/context";

const SideBarHeader = ({ children, boxsize, collapsed, size, color }) => {
  const { mainColor, mainColor10Lighter } = useElements();
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
