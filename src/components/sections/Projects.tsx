import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, type MouseEvent } from "react";
import { projects, type Project } from "@/data/portfolio";
import { SectionLabel } from "./About";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20 });
  const sy = useSpring(y, { stiffness: 250, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const ry = useTransform(sx, [-0.5, 0.5], [-10, 10]);

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      layoutId={`card-${p.id}`}
      onClick={onOpen}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="group relative w-full overflow-hidden rounded-3xl glass-strong text-left haptic"
      data-cursor="hover"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          layoutId={`img-${p.id}`}
          src={p.cover}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-tr ${p.accent} opacity-30 mix-blend-overlay`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <div className="p-5" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg">{p.title}</h3>
          <ExternalLink className="h-4 w-4 text-foreground/50 transition group-hover:text-[var(--neon)]" />
        </div>
        <p className="mt-1 text-sm text-foreground/65 line-clamp-2">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tech.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full glass px-2 py-0.5 text-[11px] text-foreground/75">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function ArcGallery({ images, onOpen }: { images: string[]; onOpen: (src: string) => void }) {
  const slides = images;
  const n = slides.length;
  const [idx, setIdx] = useState(0);

  const haptic = () => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      try { navigator.vibrate?.(18); } catch { /* noop */ }
    }
  };

  const go = (d: number) => {
    setIdx((i) => (i + d + n) % n);
    haptic();
  };

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  // Geometry of the arc
  const RADIUS = 260; // px - distance from arc center
  const SPREAD = 24;  // degrees between adjacent slides

  return (
    <div className="relative w-full select-none">
      {/* Arc stage */}
      <div
        className="relative mx-auto h-[360px] w-full max-w-[720px] sm:h-[400px]"
        style={{ perspective: 1200 }}
      >
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50 || info.velocity.x < -300) go(1);
            else if (info.offset.x > 50 || info.velocity.x > 300) go(-1);
          }}
        >
          {slides.map((src, i) => {
            // Shortest signed offset for circular arrangement
            let off = i - idx;
            if (off > n / 2) off -= n;
            if (off < -n / 2) off += n;

            const isActive = off === 0;
            const angle = off * SPREAD;            // tilt around arc
            const rad = (angle * Math.PI) / 180;
            const x = Math.sin(rad) * RADIUS;
            const y = (1 - Math.cos(rad)) * (RADIUS * 0.55); // subtle dip
            const scale = isActive ? 1 : Math.max(0.55, 0.78 - Math.abs(off) * 0.08);
            const opacity = Math.abs(off) > 3 ? 0 : isActive ? 1 : 0.55 - Math.abs(off) * 0.08;
            const z = -Math.abs(off);

            return (
              <motion.button
                type="button"
                key={src + i}
                onClick={() => (isActive ? onOpen(src) : setIdx(i))}
                aria-label={isActive ? "Open image" : `Show image ${i + 1}`}
                className="absolute left-1/2 top-1/2 origin-center"
                style={{ zIndex: 50 + z }}
                animate={{
                  x: x - 0,
                  y: y - 0,
                  rotate: angle,
                  scale,
                  opacity,
                }}
                initial={false}
                transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.7 }}
              >
                <div
                  className="relative -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
                  style={{
                    width: isActive ? 320 : 200,
                    height: isActive ? 220 : 140,
                    transition: "width 0.5s cubic-bezier(.2,.8,.2,1), height 0.5s cubic-bezier(.2,.8,.2,1)",
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    draggable={false}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ filter: isActive ? "none" : "saturate(0.85) brightness(0.9)" }}
                  />
                  {/* soft edge vignette */}
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_0_40px_rgba(0,0,0,0.45)]" />
                  {isActive && (
                    <motion.div
                      layoutId="arc-active-glow"
                      className="pointer-events-none absolute -inset-1 rounded-[32px]"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--neon), transparent 60%)",
                        opacity: 0.35,
                        filter: "blur(14px)",
                        zIndex: -1,
                      }}
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full glass haptic"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIdx(i); haptic(); }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-[var(--neon)]" : "w-1.5 bg-foreground/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full glass haptic"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Projects</SectionLabel>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl sm:text-5xl">
            Selected <span className="neon-text">work</span>.
          </h2>
          <p className="max-w-md text-sm text-foreground/65">
            Hover for a peek, click to open the case study and explore the gallery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1400 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <ProjectCard p={p} onOpen={() => setActive(p)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="absolute inset-0 bg-background/70 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              layoutId={`card-${active.id}`}
              className="glass-strong glow relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full glass haptic"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Hidden image to preserve shared layout transition */}
              <motion.img
                layoutId={`img-${active.id}`}
                src={active.cover}
                alt=""
                aria-hidden
                className="pointer-events-none absolute opacity-0"
              />

              <div className="overflow-y-auto">
                {/* Arc gallery */}
                <div className="relative px-4 pt-10 pb-2">
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${active.accent} opacity-10`} />
                  <ArcGallery images={[active.cover, ...active.images]} onOpen={setLightbox} />
                </div>

                {/* Details */}
                <div className="px-7 pb-8 pt-2">
                  <h3 className="font-display text-3xl">{active.title}</h3>
                  <p className="mt-2 text-foreground/70">{active.description}</p>
                  <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{active.long}</p>

                  <p className="mt-6 text-xs uppercase tracking-widest text-foreground/60">Tech stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.tech.map((t) => (
                      <span key={t} className="rounded-full glass px-3 py-1 text-xs text-[var(--neon)]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {active.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="haptic inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-background"
                        style={{ background: "var(--grad-aurora)" }}
                      >
                        {l.label} <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-background/85 backdrop-blur-xl p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain glow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
