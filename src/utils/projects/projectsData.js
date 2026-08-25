import { arrayImagesTournamentBlazorDescription } from "../imagesArrays";

import { imageArrayLendAHandDescription } from "./lendAHand";

import { imageArrayPolifansDescription } from "./polifans";

import { arrayImagesTabliceMaturalne } from "./kartyMaturalne";

const moneyMinderImages = [
  require("../../assets/images/moneyMinde1.webp"),
  require("../../assets/images/moneyMinde2.webp"),
  require("../../assets/images/moneyMinde3.webp"),
  require("../../assets/images/moneyMinde4.webp"),
];

const arrayOfImagesPortfolio = [
  require("../../assets/images/portfolio1.webp"),
  require("../../assets/images/portfolio2.webp"),
  require("../../assets/images/portfolio3.webp"),
  require("../../assets/images/portfolio4.webp"),
  require("../../assets/images/portfolio5.webp"),
  require("../../assets/images/portfolio6.webp"),
  require("../../assets/images/portfolio7.webp"),
  require("../../assets/images/portfolio8.webp"),
];

const arrayOfImagesWebApp = [
  require("../../assets/images/webpage.webp"),
  require("../../assets/images/webpage2.webp"),
  require("../../assets/images/webpage3.webp"),
  require("../../assets/images/webpage4.webp"),
  require("../../assets/images/webapp5.webp"),
  require("../../assets/images/webapp6.webp"),
  require("../../assets/images/webapp7.webp"),
];

const arrayOfImagesBlackJack = [
  require("../../assets/images/InfoScreenShot.webp"),
  require("../../assets/images/Gameplay-screenShot.webp"),
];

const arrayImagesTodoList = [
  require("../../assets/images/todoList (1).webp"),
  require("../../assets/images/todoList (2).webp"),
  require("../../assets/images/todoList (3).webp"),
  require("../../assets/images/todoList (4).webp"),
  require("../../assets/images/todoList (5).webp"),
  require("../../assets/images/todoList (6).webp"),
  require("../../assets/images/todoList (7).webp"),
  require("../../assets/images/todoList (8).webp"),
  require("../../assets/images/todoList (9).webp"),
  require("../../assets/images/todoList (10).webp"),
  require("../../assets/images/todoList (11).webp"),
  require("../../assets/images/todoList (12).webp"),
  require("../../assets/images/todoList (13).webp"),
  require("../../assets/images/todoList (14).webp"),
];

const bsbImages = [
  require("../../assets/images/bsb/BSBImages (1).png"),
  require("../../assets/images/bsb/BSBImages (2).png"),
  require("../../assets/images/bsb/BSBImages (3).png"),
  require("../../assets/images/bsb/BSBImages (4).png"),
  require("../../assets/images/bsb/BSBImages (5).png"),
];

const flooDishImages = [
  require("../../assets/images/floodish/Floodish (1).png"),
  require("../../assets/images/floodish/Floodish (2).png"),
  require("../../assets/images/floodish/Floodish (3).png"),
  require("../../assets/images/floodish/Floodish (4).png"),
  require("../../assets/images/floodish/Floodish (5).png"),
  require("../../assets/images/floodish/Floodish (6).png"),
];

export const projectsData = [
  {
    name: "BSB",

    featured: true,
    featuredOrder: 1,

    category: "Production Digital Commerce Platform",
    role: "Full-Stack Developer & Product Builder",
    state: "Live in production",

    summary:
      "A payments-enabled gift-card platform that helps customers who rely on mobile money access digital products without requiring a bank card.",

    caseStudy: {
      challenge:
        "Many customers who use mobile money are excluded from digital services that require a bank account or payment card, even when they have the funds to make a purchase.",

      solution:
        "BSB connects mobile-money payment notifications with a customer balance and a digital gift-card catalogue. An Android companion application records incoming payment notifications, authorized staff verify the payment and credit the customer account, and the customer can then complete purchases through the web platform.",

      contribution:
        "I designed and developed the customer-facing experience, authentication and account workflows, API integrations, transaction flow, product catalogue and dynamic content system. I also contributed to role-protected operational tools, which are intentionally excluded from the public case study.",

      architecture:
        "The customer-facing application uses React, TypeScript, React Router and Material UI. It communicates with a separate Next.js API and uses Firebase Authentication and Firebase Realtime Database. Postman and Swagger support API testing and documentation.",

      outcome:
        "BSB is currently live in production and validates the complete journey from mobile-money account funding to digital gift-card purchasing. It will eventually be superseded by Tanganyika, a redesigned successor with automated payments and a SQL-based backend.",
    },

    highlights: [
      "Provides an alternative purchasing flow for customers who use mobile money instead of payment cards.",
      "Supports customer accounts, balances, gift-card purchases and order history.",
      "Provides dynamically managed products, text and media.",
      "Separates the public customer experience from confidential administrative tooling.",
    ],

    confidential: true,

    confidentialityNote:
      "Only customer-facing functionality is presented publicly. Administrative screens, internal reports and operational workflows are omitted for confidentiality and security.",

    githublink: "",
    weblink: "https://bsblshi.com/",

    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Next.js API",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "Postman",
      "Swagger",
    ],

    images: [bsbImages],
  },
  {
    name: "Tanganyika",
    featured: true,
    featuredOrder: 2,
    category: "Automated Digital Commerce Platform",
    role: "Full-Stack Developer",
    state: "In active development",

    summary:
      "An automated evolution of BSB, integrating Stripe payments, mobile-money aggregators and a PostgreSQL-based backend.",

    description: [
      "Tanganyika is an automated evolution of BSB, designed to support Stripe payments, mobile-money aggregator integrations and SQL-based transaction management.",
    ],

    githublink: "",
    weblink: "",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Stripe",
      "Firebase Authentication",
      "Flyway",
      "OpenAPI",
    ],

    images: [],
  },
  {
    name: "FlooDish",

    featured: true,
    featuredOrder: 3,

    category: "Bachelor’s Thesis • Intelligent Food Management",
    role: "Full-Stack Developer & Researcher",
    state: "Completed",

    summary:
      "An intelligent household food-management system that tracks stored products and uses fuzzy logic to generate expiry-aware recipes, shopping suggestions and food-storage guidance.",

    caseStudy: {
      challenge:
        "Household products are often forgotten, purchased unnecessarily or used after their optimal date because storage, shopping and meal planning are managed separately.",

      solution:
        "FlooDish combines household inventory, expiration tracking, shopping lists, recipes and user preferences. A fuzzy-logic service prioritizes expiring products and generates personalized recipe and shopping suggestions.",

      contribution:
        "Designed and implemented the system as my bachelor’s thesis, including the mobile application, relational data model, secured REST API and Python-based fuzzy-logic services.",

      architecture:
        "A React Native and Expo mobile client communicates with a Java Spring Boot API secured through Spring Security and JWT. SQL Server provides relational persistence, while a Python Flask service performs fuzzy-logic analysis for recommendations and dynamic storage tips.",

      outcome:
        "The completed project demonstrates full-stack mobile development, relational database design and the integration of Java and Python services into an intelligent decision-support system.",
    },

    highlights: [
      "Generates recipe suggestions using available ingredients, expiry dates and user preferences.",
      "Recommends shopping-list items using inventory levels and previous purchasing behaviour.",
      "Provides urgency-based guidance for products approaching expiration.",
      "Combines a secured Java API with a separate Python fuzzy-logic service.",
    ],

    githublink:
      "https://github.com/Joki004/Intelligent-management-system-for-home-stored-food-products",

    weblink: "",

    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Python",
      "Flask",
      "SQL Server",
      "Fuzzy Logic",
      "Spring Security",
      "JWT",
      "OpenAPI",
    ],

    images: [flooDishImages],
  },
  {
  name: "LoRa Mesh Digital Twin",
featured: true,
    featuredOrder: 4,

  category: "Cross-Disciplinary IoT R&D",
  role:
    "Cloud & Software Engineer • In collaboration with Eng. Chris Kombo",
  state: "Research & prototyping",

  summary:
    "An early-stage IoT project designing a LoRa mesh network connected to Azure IoT services and a Digital Twin for monitoring environmental and network telemetry.",

  caseStudy: {
    challenge:
      "Remote sensor networks require reliable long-range communication, low power consumption and clear visibility into device health and environmental conditions.",

    solution:
      "The planned system combines LoRa mesh nodes, environmental sensors and a Raspberry Pi gateway with an Azure-based telemetry pipeline, Digital Twin and monitoring dashboard.",

    contribution:
      "I am responsible for the Azure environment, gateway-to-cloud integration, data pipeline, Digital Twin model and visualization layer. Eng. Chris Kombo leads the electronics, RF analysis, link-budget calculations, power optimization and embedded-node implementation.",

    architecture:
      "The planned architecture uses ESP32-based LoRa nodes with BME280 sensors, a Raspberry Pi gateway, MQTT communication, Azure IoT Hub, Azure Functions or Stream Analytics, Azure Digital Twins and a dashboard for telemetry visualization.",

    outcome:
      "The project is currently in its research and prototyping phase, with architecture planning, component selection, link-budget analysis and cloud-environment setup underway.",
  },

  highlights: [
    "Combines electronics, radio-frequency engineering, cloud development and data visualization.",
    "Plans to monitor temperature, humidity, pressure, battery level, RSSI and SNR.",
    "Explores custom mesh routing rather than relying entirely on a ready-made LoRaWAN gateway.",
    "Uses a Digital Twin to represent and monitor the state of each network node.",
  ],

  githublink: "",
  weblink: "",

  technologies: [
    "LoRa",
    "ESP32",
    "BME280",
    "Raspberry Pi",
    "Python",
    "MQTT",
    "Azure IoT Hub",
    "Azure Functions",
    "Azure Stream Analytics",
    "Azure Digital Twins",
    "React",
    "Power BI",
  ],

  images: [],
},
  {
    name: "LendAHand",

    featured: true,
    featuredOrder: 5,

    category: "Full-Stack Mobile Platform",
    role: "Full-Stack Developer",
    state: "Completed",

    summary:
      "A crisis-support platform that connects people requesting assistance with volunteers who can respond based on need and location.",

    caseStudy: {
      challenge:
        "During a crisis, requests for food, medicine, cleanup, repairs and other essential support can be difficult to coordinate through disconnected communication channels.",

      solution:
        "LendAHand gives users a structured way to publish assistance requests, discover relevant needs and offer help across several emergency categories.",

      architecture:
        "The mobile experience is built with React Native, supported by a Spring Boot API and PostgreSQL persistence. Location data and real-time updates support coordination between participants.",

      outcome:
        "The completed project demonstrates end-to-end mobile development, backend integration and relational data management around a socially relevant use case.",
    },

    highlights: [
      "Supports multiple assistance categories and location-aware coordination.",
      "Connects a cross-platform mobile client to a Java backend and relational database.",
      "Uses structured requests and status updates to improve crisis-response visibility.",
    ],

    githublink: "",
    weblink: "",

    technologies: ["React Native", "Spring Boot", "PostgreSQL"],

    images: [imageArrayLendAHandDescription],
  },

  {
    name: "Polifans",

    featured: false,
    featuredOrder: 3,

    category: "Marketplace Platform",
    role: "Full-Stack Developer",
    state: "Completed",

    summary:
      "A community marketplace for publishing products and services for sale, exchange or donation across mobile and web experiences.",

    caseStudy: {
      challenge:
        "Community marketplaces need to support different transaction intentions while keeping listings, conversations and account activity consistent across devices.",

      solution:
        "Polifans allows users to publish listings for sale, exchange or donation, interact through comments and improve listing visibility through paid promotion features.",

      architecture:
        "React Native provides the client experience, while Spring Boot and PostgreSQL handle business logic, authentication, listings, interactions and persistent data.",

      outcome:
        "The completed application demonstrates marketplace modelling, cross-platform synchronization and integration of authentication and promotional payment workflows.",
    },

    highlights: [
      "Supports sales, exchanges and donations in one listing model.",
      "Includes comments and promoted-listing functionality.",
      "Synchronizes marketplace data across mobile and web experiences.",
    ],

    githublink: "",
    weblink: "",

    technologies: ["React Native", "Spring Boot", "PostgreSQL"],

    images: [imageArrayPolifansDescription],
  },

  {
    name: "Karty Maturalne",

    category: "Education & Accessibility",
    role: "Mobile Developer",
    state: "Completed",

    summary:
      "An accessible, offline-first React Native study application that helps Polish secondary-school students prepare for the matura examination.",

    caseStudy: {
      challenge:
        "Students need a convenient way to review subject formulas, explanations and study materials without depending on a permanent internet connection.",

      solution:
        "Karty Maturalne organizes revision content for mathematics, physics, chemistry and English and supplements chapters with explanations and contextual hints.",

      architecture:
        "The application uses React Native to provide a shared mobile experience for Android and iOS, with study content available offline.",

      outcome:
        "The completed project combines mobile development, offline content delivery and accessibility considerations aligned with WCAG 2.1.",
    },

    highlights: [
      "Makes core revision content available offline.",
      "Covers several matura examination subjects in one application.",
      "Applies accessibility and user-friendly navigation principles.",
    ],

    githublink: "https://github.com/Verionn/karty-maturalne",

    weblink: "",

    technologies: ["React Native"],

    images: [arrayImagesTabliceMaturalne],
  },

  {
    name: "Tournament Manager",

    category: "Full-Stack Web Application",
    role: "Full-Stack Developer",
    state: "Completed",

    summary:
      "A Blazor WebAssembly platform for creating and managing bracket or round-robin tournaments with controlled participant access.",

    caseStudy: {
      challenge:
        "Tournament organizers need one place to manage teams, matches, scores, rounds and access rules without relying on spreadsheets or fragmented tools.",

      solution:
        "The platform supports tournament creation, dynamic team and match management, score tracking, multiple competition formats and public or private events.",

      architecture:
        "Blazor WebAssembly provides the interactive client, while ASP.NET Core, Entity Framework Core and SQL Server support authentication, authorization and persistent tournament data.",

      outcome:
        "The completed application demonstrates role-based access, relational modelling and full-stack development within the .NET ecosystem.",
    },

    highlights: [
      "Supports bracket and round-robin competition formats.",
      "Uses ASP.NET Core Identity for role-based access.",
      "Manages teams, matches, rounds and scores through persistent relational data.",
    ],

    githublink: "https://github.com/Joki004/tournament_blazor",

    weblink: "",

    technologies: [
      "Blazor WebAssembly",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "C#",
    ],

    images: [arrayImagesTournamentBlazorDescription],
  },

  {
    name: "MoneyMinder",

    featured: false,
    featuredOrder: 4,

    category: "Personal Finance Application",
    role: "Full-Stack Developer",
    state: "In development",

    summary:
      "A full-stack shopping and budget-management application that connects planned purchases with real-time spending visibility.",

    caseStudy: {
      challenge:
        "Shopping lists and budget tracking are often separated, making it harder for users to understand how planned purchases affect their available budget.",

      solution:
        "MoneyMinder combines multiple shopping lists, item categorization, task progress and budget monitoring in one responsive application.",

      architecture:
        "A React frontend communicates with a Spring Boot backend backed by PostgreSQL. Authentication and persistent list data support a consistent experience across devices.",

      outcome:
        "The project is in active development and currently demonstrates the core full-stack workflow for list management, progress tracking and budget awareness.",
    },

    highlights: [
      "Connects shopping-list planning with budget monitoring.",
      "Supports multiple lists, categories and progress indicators.",
      "Includes responsive presentation and dark-mode support.",
    ],

    githublink: "https://github.com/Verionn/MoneyMinder",

    weblink: "",

    technologies: ["React", "Spring Boot", "PostgreSQL"],

    images: [moneyMinderImages],
  },

  {
    name: "Android Task Manager",

    category: "Android Application",
    role: "Android Developer",
    state: "Completed",

    summary:
      "A native Android task-management application with attachments, notifications, status filtering and offline persistence.",

    caseStudy: {
      challenge:
        "A useful mobile task manager must preserve data locally while supporting reminders, attachments and different task states without making the workflow complex.",

      solution:
        "The application supports creating, updating, deleting and filtering tasks, with file attachments and notifications for upcoming work.",

      architecture:
        "The Android application is written in Kotlin and uses Room for local persistence, with ViewModel and LiveData separating interface state from stored data.",

      outcome:
        "The completed project demonstrates native Android development, lifecycle-aware state management and offline-first data handling.",
    },

    highlights: [
      "Supports task creation, editing, deletion and status filtering.",
      "Includes file attachments and notifications.",
      "Uses Room, ViewModel and LiveData for maintainable local state.",
    ],

    githublink: "https://github.com/Joki004/TodoList",

    weblink: "",

    technologies: ["Kotlin", "Android", "Room", "ViewModel", "LiveData"],

    images: [arrayImagesTodoList],
  },

  {
    name: "My Portfolio",

    category: "Portfolio Platform",
    role: "Frontend Developer",
    state: "Actively maintained",

    summary:
      "A responsive React portfolio designed to present my development experience, technical capabilities and projects through reusable content-driven components.",

    caseStudy: {
      challenge:
        "A growing professional profile needs to communicate technical work, business awareness and continuous development without becoming a static online CV.",

      solution:
        "The portfolio combines responsive sections, theme customization, project case studies, experience timelines and interactive navigation in one content-driven interface.",

      architecture:
        "The application uses reusable React components, shared context for visual preferences and structured data objects to separate portfolio content from presentation.",

      outcome:
        "The portfolio is actively maintained and evolves alongside my professional experience, education and software projects.",
    },

    highlights: [
      "Uses reusable components and centralized project data.",
      "Supports responsive layouts, theme customization and interactive navigation.",
      "Deployed as a continuously evolving professional portfolio.",
    ],

    githublink: "",

    weblink: "https://teal-gnome-5728ca.netlify.app/",

    technologies: ["React", "Material UI", "Framer Motion"],

    images: [arrayOfImagesPortfolio],
  },

  {
    name: "Service Business Website",

    category: "Client Website",
    role: "Frontend Developer",
    state: "Delivered",

    summary:
      "A responsive service-business website created for a client to communicate offerings, pricing and contact information through a clear public presence.",

    caseStudy: {
      challenge:
        "The client needed a straightforward online presence where prospective customers could understand the available services and quickly find pricing and contact information.",

      solution:
        "The website provides clear navigation, service and pricing sections, detailed descriptions, inviting visuals and an accessible contact flow.",

      architecture:
        "The website was implemented with semantic HTML, CSS and JavaScript and deployed as a lightweight static site through GitHub Pages.",

      outcome:
        "The delivered project demonstrates translating a client request into a focused, responsive and publicly accessible web experience.",
    },

    highlights: [
      "Translated client requirements into a structured public website.",
      "Created responsive service, pricing and contact sections.",
      "Deployed a lightweight static implementation through GitHub Pages.",
    ],

    githublink: "https://github.com/Joki004/webpage_frontend",

    weblink: "https://joki004.github.io/webpage_frontend/",

    technologies: ["HTML", "CSS", "JavaScript"],

    images: [arrayOfImagesWebApp],
  },

  {
    name: "Multiplayer Blackjack",

    category: "Desktop Game",
    role: "Java Developer",
    state: "Completed",

    summary:
      "A Java desktop implementation of multiplayer Blackjack with betting, turn management and a JavaFX interface.",

    caseStudy: {
      challenge:
        "A multiplayer card game requires consistent rule enforcement and state management across several players, the dealer, bets and changing hands.",

      solution:
        "The application manages a four-player Blackjack round, including starting balances, bets, player decisions, dealer behaviour and win-condition evaluation.",

      architecture:
        "Java implements the game rules and state transitions, while JavaFX and FXML provide the desktop interface and screen structure.",

      outcome:
        "The completed project demonstrates object-oriented modelling, event-driven interfaces and rule-based application logic.",
    },

    highlights: [
      "Models turns, bets, hands and dealer behaviour.",
      "Supports four players in a shared game session.",
      "Separates Java game logic from the JavaFX/FXML interface.",
    ],

    githublink: "https://github.com/Joki004/blackjack",

    weblink: "",

    technologies: ["Java", "JavaFX", "FXML"],

    images: [arrayOfImagesBlackJack],
  },
];
