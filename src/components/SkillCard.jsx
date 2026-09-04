import React from "react";
import {
  Code2,
  Terminal,
  Database,
  Server,
  Layers,
  Cpu,
  Boxes,
  Network,
  GitBranch,
  Workflow,
  Laptop
} from "lucide-react";

// Crisp inline SVGs / Lucide icons for monochrome display
function getSkillIcon(iconKey) {
  switch (iconKey) {
    case "html":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4 3 2.5 15.5L12 21l5.5-2.5L20 3H4Z" />
          <path d="M8 8h8" />
          <path d="M8 12h7.5l-.5 4-3.5 1-3.5-1-.2-2" />
        </svg>
      );
    case "css":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4 3 2.5 15.5L12 21l5.5-2.5L20 3H4Z" />
          <path d="M16 8H8l.5 4h7l-.5 4-3 1-3-1" />
        </svg>
      );
    case "react":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
        </svg>
      );
    case "java":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M8 18c2.5 1 5.5 1 8 0" />
          <path d="M6 21c4 1.5 8 1.5 12 0" />
          <path d="M14 2c-1 2-2 3-1 5 1.5 2 1 4-1 6" />
          <path d="M10 4c-1 1.5-1 3 0 4.5" />
        </svg>
      );
    case "python":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 2c-3.5 0-5 1.5-5 3.5v2h5v1H5.5C3.5 8.5 2 10 2 12s1.5 3.5 3.5 3.5H7v-2a3 3 0 0 1 3-3h4a2 2 0 0 0 2-2V5.5C16 3.5 14.5 2 12 2Z" />
          <path d="M12 22c3.5 0 5-1.5 5-3.5v-2h-5v-1h6.5c2 0 3.5-1.5 3.5-3.5s-1.5-3.5-3.5-3.5H17v2a3 3 0 0 1-3 3h-4a2 2 0 0 0-2 2v3c0 2 1.5 3.5 4 3.5Z" />
          <circle cx="9" cy="5" r="0.8" fill="currentColor" />
          <circle cx="15" cy="19" r="0.8" fill="currentColor" />
        </svg>
      );
    case "node":
      return <Server size={19} strokeWidth={1.8} />;
    case "express":
      return <Terminal size={19} strokeWidth={1.8} />;
    case "php":
      return <Code2 size={19} strokeWidth={1.8} />;
    case "mongodb":
    case "postgresql":
    case "mysql":
    case "database":
      return <Database size={19} strokeWidth={1.8} />;
    case "vscode":
      return <Laptop size={19} strokeWidth={1.8} />;
    case "antigravity":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 19 2 19" />
          <circle cx="12" cy="13" r="2" fill="currentColor" />
        </svg>
      );
    case "intellij":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 16h3" />
          <path d="M14 8v8" />
        </svg>
      );
    case "spring":
      return <Boxes size={19} strokeWidth={1.8} />;
    case "api":
      return <Network size={19} strokeWidth={1.8} />;
    case "system":
      return <Layers size={19} strokeWidth={1.8} />;
    case "dsa":
      return <GitBranch size={19} strokeWidth={1.8} />;
    case "backend":
      return <Workflow size={19} strokeWidth={1.8} />;
    default:
      return <Cpu size={19} strokeWidth={1.8} />;
  }
}

export default function SkillCard({ name, icon, badge }) {
  return (
    <div className="skill-card">
      <div className="skill-icon-wrap">
        {getSkillIcon(icon)}
      </div>
      <span className="skill-name">{name}</span>
      {badge && <span className="skill-badge">{badge}</span>}
      <div className="skill-hover-line" />
    </div>
  );
}
