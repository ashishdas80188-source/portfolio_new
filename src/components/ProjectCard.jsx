import React from "react";
import { ExternalLink, Clock, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project }) {
  const isBuilding = project.status === "CURRENTLY BUILDING";

  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-card-num">{project.number}</span>
        <div className={`project-status-badge ${isBuilding ? "status-building" : "status-soon"}`}>
          <span className="status-indicator-dot" />
          <span>{project.status}</span>
        </div>
      </div>

      <h3 className="project-card-title">{project.title}</h3>

      <p className="project-card-desc">{project.description}</p>

      <div className="project-stack-wrap">
        <span className="stack-label">STACK:</span>
        <div className="project-stack-tags">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card-actions">
        {project.links.github.available ? (
          <a
            href={project.links.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn active-btn"
          >
            <GithubIcon size={15} />
            <span>{project.links.github.label}</span>
          </a>
        ) : (
          <button type="button" disabled className="project-btn disabled-btn" aria-disabled="true">
            <GithubIcon size={15} />
            <span>{project.links.github.label}</span>
          </button>
        )}

        {project.links.demo.available ? (
          <a
            href={project.links.demo.url}
            className="project-btn active-btn secondary"
          >
            <Sparkles size={15} />
            <span>{project.links.demo.label}</span>
          </a>
        ) : (
          <button type="button" disabled className="project-btn disabled-btn" aria-disabled="true">
            <Clock size={15} />
            <span>{project.links.demo.label}</span>
          </button>
        )}
      </div>

      {/* Geometric corner design element */}
      <div className="project-card-edge-tag">{project.id}</div>
    </article>
  );
}
