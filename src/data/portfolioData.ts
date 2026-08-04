import type { Experience, Project, Skill, Education, StatItem } from '../types';
import nibcode from '/public/assets/nibcode.png';
import skilzz from '/public/assets/skilzz.png';
import propertybusstop from '/public/assets/propertybusstop.png';

export const HERO_DATA = {
  name: "Jules Edozie",
  role: "Full Stack Web Developer",
  tagline:
    "Building modern, high-performance web applications & scalable digital products.",
  bio: "Accomplished Full Stack Web Developer proficient in JavaScript, TypeScript, ReactJS, Ruby on Rails, and PHP/Laravel. Experienced in remote pair-programming, UI optimization, client website delivery, and mentoring junior developers.",
  status: "Available for new opportunities",
  location: "Nigeria (Open to Global Remote Work)",
  email: "edoziechukwuma@gmail.com",
  github: "https://www.github.com/julzedz",
  linkedin: "https://www.linkedin.com/in/julesedozie/",
  twitter: "https://www.x.com/julzedz",
};

export const STATS_DATA: StatItem[] = [
  { label: 'Intensive Training', value: '1,300+ Hrs', description: 'At Microverse Inc.' },
  { label: 'Full-Stack Projects', value: '10+', description: 'Delivered for clients & open-source' },
  { label: 'Code Reviews', value: '300+', description: 'Mentored junior developers' },
  { label: 'Degree Honor', value: '2:1 Upper', description: 'B.Sc. Computer Science (UNN)' },
];

export const SKILLS_DATA: Skill[] = [
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    icon: 'FileCode2',
    level: 95,
    color: 'from-amber-400 to-yellow-500',
    description: 'Asynchronous JS, Event Loop, DOM Manipulation & Modern ESNext syntax.',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'Code2',
    level: 90,
    color: 'from-blue-500 to-indigo-600',
    description: 'Strict type safety, interfaces, generics, and scalable application architecture.',
  },
  {
    name: 'ReactJS',
    category: 'Frontend',
    icon: 'Atom',
    level: 95,
    color: 'from-cyan-400 to-blue-500',
    description: 'Hooks, Component Architecture, State Management & SPA development.',
  },
  {
    name: 'Ruby-On-Rails',
    category: 'Backend',
    icon: 'Gem',
    level: 92,
    color: 'from-red-500 to-rose-600',
    description: 'MVC Pattern, Active Record, ActionCable WebSockets & RESTful APIs.',
  },
  {
    name: 'Laravel / PHP',
    category: 'Backend',
    icon: 'Server',
    level: 85,
    color: 'from-orange-500 to-red-600',
    description: 'PHP 8, Eloquent ORM, Blade Templates, and backend API engineering.',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    icon: 'Palette',
    level: 98,
    color: 'from-sky-400 to-cyan-500',
    description: 'Semantic markup, Flexbox, Grid layout, and responsive mobile-first design.',
  },
  {
    name: 'PostgreSQL & SQL',
    category: 'Database',
    icon: 'Database',
    level: 88,
    color: 'from-blue-600 to-cyan-700',
    description: 'Relational data modeling, SQL queries, indexing, and schema design.',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: 'Share2',
    level: 84,
    color: 'from-emerald-500 to-green-600',
    description: 'NoSQL document storage, aggregation pipelines, and JSON collections.',
  },
  {
    name: 'Zustand & Redux',
    category: 'Frontend',
    icon: 'Zap',
    level: 90,
    color: 'from-purple-500 to-indigo-500',
    description: 'Global state management, reactive stores, and light footprint state.',
  },
  {
    name: 'Chakra UI & Bootstrap',
    category: 'Frontend',
    icon: 'Sparkles',
    level: 92,
    color: 'from-teal-400 to-cyan-600',
    description: 'Component libraries, rapid UI prototyping, and responsive styling.',
  },
  {
    name: 'Shopify & OpenCart',
    category: 'DevOps & Tools',
    icon: 'Container',
    level: 86,
    color: 'from-green-500 to-emerald-700',
    description: 'E-commerce platform customization, Liquid templates, and merchant stores.',
  },
  {
    name: 'Jest & RSpec (TDD)',
    category: 'DevOps & Tools',
    icon: 'Bug',
    level: 88,
    color: 'from-rose-500 to-pink-600',
    description: 'Test-Driven Development, unit testing, integration tests, and assertions.',
  },
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'exp-1',
    company: 'NIBCODE Foundation',
    location: 'Part Time',
    role: 'Tutor / Web Developer',
    period: 'Jan 2025 - Oct 2025',
    type: 'Contract',
    description: 'Tutored students in web development, providing technical support through code reviews, etc. Built and maintained websites for clients engaging the company\'s services.',
    achievements: [
      'Tutored students in full-stack web development, conducting technical code reviews and debugging support.',
      'Architected, built, and maintained custom websites for clients engaging NIBCODE Foundation services.',
      'Guided learners through modern JavaScript, React, HTML5/CSS3, and responsive UI fundamentals.',
    ],
    technologies: ['JavaScript', 'ReactJS', 'HTML5', 'CSS3', 'Tutor / Code Review'],
    logoBg: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'exp-2',
    company: 'VELLA FINANCE',
    location: 'Remote',
    role: 'Web Developer',
    period: 'Aug 2023 - Sep 2024',
    type: 'Remote',
    description: 'Worked with designers and senior devs to develop and maintain responsive UI features. Continuously optimised and improved the performance and scalability of applications.',
    achievements: [
      'Collaborated closely with UI/UX designers and senior engineers to craft responsive user interface features.',
      'Continuously optimized frontend performance, component rendering, and application load speeds.',
      'Maintained cross-browser compatibility and seamless UI accessibility for fintech applications.',
    ],
    technologies: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'UI Optimization', 'REST APIs'],
    logoBg: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'exp-3',
    company: 'MICROVERSE',
    location: 'Remote',
    role: 'Mentor (Volunteer)',
    period: 'Sep 2022 - 2024',
    type: 'Remote',
    description: 'Mentored 3+ junior web developers weekly on Zoom and Slack, providing technical support through code reviews.',
    achievements: [
      'Provided 1-on-1 and group technical support and code reviews for 3+ junior web developers weekly via Zoom and Slack.',
      'Evaluated student codebases for clean code, DRY principles, and Git Flow compliance.',
      'Helped junior developers troubleshoot complex state management and full-stack web architecture.',
    ],
    technologies: ['Mentoring', 'Code Review', 'Zoom / Slack', 'Git Flow', 'Pair-Programming'],
    logoBg: 'from-emerald-500 to-teal-600',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "NIBCODE Foundation",
    subtitle: "Tech NGO Digital Brochure & Web Platform",
    category: "Frontend",
    description:
      "A tech NGO's digital brochure and web platform showcasing educational programs, student achievements, and community initiatives.",
    longDescription:
      "Designed and developed for NIBCODE Foundation to present their technical web development curriculum and client services. Built with responsive styling, glassmorphic layout, and interactive course breakdowns.",
    image:
      nibcode,
    tags: ["ReactJS", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    features: [
      "Interactive digital brochure highlighting NGO initiatives & client services",
      "Fully responsive mobile-first design with smooth Framer Motion transitions",
      "Structured course curriculum breakdown for student tutoring",
      "Fast load speeds and clean glassmorphic design system",
    ],
    metrics: [
      { label: "Role", value: "Lead Dev" },
      { label: "Platform", value: "Web / Mobile" },
      { label: "Impact", value: "Active NGO" },
    ],
    demoUrl: "https://www.github.com/julzedz",
    githubUrl: "https://www.github.com/julzedz",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Skilzz Stores",
    subtitle: "E-Commerce Online Store Built with Shopify",
    category: "Full Stack",
    description:
      "An online store custom-built for a client utilizing Shopify technology for seamless product catalog management and shopping cart checkout.",
    longDescription:
      "Crafted for Skilzz Stores to deliver a friction-free online shopping experience for customers. Features customized Shopify templates, product inventory cataloging, secure checkout workflows, and responsive styling.",
    image:
      skilzz,
    tags: ["Shopify", "Liquid", "JavaScript", "CSS3", "E-Commerce"],
    features: [
      "Custom Shopify storefront integration tailored for client branding",
      "Seamless shopping cart checkout and order processing",
      "Dynamic product category filter and inventory synchronization",
      "Optimized mobile and desktop purchasing experience",
    ],
    metrics: [
      { label: "Client Project", value: "E-Commerce" },
      { label: "Tech Stack", value: "Shopify" },
    ],
    demoUrl: "https://www.github.com/julzedz",
    githubUrl: "https://www.github.com/julzedz",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Property Bus Stop",
    subtitle: "Real Estate Platform for Advertising & Property Discovery",
    category: "Full Stack",
    description:
      "A real estate platform built for a client, for advertising and discovering residential and commercial properties.",
    longDescription:
      "A comprehensive real estate web application enabling property agents and buyers to list, discover, and inquire about real estate offerings with location filters, detail views, and contact channels.",
    image:
      propertybusstop,
    tags: ["ReactJS", "Ruby-On-Rails", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Property listing discovery with location and price filters",
      "Agent dashboard for publishing and managing property listings",
      "Interactive image gallery and detailed amenity highlights",
      "Direct client inquiry and contact request workflow",
    ],
    metrics: [
      { label: "Domain", value: "Real Estate" },
      { label: "Architecture", value: "Full Stack" },
    ],
    demoUrl: "https://www.github.com/julzedz",
    githubUrl: "https://www.github.com/julzedz",
    featured: true,
  },
  {
    id: "proj-4",
    title: "My-GameHub",
    subtitle: "Video Game Discovery Hub",
    category: "Frontend",
    description:
      "A video game discovery hub for exploring interesting games, release dates, ratings, and genre collections.",
    longDescription:
      "Built with React and TypeScript, My-GameHub connects to gaming APIs to present rich game cards, metacritic scores, search queries, and genre selection with clean state management.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop",
    tags: ["ReactJS", "TypeScript", "Chakra UI", "REST API", "Zustand"],
    features: [
      "Real-time game filtering by genre, platform, and popularity",
      "Instant search bar with query response",
      "Sleek dark mode interface styled with Chakra UI",
      "Detailed game metadata, screenshots, and metacritic badges",
    ],
    metrics: [
      { label: "Type", value: "Web App" },
      { label: "State", value: "Zustand" },
    ],
    demoUrl: "https://www.github.com/julzedz/My-GameHub",
    githubUrl: "https://www.github.com/julzedz/My-GameHub",
    featured: false,
  },
  {
    id: "proj-5",
    title: "GT Savings Bank App",
    subtitle: "Mock SPA for Banking Deposits & Withdrawals",
    category: "Frontend",
    description:
      "A mock Single Page Application (SPA) designed for simulated monetary deposits, withdrawals, and balance history tracking.",
    longDescription:
      "Developed using ReactJS and state management to simulate digital banking workflows. Allows users to test account balances, perform mock transaction deposits/withdrawals, and view history ledgers.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    tags: ["ReactJS", "JavaScript", "CSS3", "SPA Architecture"],
    features: [
      "Simulated account deposit and withdrawal transactions",
      "Real-time balance computation and ledger updates",
      "Form input security validation and error handling",
      "Fluid Single Page Application state transitions",
    ],
    metrics: [
      { label: "Pattern", value: "SPA" },
      { label: "Focus", value: "Fintech UI" },
    ],
    demoUrl: "https://www.github.com/julzedz",
    githubUrl: "https://www.github.com/julzedz",
    featured: false,
  },
  {
    id: "proj-6",
    title: "Sharp-GPT",
    subtitle: "AI Chatbot & Conversation Interface",
    category: "Full Stack",
    description:
      "An AI chatbot web application for interactive conversational assistance and prompt responses.",
    longDescription:
      "Sharp-GPT provides an intuitive user interface for conversing with artificial intelligence models, generating code assistance, writing help, and saving prompt threads.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop",
    tags: ["ReactJS", "TypeScript", "Node.js", "AI API", "Tailwind CSS"],
    features: [
      "Interactive conversational AI chat interface",
      "Streaming message response rendering",
      "Preset prompt templates for coding, writing, and brainstorming",
      "Responsive dark mode glassmorphic UI",
    ],
    metrics: [
      { label: "Category", value: "AI / Chatbot" },
      { label: "Integrations", value: "AI API" },
    ],
    demoUrl: "https://www.github.com/julzedz",
    githubUrl: "https://www.github.com/julzedz",
    featured: false,
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu-1',
    institution: 'MICROVERSE INC.',
    degree: 'Remote Full Stack Web Development Program, Full-Time',
    period: '2022',
    description: 'Spent 1,300+ hours mastering algorithms, data structures, and full-stack web development while simultaneously developing projects with Ruby-On-Rails, JavaScript, React, etc.',
    highlights: [
      'Developed skills in remote pair programming using GitHub, industry-standard Git Flow, and daily standups to collaborate with international remote developers',
      'Built 10+ full-stack capstone projects adhering to strict technical code reviews and TDD practices',
      'Mastered algorithms, data structures, React, Redux, Ruby on Rails, and PostgreSQL',
    ],
  },
  {
    id: 'edu-2',
    institution: 'THE UNIVERSITY OF NIGERIA, ENUGU',
    degree: 'B.Sc Computer Science (Second Class Upper Division)',
    period: '2019',
    description: 'Earned a B.Sc. in Computer Science with Second Class Upper Division (2:1) honors.',
    highlights: [
      'Graduated with Second Class Upper Division (2:1) honors',
      'Strong academic foundation in computer science principles, software engineering, and database systems',
      'Completed coursework in data structures, algorithms, object-oriented programming, and computer networks',
    ],
  },
];
