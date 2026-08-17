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
    description:
      'Smart study content hub with gamification for primary school students featuring interactive lessons, quizzes, badges, and progress tracking.',
    longDescription:
      'A comprehensive educational platform designed for primary school students and teachers. Features interactive lesson and quiz builders, automated scoring, gamified rewards with badges and leaderboards, and dual role-based dashboards.',
    techStack: ['Laravel', 'PHP', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'Vite'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: 'https://github.com/azlan-ive/Smart_Study_Hub.git',
    featured: true,
    color: '#00e5ff',
  },
  {
    id: 2,
    title: 'QuantumDash',
    description:
      'Analytics dashboard with real-time data visualization, customizable widgets, and predictive insights powered by machine learning.',
    longDescription:
      'Enterprise-grade analytics dashboard featuring live data streams, drag-and-drop widget customization, and ML-powered trend predictions.',
    techStack: ['Next.js', 'TypeScript', 'D3.js', 'Python', 'PostgreSQL'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#a855f7',
  },
  {
    id: 3,
    title: 'StellarShop',
    description:
      'E-commerce platform with AR product previews, personalized recommendations, and a seamless checkout experience.',
    longDescription:
      'Modern e-commerce solution with augmented reality product visualization, AI-driven recommendations, and optimized conversion funnels.',
    techStack: ['React', 'Stripe', 'Express', 'MongoDB', 'Three.js'],
    category: 'Full-Stack',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    color: '#ec4899',
  },
  {
    id: 4,
    title: 'CodeForge',
    description:
      'Collaborative code editor with real-time pair programming, built-in terminal, and AI code completion.',
    longDescription:
      'Browser-based IDE supporting real-time collaboration, integrated terminal, Git workflows, and AI-powered code suggestions.',
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
    description:
      'Scalable REST API with auto-scaling, rate limiting, comprehensive documentation, and 99.9% uptime SLA.',
    longDescription:
      'Production-ready API infrastructure with automatic horizontal scaling, intelligent rate limiting, and interactive API documentation.',
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
    description:
      'AI-powered image management platform with smart tagging, advanced search, and real-time collaboration.',
    longDescription:
      'Digital asset management solution leveraging computer vision for auto-tagging, natural language search, and team collaboration features.',
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
