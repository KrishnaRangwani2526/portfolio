import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Alex Verma — Full-Stack Engineer & Creative Technologist" },
      { name: "description", content: "Portfolio of Alex Verma — immersive interfaces, motion design, and full-stack engineering." },
      { property: "og:title", content: "Alex Verma — Portfolio" },
      { property: "og:description", content: "Immersive interfaces, motion design, full-stack engineering." },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
