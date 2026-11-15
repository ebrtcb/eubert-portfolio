// All portfolio content lives here. Edit this file (and add images to /public/images) to update the site.
export const profile = {
  name: "Eubert Borromeo",
  title: "Full Stack Web Developer",
  location: "Philippines",
  tagline: "I build enterprise web apps that stay fast, secure and easy to maintain.",
  summary:
    "5+ years building enterprise web applications with CakePHP, MySQL, JavaScript and React. I work across the full lifecycle, from design and development to deployment and production support, with a focus on API design, database optimization and secure coding.",
  email: "eubertborromeo@gmail.com",
  linkedin: "https://linkedin.com/in/eubert-borromeo",
  github: "https://github.com/ebrtcb", // paste your GitHub profile URL here to show the GitHub icon
  cv: "/Eubert_Borromeo_CV.pdf",
  roles: ["Full Stack Web Developer", "CakePHP and React developer", "API and database builder"],
  stats: [["5+", "years building enterprise apps"], ["100+", "database tables redesigned"], ["6", "projects shipped"]],
};

export const journey = [
  { period: "Aug 2021 – Jan 2023", title: "Junior Web Developer", org: "Nityo Infotech · Contract · Remote", length: "1 yr 6 mos",
    points: ["Worked on a Sales Force Automation platform as part of a team", "Built and maintained enterprise web features with CakePHP, JavaScript and MySQL, following MVC and OOP principles",
      "Worked in Agile sprints with senior developers and QA, meeting sprint goals and client deadlines", "Fixed long-standing bugs and refactored legacy code to improve stability and performance",
      "Took part in mentorship and peer code review sessions"],
    tags: ["CakePHP", "JavaScript", "MySQL", "MVC", "Agile"] },
  { period: "Feb 2023 – Jul 2025", title: "Software Developer", org: "Trade Dynamics Consulting International Inc. · Remote", length: "2 yrs 6 mos",
    points: ["Built enterprise web app features with CakePHP, MySQL, JavaScript and React, including REST API integrations",
      "Redesigned 100+ database tables and columns to fix slow queries and data integrity issues",
      "Handled production support with daily hotfixes on top of a twice-monthly release cycle, managing Git conflicts across enhancement, hotfix, UAT and master branches",
      "Designed and maintained database schemas across multiple client databases", "Built a cron-based automation that rolls the monthly schedule forward, removing manual setup",
      "Designed a bug and enhancement tracking report now used daily by multiple internal teams", "Promoted code quality through code reviews, DRY, SOLID and secure coding"],
    tags: ["CakePHP", "React", "MySQL", "REST APIs", "Git"] },
  { period: "Jul 2025 – Aug 2026", title: "Software Development Specialist", org: "Trade Dynamics Consulting International Inc.", length: "1 yr 2 mos",
    points: ["Led development of enterprise web features with PHP (CakePHP), JavaScript, React and MySQL",
      "Provided production support for multiple client systems",
      "Used AI development tools (Claude, Codex, Cursor, Gemini) to speed up feature development, debugging, code review and documentation, while keeping code quality and secure coding standards"],
    tags: ["AI-assisted development", "Prompt engineering", "Cursor", "Generative AI", "React"] },
];

export type Shot = { src: string; alt: string; ratio: string };
export const featured = [
  { name: "Waste Management System", role: "Full-Stack Developer · Team of 2",
    intro: "A web-based waste management system for a local government, with an admin portal for managing waste collection, environmental compliance and surveys.",
    did: ["Implemented features from project documentation and Figma designs", "Fixed bugs and UI issues",
      "Managed SQL Server changes: new columns and indexes, and removed columns that caused save failures",
      "Deployed changes through Bitbucket", "Tested the system as QA"],
    features: ["Admin and applicant roles", "Dashboard and audit logging", "Survey creation, submission and analytics",
      "Waste collection tracking", "Environmental clearance, GHG certificate and violation management"],
    stack: ["React 19", "Vite", "React Router", "Axios", "Node.js", "Express", "JWT", "Nodemailer", "SQL Server", "Chart.js", "Recharts", "Bitbucket", "Figma"],
    shot: { src: "ems-landing", alt: "Public landing page with announcements and step-by-step guide", ratio: "16 / 9" } as Shot },
  { name: "3rd Fitness Lab", role: "Full-Stack Developer · Part-time, team of 2",
    intro: "A gym management and wellness platform with a web app for admins, trainers and members, and a mobile app for members.",
    did: ["Fixed bugs and UI issues across web and mobile", "Tested features and flows", "Integrated Google Maps for branch locations and directions",
      "Integrated PayMongo payments (card, GCash, Maya) for memberships and trainer bookings", "Set up SMTP email for verification and OTP",
      "Managed PostgreSQL changes: new columns and indexes, and removed columns that caused save failures"],
    features: ["Memberships with digital ID and QR check-in", "Trainer booking with online payment", "Workout programs, health metrics and nutrition tracking",
      "Branch finder with maps", "Admin dashboard for members, trainers and reports"],
    stack: ["Next.js 14", "Tailwind CSS", "React Native (Expo)", "Node.js", "Express", "TypeScript", "Socket.IO", "PostgreSQL", "Redis", "PayMongo", "Google Maps", "Firebase", "Nodemailer"],
    shot: { src: "fitness-hero", alt: "3rd Fitness app home screen", ratio: "1395 / 577" } as Shot },
];

export const professional = [
  { name: "Engagia Admin System", text: "Sales force automation platform for FMCG with inventory, scheduling and sales-target tracking, RESTful API integrations and reporting dashboards.", stack: ["CakePHP", "JavaScript", "jQuery", "MySQL", "Bootstrap"] },
  { name: "Transacti", text: "Three-part app suite for manufacturers, distributors and seller agents, with order-tracking workflows and delivery-pipeline dashboards.", stack: ["React", "CakePHP", "Material UI", "MySQL", "IndexedDB"] },
  { name: "TD Management System (TMS)", text: "Admin platform for managing complex database structures, with real-time monitoring, performance optimization and automated alerts.", stack: ["CakePHP", "JavaScript", "jQuery", "MySQL", "Bootstrap"] },
  { name: "Shopmetrix", text: "Retail analytics platform tracking products, users and sales, with RESTful API-driven reporting dashboards.", stack: ["CakePHP", "JavaScript", "jQuery", "MySQL", "Bootstrap"] },
];

export type SkillItem = { name: string; icon?: string };
export const skills = [
  {
    group: "Programming Languages",
    items: [
      { name: "PHP", icon: "php" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "mysql" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "jQuery", icon: "jquery" },
    ],
  },
  {
    group: "Frontend Frameworks and Libraries",
    items: [
      { name: "CakePHP", icon: "cakephp" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Material UI", icon: "mui" },
    ],
  },
  {
    group: "Backend Technologies",
    items: [
      { name: "CakePHP", icon: "cakephp" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs" },
      { name: "AJAX" },
      { name: "JWT" },
    ],
  },
  {
    group: "Databases and Tools",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MariaDB", icon: "mariadb" },
      { name: "MSSQL", icon: "sqlserver" },
      { name: "IndexedDB" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Bitbucket", icon: "bitbucket" },
      { name: "Docker", icon: "docker" },
      { name: "Cron jobs" },
    ],
  },
  {
    group: "Development Practices",
    items: [
      { name: "MVC" },
      { name: "OOP patterns" },
      { name: "REST APIs" },
      { name: "Database optimization" },
      { name: "Secure coding" },
      { name: "Agile/Scrum" },
      { name: "AJAX" },
      { name: "JSON/XML" },
    ],
  },
  {
    group: "AI Development Tools",
    items: [
      { name: "Claude", icon: "anthropic" },
      { name: "Codex", icon: "openai" },
      { name: "Cursor" },
      { name: "Gemini", icon: "googlegemini" },
      { name: "OpenClaw" },
    ],
  },
];

export const education = [{ title: "BS in Information Technology", sub: "Camarines Sur Polytechnic Colleges" }];
export const achievements = [{ title: "Extra Mile Award", sub: "For going beyond assigned responsibilities and showing initiative on team projects" }];
