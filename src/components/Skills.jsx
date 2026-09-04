import React from "react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
  const revealRef = useScrollReveal({ threshold: 0.1 });
  const { usingNow, currentlyLearning } = portfolioData.skills;

  return (
    <section id="skills" className="skills-section" ref={revealRef}>
      <div className="section-wrapper">
        <SectionTitle
          title="SKILLS"
          subtitle="02 // TECH STACK"
          number="02"
        />

        {/* Primary Block: USING NOW */}
        <div className="skills-block">
          <div className="category-header">
            <div className="category-title-wrap">
              <span className="category-indicator active" />
              <h3 className="category-title">USING NOW</h3>
            </div>
            <span className="category-subtitle">
              Core technologies deployed in active development
            </span>
          </div>

          <div className="skills-categories-grid">
            {usingNow.map((group) => (
              <div key={group.category} className="skill-group-box">
                <div className="skill-group-header">
                  <span className="skill-group-title">{group.category}</span>
                  <span className="skill-count">{group.items.length} TECHNOLOGIES</span>
                </div>
                <div className="skill-items-grid">
                  {group.items.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Block: CURRENTLY LEARNING */}
        <div className="skills-block learning-block">
          <div className="category-header">
            <div className="category-title-wrap">
              <span className="category-indicator learning" />
              <h3 className="category-title">CURRENTLY LEARNING</h3>
            </div>
            <span className="category-subtitle">
              Deepening CS fundamentals, backend architecture & system design
            </span>
          </div>

          <div className="learning-items-grid">
            {currentlyLearning.map((item) => (
              <SkillCard
                key={item.name}
                name={item.name}
                icon={item.icon}
                badge="In Progress"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
