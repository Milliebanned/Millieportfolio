import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg";

const Scene3D = lazy(() => import("./Scene3D"));

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

const stickers = [
  { label: "SOLIDITY", top: "6%", left: "4%", rotate: -8 },
  { label: "AFTER EFFECTS", top: "88%", left: "2%", rotate: 5 },
  { label: "AI PRODUCT", top: "10%", left: "88%", rotate: 6 },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-paper blueprint-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/0 via-paper/0 to-paper" />

      {stickers.map((s) => (
        <motion.span
          key={s.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ top: s.top, left: s.left, rotate: `${s.rotate}deg` }}
          className="hidden md:block absolute z-20 font-mono text-[11px] tracking-[0.15em] uppercase border-2 border-ink bg-cream px-3 py-1.5 rounded-full"
        >
          {s.label}
        </motion.span>
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 sm:px-8 sm:pt-36 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="md:col-span-7">
          <motion.p
            variants={item}
            className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-ink-soft mb-5 inline-block border-2 border-ink rounded-full px-4 py-1.5 bg-cream"
          >
            Full-stack &amp; Solidity Dev / Motion Designer
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-[15vw] sm:text-[6.2vw] leading-[0.88] tracking-tight text-ink uppercase"
          >
            Millie
            <br />
            <span className="text-terracotta">Debanned</span>
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-lg text-base sm:text-lg text-ink-soft">
            I build product across the stack: smart contracts, AI-backed apps,
            and the editing tools that make the footage look as good as the
            code works.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="btn-press rounded-full bg-ink text-cream font-medium text-sm px-6 py-3 border-2 border-ink"
            >
              See the work
            </a>
            <a
              href="https://x.com/Milliebanned"
              target="_blank"
              rel="noreferrer"
              className="btn-press rounded-full bg-cream text-ink text-sm px-6 py-3 border-2 border-ink"
            >
              @Milliebanned
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative aspect-square"
        >
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </div>

          <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-ink/40 animate-spin-slow" />

          <div className="absolute inset-[18%] rounded-full bg-lavender/25" />

          <div className="absolute inset-[20%] rounded-full border-[2.5px] border-ink overflow-hidden shadow-[8px_8px_0_0_var(--color-ink)] bg-cream">
            <img
              src={avatar}
              alt="Millie's avatar"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="absolute -bottom-2 right-[6%] rotate-3 font-mono text-[11px] tracking-[0.1em] uppercase border-2 border-ink bg-gold px-3 py-1.5 rounded-full">
            NFT PFP
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 text-ink-soft pb-10"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-ink/40 to-transparent" />
      </motion.div>
    </section>
  );
}
