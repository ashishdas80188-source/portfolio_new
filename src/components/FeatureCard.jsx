import React from "react";

export default function FeatureCard({ number, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-number-wrapper">
        <span className="feature-number">{number}</span>
        <div className="feature-line" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
      <div className="feature-corner-accent" />
    </div>
  );
}
