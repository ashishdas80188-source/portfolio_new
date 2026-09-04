import React from "react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const revealRef = useScrollReveal({ threshold: 0.1 });
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section" ref={revealRef}>
      <div className="section-wrapper">
        <SectionTitle
          title="PROJECTS"
          subtitle="03 // ARCHITECTURE"
          number="03"
        />

        {/* Engineering Roadmap Notice */}
        <div className="projects-roadmap-notice">
          <div className="notice-icon-box">//</div>
          <div className="notice-content">
            <h4 className="notice-heading">CURRENT ROADMAP & DEVELOPMENT</h4>
            <p className="notice-text">
              Committed to engineering integrity: I am actively constructing my backend architecture, REST API pipelines, and full-stack projects. Each project will showcase verified source repositories and live staging deployments upon release.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
