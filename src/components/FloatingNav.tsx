import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Sparkles, Briefcase, FolderKanban, Code2, FileText, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.53 0-.26-.01-.95-.02-1.86-3.05.66-3.69-1.47-3.69-1.47-.5-1.27-1.21-1.61-1.21-1.61-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.55 1.19 3.17.91.1-.71.38-1.19.69-1.46-2.43-.28-4.99-1.22-4.99-5.42 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12.88-.24 1.82-.36 2.76-.37.94.01 1.88.13 2.76.37 2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.21-2.57 5.13-5.01 5.41.39.34.74 1.01.74 2.04 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.36-1.45 7.5-5.56 7.5-10.41C23.01 5.24 18.27.5 12 .5z"/>
  </svg>
);
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.27h4.55V23.5H.22V8.27zM8.06 8.27h4.36v2.08h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.48 3.04 5.48 7v8.54h-4.55v-7.57c0-1.81-.03-4.13-2.52-4.13-2.52 0-2.91 1.97-2.91 4v7.7H8.06V8.27z"/>
  </svg>
);

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "experience", label: "Work", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderKanban },
];

const externals = [
  { label: "GitHub", icon: Github, href: "https://github.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "LeetCode", icon: Code2, href: "https://leetcode.com" },
  { label: "Resume", icon: FileText, href: "#" },
];

export function FloatingNav() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
            window.dispatchEvent(new CustomEvent("sectionchange", { detail: e.target.id }));
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop side nav */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:block"
      >
        <div className="glass-strong glow flex flex-col items-center gap-1 rounded-full p-2">
          {sections.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                aria-label={s.label}
                className="group relative flex h-11 w-11 items-center justify-center rounded-full haptic"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--grad-aurora)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className={`relative h-5 w-5 ${isActive ? "text-background" : "text-foreground/80 group-hover:text-foreground"}`} />
                <span className="pointer-events-none absolute left-14 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition group-hover:opacity-100">
                  {s.label}
                </span>
              </button>
            );
          })}
          <div className="my-1 h-px w-7 bg-border" />
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full haptic text-foreground/80 hover:text-foreground"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.aside>

      {/* Right rail externals */}
      <aside className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <div className="glass flex flex-col items-center gap-1 rounded-full p-2">
          {externals.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={l.label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 hover:text-[var(--neon)] haptic"
              >
                <Icon className="h-4 w-4" />
                <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition group-hover:opacity-100">
                  {l.label}
                </span>
              </a>
            );
          })}
        </div>
      </aside>

      {/* Mobile floating button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="glass-strong glow flex h-14 w-14 items-center justify-center rounded-full haptic"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "m"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.span>
          </AnimatePresence>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="glass-strong glow absolute bottom-16 right-0 w-56 rounded-2xl p-2"
            >
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => go(s.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm haptic ${active === s.id ? "bg-primary/15 text-foreground" : "text-foreground/80 hover:bg-white/5"}`}
                  >
                    <Icon className="h-4 w-4" /> {s.label}
                  </button>
                );
              })}
              <div className="my-1 h-px bg-border" />
              <div className="flex items-center justify-between px-2 py-1">
                <div className="flex gap-2">
                  {externals.map((l) => {
                    const Icon = l.icon;
                    return (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label}
                         className="flex h-9 w-9 items-center justify-center rounded-full glass haptic">
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
                <button onClick={toggle} aria-label="Toggle theme" className="flex h-9 w-9 items-center justify-center rounded-full glass haptic">
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
