import React from "react";

export default function SectionTitle({ title, subtitle, number, align = "left", light = false }) {
  return (
    <div className={`section-title-container ${align === "center" ? "align-center" : ""} ${light ? "light-mode" : ""}`}>
      {subtitle && <div className="section-eyebrow-track">{subtitle}</div>}
      <div className="section-title-box">
        {number && <span className="section-number-tag">{number}</span>}
        <h2 className="section-title-text">{title}</h2>
        <div className="corner-accent top-left" />
        <div className="corner-accent bottom-right" />
      </div>
    </div>
  );
}
