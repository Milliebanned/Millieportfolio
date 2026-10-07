import { useLenis } from "./hooks/useLenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import LiveCarousel from "./components/LiveCarousel";
import Craft from "./components/Craft";
import Footer from "./components/Footer";

export default function App() {
  useLenis();

  return (
    <div className="bg-paper min-h-screen">
      <div className="grain" />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <LiveCarousel />
      <Craft />
      <Footer />
    </div>
  );
}
