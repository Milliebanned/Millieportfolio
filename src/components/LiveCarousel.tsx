import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { liveDemos } from "../data/liveDemos";

const accentBg: Record<string, string> = {
  lavender: "bg-lavender",
  teal: "bg-teal",
  gold: "bg-gold",
};

function DemoCard({ demo }: { demo: (typeof liveDemos)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 7 });
  }

  return (
    <a
      href={demo.url}
      target="_blank"
      rel="noreferrer"
      className="block shrink-0 w-[340px] sm:w-[420px] mx-4 group"
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.25s ease-out",
        }}
        className="rounded-2xl border-2 border-ink bg-cream overflow-hidden shadow-[7px_7px_0_0_var(--color-ink)]"
      >
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b-2 border-ink bg-paper">
          <span className={`h-2.5 w-2.5 rounded-full ${accentBg[demo.accent]} border border-ink`} />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10 border border-ink/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10 border border-ink/40" />
          <span className="ml-3 font-mono text-[11px] text-ink-soft truncate">
            {demo.url.replace("https://", "")}
          </span>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={demo.image}
            alt={`${demo.name} live site`}
            className="w-full aspect-[16/9] object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
        </div>

        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display uppercase text-lg text-ink">{demo.name}</span>
          <span className="font-mono text-xs text-ink-soft group-hover:text-ink transition-colors">
            Visit live ↗
          </span>
        </div>
      </div>
    </a>
  );
}

export default function LiveCarousel() {
  const track = [...liveDemos, ...liveDemos];

  return (
    <section id="live" className="relative py-24 sm:py-32 bg-paper border-t-2 border-ink overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-14">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-lavender-deep">
            Live in production
          </span>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4 text-ink max-w-xl">
            See it running, not just the code.
          </h2>
        </motion.div>
      </div>

      <div className="marquee-paused">
        <div className="flex animate-marquee w-max">
          {track.map((demo, i) => (
            <DemoCard key={`${demo.name}-${i}`} demo={demo} />
          ))}
        </div>
      </div>
    </section>
  );
}
