import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionLabel } from "./About";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl">
          A toolkit for <span className="neon-text">expressive, fast</span> products.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skills.map((g, gi) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="glass-strong rounded-3xl p-6"
            >
              <p className="text-xs uppercase tracking-widest text-foreground/60">{g.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.08 + i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="haptic cursor-pointer rounded-full glass px-3 py-1.5 text-sm hover:neon-ring hover:text-[var(--neon)]"
                    data-cursor="hover"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
