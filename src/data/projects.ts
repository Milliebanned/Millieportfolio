export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  demo?: string;
  accent: "lavender" | "teal" | "terracotta" | "gold";
  year: string;
};

export const projects: Project[] = [
  {
    slug: "agora",
    name: "Agora",
    tagline: "AI-mediated escrow for peer-to-peer commerce",
    description:
      "A trust layer for P2P deals built for the Nimiq Mini Apps Competition. Natural-language agreements drafted by AI, funds held in native HTLC escrow on-chain, reputation scored on completion history, and an AI mediator that resolves disputes a human can still override.",
    tags: ["Next.js", "TypeScript", "Solidity / HTLC", "Prisma", "Gemini"],
    href: "https://github.com/Milliebanned/agora",
    demo: "https://agora-delta-gold.vercel.app",
    accent: "lavender",
    year: "2026",
  },
  {
    slug: "voces",
    name: "Voces",
    tagline: "Learn a language by actually speaking it",
    description:
      "A voice-first immersion app built on the AssemblyAI Voice Agent API. Real spoken conversation instead of flashcards. Struggling words resurface naturally in later sessions, and grammar feedback waits until after the conversation so it never breaks flow.",
    tags: ["Next.js", "TypeScript", "AssemblyAI", "Supabase"],
    href: "https://github.com/Milliebanned/voces",
    demo: "https://voces-plum.vercel.app",
    accent: "teal",
    year: "2026",
  },
  {
    slug: "ordo",
    name: "Ordo",
    tagline: "An AI maintenance engineer for legacy repos",
    description:
      "Built on IBM Bob 2.0 for the IBM hackathon. Scans any public GitHub repo for technical debt across five categories, scores each issue by urgency and business impact with watsonx.ai, and writes a phased remediation roadmap plus copy-ready PR summaries.",
    tags: ["React", "Node.js", "watsonx.ai (Granite)", "GitHub API"],
    href: "https://github.com/Milliebanned/ordo-ai",
    demo: "https://ordowithbob.vercel.app",
    accent: "gold",
    year: "2026",
  },
  {
    slug: "editio",
    name: "Editio",
    tagline: "A real timeline editor, inside After Effects",
    description:
      "A CEP extension that gives After Effects an NLE-style multi-track timeline: blade, ripple trim, ripple delete, and split audio from video, so footage never has to round-trip to Premiere. Reads the composition as source of truth and writes every edit back as a single undo group.",
    tags: ["ExtendScript", "CEP", "Web Audio API", "JavaScript"],
    href: "https://github.com/Milliebanned/Editio",
    accent: "terracotta",
    year: "2026",
  },
  {
    slug: "autosay",
    name: "Autosay",
    tagline: "Offline auto-captions for After Effects",
    description:
      "Whisper running entirely on-device to caption footage straight inside After Effects. No API keys, no per-minute cost. Word-level timestamps, smart line-splitting, one-word Reels-style captions, and full styling control, all as a single undo step.",
    tags: ["ExtendScript", "Python", "faster-whisper"],
    href: "https://github.com/Milliebanned/Autosay",
    accent: "lavender",
    year: "2026",
  },
];
