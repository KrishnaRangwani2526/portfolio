export const profile = {
  name: "Krishna Rangwani",
  roles: ["Full-Stack Developer", "AI/ML Engineer", "Web Product Builder", "Backend & Automation Specialist"],
  tagline:
    "I build AI-enabled web products, intelligent automation flows, and clean backend systems that solve real user problems.",
  email: "krishnarangwani88@gmail.com",
  location: "Chandigarh, India",
};

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "C++", "JavaScript", "SQL"] },
  { group: "Web & Frameworks", items: ["HTML", "CSS", "React.js", "Node.js", "Express.js"] },
  { group: "AI & Data", items: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "OpenCV", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "PostgreSQL", "Supabase", "REST API"] },
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

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Learning Zone",
    duration: "Jan 2026 — Mar 2026",
    points: [
      "Built a web-based student fee management system to automate dues, payments, and reporting.",
      "Implemented secure authentication and role-based dashboards for admins and staff.",
      "Designed a MySQL schema for student profiles, payment history, and attendance tracking.",
      "Integrated dashboard visualizations for monthly fee reports and overdue monitoring.",
    ],
  },
  {
    role: "AI Product Engineer",
    company: "Personal & Academic Projects",
    duration: "Oct 2025 — Present",
    points: [
      "Developed intelligent systems for prescription OCR, attendance verification, and career discovery.",
      "Built backend APIs using Flask, OpenCV, and TensorFlow for production-ready AI inference.",
      "Designed user flows that combine biometric validation, geolocation checks, and secure data capture.",
    ],
  },
  {
    role: "IT Student",
    company: "UIET Panjab University",
    duration: "2024 — Present",
    points: [
      "Pursuing BE in Information Technology with a 9.6 CGPA and strong programming fundamentals.",
      "Completed advanced coursework in DSA, DBMS, OS, CN, and software engineering.",
      "Delivered full-stack projects with AI, backend services, and data-driven interfaces.",
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

const cover = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const projects: Project[] = [
  {
    id: "devconnect",
    title: "DevConnect",
    description: "AI-powered full-stack career platform for job seekers, recruiters, and freelancers.",
    long: "DevConnect is an AI-powered full-stack platform that connects job seekers, recruiters, and freelancers in a unified ecosystem. It provides dedicated dashboards for candidates and recruiters to streamline hiring and collaboration, with AI resume generation, ATS score analysis, and skill extraction from certificates and projects.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Supabase", "OpenAI API"],
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
    description: "Education management platform for fee, attendance, and student performance tracking.",
    long: "Learning Zone is a full-stack education management platform designed to streamline academic and administrative processes. It offers centralized student, course, and institutional data management, with fee handling, attendance tracking, and real-time progress monitoring for educators.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
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
