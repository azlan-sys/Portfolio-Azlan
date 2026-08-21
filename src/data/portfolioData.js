// ====================================
// Portfolio Data — Single Source of Truth
// ====================================
// Edit this file to update all your portfolio content.

export const personalInfo = {
  name: 'Muhammad Azlan',
  firstName: 'Azlan',
  title: 'Information Systems Engineer & Developer',
  tagline: 'Final-Year UiTM Student · Full-Stack Web, Mobile & IoT Developer',
  description:
    'Final-year Bachelor of Information Systems (Hons.) Information Systems Engineering student at Universiti Teknologi MARA (UiTM). Passionate about Information Systems, Business Analysis, Software Development, and Data Analytics. Currently seeking internship opportunities.',
  email: 'azlan@example.com',
  location: 'Jasin, Malacca / Kuala Lumpur, Malaysia',
  resumeUrl: '#',
  image: 'images/my-picture.png',
  socials: {
    github: 'https://github.com/azlan-sys',
    linkedin: 'https://www.linkedin.com/in/azlanmuhd/',
    twitter: '#',
  },
};

export const aboutData = {
  image: 'images/my-picture.png',
  headline: 'Final-Year Information Systems Engineering Student at UiTM',
  bio: [
    'I am a final-year Bachelor of Information Systems (Hons.) Information Systems Engineering student at Universiti Teknologi MARA (UiTM).',
    'I am deeply passionate about Information Systems, Business Analysis, Software Development, and Data Analytics. Through academic and personal projects, I have developed solid, practical experience in web, mobile, and IoT systems using Laravel, PHP, JavaScript, MySQL, Flutter, and Android (Java).',
    'Currently seeking internship opportunities to gain industry experience, collaborate on impactful engineering projects, and contribute to innovative technology solutions.',
  ],
  focusAreas: [
    {
      title: 'Information Systems',
      desc: 'Enterprise workflows, requirements engineering & relational schema design.',
      icon: 'FaDatabase',
    },
    {
      title: 'Software & Web Development',
      desc: 'Modern web applications built with Laravel, PHP, React, Tailwind & MySQL.',
      icon: 'FaCode',
    },
    {
      title: 'Mobile & IoT Systems',
      desc: 'Native Android (Java), Flutter apps, and real-time ESP32 hardware telemetry.',
      icon: 'FaMobileAlt',
    },
    {
      title: 'Data Analytics & AI',
      desc: 'Machine learning, Artificial Neural Networks (ANN), and Explainable AI (SHAP).',
      icon: 'FaBrain',
    },
  ],
  stats: [
    { label: 'UiTM CGPA', value: 3.49, suffix: '', isDecimal: true },
    { label: 'Core Projects Built', value: 6, suffix: '+' },
    { label: 'Leadership Roles', value: 4, suffix: '' },
    { label: 'Technical Skills', value: 15, suffix: '+' },
  ],
};

export const skillsData = [
  {
    category: 'Software & Web',
    skills: [
      { name: 'Laravel', level: 92, icon: 'SiLaravel' },
      { name: 'PHP', level: 90, icon: 'SiPhp' },
      { name: 'JavaScript', level: 90, icon: 'SiJavascript' },
      { name: 'React', level: 85, icon: 'SiReact' },
      { name: 'MySQL', level: 90, icon: 'SiMysql' },
      { name: 'HTML / CSS', level: 95, icon: 'SiHtml5' },
      { name: 'Tailwind CSS', level: 92, icon: 'SiTailwindcss' },
      { name: 'Alpine.js', level: 85, icon: 'SiAlpinelinux' },
    ],
  },
  {
    category: 'Mobile & IoT',
    skills: [
      { name: 'Android (Java)', level: 88, icon: 'SiAndroid' },
      { name: 'Flutter', level: 80, icon: 'SiFlutter' },
      { name: 'Firebase & Firestore', level: 88, icon: 'SiFirebase' },
      { name: 'Google Maps SDK', level: 85, icon: 'SiGooglemaps' },
      { name: 'IoT & ESP32 Telemetry', level: 85, icon: 'SiArduino' },
      { name: 'REST APIs', level: 90, icon: 'SiPostman' },
    ],
  },
  {
    category: 'Analytics & Engineering',
    skills: [
      { name: 'Python (ANN / ML)', level: 85, icon: 'SiPython' },
      { name: 'Business Analysis', level: 90, icon: 'SiMicrosoftexcel' },
      { name: 'Explainable AI (SHAP)', level: 82, icon: 'SiTensorflow' },
      { name: 'Git & GitHub', level: 90, icon: 'SiGit' },
      { name: 'Project Management', level: 88, icon: 'SiJira' },
      { name: 'Figma UI/UX', level: 80, icon: 'SiFigma' },
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
    title: 'SafeCampus Mobile',
    tagline: 'Crowdsourced Campus Incident Reporting & Real-Time Emergency Navigation',
    role: 'Android & Mobile Developer',
    year: '2026',
    image: '/images/safecampus.jpg',
    description:
      'Native Android safety & incident reporting app with live Google Maps telemetry, GPS geocoding, and Firebase real-time synchronization.',
    longDescription:
      'A crowdsourced campus safety and emergency response mobile application designed for university students to report hazards, track active incidents on an interactive Google Map, and quickly reach emergency contact hubs.',
    overview:
      'SafeCampus empowers university campus communities (developed for UiTM Jasin) to stay alert and secure in real-time. Students can report urgent incidents across four critical categories—Accidents, Crimes, Medical Emergencies, and Fires—with automated GPS location geocoding. The application integrates Google Maps SDK to display live incident heatmaps and verified campus safety infrastructure (Security Posts, Clinics, and Emergency Call Points), backed by Firebase for instantaneous multi-device synchronization.',
    highlights: [
      'Real-Time Google Maps Telemetry',
      'Multi-Category Incident Reporting (Accidents, Crime, Medical, Fire)',
      'Automated GPS Geocoding & Address Resolution',
      'Firebase Realtime DB & Firestore Sync',
      'Admin-Verified Safe Zones & Emergency Posts',
      'Student Identity & Accountability Verification',
    ],
    keyFeatures: [
      {
        title: 'Real-Time Interactive Campus Map',
        desc: 'Visualizes active incidents and campus emergency infrastructure (Security Posts, Clinics, Emergency Help Points) using Google Maps SDK with custom map markers and status overlays.',
      },
      {
        title: 'Instant Multi-Category Incident Dispatch',
        desc: 'Streamlined emergency reporting forms enabling students to submit high-priority alerts with categorical tagging (Accident, Crime, Medical, Fire) and timestamped documentation.',
      },
      {
        title: 'Dynamic GPS Geolocation & Reverse Geocoding',
        desc: 'Leverages Android Location Services to automatically capture precise user coordinates and translate latitude/longitude into human-readable campus building addresses.',
      },
      {
        title: 'Cloud-Native Firebase Synchronization',
        desc: 'Utilizes Firebase Realtime Database and Firestore for instantaneous data propagation across all student devices and secure authentication profile management.',
      },
      {
        title: 'Admin Verified Safety Hubs',
        desc: 'Features official campus security posts, emergency call stations, and clinic locations maintained by university safety administrators for rapid navigation during crises.',
      },
    ],
    architecture:
      'Native Android application developed in Java following Material Design 3 guidelines, powered by Google Maps SDK, Play Services Location API, and Firebase Firestore/Realtime Database.',
    techStack: [
      'Android (Java)',
      'Firebase',
      'Google Maps SDK',
      'Material Design 3',
      'Firestore',
      'GPS Geocoding',
    ],
    category: 'Mobile',
    liveUrl: 'https://github.com/azlan-ive/SafeCampus/actions',
    githubUrl: 'https://github.com/azlan-sys/SafeCampus',
    featured: true,
    color: '#10b981',
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
    role: 'Academic Committee',
    company: 'Information System Engineering Club (ISEC)',
    duration: 'Oct 2024 — Oct 2025',
    location: 'Jasin, Malacca',
    description:
      'Assisted in planning and organizing club events, academic programs, and student activities. Collaborated with committee members to coordinate project planning and event execution while ensuring smooth inter-committee communication.',
    technologies: ['Project Management', 'Event Planning', 'Leadership', 'Teamwork'],
  },
  {
    id: 2,
    role: 'Committee Member',
    company: 'UiTM Blockchain Association',
    duration: 'Oct 2024 — Oct 2025',
    location: 'Jasin, Malacca',
    description:
      'Supported the planning and execution of blockchain-related events and workshops. Worked closely with the committee to coordinate club activities, student engagement initiatives, and event logistics.',
    technologies: ['React.js', 'Project Management', 'Event Logistics', 'Community Engagement'],
  },
  {
    id: 3,
    role: 'Special Task Duties',
    company: 'Seniwara UiTM Kampus Jasin',
    duration: 'Oct 2024 — Oct 2025',
    location: 'Jasin, Malacca',
    description:
      'Participated in theatre productions and club performances. Collaborated with team members in planning, rehearsals, cultural events organization, and public presentation execution.',
    technologies: ['Event Management', 'Public Speaking', 'Creativity', 'Team Coordination'],
  },
  {
    id: 4,
    role: 'Entrepreneurship Committee',
    company: 'Rakan Pembimbing Perkhidmatan Sokongan (PEERS)',
    duration: 'Oct 2024 — Oct 2025',
    location: 'Jasin, Malacca',
    description:
      'Assisted in organizing student development programs and club activities. Supported initiatives promoting student well-being, leadership development, and event coordination.',
    technologies: ['Team Leadership', 'Problem Solving', 'Student Welfare', 'Event Planning'],
  },
];

export const educationData = [
  {
    id: 1,
    institution: 'Universiti Teknologi MARA (UiTM)',
    degree: 'Bachelor in Information Systems (Hons.) Information Systems Engineering',
    period: 'Jul 2023 — Jan 2027',
    location: 'Kampus Jasin, Malacca, Malaysia',
    grade: 'CGPA 3.49 (Final-Year)',
    description:
      'Pursuing a Bachelor of Information Systems (Hons.) in Information Systems Engineering. Gained hands-on experience in software development, mobile application development, IoT, database management, and system analysis through academic projects. Actively involved in student organizations and leadership activities, strengthening teamwork, project management, and communication skills.',
    skills: [
      'Web Development',
      'Mobile Application Development',
      'IoT Systems',
      'Database Management',
      'System Analysis',
      'Project Management',
      'Teamwork',
    ],
  },
  {
    id: 2,
    institution: 'Malacca Matriculation College',
    degree: 'Foundation in Physical Sciences',
    period: 'Aug 2022 — Jun 2023',
    location: 'Malacca, Malaysia',
    grade: 'CGPA 3.62',
    activity: 'Peer Assisted Learning (PAL) Leader – Mathematics',
    description:
      'Completed the Science Module with a CGPA of 3.62. Throughout my studies, I developed a strong foundation in Mathematics, Physics, and Computer Science while actively participating in academic and co-curricular activities. My experience at Melaka Matriculation College strengthened my analytical thinking, problem-solving, communication, and teamwork skills, preparing me for further studies in Information Systems Engineering.',
    skills: [
      'Mathematics',
      'Computer Science',
      'Physics',
      'Analytical Thinking',
      'Problem Solving',
      'Peer Tutoring (PAL Leader)',
    ],
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
  { label: 'Contact', href: '#contact' },
];

export const typewriterStrings = [
  'Information Systems Engineer',
  'Full-Stack Developer (Laravel & React)',
  'Mobile Developer (Android & Flutter)',
  'Business Analyst & Data Enthusiast',
  'Final-Year UiTM Student',
];
