import React from 'react';
import { Github, Mail } from 'lucide-react';
import './home.css';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const Portfolio: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/shirbhate2002",
      label: "GitHub"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "https://in.linkedin.com/in/vaidilya-shirbhate-5b786019b",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:shirbhate2002@gmail.com",
      label: "Email"
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">

        {/* Profile Image */}
        <div className="profile-section">
          <div className="decorative-line"></div>
          <div className="profile-image-wrapper">
                <img 
                  src="/public/profile.jpg" 
                  alt="Vaidilya Shirbhate"
                  className="profile-image"
                />
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h1 className="greeting">
            Hi, I'm Vaidilya.
          </h1>

          <div className="description">
            <p className="description-paragraph">
              I'm a Software Developer at <b>Siemens</b>, Pune.
            </p>

            <p className="description-paragraph">
               This website is currently under construction.<br/>Meanwhile, you can check out my work on <a href="https://play.google.com/store/apps/details?id=com.vaidilya.collegeconnect" className="projects-link">App</a>.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-link"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="footer">
          Made by Vaidilya | © 2025
        </div>

      </div>
    </div>
  );
};

export default Portfolio;