import Home from "../pages/home/home";
import AboutMe from "../pages/aboutMe/aboutMe";
import Projects from "../pages/projects/projects";
import Skills from "../pages/skills/skills";
import ContactForm from "../pages/contacts/contact";
import {projectsData} from "../utils/projects/projectsData";
import { ReactComponent as CppIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-c-plus-plus.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-typescript.svg";
import { ReactComponent as CssIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-css3.svg";
import { ReactComponent as HtmlIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-html5.svg";
import { ReactComponent as ReactIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-react.svg";
import { ReactComponent as AngularIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-angular.svg";
import { ReactComponent as JavaIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-java.svg";
import { ReactComponent as PythonIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-python.svg";
import { ReactComponent as NodejsIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-nodejs.svg";
import { ReactComponent as BootstrapIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-bootstrap.svg";
import { ReactComponent as GithubIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-github.svg";
import { ReactComponent as GitIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-git.svg";
import { ReactComponent as BlenderIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-blender.svg";
import { ReactComponent as UnityIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-unity.svg";
import { ReactComponent as JavascriptIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-javascript.svg";
import { ReactComponent as linkedinIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-linkedin.svg";
import { ReactComponent as envelopeIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/regular/bx-envelope.svg";
// Skill icons









import { ReactComponent as FirebaseIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-firebase.svg";
import { ReactComponent as FlaskIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-flask.svg";
import { ReactComponent as StripeIcon } from "../assets/boxicons-2.1.4/boxicons-2.1.4/svg/logos/bxl-stripe.svg";

import { ReactComponent as SpringBootIcon } from "../assets/svg/Spring.svg";
import { ReactComponent as PostgreSQLIcon } from "../assets/svg/PostgresSQL.svg";
import { ReactComponent as SqlServerIcon } from "../assets/svg/MicrosoftSQLServer.svg";


const imageURL = require("../../src/assets/images/pictureOfme.jpeg");
const person = {
  firstName: "Joram",
  lastName: "Mumb Mulaj Kambaj",
};

const jobTitle = "Full-Stack Software Developer";
const secondaryTitle = "Business-Minded Problem Solver • CS Master’s Candidate";

let aboutmeText1 = `Talking about myself is challenging because I'm enthusiastic about so many things. But if I had to pick one word, it would be "DISCOVERING." I am naturally curious and enjoy uncovering new domains, ideas and approaches to solving problems. I bring a Swiss Army Knife mindset: combining different perspectives and tools to turn complexity into clear, practical solutions.`;

let aboutmeText2 = `I hold a Bachelor’s degree in Computer Science and am currently pursuing a Master’s degree specializing in Intelligent Database Systems. As a full-stack software developer, I am strengthening my experience across application development, databases, automation and AI. At Philips, my role as a Services & Solutions Delivery Specialist and AI Champion allows me to connect technical thinking with process improvement and business needs. Alongside this experience, I am developing practical knowledge of Azure and Databricks to expand my capabilities in cloud and data-driven systems.`;

let aboutmeText3 = `My curiosity also extends beyond IT. It helps me understand operations, strategy, customers and the wider context in which technology creates value. Outside work and study, I enjoy sports, music, reading and discovering new cultures and experiences—interests that continue to shape how I learn, communicate and approach challenges.`;

const aboutMeText = {
  aboutmeText1,
  aboutmeText2,
  aboutmeText3,
};

const languageData = [
  { language: "French", proficiency: 100, level: "Native" },
  { language: "Swahili", proficiency: 100, level: "Native" },
  { language: "English", proficiency: 95, level: "Fluent" },
  { language: "Polish", proficiency: 85, level: "Fluent" },
  { language: "Spanish", proficiency: 50, level: "Intermediate" },
];

const experienceSections = [
  {
    id: "professional",
    title: "Professional Experience",
    entries: [
      {
        date: "Mar 2025 - Present",
        organization: "Philips",
        location: "Lodz, Poland",
        position: "Services & Solutions Delivery Specialist | AI Champion",
        current: true,
        summary:
          "Support services and solutions delivery for international operations while applying technology to workflow and process improvement.",
        highlights: [
          "Coordinate operational data flows and customer communication across international delivery processes.",
          "Analyze internal workflows and contribute to automation and AI solutions using Microsoft Power Apps and Copilot Studio.",
          "Use Power BI for service-performance analysis and SAP to support invoice-dispute and operational data processes.",
        ],
        tags: ["Power Apps", "Copilot Studio", "Power BI", "SAP", "Smax (Salesforce)"],
      },
      {
        date: "Sep 2024 - Feb 2025",
        organization: "Philips",
        location: "Lodz, Poland",
        position: "Customer Order Intern",
        summary:
          "Supported global customer-order and logistics processes while applying technical skills to operational improvement.",
        highlights: [
          "Collaborated with the Customer Order team to support international logistics workflows.",
          "Built macros to automate repetitive tasks and improve workflow efficiency.",
          "Applied technical analysis to identify and optimize operational steps.",
        ],
        tags: ["Excel", "VBA", "Process Automation", "SAP"],
      },
      {
        date: "Oct 2023 - Feb 2024",
        organization: "Smart Soft Solution",
        location: "Lodz, Poland",
        position: "Frontend Developer Intern",
        summary:
          "Contributed to a real-time animal-health monitoring application as part of a four-person development team.",
        highlights: [
          "Developed frontend functionality using React Native.",
          "Contributed to user-focused UI and UX decisions throughout development.",
          "Worked collaboratively using Agile practices.",
        ],
        tags: ["React Native", "UI/UX", "Agile"],
      },
      {
        date: "Apr 2023 - Sep 2023",
        organization: "ZF Friedrichshafen",
        location: "Lodz, Poland",
        position: "Software Developer Intern",
        summary:
          "Worked on an industry-university project that automated software installation and configuration on virtual machines.",
        highlights: [
          "Developed platform functionality for selecting virtual machines and managing software setup.",
          "Used MySQL, Ansible, HTML and PHP to support automation and configuration workflows.",
          "Collaborated with university and industry stakeholders on a practical engineering challenge.",
        ],
        tags: ["MySQL", "Ansible", "HTML", "PHP"],
      },
    ],
  },

  {
    id: "education",
    title: "Education",
    entries: [
      {
        date: "Mar 2026 - Jul 2027",
        organization: "Lodz University of Technology",
        location: "Lodz, Poland",
        position: "Master of Science in Computer Science - Expected Jul 2027",
        current: true,
        summary: "Specialization: Intelligent Database Systems.",
        highlights: [
          "Study data warehousing, Business Objects and enterprise intelligence concepts.",
          "Explore AI tools in database systems and database-engine performance.",
          "Develop skills in information-systems design and modelling.",
        ],
        tags: ["Databases", "Data Warehousing", "AI", "System Design"],
      },
      {
        date: "Sep 2021 - Jul 2025",
        organization: "Lodz University of Technology",
        location: "Lodz, Poland",
        position: "Bachelor of Computer Science",
        summary: "Specialization: Data Exploration, Analysis and Databases.",
        highlights: [
          "Completed advanced coursework in programming, database management and software engineering.",
          "Built practical experience through collaborative projects involving IoT and AI.",
        ],
        tags: ["Software Engineering", "Databases", "IoT", "AI"],
      },
      {
        date: "Oct 2020 - Jun 2021",
        organization: "University of Lodz",
        location: "Lodz, Poland",
        position: "Polish Language Proficiency Course - B2",
        summary:
          "Completed an intensive Polish-language programme preparing international students for academic study and everyday communication.",
        tags: ["Polish B2", "Cross-Cultural Communication"],
      },
    ],
  },

  {
    id: "development",
    title: "Business, Leadership & Development",
    entries: [
      {
        date: "Jun 2024 - Present",
        organization: "Erasmus Student Network, TUL",
        location: "Lodz, Poland",
        position: "Active Member & Coordinator",
        current: true,
        summary:
          "Support international student exchange, community integration and cultural understanding.",
        tags: ["Coordination", "Community", "Cross-Cultural Communication"],
      },
      {
        date: "2022 - Present",
        organization: "NoHate",
        location: "Lodz, Poland",
        position: "Volunteer",
        current: true,
        summary:
          "Contribute to community initiatives supporting people in need and improving living conditions.",
        tags: ["Volunteering", "Community Support"],
      },
      {
        date: "2024",
        organization: "Youth Entrepreneurship Program",
        position: "Certificate of Attendance and Completion",
        summary:
          "Completed an interdisciplinary programme focused on entrepreneurship in the food and health sectors.",
        highlights: [
          "Studied Lean Startup, business models, go-to-market strategy, growth and scaling.",
          "Developed skills in creative thinking, opportunity analysis and business-value creation.",
        ],
        tags: ["Entrepreneurship", "Lean Startup", "Business Strategy"],
      },
      {
        date: "2023",
        organization: "Oracle",
        position: "Artificial Intelligence with Machine Learning Certificate",
        summary:
          "Completed foundational professional development in artificial intelligence and machine learning.",
        tags: ["AI", "Machine Learning"],
      },
      {
        date: "2018 - 2019",
        organization: "Independent",
        position: "Freelance Business Manager",
        summary:
          "Managed day-to-day operations and financial record-keeping for a small taxi-service business.",
        highlights: [
          "Tracked income and expenses using Excel.",
          "Maintained accurate operational records and coordinated external business relationships.",
        ],
        tags: ["Business Operations", "Excel", "Financial Tracking"],
      },
    ],
  },
];



const createSkill = (name, experience, SvgComponent) => ({
  name,
  experience,
  SvgComponent,
});

const skillsData = [
  {
    type: "Core programming",
    description:
      "Languages used across software, data and academic projects.",
    skills: [
      createSkill("Java", "projects", JavaIcon),
      createSkill("Python", "projects", PythonIcon),
      createSkill("TypeScript", "projects", TypeScriptIcon),
      createSkill("JavaScript", "projects", JavascriptIcon),
      createSkill("SQL", "projects"),
      createSkill("C++", "foundation", CppIcon),
    ],
  },
  {
    type: "Web & mobile",
    description:
      "Customer-facing applications for web and mobile platforms.",
    skills: [
      createSkill("React", "projects", ReactIcon),
      createSkill("Next.js", "projects"),
      createSkill("React Native", "work", ReactIcon),
      createSkill("Expo", "projects"),
      createSkill("Material UI", "projects"),
      createSkill("HTML & CSS", "projects", HtmlIcon),
    ],
  },
  {
    type: "Backend & APIs",
    description:
      "Backend services, application security and API integration.",
    skills: [
      createSkill("Spring Boot", "projects", SpringBootIcon),
      createSkill("Node.js", "projects", NodejsIcon),
      createSkill("Flask", "projects", FlaskIcon),
      createSkill("REST APIs", "projects"),
      createSkill("Spring Security & JWT", "projects"),
      createSkill("Swagger / OpenAPI", "projects"),
    ],
  },
  {
    type: "Data & cloud",
    description:
      "Relational, NoSQL and cloud technologies for data-driven systems.",
    skills: [
      createSkill("PostgreSQL", "projects", PostgreSQLIcon),
      createSkill("SQL Server", "projects", SqlServerIcon),
      createSkill("Firebase / NoSQL", "projects", FirebaseIcon),
      createSkill("Supabase", "projects"),
      createSkill("Microsoft Azure", "developing"),
      createSkill("Databricks", "developing"),
      createSkill("Azure IoT", "developing"),
    ],
  },
  {
    type: "Automation & analytics",
    description:
      "Enterprise tools used to improve workflows and decision-making.",
    skills: [
      createSkill("Power Apps", "work"),
      createSkill("Copilot Studio", "work"),
      createSkill("Power BI", "work"),
      createSkill("SAP", "work"),
      createSkill("Excel & VBA", "work"),
      createSkill("Fuzzy Logic", "projects"),
    ],
  },
  {
    type: "Engineering & delivery",
    description:
      "Development, testing, collaboration and deployment tooling.",
    skills: [
      createSkill("Git", "projects", GitIcon),
      createSkill("GitHub", "projects", GithubIcon),
      createSkill("Postman", "projects"),
      createSkill("Stripe", "projects", StripeIcon),
      createSkill("Vercel & Netlify", "projects"),
      createSkill("Railway", "projects"),
    ],
  },
];

export const sideBarSections = [
  {
    title: "Home",
    id: "Home",
    content: (
      <Home
        imageURL={imageURL}
        person={person}
        text={jobTitle}
        secondaryText={secondaryTitle}
      />
    ),
    icon: "HomeIcon",
    label: "Home",
  },
  {
    title: "About",
    id: "AboutMe",
    content: (
      <AboutMe
        person={person}
        aboutMeText={aboutMeText}
        languageData={languageData}
        experienceSections={experienceSections}
      />
    ),
    icon: "aboutIcon",
    label: "About",
    subMenu: [
      {
        title: "About me",
        id: "About",
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
    type: "link",
    href: "https://www.linkedin.com/in/joki-8b40a7244/",
    icon: "linkedin",
    backgroundColor: "#0a66c2",
    borderColor: "#0a66c2",
    color: "#000000",
    typeIcon: "logo",
    SvgComponent: linkedinIcon,
  },
  {
    type: "link",
    href: "https://github.com/Joki004",
    icon: "github",
    color: "#000000",
    typeIcon: "logo",
    SvgComponent: GithubIcon,
  },
  {
    type: "email",
    href: "jorammumb.mk@gmail.com",
    icon: "envelope",
    color: "#000000",
    typeIcon: null,
    SvgComponent: envelopeIcon,
  },
];

export const colorConfig = {
  "var(--primary-color)": {
    mainColor10Lighter: "var(--primary-color-10-lighter)",
    mainColor20Lighter: "var(--primary-color-20-lighter)",
    chevronBackground: "#b3c1cd",
  },
  "var(--secondary-color)": {
    mainColor10Lighter: "var(--secondary-color-30-lighter)",
    mainColor20Lighter: "var(--secondary-color-60-lighter)",
    chevronBackground: "#b1e1d4",
  },
  "var(--quaternary-color)": {
    mainColor10Lighter: "var(--quaternary-color-10-lighter)",
    mainColor20Lighter: "var(--quaternary-color-20-lighter)",
    chevronBackground: "#b1e1d4",
  },
  "var(--quinary-color)": {
    mainColor10Lighter: "var(--quinary-color-10-lighter)",
    mainColor20Lighter: "var(--quinary-color-20-lighter)",
    chevronBackground: "#b1e1d4",
  },
};

export const ImageLinks = {
  image1:
    "https://images.unsplash.com/photo-1701086292958-f753f3bb5d27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
