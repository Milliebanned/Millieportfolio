import agora from "../assets/screens/agora.jpg";
import voces from "../assets/screens/voces.jpg";
import ordo from "../assets/screens/ordo.jpg";

export type LiveDemo = {
  name: string;
  url: string;
  image: string;
  accent: "lavender" | "teal" | "gold";
};

export const liveDemos: LiveDemo[] = [
  { name: "Agora", url: "https://agora-delta-gold.vercel.app", image: agora, accent: "lavender" },
  { name: "Voces", url: "https://voces-plum.vercel.app", image: voces, accent: "teal" },
  { name: "Ordo", url: "https://ordowithbob.vercel.app", image: ordo, accent: "gold" },
];
