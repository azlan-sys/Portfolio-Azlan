// ====================================
// Portfolio Data — Single Source of Truth
// ====================================
// Edit this file to update all your portfolio content.

export const personalInfo = {
  name: 'Azlan',
  firstName: 'Azlan',
  title: 'Full-Stack Developer',
  tagline: 'Crafting Immersive Digital Experiences',
  description:
    'I design and build exceptional digital experiences that live at the intersection of creativity and technology. Passionate about turning complex problems into elegant, performant solutions.',
  email: 'azlan@example.com',
  location: 'Kuala Lumpur, Malaysia',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/azlan',
    linkedin: 'https://linkedin.com/in/azlan',
    twitter: 'https://twitter.com/azlan',
  },
};

export const aboutData = {
  bio: [
    "I'm a passionate Full-Stack Developer with a love for creating beautiful, functional, and user-centered digital experiences.",
    "With expertise spanning both frontend and backend technologies, I bring ideas to life through clean code and thoughtful design.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  ],
  stats: [
    { label: 'Years Experience', value: 5 },
    { label: 'Projects Completed', value: 50 },
    { label: 'Happy Clients', value: 30 },
    { label: 'Open Source Contributions', value: 100 },
  ],
};

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95, icon: 'SiReact' },
      { name: 'TypeScript', level: 90, icon: 'SiTypescript' },
      { name: 'JavaScript', level: 95, icon: 'SiJavascript' },
      { name: 'HTML / CSS', level: 95, icon: 'SiHtml5' },
      { name: 'Three.js', level: 75, icon: 'SiThreedotjs' },
      { name: 'Framer Motion', level: 85, icon: 'SiFramer' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90, icon: 'SiNodedotjs' },
      { name: 'Python', level: 85, icon: 'SiPython' },
      { name: 'Express', level: 88, icon: 'SiExpress' },
      { name: 'PostgreSQL', level: 82, icon: 'SiPostgresql' },
      { name: 'MongoDB', level: 85, icon: 'SiMongodb' },
      { name: 'GraphQL', level: 78, icon: 'SiGraphql' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 92, icon: 'SiGit' },
      { name: 'Docker', level: 80, icon: 'SiDocker' },
      { name: 'AWS', level: 75, icon: 'SiAmazonwebservices' },
      { name: 'CI/CD', level: 82, icon: 'SiGithubactions' },
      { name: 'Linux', level: 85, icon: 'SiLinux' },
      { name: 'Figma', level: 78, icon: 'SiFigma' },
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'Smart Study Content Hub',
    tagline: 'Interactive Gamified Learning Platform for Primary Students',
    role: 'Full-Stack Developer',
    year: '2024',
    video: 'videos/smart-study-hub.mp4',
    description:
      'Smart study content hub with gamification for primary school students featuring interactive lessons, quizzes, badges, and progress tracking.',
    longDescription:
      'A comprehensive educational platform designed for primary school students and teachers. Features interactive lesson and quiz builders, automated scoring, gamified rewards with badges and leaderboards, and dual role-based dashboards.',
    overview:
      'Smart Study Content Hub transforms primary education by introducing gamification into daily classroom learning. Designed with separate workflows for teachers and young students, it enables educators to build custom lessons and quizzes while encouraging students to complete learning tracks to earn badges, level up on leaderboards, and master core subjects.',
    highlights: [
      'Gamified Badges & Points',
      'Dual Role Dashboards',
      'Interactive Quiz Engine',
      'Class Code Onboarding',
      'Automated Teacher Reports',
    ],
    keyFeatures: [
      {
        title: 'Interactive Lesson & Quiz Builder',
        desc: 'Teachers can create multimedia lessons, publish quizzes with multiple choice questions, and manage content per subject.',
      },
      {
        title: 'Gamification & Achievement Badges',
        desc: 'Students unlock custom badges, level up with study points, and track their achievements on a kid-friendly visual dashboard.',
      },
      {
        title: 'Real-Time Class Leaderboards',
        desc: 'Fosters healthy learning motivation through student rankings and progress tracking across subjects.',
      },
      {
        title: 'Classroom & Student Management',
        desc: 'Seamless classroom code onboarding, student progress analytics, and secure role-based access for teachers and students.',
      },
    ],
    architecture:
      'Built on Laravel 12 with Alpine.js and Tailwind CSS for rapid, reactive UI components without SPA routing overhead. Relational schema models subjects, topics, quizzes, and automated badge triggers.',
    techStack: ['Laravel', 'PHP', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'Vite'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: 'https://github.com/azlan-ive/Smart_Study_Hub.git',
    featured: true,
    color: '#00e5ff',
  },
  {
    id: 2,
    title: 'AI-Powered Smart Camera Dry Box',
    tagline: 'IoT Environmental Telemetry & Predictive Silica Management',
    role: 'IoT & Full-Stack Developer',
    year: '2024',
    description:
      'Smart IoT & AI-driven dry box monitoring system for camera equipment with real-time humidity tracking, predictive silica replacement AI, and automated alerts.',
    longDescription:
      'An intelligent IoT environmental control and monitoring platform for camera gear. Features live telemetry sensor tracking, AI-powered silica replacement prediction, automated humidity alerts, and onboarding setup wizard.',
    overview:
      'High humidity is the primary cause of lens fungus and electronic corrosion in sensitive camera equipment. The AI-Powered Smart Camera Dry Box continuously monitors temperature and relative humidity inside dry cabinets, using predictive AI to estimate silica gel saturation and alert users before moisture damage occurs.',
    highlights: [
      'Live Sensor Telemetry',
      'AI Silica Saturation Prediction',
      'Humidity Threshold Alerts',
      'Interactive Demo Mode',
      'ESP32 Firmware Wizard',
    ],
    keyFeatures: [
      {
        title: 'Live Telemetry & Sensor Tracking',
        desc: 'Real-time charts tracking relative humidity and temperature trends with configurable safe threshold boundaries.',
      },
      {
        title: 'AI Predictive Silica Replacement',
        desc: 'Analyzes moisture absorption decay curves to predict precisely when silica desiccant needs regeneration or replacement.',
      },
      {
        title: 'Automated Threshold Notifications',
        desc: 'Triggers instant visual dashboard alerts and automated notifications whenever cabinet humidity exceeds safe limits (>60% RH).',
      },
      {
        title: 'Device Onboarding & Setup Wizard',
        desc: 'Step-by-step firmware configuration wizard, device pairing instructions, and a live interactive demo playground.',
      },
    ],
    architecture:
      'Full-stack Laravel application with RESTful IoT ingestion endpoints, Tailwind dark-mode UI, Alpine.js telemetry polling, and integration with ESP32/DHT22 sensor hardware.',
    techStack: ['Laravel', 'PHP', 'IoT', 'Tailwind CSS', 'Alpine.js', 'MySQL'],
    category: 'Full-Stack',
    liveUrl: 'https://azlan-sys.github.io/AI-Powered-Smart-Camera-Dry-Box/',
    githubUrl: 'https://github.com/azlan-sys/AI-Powered-Smart-Camera-Dry-Box.git',
    featured: true,
    color: '#ff7a29',
  },
  {
    id: 3,
    title: 'ICU Admission Risk Prediction for HIV Patients',
    tagline: 'Clinical Deep Learning (ANN) & Explainable AI (SHAP) for Critical Care Triage',
    role: 'AI & Machine Learning Researcher',
    year: '2024',
    image: '/images/hiv-icu-ann.jpg',
    description:
      'Artificial Neural Network (ANN) deep learning system predicting ICU admission risk in immunocompromised HIV patients with 0.961 ROC-AUC and SHAP explainability.',
    longDescription:
      'A clinical deep learning model utilizing multi-layer Artificial Neural Networks (11→8→5→1 topology) and Explainable AI (SHAP) to forecast early ICU admission risk in HIV patients by evaluating viral load, CD4+ count, respiratory failure, and opportunistic infections.',
    overview:
      'Traditional critical care scoring tools often fail to account for the complex pathophysiology and opportunistic infection profile of HIV patients. This project engineered a multi-layer Artificial Neural Network (ANN) trained on comprehensive clinical records (including Baseline CD4+ count, Viral Load, PCP, and organ-specific opportunistic infections). The model achieved top-tier predictive performance with a ROC-AUC of 0.961 and PR-AUC of 0.895, providing high-precision early ICU admission risk probabilities (from 7% low risk up to 93% high risk) alongside SHAP-based clinical feature attribution.',
    highlights: [
      'ROC-AUC 0.961 | PR-AUC 0.895',
      'Multi-Layer ANN (11 → 8 → 5 → 1)',
      'SHAP Explainability (XAI)',
      '11 Multi-Modal Clinical Biomarkers',
      'Top Driver: Respiratory Failure (+1.74 SHAP)',
      'High-Risk (93%) vs Low-Risk (7%) Triage',
    ],
    keyFeatures: [
      {
        title: 'Multi-Layer Neural Network (11 → 8 → 5 → 1)',
        desc: 'Deep architecture featuring an 11-node input layer, 8-node hidden layer 1, 5-node hidden layer 2, and a calibrated single-node risk output layer with non-linear activations.',
      },
      {
        title: 'Top-Tier Validation (0.961 ROC-AUC)',
        desc: 'Delivers exceptional discriminative power in predicting critical care needs, achieving a 0.961 ROC-AUC and 0.895 PR-AUC on clinical test benchmarks.',
      },
      {
        title: 'SHAP Explainability & Risk Attribution',
        desc: 'Empowers clinicians with transparent model interpretability—identifying Respiratory Failure (+1.74 SHAP impact) and Multiple Respiratory OIs (+1.14 SHAP impact) as primary ICU drivers.',
      },
      {
        title: '11 Multi-Modal Clinical Biomarkers',
        desc: 'Ingests normalized Continuous (Viral Load, CD4 Count) and Binary variables (PCP, AIDS Cancers, Cardiovascular, CNS OIs, MAC, Unexplained Infections).',
      },
      {
        title: 'High vs. Low Risk Clinical Benchmarks',
        desc: 'Accurately differentiates critical cases (93% ICU risk with low CD4 and respiratory failure) from stable cohorts (7% ICU risk with high CD4 and zero respiratory symptoms).',
      },
    ],
    architecture:
      'Constructed with Python, PyTorch/TensorFlow, Scikit-Learn, and SHAP for preprocessing, min-max normalization, class imbalance mitigation, 11-8-5-1 ANN training, and clinical interpretability analysis.',
    techStack: [
      'Python',
      'PyTorch',
      'Artificial Neural Networks',
      'SHAP (XAI)',
      'Scikit-Learn',
      'Pandas',
      'ROC-AUC (0.961)',
    ],
    category: 'AI/ML',
    liveUrl: '#',
    githubUrl: 'https://github.com/azlan-sys',
    featured: true,
    color: '#f43f5e',
  },
  {
    id: 4,
    title: 'CodeForge',
    tagline: 'Real-Time Collaborative Cloud IDE & AI Pair Programmer',
    role: 'Frontend Architect',
    year: '2023',
    description:
      'Collaborative code editor with real-time pair programming, built-in terminal, and AI code completion.',
    longDescription:
      'Browser-based IDE supporting real-time collaboration, integrated terminal, Git workflows, and AI-powered code suggestions.',
    overview:
      'CodeForge empowers developer teams to collaborate remotely with zero latency. It combines Monaco Editor, WebRTC peer data channels, and sandboxed Docker containers for instant multi-user code editing and execution.',
    highlights: [
      'Multi-Cursor Collaboration',
      'WebRTC P2P Sync',
      'Monaco Editor Integration',
      'AI Code Autocomplete',
    ],
    keyFeatures: [
      {
        title: 'Live Multi-Cursor Pair Programming',
        desc: 'Real-time shared state using Operational Transformation (OT) and WebRTC for conflict-free concurrent editing.',
      },
      {
        title: 'In-Browser Terminal & Execution',
        desc: 'Execute code in secure containerized sandboxes with live stdout/stderr streaming.',
      },
      {
        title: 'AI Code Assistant',
        desc: 'Context-aware code completion, refactoring suggestions, and inline documentation lookups.',
      },
    ],
    architecture:
      'React with Monaco Editor, WebRTC, Dockerized microservices, and Node.js WebSocket orchestration.',
    techStack: ['React', 'WebRTC', 'Node.js', 'Docker', 'Monaco Editor'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    color: '#22c55e',
  },
  {
    id: 5,
    title: 'CloudNest API',
    tagline: 'High-Throughput Microservice API Gateway & Infrastructure',
    role: 'Backend Engineer',
    year: '2023',
    description:
      'Scalable REST API with auto-scaling, rate limiting, comprehensive documentation, and 99.9% uptime SLA.',
    longDescription:
      'Production-ready API infrastructure with automatic horizontal scaling, intelligent rate limiting, and interactive API documentation.',
    overview:
      'CloudNest API serves as a unified backend gateway capable of handling 50,000+ requests per second. Built for mission-critical enterprise workloads with token-bucket rate limiting, structured logging, and distributed tracing.',
    highlights: [
      '50K+ Req/sec Throughput',
      'Token-Bucket Rate Limiter',
      'Distributed Caching',
      'Automated OpenAPI Docs',
    ],
    keyFeatures: [
      {
        title: 'Intelligent Rate Limiting',
        desc: 'Redis-backed token-bucket algorithms preventing abuse while accommodating burst traffic.',
      },
      {
        title: 'Horizontal Auto-Scaling',
        desc: 'Containerized Docker microservices orchestrated for elastic scaling under high load spikes.',
      },
      {
        title: 'Comprehensive Observability',
        desc: 'Full Prometheus and Grafana telemetry metrics with structured JSON logging.',
      },
    ],
    architecture:
      'Node.js & Express clustered backend with Redis caching, PostgreSQL relational database, and Dockerized deployment.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    color: '#f97316',
  },
  {
    id: 6,
    title: 'PixelVault',
    tagline: 'AI Computer Vision Digital Asset & Media Management',
    role: 'Full-Stack Developer',
    year: '2022',
    description:
      'AI-powered image management platform with smart tagging, advanced search, and real-time collaboration.',
    longDescription:
      'Digital asset management solution leveraging computer vision for auto-tagging, natural language search, and team collaboration features.',
    overview:
      'PixelVault solves the challenge of indexing millions of creative assets. By utilizing computer vision and embeddings, users can search images using natural language concepts rather than manual tags.',
    highlights: [
      'Semantic Vector Search',
      'Automatic AI Auto-Tagging',
      'AWS S3 Smart Storage',
      'GraphQL Query API',
    ],
    keyFeatures: [
      {
        title: 'Computer Vision Auto-Tagging',
        desc: 'Extracts color palettes, objects, text (OCR), and visual styles automatically on upload.',
      },
      {
        title: 'Natural Language Search',
        desc: 'Vector embeddings enable finding photos via descriptive queries like "sunset over mountain lake".',
      },
      {
        title: 'Cloud Media Pipeline',
        desc: 'Automated thumbnail generation, format transcoding (WebP/AVIF), and CDN delivery.',
      },
    ],
    architecture:
      'Next.js frontend with Python/TensorFlow inference backend, AWS S3 storage, and GraphQL API layer.',
    techStack: ['Next.js', 'Python', 'TensorFlow', 'AWS S3', 'GraphQL'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    color: '#06b6d4',
  },
];

export const experienceData = [
  {
    id: 1,
    role: 'Senior Full-Stack Developer',
    company: 'TechNova Inc.',
    duration: '2023 — Present',
    description:
      'Leading the development of scalable web applications, mentoring junior developers, and architecting microservices infrastructure serving 100K+ users.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Digital Pulse Agency',
    duration: '2021 — 2023',
    description:
      'Built and deployed 15+ client projects ranging from e-commerce platforms to real-time dashboards. Improved team velocity by 40% through CI/CD automation.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'GraphQL'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'StartupXYZ',
    duration: '2020 — 2021',
    description:
      'Developed responsive web applications with pixel-perfect UI implementations. Reduced bundle size by 60% through code splitting and optimization.',
    technologies: ['React', 'Redux', 'SASS', 'Jest'],
  },
  {
    id: 4,
    role: 'Junior Developer',
    company: 'CodeCraft Solutions',
    duration: '2019 — 2020',
    description:
      'Started my professional journey building internal tools and customer-facing applications. Gained expertise in full-stack JavaScript development.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MySQL'],
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechNova Inc.',
    quote:
      "Azlan is one of the most talented developers I've worked with. His ability to turn complex requirements into elegant solutions is remarkable. He consistently delivers beyond expectations.",
    avatar: null,
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Product Manager',
    company: 'Digital Pulse Agency',
    quote:
      'Working with Azlan was a game-changer for our project. His technical expertise combined with his eye for design resulted in a product that exceeded all our KPIs.',
    avatar: null,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lead Designer',
    company: 'StartupXYZ',
    quote:
      "Azlan bridges the gap between design and development like no one else. He brings designs to life with pixel-perfect precision and adds interactive touches that delight users.",
    avatar: null,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Engineering Director',
    company: 'CloudScale Labs',
    quote:
      "Azlan's code quality and architectural decisions are consistently top-notch. He's a developer who truly cares about the craft and it shows in every project he touches.",
    avatar: null,
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const typewriterStrings = [
  'Full-Stack Developer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
  'Problem Solver',
  'Creative Coder',
];
