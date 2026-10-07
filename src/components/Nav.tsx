import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#live", label: "Live" },
  { href: "#craft", label: "Craft" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-md border-b-2 border-ink" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        <a href="#top" className="font-display text-sm tracking-[0.2em] text-ink uppercase">
          Millie<span className="text-terracotta">.</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8 text-sm text-ink-soft font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/Milliebanned"
          target="_blank"
          rel="noreferrer"
          className="btn-press text-sm px-4 py-2 rounded-full border-2 border-ink bg-cream text-ink"
        >
          GitHub
        </a>
      </nav>
    </motion.header>
  );
}
