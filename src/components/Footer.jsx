import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  const { personal, social } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-border" />
      <div className="footer-container">
        {/* Left: Branding */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <span className="footer-monogram">{personal.initials}</span>
            <div className="footer-title-group">
              <h3 className="footer-name">{personal.name.toUpperCase()}</h3>
              <p className="footer-role">{personal.title}</p>
            </div>
          </div>
          <p className="footer-tagline">“{personal.tagline}”</p>
        </div>

        {/* Middle: Links */}
        <div className="footer-links-group">
          <span className="footer-nav-label">CHANNELS</span>
          <ul className="footer-nav-list">
            <li>
              <a
                href={social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <span className="footer-nav-link placeholder" title="Coming Soon">
                <LinkedinIcon size={14} />
                <span>LinkedIn (Soon)</span>
              </span>
            </li>
            <li>
              <a href={social.email.url} className="footer-nav-link">
                <MailIcon size={14} />
                <span>Email</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Back to top & Copyright */}
        <div className="footer-action-col">
          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={16} />
          </button>
          <div className="footer-copy">
            <span>© 2026 {personal.name}</span>
            <span className="footer-dot">•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
