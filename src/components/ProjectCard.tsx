import { useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";

const accentMap = {
  lavender: { text: "text-lavender-deep", shadow: "var(--color-lavender)", tag: "bg-lavender" },
  teal: { text: "text-teal", shadow: "var(--color-teal)", tag: "bg-teal" },
  terracotta: { text: "text-terracotta", shadow: "var(--color-terracotta)", tag: "bg-terracotta" },
  gold: { text: "text-ink", shadow: "var(--color-gold)", tag: "bg-gold" },
} as const;

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const accent = accentMap[project.accent];

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -4, y: px * 5 });
  }

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
        }}
        style={
          {
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translate(0, 0)`,
            transition: "transform 0.25s ease-out, box-shadow 0.2s ease",
            "--shadow-color": accent.shadow,
          } as React.CSSProperties
        }
        className="slab rounded-2xl p-7 sm:p-8 h-full flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className={`font-mono text-xs px-2 py-1 rounded-full border-2 border-ink ${accent.tag}`}>
              {project.year}
            </span>
            <span className="font-mono text-xs text-ink-soft">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-display uppercase text-2xl sm:text-[1.6rem] text-ink mb-2">
            {project.name}
          </h3>
          <p className={`text-sm mb-4 font-medium ${accent.text}`}>{project.tagline}</p>
          <p className="text-sm text-ink-soft leading-relaxed">{project.description}</p>
        </div>

        <div className="mt-7">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-ink/30 text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 text-sm font-medium">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-ink hover:text-terracotta transition-colors inline-flex items-center gap-1.5"
            >
              Code ↗
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-ink-soft hover:text-ink transition-colors inline-flex items-center gap-1.5"
              >
                Live demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
