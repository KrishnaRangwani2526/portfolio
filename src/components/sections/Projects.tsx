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

function GalleryCarousel({ images, onOpen }: { images: string[]; onOpen: (src: string) => void }) {
  const slides = images.slice(0, 4);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (paused || n <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 2000);
    return () => clearInterval(t);
  }, [paused, n]);

  const go = (d: number) => setIdx((i) => (i + d + n) % n);

  return (
    <div
      className="mt-2 select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-xl glass aspect-[16/10]">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${idx * 100}%` }}
          transition={{ type: "spring", stiffness: 220, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(1);
            else if (info.offset.x > 60) go(-1);
          }}
        >
          {slides.map((src, i) => (
            <button
              type="button"
              key={src + i}
              onClick={() => onOpen(src)}
              className="relative h-full w-full shrink-0"
              style={{ flex: "0 0 100%" }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </motion.div>

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full glass haptic"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full glass haptic"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-6 bg-[var(--neon)]" : "w-1.5 bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

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
              className="glass-strong glow relative z-10 grid max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-3xl md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full glass haptic"
              >
                <X className="h-5 w-5" />
              </button>
              <motion.div className="relative flex aspect-[4/3] items-center justify-center bg-background/40 md:aspect-auto">
                <motion.img
                  layoutId={`img-${active.id}`}
                  src={active.cover}
                  alt={active.title}
                  className="h-full w-full object-contain p-4"
                />
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${active.accent} opacity-15 mix-blend-overlay`} />
              </motion.div>
              <div className="overflow-y-auto p-7">
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

                <p className="mt-6 text-xs uppercase tracking-widest text-foreground/60">Gallery</p>
                <GalleryCarousel images={active.images} onOpen={setLightbox} />

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
