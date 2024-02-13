import React from "react";
import { socialLinks } from "../datas";
import { AnimatePresence, motion } from "framer-motion";
import { useElements } from "../functions/context";
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

function determineHeref(link) {
  if (link.type === "email") {
    return `mailto:${link.href}`;
  }
  return link.href;
}
const SocialLinks = ({ size = "30px", backgroundColorBox = "transparent" }) => {
  const { mainColor20Lighter, darkMode,backgroundColorBody } = useElements();
  socialsLinksStyle.socialsLinks.height = parseInt(size) + 10;
  socialsLinksStyle.socialsLinks.width = parseInt(size) + 10;

  function determineIconColor(){
    if(darkMode || backgroundColorBody === "paralax"){
      return "white";
    }
    return "black";
  }
  return (
    <AnimatePresence>
      <div style={{ ...socialsLinksStyle.socialsLinksBox }}>
        {socialLinks.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{
              scale: 0.8,
              rotate: -20,
              borderRadius: "100%",
            }}
          >
            <a
              key={index}
              style={{
                ...socialsLinksStyle.socialsLinks,
                backgroundColor: backgroundColorBox,
                borderColor: mainColor20Lighter,
              }}
              href={determineHeref(link)}
              target="_blank"
              rel="noreferrer"
            >
              {link.SvgComponent && (
                <link.SvgComponent
                  style={{
                    width: size,
                    height: size,
                    fill: determineIconColor(),
                  }}
                />
              )}
            </a>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default SocialLinks;
