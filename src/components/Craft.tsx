import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Editing",
    detail: "Narrative cuts, pacing, sound design and color for long-form and short-form content.",
    accent: "bg-lavender",
  },
  {
    title: "Motion design",
    detail: "Kinetic type, explainer animation and on-brand graphics packages in After Effects.",
    accent: "bg-teal",
  },
  {
    title: "Tooling",
    detail: "When the NLE gets in the way, I build the extension. Editio and Autosay both started as my own workflow fixes.",
    accent: "bg-gold",
  },
];

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Craft() {
  return (
    <section id="craft" className="relative py-24 sm:py-32 bg-paper-soft border-t-2 border-ink">
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-terracotta">
            03 / Craft
          </span>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4 text-ink max-w-xl">
            The other half of the job is making it watchable.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border-2 border-ink bg-cream p-7"
            >
              <span className={`inline-block h-3 w-3 rounded-full ${c.accent} border border-ink mb-4`} />
              <h3 className="font-display uppercase text-xl text-ink mb-3">{c.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{c.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="rounded-2xl border-2 border-ink bg-cream p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[7px_7px_0_0_var(--color-terracotta)]"
        >
          <div>
            <p className="font-mono text-xs text-teal mb-2">Featured breakdown</p>
            <h3 className="font-display uppercase text-2xl text-ink mb-2">
              Explaining @symbioticfi to 3.8K views
            </h3>
            <p className="text-sm text-ink-soft max-w-md">
              A fundamentals explainer on what Symbiotic is building and why,
              scripted, cut and animated end to end.
            </p>
          </div>
          <a
            href="https://x.com/Milliebanned"
            target="_blank"
            rel="noreferrer"
            className="btn-press shrink-0 rounded-full bg-ink text-cream font-medium text-sm px-6 py-3 border-2 border-ink"
          >
            Watch on X ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
