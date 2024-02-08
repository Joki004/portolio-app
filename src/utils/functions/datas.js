import Home from "../../pages/home/home";
import AboutMe from "../../pages/aboutMe/aboutMe";
let text =
  "Section 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin condimentum odio, et interdum est fringilla eget. Praesent risus dui, dapibus vel elementum sed, volutpat id sem. In fermentum, arcLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin condimentum odio, et interdum est fringilla eget. Praesent risus dui, dapibus vel elementum sed, volutpat id sem. In fermentum, arcu vitae pharetra malesuada, massa urna interdum erat, vel interdum felis mi quis lacus. Nunc nec erat faucibus, feugiat mauris facilisis, sagittis dolor. Donec pellentesque quam et ipsum faucibus tempus. Praesent lacinia quam leo, et vehicula dui maximus sed. In augue eros, elementum nec accumsan nec, pretium ac turpis. Donec tristique nec orci id rhoncus. Proin eu sem nec nulla dictum fermentum eu vitae nunc. Proin in elit metus. Aenean vel nulla augue. Vivamus ante odio, dictum et dignissim eu, fringilla quis tellus. Quisque lectus enim, vulputate vitae orci quis, pellentesque tempor justo. Cras at fermentum magna. Nulla bibendum turpis vel rutrum aliquam. Ut lacus est, dignissim ut ante eget, interdum auctor metus. Vestibulum aliquam ipsum rutrum tellus imperdiet, fermentum pellentesque ligula mattis. Nullam blandit augue sit amet dictum sagittis. Curabitur pretium gravida lacus. Sed ullamcorper mi sed condimentum viverra. Duis sed libero metus. In lobortis metus egestas, euismod mi sit amet, volutpat enim. Aenean bibendum justo vitae nibh facilisis rutrum. Praesent fringilla felis sit amet rhoncus finibus. Vivamus et lacus quis lacus ullamcorper tristique eu a sem. Maecenas eu condimentum neque. Fusce hendrerit nunc sit amet magna iaculis, nec tincidunt massa rutrum. Fusce mi elit, molestie ac dapibus quis, ultricies eget est. Aliquam tincidunt augue id sollicitudin auctor. Nullam interdum eget risus in pharetra. In interdum nisi erat, sed posuere mi viverra in. Nullam sed tortor in arcu aliquet feugiat eu sed augue. Ut tincidunt at elit in dapibus. Morbi vitae posuere massa, quis dignissim odio. In rutrum libero odio, vel tristique mauris ultrices vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
const imageURL = require("../../assets/images/PictureOfMe.jpg");
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
  { language: "French", proficiency: 100 },
  { language: "Shwahili", proficiency: 100 },
  { language: "English", proficiency: 95 },
  { language: "Polish", proficiency: 85 },
  { language: "Spanish", proficiency: 50 },
 
  
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
    type: "link", // 'link' or 'email
    href: "https://www.linkedin.com/in/joki-8b40a7244/",
    icon: "linkedin",
    backgroundColor: "#0a66c2",
    borderColor: "#0a66c2",
    color: "#ffffff",
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
