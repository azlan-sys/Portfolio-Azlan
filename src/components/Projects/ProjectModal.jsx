import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaTimes,
  FaCheckCircle,
  FaCalendarAlt,
  FaUserTie,
  FaLayerGroup,
  FaTools,
} from 'react-icons/fa';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  // Close on ESC key & lock background body scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Pause Lenis smooth scrolling while modal is open
    window.__lenis?.stop();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.__lenis?.start();
    };
  }, [project, onClose]);

  if (!project) return null;

  const hexRgb = hexToRgb(project.color);
  const mediaUrl = (url) =>
    url?.startsWith('http')
      ? url
      : `${import.meta.env.BASE_URL}${url?.replace(/^\//, '')}`;

  return (
    <AnimatePresence>
      <div className="project-modal-root" data-lenis-prevent="true">
        {/* Backdrop */}
        <motion.div
          className="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        />

        {/* Modal Wrapper */}
        <div
          className="project-modal-wrapper"
          data-lenis-prevent="true"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            className="project-modal-container"
            data-lenis-prevent="true"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.4,
            }}
            style={{
              borderColor: `rgba(${hexRgb}, 0.3)`,
              boxShadow: `0 0 50px rgba(${hexRgb}, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.8)`,
            }}
          >
            {/* Close Button */}
            <button
              className="project-modal-close-btn"
              data-cursor="pointer"
              onClick={onClose}
              aria-label="Close modal"
              title="Press Esc to close"
            >
              <FaTimes />
              <span className="project-modal-esc-hint">ESC</span>
            </button>

            {/* Scrollable Viewport Container */}
            <div
              className="project-modal-scroll-area"
              data-lenis-prevent="true"
            >
              {/* Media Banner / Video Player */}
              <div className="project-modal-media-header">
                <div
                  className="project-modal-media-glow"
                  style={{
                    background: `radial-gradient(ellipse at 50% 40%, rgba(${hexRgb}, 0.4) 0%, transparent 75%)`,
                  }}
                />
                {project.video ? (
                  <div className="project-modal-video-box">
                    <video
                      className="project-modal-video"
                      src={mediaUrl(project.video)}
                      poster={project.image ? mediaUrl(project.image) : undefined}
                      autoPlay
                      loop
                      muted
                      controls
                      playsInline
                      preload="auto"
                    />
                  </div>
                ) : project.image ? (
                  <img
                    className="project-modal-image"
                    src={mediaUrl(project.image)}
                    alt={project.title}
                  />
                ) : (
                  <div className="project-modal-placeholder-banner">
                    <div
                      className="project-modal-code-symbol"
                      style={{ color: project.color }}
                    >
                      &lt;/&gt;
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Body */}
              <div className="project-modal-body">
              {/* Meta Badges Row */}
              <div className="project-modal-meta-row">
                <span
                  className="project-modal-badge project-modal-badge--category"
                  style={{
                    backgroundColor: `rgba(${hexRgb}, 0.12)`,
                    color: project.color,
                    borderColor: `rgba(${hexRgb}, 0.3)`,
                  }}
                >
                  <FaLayerGroup /> {project.category}
                </span>

                {project.year && (
                  <span className="project-modal-badge">
                    <FaCalendarAlt /> {project.year}
                  </span>
                )}

                {project.role && (
                  <span className="project-modal-badge">
                    <FaUserTie /> {project.role}
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="project-modal-header-text">
                <h2 className="project-modal-title">{project.title}</h2>
                {project.tagline && (
                  <p
                    className="project-modal-tagline"
                    style={{ color: project.color }}
                  >
                    {project.tagline}
                  </p>
                )}
              </div>

              {/* Action Buttons Header */}
              <div className="project-modal-actions-top">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    className="project-modal-cta project-modal-cta--primary"
                    data-cursor="pointer"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, #7928ca)`,
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    className="project-modal-cta project-modal-cta--secondary"
                    data-cursor="pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Source Code
                  </a>
                )}
              </div>

              {/* Highlights Pill Tags */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="project-modal-section">
                  <div className="project-modal-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="project-modal-highlight-chip"
                        style={{
                          borderColor: `rgba(${hexRgb}, 0.25)`,
                        }}
                      >
                        <FaCheckCircle
                          style={{ color: project.color, flexShrink: 0 }}
                        />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview / Story */}
              <div className="project-modal-section">
                <h3 className="project-modal-section-title">
                  <span
                    className="project-modal-section-indicator"
                    style={{ backgroundColor: project.color }}
                  />
                  Project Overview
                </h3>
                <p className="project-modal-overview-text">
                  {project.overview || project.longDescription || project.description}
                </p>
              </div>

              {/* Key Features Grid */}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div className="project-modal-section">
                  <h3 className="project-modal-section-title">
                    <span
                      className="project-modal-section-indicator"
                      style={{ backgroundColor: project.color }}
                    />
                    Key Capabilities & Features
                  </h3>
                  <div className="project-modal-features-grid">
                    {project.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="project-modal-feature-card"
                        style={{
                          borderColor: `rgba(${hexRgb}, 0.15)`,
                        }}
                      >
                        <div
                          className="project-modal-feature-icon"
                          style={{
                            backgroundColor: `rgba(${hexRgb}, 0.15)`,
                            color: project.color,
                          }}
                        >
                          ✦
                        </div>
                        <div className="project-modal-feature-content">
                          <h4 className="project-modal-feature-title">
                            {feature.title}
                          </h4>
                          <p className="project-modal-feature-desc">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack & Architecture */}
              <div className="project-modal-section">
                <h3 className="project-modal-section-title">
                  <span
                    className="project-modal-section-indicator"
                    style={{ backgroundColor: project.color }}
                  />
                  <FaTools style={{ marginRight: '6px' }} /> Technologies Used
                </h3>
                <div className="project-modal-tech-stack">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="project-modal-tech-tag"
                      style={{
                        borderColor: `rgba(${hexRgb}, 0.2)`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.architecture && (
                  <div
                    className="project-modal-architecture-box"
                    style={{
                      borderLeft: `3px solid ${project.color}`,
                    }}
                  >
                    <p>{project.architecture}</p>
                  </div>
                )}
              </div>

              {/* Bottom Footer Actions */}
              <div className="project-modal-footer">
                <div className="project-modal-footer-links">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      className="project-modal-cta project-modal-cta--primary"
                      data-cursor="pointer"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, #7928ca)`,
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Open Live App
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      className="project-modal-cta project-modal-cta--secondary"
                      data-cursor="pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> View GitHub Code
                    </a>
                  )}
                </div>
                <button
                  className="project-modal-close-footer-btn"
                  data-cursor="pointer"
                  onClick={onClose}
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0, 229, 255';
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}
