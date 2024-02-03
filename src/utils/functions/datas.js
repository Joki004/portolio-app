let text = "";
export  const sideBarSections = [
  {
    title: "Home",
    id: "Home",
    content: text,
    icon: "HomeIcon",
    label: "Home",
  },
  {
    title: "About me",
    id: "AboutMe",
    content: text,
    icon: "aboutIcon",
    label: "About",
    subMenu: [
      {
        title: "About me",
        id: "AboutMe",
        content: text,
        icon: "aboutIcon",
        label: "About me",
      },
      {
        title: "Education Experience",
        id: "EducationExperience",
        content: text,
        icon: "educationIcon",
        label: "Education Experience",
      },
    ],
  },
  {
    title: "Projects",
    id: "Projects",
    content: text,
    icon: "workIcon",
    label: "Projects",
  },
  {
    title: "Skills",
    id: "Skills",
    content: text,
    icon: "bugIcon",
    label: "Skills",
  },
  {
    title: "Contact",
    id: "Contact",
    content: text,
    icon: "emailIcon",
    label: "Get in touch",
  },
];