import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-paper-soft border-t-2 border-ink">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-14 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-terracotta">
              02 / Selected Work
            </span>
            <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4 text-ink">
              Things I&apos;ve shipped
            </h2>
          </div>
          <p className="text-ink-soft max-w-xs text-sm">
            Web3 escrow, voice AI, dev tooling, and the editing software I
            built because the existing tools were not cutting it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
