import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionLabel } from "./About";
import type { MouseEvent } from "react";

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const ry = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="glass-strong relative rounded-3xl p-6 will-change-transform"
    >
      <div style={{ transform: "translateZ(40px)" }}>{children}</div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl">
          A timeline of <span className="neon-text">work I'm proud of</span>.
        </h2>

        <div className="mt-12 space-y-6" style={{ perspective: 1200 }}>
          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <TiltCard>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl">{e.role}</h3>
                    <p className="text-sm text-foreground/70">{e.company}</p>
                  </div>
                  <span className="rounded-full glass px-3 py-1 text-xs text-foreground/80">
                    {e.duration}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--neon-2)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
