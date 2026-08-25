import React from "react";
import { Box, Chip } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import AnimationRoundedIcon from "@mui/icons-material/AnimationRounded";
import PaletteRoundedIcon from "@mui/icons-material/PaletteRounded";

import { useElements } from "../../utils/functions/context";

import { ReactComponent as DotNetIcon } from "../../assets/svg/NETcore.svg";
import { ReactComponent as SqlServerIcon } from "../../assets/svg/MicrosoftSQLServer.svg";
import { ReactComponent as ReactIcon } from "../../assets/svg/React.svg";
import { ReactComponent as SpringBootIcon } from "../../assets/svg/Spring.svg";
import { ReactComponent as PostgreSQLIcon } from "../../assets/svg/PostgresSQL.svg";
import { ReactComponent as KotlinIcon } from "../../assets/svg/Kotlin.svg";
import { ReactComponent as CSharpIcon } from "../../assets/svg/CSharp.svg";
import {ReactComponent as NextJSIcon} from "../../assets/svg/NextJS.svg";
import { ReactComponent as PostmanIcon } from "../../assets/svg/Postman.svg";
import { ReactComponent as SwaggerIcon } from "../../assets/svg/Swagger.svg";
import {ReactComponent as ExpoIcon} from "../../assets/svg/Expo.svg";
import {ReactComponent as PythonIcon} from "../../assets/svg/Python.svg";

import { ReactComponent as AndroidIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-android.svg";
import { ReactComponent as FirebaseIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-firebase.svg";
import { ReactComponent as GitHubIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-github.svg";
import { ReactComponent as HtmlIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-html5.svg";
import { ReactComponent as CssIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-css3.svg";
import { ReactComponent as JavaIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-java.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-javascript.svg";
import { ReactComponent as NodeIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-nodejs.svg";
import { ReactComponent as TypeScriptIcon } from "../../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-typescript.svg";

const iconStyle = {
  width: 20,
  height: 20,
  flexShrink: 0,
};

const svgIcon = (component) => (
  <Box component={component} sx={iconStyle} />
);

const technologyIcons = {
  React: svgIcon(ReactIcon),
  "React Native": svgIcon(ReactIcon),
  "Next.js": svgIcon(NextJSIcon),
  "Next.js API": svgIcon(NextJSIcon),
  JavaScript: svgIcon(JavaScriptIcon),
  TypeScript: svgIcon(TypeScriptIcon),
  HTML: svgIcon(HtmlIcon),
  CSS: svgIcon(CssIcon),
  NodeJs: svgIcon(NodeIcon),
  "Node.js": svgIcon(NodeIcon),
  Java: svgIcon(JavaIcon),
  JavaFX: svgIcon(JavaIcon),
  FXML: <CodeRoundedIcon sx={iconStyle} />,
  Android: svgIcon(AndroidIcon),
  Firebase: svgIcon(FirebaseIcon),
  "Firebase Authentication": svgIcon(FirebaseIcon),
  "Firebase Realtime Database": svgIcon(FirebaseIcon),
  NoSQL: <StorageRoundedIcon sx={iconStyle} />,
  Postman: svgIcon(PostmanIcon),
  Swagger: svgIcon(SwaggerIcon),
  GitHub: svgIcon(GitHubIcon),
  ".NET": svgIcon(DotNetIcon),
  "ASP.NET Core": svgIcon(DotNetIcon),
  "Blazor WebAssembly": svgIcon(DotNetIcon),
  "Entity Framework Core": svgIcon(DotNetIcon),
  "SQL Server": svgIcon(SqlServerIcon),
  "Spring Boot": svgIcon(SpringBootIcon),
  PostgreSQL: svgIcon(PostgreSQLIcon),
  Postgresql: svgIcon(PostgreSQLIcon),
  Kotlin: svgIcon(KotlinIcon),
  "C#": svgIcon(CSharpIcon),
  Room: <StorageRoundedIcon sx={iconStyle} />,
  ViewModel: <AccountTreeRoundedIcon sx={iconStyle} />,
  LiveData: <AccountTreeRoundedIcon sx={iconStyle} />,
  "Material UI": <PaletteRoundedIcon sx={iconStyle} />,
  "Framer Motion": <AnimationRoundedIcon sx={iconStyle} />,
  Expo: svgIcon(ExpoIcon),
  Python: svgIcon(PythonIcon),
};

export const Technologies = ({
  technologies = [],
  justifyContent = "flex-start",
  limit,
}) => {
  const { darkMode } = useElements();
  const visibleTechnologies = limit
    ? technologies.slice(0, limit)
    : technologies;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent,
        gap: "8px",
      }}
    >
      {visibleTechnologies.map((technology) => (
        <Chip
          key={technology}
          size="small"
          label={technology}
          icon={technologyIcons[technology] || <CodeRoundedIcon sx={iconStyle} />}
          sx={{
            minHeight: 32,
            maxWidth: "100%",
            paddingRight: "3px",
            borderRadius: "999px",
            color: darkMode ? "rgba(255,255,255,0.9)" : "#344054",
            backgroundColor: darkMode
              ? "rgba(255,255,255,0.09)"
              : "#eef1f8",
            fontWeight: 650,
            "& .MuiChip-icon": {
              marginLeft: "8px",
            },
          }}
        />
      ))}
    </Box>
  );
};