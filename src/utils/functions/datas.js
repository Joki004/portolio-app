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

export const socialLinks = [
  {
    type: 'link', // 'link' or 'email
    href: 'https://www.linkedin.com/in/joki-8b40a7244/',
    icon: 'linkedin',
    backgroundColor: '#0a66c2',
    borderColor: '#0a66c2',
    color: '#ffffff',
    typeIcon: 'logo',
  },
  {
    type:'link', // 'link' or 'email
    href: 'https://github.com/Joki004',
    icon: 'github',
    color: '#000000',
    typeIcon: 'logo',
  },
  {
    type: 'email',
    href: 'jorammumb15.jm@gmail.com',
    icon: 'envelope',
    color: '#000000',
    typeIcon: null,
  },
];