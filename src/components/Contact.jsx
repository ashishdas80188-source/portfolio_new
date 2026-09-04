import React, { useState } from "react";
import { Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Contact() {
  const revealRef = useScrollReveal({ threshold: 0.15 });
  const { social } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: "Please fill out all fields before submitting."
      });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: "" });

    // Simulated frontend submission (ready to plug in backend API / EmailJS)
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: ""
      });
      setFormData({ name: "", email: "", message: "" });
    }, 600);
  };

  const handleReset = () => {
    setFormStatus({ submitting: false, submitted: false, error: "" });
  };

  return (
    <section id="contact" className="contact-section" ref={revealRef}>
      <div className="section-wrapper">
        <SectionTitle
          title="LET'S BUILD SOMETHING"
          subtitle="05 // CONNECT"
          number="05"
        />

        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="contact-info-panel">
            <p className="contact-lead-text">
              I'm always interested in learning, building and connecting with people who enjoy creating useful technology.
            </p>

            <div className="contact-channels-list">
              {/* Email */}
              <a
                href={social.email.url}
                className="contact-channel-card"
                aria-label="Send Email to Ashish Kumar Das"
              >
                <div className="channel-icon-box">
                  <MailIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-type">EMAIL</span>
                  <span className="channel-val">{social.email.handle}</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* GitHub */}
              <a
                href={social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label="Visit GitHub Profile"
              >
                <div className="channel-icon-box">
                  <GithubIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-type">GITHUB</span>
                  <span className="channel-val">{social.github.handle}</span>
                </div>
                <ArrowUpRight size={18} className="channel-arrow" />
              </a>

              {/* LinkedIn (Placeholder) */}
              <div
                className="contact-channel-card placeholder"
                title="LinkedIn Coming Soon"
              >
                <div className="channel-icon-box">
                  <LinkedinIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-type">LINKEDIN</span>
                  <span className="channel-val">Coming Soon</span>
                </div>
                <span className="channel-tag">SOON</span>
              </div>
            </div>

            <div className="contact-availability-box">
              <div className="availability-indicator" />
              <div className="availability-text">
                <strong>Current Status:</strong> Open to collaborative software engineering opportunities & open-source discussions.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-panel">
            <div className="form-container-box">
              <div className="form-header">
                <span className="form-header-tag">// DIRECT INQUIRY</span>
                <span className="form-header-status">CLIENT INTERFACE</span>
              </div>

              {formStatus.submitted ? (
                <div className="form-success-state">
                  <CheckCircle2 size={44} className="success-icon" />
                  <h4 className="success-title">Message Captured</h4>
                  <p className="success-description">
                    Thank you! Your message has been captured on the frontend. A backend service (e.g., Express.js, Spring Boot, or EmailJS) can easily be connected to route this directly to my inbox.
                  </p>
                  <p className="success-fallback">
                    In the meantime, feel free to reach me directly at:{" "}
                    <a href={social.email.url} className="fallback-email">
                      {social.email.handle}
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-outline reset-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  {formStatus.error && (
                    <div className="form-error-banner" role="alert">
                      {formStatus.error}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      NAME <span className="req">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      EMAIL <span className="req">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      MESSAGE <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or inquiry..."
                      required
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="btn btn-primary submit-btn"
                  >
                    <span>{formStatus.submitting ? "PREPARING..." : "SEND MESSAGE"}</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
