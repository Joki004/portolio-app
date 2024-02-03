import React from "react";
import { socialLinks } from "../functions/datas";

const socialsLinksStyle = {
  socials: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    height: "100px",
  },
  socialsLinksBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
  },
  socialsLinks: {
    border: "1px solid black",
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "8px",
  },
  titleBox: { padding: "10px", height: "20px" },
  socialBox: {
    height: "110px",
  },
};

function determineHeref(link){
  if(link.type === 'email'){
    return `mailto:${link.href}`;
  }
  return link.href;
}
const SocialLinks = ({size='30px'}) => {
  return (
    <div style={{ ...socialsLinksStyle.socialsLinksBox }}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          style={{
            ...socialsLinksStyle.socialsLinks,
            backgroundColor: link.backgroundColor || "",
            borderColor: link.borderColor || "black",
          }}
          href={determineHeref(link)}
          target="_blank"
          rel="noreferrer"
        >
          <box-icon
            type={link.typeIcon}
            size={size}
            name={link.icon}
            color={link.color}
          ></box-icon>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
