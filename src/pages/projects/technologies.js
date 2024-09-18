import React from "react";
import { Chip, Box } from "@mui/material";
import { useElements } from "../../utils/functions/context";
import { getFontsizeContent } from "../../utils/functions/function";
import JavaScriptIcon from "@mui/icons-material/Javascript";
import HTMLIcon from "@mui/icons-material/Html";
import CSSIcon from "@mui/icons-material/Style";
import NodeIcon from "@mui/icons-material/Storage";
import { ReactComponent as DotNetIcon } from "../../assets/svg/NETcore.svg";
import { ReactComponent as SqlServerIcon } from "../../assets/svg/MicrosoftSQLServer.svg";
import { ReactComponent as ReactNativeIcon } from "../../assets/svg/React.svg";
import { ReactComponent as SrpingBootIcon } from "../../assets/svg/Spring.svg";
import { ReactComponent as PostgreSQLIcon } from "../../assets/svg/PostgresSQL.svg";
import { ReactComponent as KotlinIcon } from "../../assets/svg/Kotlin.svg";
import { ReactComponent as CSharpeIcon } from "../../assets/svg/CSharp.svg";
export const Technologies = ({ technologies }) => {
  const { darkMode } = useElements();
  const techIcons = {
    React: <Box component={ReactNativeIcon} sx={{ width: 24, height: 24 }} />,
    "React Native": (
      <Box component={ReactNativeIcon} sx={{ width: 24, height: 24 }} />
    ),
    JavaScript: (
      <Box component={JavaScriptIcon} sx={{ width: 24, height: 24 }} />
    ),
    HTML: <Box component={HTMLIcon} sx={{ width: 24, height: 24 }} />,
    CSS: <Box component={CSSIcon} sx={{ width: 24, height: 24 }} />,
    NodeJs: <Box component={NodeIcon} sx={{ width: 24, height: 24 }} />,
    ".NET": <Box component={DotNetIcon} sx={{ width: 24, height: 24 }} />,
    "SQL Server": (
      <Box component={SqlServerIcon} sx={{ width: 24, height: 24 }} />
    ),
    "Spring Boot": (
      <Box component={SrpingBootIcon} sx={{ width: 24, height: 24 }} />
    ),
    Postgresql: (
      <Box component={PostgreSQLIcon} sx={{ width: 24, height: 24 }} />
    ),
    Kotlin: <Box component={KotlinIcon} sx={{ width: 24, height: 24 }} />,
    "C#": <Box component={CSharpeIcon} sx={{ width: 24, height: 24 }} />,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",

        justifyContent: "center",
        fontSize: getFontsizeContent("body1"),
      }}
    >
      {technologies.map((technology, idx) => (
        <Chip
          key={`technology-${idx}`}
          label={technology}
          icon={techIcons[technology] || null}
          sx={{
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "#b4bbbb",
            color: darkMode ? "black" : "white",
            maxWidth: "150px",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        />
      ))}
    </Box>
  );
};
