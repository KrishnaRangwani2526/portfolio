export const profile = {
  name: "Alex Verma",
  roles: ["Full-Stack Engineer", "UI/UX Architect", "Creative Technologist", "Open-Source Maker"],
  tagline:
    "I design and engineer immersive, performant interfaces — at the intersection of design, motion, and code.",
  email: "hello@alexverma.dev",
  location: "Bengaluru, India",
};

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Next.js", "TanStack", "Tailwind", "Framer Motion"] },
  { group: "3D / Motion", items: ["Three.js", "React-Three-Fiber", "GSAP", "WebGL", "Lottie"] },
  { group: "Backend", items: ["Node.js", "Postgres", "Supabase", "GraphQL", "Redis"] },
  { group: "Tooling", items: ["Vite", "Docker", "Vitest", "Figma", "Git", "CI/CD"] },
];

export const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Lumen Labs",
    duration: "2023 — Present",
    points: [
      "Led the design system migration to React 19 + Tailwind v4, cutting bundle size by 38%.",
      "Built a real-time 3D collaboration canvas with React-Three-Fiber and Y.js.",
      "Mentored a team of 6 engineers across motion, accessibility, and performance.",
    ],
  },
  {
    role: "Product Engineer",
    company: "Northwind Studio",
    duration: "2021 — 2023",
    points: [
      "Shipped the flagship onboarding redesign — +27% activation in A/B test.",
      "Owned animation system using GSAP timelines and IntersectionObservers.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Foundry Co.",
    duration: "2019 — 2021",
    points: [
      "Built internal tooling and dashboards used by 200+ employees.",
      "Authored an open-source charting library used in 1.2k repos.",
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
    id: "aurora",
    title: "Aurora OS",
    description: "A spatial design system for next-gen creative tools.",
    long: "Aurora OS is a design + motion system for spatial computing. Components ship with built-in haptics, depth, and parallax. Used internally to prototype 14 product surfaces in 6 months.",
    tech: ["React", "TypeScript", "Three.js", "Framer Motion", "Storybook"],
    cover: cover("aurora-1"),
    images: [cover("aurora-1"), cover("aurora-2"), cover("aurora-3"), cover("aurora-4")],
    links: [{ label: "Live", href: "#" }, { label: "GitHub", href: "#" }],
    accent: "from-cyan-400 to-fuchsia-500",
  },
  {
    id: "pulse",
    title: "Pulse Analytics",
    description: "Realtime product analytics with cinematic dashboards.",
    long: "Pulse turns raw event streams into expressive, animated stories — built on a custom WebGL chart engine and a streaming Postgres pipeline.",
    tech: ["Next.js", "WebGL", "Postgres", "Kafka", "tRPC"],
    cover: cover("pulse-1"),
    images: [cover("pulse-1"), cover("pulse-2"), cover("pulse-3"), cover("pulse-4")],
    links: [{ label: "Case study", href: "#" }],
    accent: "from-indigo-400 to-cyan-400",
  },
  {
    id: "atlas",
    title: "Atlas Map",
    description: "Interactive 3D world atlas for educators.",
    long: "A WebGL globe with GPU-instanced markers, smooth camera flights, and offline-first lessons. Powers geography classrooms in 4 countries.",
    tech: ["React", "Three.js", "MapboxGL", "IndexedDB"],
    cover: cover("atlas-1"),
    images: [cover("atlas-1"), cover("atlas-2"), cover("atlas-3"), cover("atlas-4")],
    links: [{ label: "Demo", href: "#" }],
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    id: "echo",
    title: "Echo Music",
    description: "Generative music studio in the browser.",
    long: "Echo lets musicians compose loops with AI-assisted patterns. Audio engine runs on AudioWorklets with sub-5ms latency.",
    tech: ["WebAudio", "WASM", "Rust", "React"],
    cover: cover("echo-1"),
    images: [cover("echo-1"), cover("echo-2"), cover("echo-3"), cover("echo-4")],
    links: [{ label: "Try it", href: "#" }, { label: "GitHub", href: "#" }],
    accent: "from-pink-400 to-purple-500",
  },
  {
    id: "vault",
    title: "Vault Wallet",
    description: "Privacy-first crypto wallet with elegant UX.",
    long: "Vault wraps complex key management in playful, friendly UI. Hardware-backed signing, social recovery, and a beautiful onboarding flow.",
    tech: ["React Native", "Rust", "Secp256k1", "Reanimated"],
    cover: cover("vault-1"),
    images: [cover("vault-1"), cover("vault-2"), cover("vault-3"), cover("vault-4")],
    links: [{ label: "Site", href: "#" }],
    accent: "from-amber-400 to-rose-500",
  },
  {
    id: "studio",
    title: "Studio Render",
    description: "Cloud renderer for real-time 3D portfolios.",
    long: "A queue + worker pipeline that renders glTF scenes to high-DPI snapshots, optimized social previews, and looping MP4s.",
    tech: ["Node", "Three.js", "FFmpeg", "Redis", "Docker"],
    cover: cover("studio-1"),
    images: [cover("studio-1"), cover("studio-2"), cover("studio-3"), cover("studio-4")],
    links: [{ label: "GitHub", href: "#" }],
    accent: "from-sky-400 to-violet-500",
  },
];
