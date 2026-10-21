import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";

function Magnetic({ children }: { children: React.ReactNode }) {
  const [t, setT] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setT({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      animate={{ x: t.x, y: t.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center px-6">
      <header className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <Magnetic>
            <a
              href={`mailto:${profile.email}?subject=Opportunity%20Inquiry%20for%20Krishna`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-md shadow-sm transition-all hover:border-emerald-500/60 hover:bg-emerald-500/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">Open to Work</span>
              <span className="hidden sm:inline text-emerald-600/50 dark:text-emerald-400/50">•</span>
              <span className="hidden sm:inline font-normal text-emerald-700/80 dark:text-emerald-300/80 transition-colors group-hover:text-emerald-900 dark:group-hover:text-emerald-200">
                Available for Opportunities
              </span>
              <span className="text-xs text-emerald-600/70 dark:text-emerald-400/70 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </Magnetic>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display mt-6 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          Hi, I'm Krishna.
          <br />
          <span className="relative inline-block align-baseline">
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="neon-text"
            >
              {profile.roles[i]}
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-7 max-w-2xl text-base text-foreground/70 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="haptic glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-background"
              style={{ background: "var(--grad-aurora)" }}
            >
              View Projects →
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
              className="glass haptic inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground"
            >
              About me
            </a>
          </Magnetic>
        </motion.div>
      </header>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground"
        aria-label="Scroll"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}
