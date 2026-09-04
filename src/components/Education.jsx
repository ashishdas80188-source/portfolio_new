import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Education() {
  const revealRef = useScrollReveal({ threshold: 0.15 });
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section" ref={revealRef}>
      <div className="section-wrapper">
        <SectionTitle
          title="EDUCATION"
          subtitle="04 // FOUNDATIONS"
          number="04"
        />

        <div className="education-timeline-container">
          {/* Main Timeline Card */}
          <div className="timeline-card">
            <div className="timeline-header">
              <div className="timeline-badge-group">
                <span className="timeline-status-pill">
                  <span className="pulse-dot" />
                  {education.status}
                </span>
                <span className="timeline-year-tag">{education.year}</span>
              </div>
              <div className="timeline-decor">// EATM.CSE</div>
            </div>

            <div className="timeline-body">
              <div className="timeline-degree-block">
                <div className="timeline-icon-box">
                  <GraduationCap size={28} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="timeline-degree-title">{education.degree}</h3>
                  <p className="timeline-major">{education.field}</p>
                </div>
              </div>

              <div className="timeline-institution-block">
                <h4 className="institution-name">{education.institution}</h4>
                <div className="institution-meta">
                  <span className="meta-item">
                    <MapPin size={15} />
                    <span>Bhubaneswar, Odisha, India</span>
                  </span>
                  <span className="meta-item">
                    <Calendar size={15} />
                    <span>Graduation Expected: 2027</span>
                  </span>
                </div>
              </div>

              <div className="timeline-focus-section">
                <span className="focus-label">CORE ACADEMIC MODULES:</span>
                <div className="focus-tags-grid">
                  {education.focus.map((item) => (
                    <div key={item} className="focus-tag">
                      <BookOpen size={13} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="timeline-footer">
              <div className="timeline-quote">
                “Applying theoretical computer science foundations directly into scalable software engineering.”
              </div>
            </div>

            {/* Corner geometric border markers */}
            <div className="corner-dot top-left" />
            <div className="corner-dot top-right" />
            <div className="corner-dot bottom-left" />
            <div className="corner-dot bottom-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
