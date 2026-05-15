import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative px-6 py-16">
      <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Let's build something</p>
        <h3 className="font-display mt-3 text-3xl sm:text-4xl">
          Got an idea? <a href={`mailto:${profile.email}`} className="neon-text underline-offset-4 hover:underline">Say hi.</a>
        </h3>
        <p className="mt-6 text-xs text-foreground/50">
          © {new Date().getFullYear()} {profile.name} — Crafted with React and modern AI tooling.
        </p>
      </div>
    </footer>
  );
}
