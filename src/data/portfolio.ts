export const profile = {
  name: "Krishna Rangwani",
  roles: [
    "Full-Stack & AI/ML Developer",
    "LLM & AI Orchestration Specialist",
    "Web Product Builder",
    "Backend & Automation Engineer",
  ],
  tagline:
    "Full-Stack and AI/ML developer shipping production apps for real clients: 2 platforms serving 200+ users, 67% faster load times, and 80% less manual work. Technovate 3.0 Bronze medalist.",
  email: "krishnarangwani88@gmail.com",
  phone: "+91-7976572988",
  location: "Chandigarh, India",
  isOpenToWork: true,
  status: "Open to Work",
};

export const skills = [
  {
    group: "AI & ML",
    items: [
      "LLM Integration (Gemini API)",
      "AI Orchestration",
      "Prompt Engineering",
      "NLP",
      "Machine Learning",
      "Deep Learning",
      "Recommendation Systems",
      "Random Forest",
      "Scikit-learn",
      "TensorFlow",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Matplotlib",
    ],
  },
  {
    group: "Languages",
    items: ["Python", "TypeScript", "C++", "JavaScript", "SQL"],
  },
  {
    group: "Full-Stack & Web",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "RBAC",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "WebSockets",
    ],
  },
  {
    group: "Databases & Tools",
    items: [
      "MongoDB",
      "MySQL",
      "SQLite",
      "Redis",
      "Caching",
      "System Design",
      "PostgreSQL",
      "Supabase",
      "Git",
      "GitHub",
      "Vite",
      "VS Code",
    ],
  },
  {
    group: "Core CS & Coursework",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export type Certificate = {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  image: string;
  verifyUrl?: string;
};

export const certificates: Certificate[] = [
  {
    id: "skbr-internship",
    title: "SKBR Internship",
    image: "/certificates/SKBR%20internship.png",
  },
  {
    id: "mern-stack",
    title: "MERN Stack",
    image: "/certificates/MERN%20STACK.png",
  },
  {
    id: "machine-learning-bootcamp",
    title: "Machine Learning Bootcamp",
    image: "/certificates/machine%20learning%20bootcamp.jpg",
  },
  {
    id: "ai-practitioner",
    title: "AI Practitioner",
    image: "/certificates/AI%20practitioner.png",
  },
];

export type Achievement = {
  id: string;
  title: string;
  role: string;
  event: string;
  description: string;
  date: string;
  badge: string;
};

export const achievements: Achievement[] = [
  {
    id: "technovate",
    title: "Bronze Medalist — Technovate 3.0",
    role: "Team Lead",
    event: "Technovate 3.0 (150+ teams)",
    description: "Podium finish among 150+ teams for DevConnect, building an AI-powered candidate/recruiter platform with ATS analysis and 5-signal ranking.",
    date: "2026",
    badge: "Podium Finish",
  },
  {
    id: "placement-cell",
    title: "Training & Placement Cell — UIET",
    role: "Member & Lead",
    event: "UIET Panjab University",
    description: "Coordinated campus placement drives, company outreach, and led student recruitment management team.",
    date: "2024 — Present",
    badge: "Leadership",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  location?: string;
  tech?: string[];
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "App Developer Intern",
    company: "SKBR Exports",
    duration: "Jun 2026 — Jul 2026",
    location: "Remote",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis", "JWT", "REST APIs", "RBAC"],
    points: [
      "Analyzed client manual trading workflow and built a real-time MERN platform with 3 roles (Admin, Broker, Miller) serving 100+ users (50 brokers, 50 millers).",
      "Cut recording time from 10 min to 2 min (80% faster) across ~10 daily transactions with verifiable digital records.",
      "Built one-click demand broadcast to 50 brokers (replacing one-by-one calls) plus billing, invoicing, and godown tracking.",
      "Cut load time from 3s to 1s (67%) via Redis caching, load-based optimization, and redundant online/offline databases.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Learning Zone",
    duration: "Jan 2026 — Mar 2026",
    location: "Hybrid",
    tech: ["MySQL", "Redis", "Google Drive API", "Role-Based Auth", "React.js", "Node.js"],
    points: [
      "Built a full-stack institute platform from scratch for 50 students, 5 teachers, and 50 parents (~100 daily users).",
      "Built role-based dashboards (attendance, notes, classes) and digitized a year of fee records with reminders.",
      "Added parent notifications and an AI homework scheduler and timetable generator, cutting admin workload.",
      "Cut load time from 3s to 1s (67%) via Redis caching, load-based optimization, and redundant databases.",
    ],
  },
  {
    role: "AI Product Engineer",
    company: "Personal & Academic Projects",
    duration: "Oct 2025 — Present",
    location: "Self-Directed",
    tech: ["Flask", "OpenCV", "TensorFlow", "PyTorch", "OCR", "WebSockets"],
    points: [
      "Developed intelligent systems for prescription OCR, attendance verification, and career discovery.",
      "Built backend APIs using Flask, OpenCV, and TensorFlow for production-ready AI inference.",
      "Designed user flows that combine biometric validation, geolocation checks, and secure data capture.",
    ],
  },
  {
    role: "B.E. in Information Technology",
    company: "UIET Panjab University",
    duration: "2024 — 2028",
    location: "Chandigarh",
    tech: ["CGPA: 9.6 / 10", "DSA", "DBMS", "OS", "Computer Networks"],
    points: [
      "Pursuing BE in Information Technology with a 9.6 / 10 CGPA and strong programming fundamentals.",
      "Completed advanced coursework in Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering.",
      "Podium finish in Technovate 3.0 (Bronze medalist) among 150+ teams; Member & Lead in Training & Placement Cell.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  long: string;
  tech: string[];
  cover: string;
  images: string[];
  links: { label: string; href: string }[];
  accent: string;
};

export const projects: Project[] = [
  {
    id: "devconnect",
    title: "DevConnect",
    description: "AI-powered career platform unifying candidate & recruiter workflows; Technovate 3.0 Bronze Medalist (150+ teams).",
    long: "DevConnect is an AI-powered full-stack platform that connects job seekers, recruiters, and freelancers in a unified ecosystem, awarded Bronze Medal at Technovate 3.0 out of 150+ teams. Designed a 5-signal statistical candidate ranking algorithm (skills, projects, ATS score, GitHub, internships). Orchestrated Gemini API structured outputs for automated resume generation, ATS analysis, and skill extraction, coupled with pre-trained ML models for ATS accuracy, AI rank-improvement tips, referrals, and streak tracking.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "TypeScript", "Tailwind CSS"],
    cover: "/devconnect1.png",
    images: [
      "/devconnect2.png",
      "/devconnect3.png",
      "/devconnect4.png",
      "/devconnect5.png",
      "/devconnect6.png",
      "/devconnect7.png",
      "/devconnect8.png",
    ],
    links: [
      { label: "Live site", href: "https://blank-canvas-f078e6bb.vercel.app/" },
      { label: "GitHub", href: "https://github.com/KrishnaRangwani2526/blank-canvas-f078e6bb/" },
    ],
    accent: "from-cyan-400 to-sky-500",
  },
  {
    id: "wandermate",
    title: "WanderMate AI",
    description: "AI-powered travel platform with multi-account incentives, itinerary generator, and deal analysis.",
    long: "Team lead of WanderMate AI, an open-source travel platform with 3 account tiers (traveler, influencer, local business) promoting local vendors and tourism across India. Designed a token, credit, and score-based discount system rewarding all 3 tiers. Engineered an AI chatbot and guided flow agent (LLM orchestration) generating itineraries by budget and interests, alongside a taste-based recommender, cheapest-flight discovery, and deal analysis.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Python", "Flask", "SQLite", "LLM Orchestration"],
    cover: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    ],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "https://github.com/KrishnaRangwani2526" },
    ],
    accent: "from-teal-400 to-emerald-500",
  },
  {
    id: "cricket-acoustic",
    title: "Cricket Species Acoustic Classification",
    description: "Faculty-guided bioacoustic ML research classifying 4,500+ chirp recordings.",
    long: "Cricket Species Acoustic Classification is a faculty-guided research project building an ML classifier on 4,500+ bioacoustic chirp recordings. Developed signal processing and feature extraction pipelines utilizing Random Forest with Scikit-learn in Python, with ongoing research toward spectrogram-based Convolutional Neural Networks (CNN) for multi-species acoustic classification.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Machine Learning", "Audio Processing", "CNN"],
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    ],
    links: [
      { label: "Research Overview", href: "#" },
      { label: "GitHub", href: "https://github.com/KrishnaRangwani2526" },
    ],
    accent: "from-emerald-400 to-lime-500",
  },
  {
    id: "meddecode",
    title: "MedDecode",
    description: "AI-based prescription reader that converts handwritten prescriptions into structured digital data.",
    long: "MedDecode is an AI-based medical prescription reader designed to interpret handwritten prescriptions and convert them into structured digital data. It uses image processing techniques and a trained machine learning model to recognize complex doctor handwriting, extracting medicines, dosages, and recommended tests into a clear format for patients and pharmacies.",
    tech: ["Python", "Flask", "OpenCV", "TensorFlow/PyTorch", "OCR"],
    cover: "/meddecode1.png",
    images: ["/meddecode2.png", "/meddecode3.png", "/meddecode4.png"],
    links: [{ label: "Case study", href: "#" }],
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    id: "learningzone",
    title: "Learning Zone",
    description: "Education management platform for fee, attendance, and student performance tracking with 67% faster load times.",
    long: "Learning Zone is a full-stack education platform built from scratch serving 50 students, 5 teachers, and 50 parents (~100 daily users). Features role-based dashboards, digitized fee records with automated reminders, parent notifications, and an AI homework scheduler. Achieved 67% faster page load times (3s to 1s) via Redis caching and database query optimization.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Redis", "Google Drive API"],
    cover: "/learningzone1.png",
    images: [
      "/learningzone15.png",
      "/learningzone2.png",
      "/learningzone3.png",
      "/learningzone4.png",
    ],
    links: [
      { label: "Live site", href: "https://learning-zone-eight.vercel.app/" },
      { label: "GitHub", href: "https://github.com/KrishnaRangwani2526/Learning-Zone" },
    ],
    accent: "from-amber-400 to-fuchsia-500",
  },
  {
    id: "finsight",
    title: "FinTrack",
    description: "Full-stack financial platform for expense tracking and investment insights.",
    long: "FinTrack is a full-stack financial management platform designed to help users track expenses and make informed investment decisions. It provides dashboards for spending patterns, savings, and financial goals, with intelligent suggestions and data-driven planning.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    cover: "/finsight1.png",
    images: ["/finsight2.png", "/finsight3.png", "/finsight4.png", "/finsight5.png"],
    links: [{ label: "Case study", href: "#" }],
    accent: "from-sky-400 to-violet-500",
  },
  {
    id: "collabspace",
    title: "CollabSpace",
    description: "Online collaborative platform for real-time classes and digital whiteboarding.",
    long: "CollabSpace is a full-stack collaborative platform designed for online classes and real-time interaction. It features a digital whiteboard for simultaneous drawing and sharing, live sessions for instructors and students, and tools to improve remote learning engagement.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "WebSockets"],
    cover: "/collabspace1.png",
    images: ["/collabspace2.png", "/collabspace3.png", "/collabspace4.png"],
    links: [{ label: "Case study", href: "#" }],
    accent: "from-fuchsia-400 to-pink-500",
  },
  {
    id: "sniplink",
    title: "SnipLink",
    description: "URL shortener platform with QR codes, analytics, and password protection.",
    long: "SnipLink is a full-stack URL shortener platform designed to simplify link sharing and tracking. It generates short links, QR codes, and secure password-protected URLs, while providing analytics for click performance and engagement.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    cover: "/sniplink1.png",
    images: ["/sniplink2.png", "/sniplink3.png", "/sniplink4.png", "/sniplink5.png"],
    links: [{ label: "Case study", href: "#" }],
    accent: "from-indigo-400 to-violet-500",
  },
];
