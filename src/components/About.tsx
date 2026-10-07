import { motion } from "framer-motion";

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Solidity",
  "Node.js",
  "Prisma",
  "Supabase",
  "ExtendScript",
  "Python",
  "After Effects",
  "Premiere",
  "Whisper",
];

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-paper border-t-2 border-ink">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div
          className="md:col-span-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-teal">01 / About</span>
          <h2 className="font-display uppercase text-3xl sm:text-4xl mt-4 text-ink leading-[0.95]">
            Two disciplines,
            <br /> one build process.
          </h2>
        </motion.div>

        <motion.div
          className="md:col-span-8 space-y-6 text-lg text-ink-soft leading-relaxed"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p>
            I write full-stack apps and Solidity contracts, then I finish the
            story in After Effects. Most of what I ship is one of two things:
            products that live on-chain or lean on AI, and the editing tools I
            build for myself and other creators when the existing software
            gets in the way.
          </p>
          <p>
            Recent work spans an AI-mediated escrow marketplace on{" "}
            <span className="text-ink font-medium">Nimiq</span>, a voice-first
            language app built on the{" "}
            <span className="text-ink font-medium">AssemblyAI Voice Agent API</span>,
            an AI maintenance engineer built on{" "}
            <span className="text-ink font-medium">IBM Bob 2.0</span>, and two
            After Effects extensions,{" "}
            <span className="text-ink font-medium">Editio</span> and{" "}
            <span className="text-ink font-medium">Autosay</span>, that I use
            in my own edits.
          </p>
          <p className="text-ink font-display uppercase text-xl">
            web dev, smart contracts, AI product, the cut.
          </p>

          <div className="pt-6 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="font-mono text-xs px-3 py-1.5 rounded-full border-2 border-ink text-ink-soft bg-cream"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
