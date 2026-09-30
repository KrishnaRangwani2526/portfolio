import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { certificates } from "@/data/portfolio";
import { SectionLabel } from "./About";

export function Certificates() {
  return (
    <section id="certificates" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Certificates</SectionLabel>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl sm:text-5xl">
            Proof of <span className="neon-text">progress</span>.
          </h2>
          <p className="max-w-md text-sm text-foreground/65">
            Credentials and milestones earned along the way.
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
      </div>
    </section>
  );
}