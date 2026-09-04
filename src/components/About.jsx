import React from "react";
import { ArrowDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const revealRef = useScrollReveal({ threshold: 0.15 });
  const { personal, features } = portfolioData;

  return (
    <section id="about" className="about-section" ref={revealRef}>
      <div className="section-wrapper">
        <SectionTitle
          title="ABOUT ME"
          subtitle="01 // DISCOVER"
          number="01"
        />

        <div className="about-grid">
          {/* Left Column: Bio Narrative */}
          <div className="about-narrative">
            <div className="narrative-tag">
              <span className="dot" />
              <span>WHO I AM</span>
            </div>

            <div className="about-paragraphs">
              {personal.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="about-p">
                  {para}
                </p>
              ))}
            </div>

            <div className="about-callout">
              <div className="callout-bar" />
              <p className="callout-text">
                Focusing on clean engineering fundamentals, high scalability, and robust system architecture.
              </p>
            </div>

            <div className="about-cta-row">
              <a href="#skills" className="explore-btn">
                <span>EXPLORE SKILLS</span>
                <span className="arrow-down-icon">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: 01, 02, 03 Feature Cards */}
          <div className="about-features-column">
            <div className="features-list">
              {features.map((feat) => (
                <FeatureCard
                  key={feat.number}
                  number={feat.number}
                  title={feat.title}
                  description={feat.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
