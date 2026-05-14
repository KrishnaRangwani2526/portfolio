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
              Crafting interfaces that <span className="neon-text">feel alive</span>.
            </h3>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              I'm a product engineer with a designer's eye and an obsession for
              motion, performance, and detail. Over the last 6+ years I've shipped
              tools used by hundreds of thousands of people — from realtime
              collaboration canvases to crypto wallets — always with a care for the
              moments between clicks.
            </p>
            <p className="mt-4 text-foreground/65 leading-relaxed">
              When I'm not coding, you'll find me sketching type, exploring synths,
              or speedrunning side projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 md:col-span-2"
          >
            <Stat label="Years building" value="6+" />
            <Stat label="Projects shipped" value="40+" />
            <div className="glass rounded-3xl p-6">
              <p className="text-xs uppercase tracking-widest text-foreground/60">Based in</p>
              <p className="mt-2 font-display text-xl">{profile.location}</p>
              <p className="mt-1 text-sm text-foreground/60">{profile.email}</p>
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
