import { motion } from "framer-motion";

const socials = [
  { label: "GitHub", href: "https://github.com/Milliebanned" },
  { label: "X / Twitter", href: "https://x.com/Milliebanned" },
];

export default function Footer() {
  return (
    <section id="contact" className="relative bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
            04 / Contact
          </span>
          <h2 className="font-display uppercase text-[11vw] sm:text-6xl mt-4 leading-[0.9]">
            Let&apos;s build
            <br />
            <span className="text-lavender">something.</span>
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-2 border-cream text-cream text-sm px-6 py-3 hover:bg-cream hover:text-ink transition-colors font-medium"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-cream/50 font-mono">
          <span>© {new Date().getFullYear()} Millie Debanned</span>
          <span>Built with React Three Fiber</span>
        </div>
      </div>
    </section>
  );
}
