import Home from "../pages/home/home";
import AboutMe from "../pages/aboutMe/aboutMe";
import Projects from "../pages/projects/projects";
import Skills from "../pages/skills/skills";
import ContactForm from "../pages/contacts/contact";
import { ReactComponent as CppIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-c-plus-plus.svg";
import { ReactComponent as TypeScriptIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-typescript.svg";
import { ReactComponent as CssIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-css3.svg";
import { ReactComponent as HtmlIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-html5.svg";
import { ReactComponent as ReactIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-react.svg";
import { ReactComponent as AngularIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-angular.svg";
import { ReactComponent as JavaIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-java.svg";
import { ReactComponent as PythonIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-python.svg";
import { ReactComponent as NodejsIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-nodejs.svg";
import { ReactComponent as SpringIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-spring-boot.svg";
import { ReactComponent as BootstrapIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-bootstrap.svg";
import { ReactComponent as GithubIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-github.svg";
import { ReactComponent as GitIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-git.svg";
import { ReactComponent as BlenderIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-blender.svg";
import { ReactComponent as UnityIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-unity.svg";
import { ReactComponent as JavascriptIcon  } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-javascript.svg";

const imageURL = require("../../src/assets/images/PictureOfMe.jpg");
const person = {
  firstName: "Joram",
  lastName: "Mumb Mulaj Kambaj",
};

const jobTitle = "Frontend developper";

let aboutmeText1 = `Talking about myself is challenging because I'm enthusiastic about so many things. But if I had to pick one word, it would be "DISCOVERING." I love uncovering new domains, ideas, concepts, or solutions, much like a Swiss Army Knife simplifying complexity into clarity.`;

let aboutmeText2 = `As a third-year computer science student, I'm deeply passionate about programming and eager to grow. I'm open to exploring various fields, including those not directly related to my studies. Proficient in web applications, I actively seek out new technologies to contribute innovative solutions across domains. My ultimate goal is to become a versatile professional, excelling in multiple areas while retaining expertise in programming to become a full-stack developer.`;

let aboutmeText3 = `Outside of academia, I enjoy sports, cuisine, and music, enriching both my personal and professional life. Continuously sharpening my software development skills, I also dedicate time to personal growth, ensuring I'm well-prepared to tackle any challenge.`;

const aboutMeText = {
  aboutmeText1,
  aboutmeText2,
  aboutmeText3,
};

const languageData = [
  { language: "French", proficiency: 100, level: "Native" },
  { language: "Shwahili", proficiency: 100, level: "Native" },
  { language: "English", proficiency: 95, level: "Fluent" },
  { language: "Polish", proficiency: 85, level: "Fluent" },
  { language: "Spanish", proficiency: 50, level: "Intermediate" },
];

const zfDescription = `I've been an essential contributor to the 'Innovation' project at Lodz University of Technology, where we partnered with industry leaders to tackle real-world challenges. My focus revolved around developing a platform leveraging MySQL, Ansible, HTML, and PHP to automate software installations and configurations on virtual machines within the ZF network. From enabling seamless machine selection to facilitating the installation process, my role was instrumental in optimizing our workflow and enhancing efficiency."`;
const freeLance = `During 2018-2019, I freelanced as a small business manager, overseeing operations for a taxi service. My responsibilities included tracking entries and expenses meticulously using Excel sheets. Additionally, I collaborated with companies specializing in data sales for online platforms, ensuring accurate record-keeping and efficient management of our business operations.`;

const SSSDescription = `I've been part of a groundbreaking project named 'Innovation.' Here, at Lodz University of Technology, we collaborated with leading companies, tackling real-world tasks throughout the semester. I took charge of developing the frontend interface using React Native, enhancing user experience and pushing boundaries!" 🚀`;
const universityDescription = `I am currently pursuing a Bachelor's degree in Computer Science at Lodz University of Technology, where I've been honing my skills in software development, data structures, and algorithms.`;
const timelineData = [
  {
    date: "11-2023 - 02-2024",
    organization: "Soft Smart Solution",
    position: "Internship",
    description: SSSDescription,
  },
  {
    date: "04-2023 - 09-2023",
    organization: "ZF friedrichshafen",
    position: "Internship",
    description: zfDescription,
  },
  {
    date: "2021 - present",
    organization: "Politechnika Łódzka",
    position: "Bachelor Degree in Computer Science",
    description: universityDescription,
  },
  {
    date: "2018 - 2019",
    organization: "Free lance",
    position: "management of a small business",
    description: freeLance,
  },
];

const projectImage = require("../assets/images/example.png");
const projectImage2 = require("../assets/images/example2.png");
const arrayOfImages = [projectImage, projectImage2];

const moneyMinder1 = require("../assets/images/moneyMinde1.png");
const moneyMinder2 = require("../assets/images/moneyMinde2.png");
const moneyMinder3 = require("../assets/images/moneyMinde3.png");
const moneyMinder4 = require("../assets/images/moneyMinde4.png");

const moneyMinderImages = [
  moneyMinder1,
  moneyMinder2,
  moneyMinder3,
  moneyMinder4,
];
const projectsData = [
  {
    name: "MoneyMinder",
    description: `MoneyMinder is a user-friendly shopping list and budget management appDeveloped using a robust technology stack including Java, Spring Boot for the backend, PostgreSQL as the database, and React.js for the frontend. 
    This project is a full-stack solution for personal finance management.. It offers secure user authentication, real-time tracking of shopping tasks, and budget monitoring to help users manage their spending efficiently. With features like multi-list management, item categorization, and a responsive design for cross-device compatibility, MoneyMinder simplifies personal finance. It also includes dark mode for comfort and interactive progress indicators for an enhanced user experience. Whether on desktop or mobile, MoneyMinder is an essential tool for smart shopping and budget control.`,
    state: "In progress",
    githublink: "https://github.com/Verionn/MoneyMinder",
    weblink: " ",
    technologies: ["Java Sping Boot", "Postgresql", "React.js"],
    images: [moneyMinderImages],
  },
  {
    name: "Project 2",
    description: zfDescription,
    state: "In progress",
    githublink: " ",
    weblink: " ",
    technologies: ["React", "Node", "Express", "MongoDB"],
    images: [arrayOfImages],
  },
  {
    name: "Project 3",
    description: "This is a project description",
    state: "In progress",
    githublink: " ",
    weblink: " ",
    technologies: ["React", "Node", "Express", "MongoDB"],
    images: [arrayOfImages],
  },
  {
    name: "Project 4",
    description: "This is a project description",
    state: "In progress",
    githublink: " ",
    weblink: " ",
    technologies: ["React", "Node", "Express", "MongoDB"],
    images: [arrayOfImages],
  },
  {
    name: "Project 5",
    description: "This is a project description",
    state: "In progress",
    githublink: " ",
    weblink: " ",
    technologies: ["React", "Node", "Express", "MongoDB"],
    images: [arrayOfImages],
  },
  {
    name: "Project 6",
    description: "This is a project description",
    state: "In progress",
    githublink: " ",
    weblink: " ",
    technologies: ["React", "Node", "Express", "MongoDB"],
    images: [arrayOfImages],
  },
];

const logos = {
  cpp: {
    name: "C++",
    nameBoxIcon: "c-plus-plus",
    typeBoxIcon: "logo",
    SvgComponent: CppIcon ,
  },
  typescript: {
    name: "TypeScript",
    nameBoxIcon: "typescript",
    typeBoxIcon: "logo",
    SvgComponent: TypeScriptIcon,
  },
  css: {
    name: "CSS",
    nameBoxIcon: "css3",
    typeBoxIcon: "logo",
    SvgComponent: CssIcon,
  },
  html: {
    name: "HTML",
    nameBoxIcon: "html5",
    typeBoxIcon: "logo",
    SvgComponent: HtmlIcon,
  },
  react: {
    name: "React",
    nameBoxIcon: "react",
    typeBoxIcon: "logo",
    SvgComponent: ReactIcon,
  },
  javascript: {
    name: "JavaScript",
    nameBoxIcon: "javascript",
    typeBoxIcon: "logo",
    SvgComponent: JavascriptIcon,

  },
  blender: {
    name: "Blender",
    nameBoxIcon: "blender",
    typeBoxIcon: "logo",
    SvgComponent: BlenderIcon,
  },
  python: {
    name: "Python",
    nameBoxIcon: "python",
    typeBoxIcon: "logo",
    SvgComponent: PythonIcon,
  },

  java: {
    name: "Java",
    nameBoxIcon: "java",
    typeBoxIcon: "logo",
    SvgComponent: JavaIcon,
  },
  c: {
    name: "C",
    nameBoxIcon: "c",
    typeBoxIcon: "logo",
   
  },
  nodejs: {
    name: "NodeJs",
    nameBoxIcon: "nodejs",
    typeBoxIcon: "logo",
    SvgComponent: NodejsIcon,
  },
  spring: {
    name: "Spring",
    nameBoxIcon: "spring-boot",
    typeBoxIcon: "logo",
    SvgComponent: SpringIcon,
  },
  bootstrap: {
    name: "Bootstrap",
    nameBoxIcon: "bootstrap",
    typeBoxIcon: "logo",
    SvgComponent: BootstrapIcon,
  },
  angular: {
    name: "Angular",
    nameBoxIcon: "angular",
    typeBoxIcon: "logo",
    SvgComponent: AngularIcon,
  },
  github: {
    name: "Github",
    nameBoxIcon: "github",
    typeBoxIcon: "logo",
    SvgComponent: GithubIcon,
  },
  git: {
    name: "Git",
    nameBoxIcon: "git",
    typeBoxIcon: "logo",
    SvgComponent: GitIcon,
  },
  unity: {
    name: "Unity",
    nameBoxIcon: "unity",
    typeBoxIcon: "logo",
    SvgComponent: UnityIcon,
  },
};

const skillsData = [
  {
    type: "Languages",
    skills: [
      logos.typescript,
      logos.javascript,
      logos.html,
      logos.css,
      logos.cpp,
      logos.python,
      logos.java,
    ],
  },
  {
    type: "frameworks & libraries",
    skills: [
      logos.react,
      logos.angular,
      logos.bootstrap,
      logos.nodejs,
      logos.spring,
    ],
  },
  { type: "tools", skills: [logos.github, logos.git] },
  { type: "design", skills: [logos.blender, logos.unity] },
];

export const sideBarSections = [
  {
    title: "Home",
    id: "Home",
    content: <Home imageURL={imageURL} person={person} text={jobTitle} />,
    icon: "HomeIcon",
    label: "Home",
  },
  {
    title: "About me",
    id: "AboutMe",
    content: (
      <AboutMe
        person={person}
        aboutMeText={aboutMeText}
        languageData={languageData}
        timelineData={timelineData}
      />
    ),
    icon: "aboutIcon",
    label: "About",
    subMenu: [
      {
        title: "About me",
        id: "AboutMe",
        content: "",
        icon: "aboutIcon",
        label: "About me",
      },
      {
        title: "Education Experience",
        id: "EducationExperience",
        content: "",
        icon: "educationIcon",
        label: "Education Experience",
      },
    ],
  },
  {
    title: "Projects",
    id: "Projects",
    content: <Projects projectsData={projectsData} />,
    icon: "workIcon",
    label: "Projects",
  },
  {
    title: "Skills",
    id: "Skills",
    content: <Skills skillsData={skillsData} />,
    icon: "bugIcon",
    label: "Skills",
  },
  {
    title: "Contact",
    id: "Contact",
    content: <ContactForm />,
    icon: "emailIcon",
    label: "Get in touch",
  },
];

export const socialLinks = [
  {
    type: "link", // 'link' or 'email
    href: "https://www.linkedin.com/in/joki-8b40a7244/",
    icon: "linkedin",
    backgroundColor: "#0a66c2",
    borderColor: "#0a66c2",
    color: "#000000",
    typeIcon: "logo",
  },
  {
    type: "link", // 'link' or 'email
    href: "https://github.com/Joki004",
    icon: "github",
    color: "#000000",
    typeIcon: "logo",
  },
  {
    type: "email",
    href: "jorammumb15.jm@gmail.com",
    icon: "envelope",
    color: "#000000",
    typeIcon: null,
  },
];
