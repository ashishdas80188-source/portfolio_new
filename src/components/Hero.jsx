import React, { useState } from "react";
import { ArrowDown, Mail, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const { personal, social } = portfolioData;

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Side: Editorial Light Theme */}
        <div className="hero-left">
          <div className="hero-left-content">
            <div className="hero-intro-badge">
              <span className="badge-line" />
              <span className="badge-text">Hi, I am</span>
            </div>

            <h1 className="hero-name">
              <span className="name-line">ASHISH</span>
              <span className="name-line">KUMAR</span>
              <span className="name-line highlight">DAS</span>
            </h1>

            <div className="hero-title-wrap">
              <div className="title-slash">//</div>
              <h2 className="hero-title">{personal.title}</h2>
            </div>

            <div className="hero-tagline-quote">
              <p className="tagline-text">“{personal.tagline}”</p>
            </div>

            <p className="hero-description">{personal.shortBio}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <span>CONTACT ME</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="#about" className="btn btn-outline">
                <span>EXPLORE WORK</span>
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="hero-social-block">
              <span className="social-label">CONNECT:</span>
              <div className="social-links-group">
                <SocialIcon
                  type="github"
                  href={social.github.url}
                  label={social.github.label}
                />
                <SocialIcon
                  type="email"
                  href={social.email.url}
                  label={social.email.label}
                />
                <SocialIcon
                  type="linkedin"
                  href={social.linkedin.url}
                  label={social.linkedin.label}
                  isPlaceholder={social.linkedin.isPlaceholder}
                />
              </div>
            </div>
          </div>

          <div className="hero-left-bg-accent">AKD</div>
        </div>

        {/* Right Side: Solid Black with Angled Diagonal Division */}
        <div className="hero-right">
          <div className="hero-diagonal-overlay" />
          
          <div className="hero-image-wrapper">
            {!imageError ? (
              <img
                src={personal.profileImage}
                alt={`${personal.name} - ${personal.title}`}
                className="hero-profile-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="profile-placeholder" aria-label="Add your profile photo">
                <div className="placeholder-box">
                  <div className="placeholder-icon">📷</div>
                  <span className="placeholder-title">ADD YOUR PROFILE PHOTO</span>
                  <span className="placeholder-sub">public/profile.jpg</span>
                </div>
              </div>
            )}

            {/* Editorial geometric overlay tags */}
            <div className="hero-meta-badge">
              <span className="meta-badge-text">AKD.DEV // 2026</span>
              <span className="meta-badge-sub">FULL STACK</span>
            </div>

            <div className="hero-crosshair top-right" />
            <div className="hero-crosshair bottom-left" />
          </div>
        </div>
      </div>

      {/* Floating scroll down indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll down to About section">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-arrow-box">
          <ArrowDown size={14} />
        </div>
      </a>
    </section>
  );
}
