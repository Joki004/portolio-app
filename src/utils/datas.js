import Home from "../pages/home/home";
import AboutMe from "../pages/aboutMe/aboutMe";
import Projects from "../pages/projects/projects";
import Skills from "../pages/skills/skills";
let text =
  "Section 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin condimentum odio, et interdum est fringilla eget. Praesent risus dui, dapibus vel elementum sed, volutpat id sem. In fermentum, arcLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin condimentum odio, et interdum est fringilla eget. Praesent risus dui, dapibus vel elementum sed, volutpat id sem. In fermentum, arcu vitae pharetra malesuada, massa urna interdum erat, vel interdum felis mi quis lacus. Nunc nec erat faucibus, feugiat mauris facilisis, sagittis dolor. Donec pellentesque quam et ipsum faucibus tempus. Praesent lacinia quam leo, et vehicula dui maximus sed. In augue eros, elementum nec accumsan nec, pretium ac turpis. Donec tristique nec orci id rhoncus. Proin eu sem nec nulla dictum fermentum eu vitae nunc. Proin in elit metus. Aenean vel nulla augue. Vivamus ante odio, dictum et dignissim eu, fringilla quis tellus. Quisque lectus enim, vulputate vitae orci quis, pellentesque tempor justo. Cras at fermentum magna. Nulla bibendum turpis vel rutrum aliquam. Ut lacus est, dignissim ut ante eget, interdum auctor metus. Vestibulum aliquam ipsum rutrum tellus imperdiet, fermentum pellentesque ligula mattis. Nullam blandit augue sit amet dictum sagittis. Curabitur pretium gravida lacus. Sed ullamcorper mi sed condimentum viverra. Duis sed libero metus. In lobortis metus egestas, euismod mi sit amet, volutpat enim. Aenean bibendum justo vitae nibh facilisis rutrum. Praesent fringilla felis sit amet rhoncus finibus. Vivamus et lacus quis lacus ullamcorper tristique eu a sem. Maecenas eu condimentum neque. Fusce hendrerit nunc sit amet magna iaculis, nec tincidunt massa rutrum. Fusce mi elit, molestie ac dapibus quis, ultricies eget est. Aliquam tincidunt augue id sollicitudin auctor. Nullam interdum eget risus in pharetra. In interdum nisi erat, sed posuere mi viverra in. Nullam sed tortor in arcu aliquet feugiat eu sed augue. Ut tincidunt at elit in dapibus. Morbi vitae posuere massa, quis dignissim odio. In rutrum libero odio, vel tristique mauris ultrices vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
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
const projectsData = [
  {
    name: "Project 1",
    description: "This is a project description",
    state: "In progress",
    githublink: " ",
    weblink: " ",
    technologies: ["React", "Node", "Express", "MongoDB"],
    images: [arrayOfImages],
  },
  {
    name: "Project 2",
    description: "This is a project description",
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
  },
  typescript: {
    name: "TypeScript",
    nameBoxIcon: "typescript",
    typeBoxIcon: "logo",
  },
  css: {
    name: "CSS",
    nameBoxIcon: "css3",
    typeBoxIcon: "logo",
  },
  html: {
    name: "HTML",
    nameBoxIcon: "html5",
    typeBoxIcon: "logo",
  },
  react: {
    name: "React",
    nameBoxIcon: "react",
    typeBoxIcon: "logo",
  },
  javascript: {
    name: "JavaScript",
    nameBoxIcon: "javascript",
    typeBoxIcon: "logo",
  },
  blender: {
    name: "Blender",
    nameBoxIcon: "blender",
    typeBoxIcon: "logo",
  },
  python: {
    name: "Python",
    nameBoxIcon: "python",
    typeBoxIcon: "logo",
  },

  java: {
    name: "Java",
    nameBoxIcon: "java",
    typeBoxIcon: "logo",
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
  },
  spring: {
    name: "Spring",
    nameBoxIcon: "spring",
    typeBoxIcon: "logo",
  },
  bootstrap: {
    name: "Bootstrap",
    nameBoxIcon: "bootstrap",
    typeBoxIcon: "logo",
  },
  angular: {
    name: "Angular",
    nameBoxIcon: "angular",
    typeBoxIcon: "logo",
  },
  github: {
    name: "Github",
    nameBoxIcon: "github",
    typeBoxIcon: "logo",
  },
  git: {
    name: "Git",
    nameBoxIcon: "git",
    typeBoxIcon: "logo",
  },
  unity: {
    name: "Unity",
    nameBoxIcon: "unity",
    typeBoxIcon: "logo",
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
    content: text,
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
