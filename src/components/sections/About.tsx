import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>About</SectionLabel>
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-strong glow rounded-3xl p-8 md:col-span-3"
          >
            <h3 className="font-display text-2xl sm:text-3xl">
              Building web products with <span className="neon-text">AI, automation,</span> and clarity.
            </h3>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              I'm a BE Information Technology student at UIET Panjab University (9.6 CGPA), focused on full-stack systems, AI-driven workflows, and backend automation.
              I build and ship production applications for real clients that make data easy to understand, workflows faster, and digital experiences more dependable.
            </p>
            <p className="mt-4 text-foreground/65 leading-relaxed">
              Recent client platforms include SKBR Exports' real-time trading platform cutting transaction recording time by 80%, Learning Zone's fee management institute system serving ~100 daily users with 67% faster load times, and DevConnect (Technovate 3.0 Bronze medalist).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 md:col-span-2"
          >
            <div className="grid grid-cols-2 gap-3">
              <Stat label="Academic CGPA" value="9.6" />
              <Stat label="Users Served" value="200+" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Stat label="Faster Speeds" value="67%" />
              <Stat label="Time Saved" value="80%" />
            </div>
            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-widest text-foreground/60">Based in</p>
              <p className="mt-2 font-display text-xl">{profile.location}</p>
              <a href={`mailto:${profile.email}`} className="mt-2 block text-sm text-foreground/70 hover:text-[var(--neon)] transition-colors">
                {profile.email}
              </a>
              {profile.phone && (
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="mt-1 block text-sm text-foreground/70 hover:text-[var(--neon)] transition-colors">
                  {profile.phone}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-3xl p-6">
      <p className="text-xs uppercase tracking-widest text-foreground/60">{label}</p>
      <p className="mt-2 font-display text-4xl">
        <span className="neon-text">{value}</span>
      </p>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[var(--neon)]" />
      <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">{children}</span>
    </div>
  );
}
