import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function SocialIcon({ type, href, label, isPlaceholder, onClick }) {
  const getIcon = () => {
    switch (type.toLowerCase()) {
      case "github":
        return <GithubIcon size={18} />;
      case "email":
      case "mail":
        return <MailIcon size={18} />;
      case "linkedin":
        return <LinkedinIcon size={18} />;
      default:
        return <ExternalLink size={18} strokeWidth={1.75} />;
    }
  };

  if (isPlaceholder) {
    return (
      <div
        className="social-icon-btn placeholder"
        title={`${label} (Coming Soon)`}
        aria-label={`${label} (Coming Soon)`}
        tabIndex={0}
      >
        {getIcon()}
        <span className="social-tooltip">Coming Soon</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="social-icon-btn"
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {getIcon()}
    </a>
  );
}
