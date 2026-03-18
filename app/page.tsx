"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ProjectDetail from "./sections/ProjectDetail";
import Capability from "./sections/Capability";
import Contact from "./sections/Contact";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects onSelectProject={setSelectedProject} />
      <Capability />
      <Contact />

      {selectedProject && (
        <ProjectDetail
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
