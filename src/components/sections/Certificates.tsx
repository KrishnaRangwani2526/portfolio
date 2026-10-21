import { motion } from "framer-motion";
import { ArrowUpRight, Award, Trophy } from "lucide-react";
import { certificates, achievements } from "@/data/portfolio";
import { SectionLabel } from "./About";

export function Certificates() {
  return (
    <section id="certificates" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Certificates & Achievements</SectionLabel>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl sm:text-5xl">
            Proof of <span className="neon-text">progress & honors</span>.
          </h2>
          <p className="max-w-md text-sm text-foreground/65">
            Verified credentials, hackathon podium finishes, and leadership milestones.
          </p>
        </div>

        {certificates.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="glass-strong group overflow-hidden rounded-2xl"
              >
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`View ${certificate.title}`}
                  className="block overflow-hidden bg-black/10"
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    loading="lazy"
                    className="aspect-[1.414] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{certificate.title}</h3>
                      {certificate.issuer && (
                        <p className="mt-1 text-sm text-foreground/65">{certificate.issuer}</p>
                      )}
                    </div>
                    {certificate.date && (
                      <span className="shrink-0 rounded-full glass px-2.5 py-1 text-xs text-foreground/70">
                        {certificate.date}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-[var(--neon)] hover:underline"
                    >
                      View certificate <ArrowUpRight className="h-4 w-4" />
                    </a>
                    {certificate.verifyUrl && (
                      <a
                        href={certificate.verifyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-foreground/65 hover:text-foreground"
                      >
                        Verify credential <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="mt-12 flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-glass-border bg-glass px-6 text-center">
            <Award className="h-8 w-8 text-[var(--neon)]" aria-hidden="true" />
            <p className="mt-4 font-display text-xl">New credentials, soon.</p>
            <p className="mt-1 max-w-sm text-sm text-foreground/60">
              Certificates and their verification links will be collected here.
            </p>
          </div>
        )}

        {/* Achievements & Leadership */}
        {achievements && achievements.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-400" />
              <h3 className="font-display text-2xl sm:text-3xl">
                Achievements & <span className="neon-text">Leadership</span>
              </h3>
            </div>
            <p className="mt-1 text-sm text-foreground/65">
              Competitions, hackathons, and institutional leadership roles.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-strong rounded-2xl p-6 relative overflow-hidden group hover:neon-ring transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-block rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {item.badge}
                      </span>
                      <h4 className="font-display mt-2 text-xl font-semibold">{item.title}</h4>
                      <p className="text-sm font-medium text-foreground/75 mt-0.5">
                        {item.role} • {item.event}
                      </p>
                    </div>
                    <span className="rounded-full glass px-2.5 py-1 text-xs text-foreground/60 shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}