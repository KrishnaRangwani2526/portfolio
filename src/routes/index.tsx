import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Krishna Rangwani — Full-Stack Developer & AI Engineer" },
      { name: "description", content: "Portfolio of Krishna Rangwani — AI-driven web applications, backend automation, and intelligent products." },
      { property: "og:title", content: "Krishna Rangwani — Portfolio" },
      { property: "og:description", content: "AI-driven web applications, backend automation, and intelligent products." },
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
      <Certificates />
      <Footer />
    </main>
  );
}
