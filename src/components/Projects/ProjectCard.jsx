import { useRef, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ project, onOpenModal }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleCardClick = () => {
    if (onOpenModal) {
      onOpenModal(project);
    }
  };

  const hexRgb = hexToRgb(project.color);

  return (
    <div
      ref={cardRef}
      className="project-card"
      data-cursor="pointer"
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        border: `1px solid rgba(${hexRgb}, 0.15)`,
      }}
    >
      <div
        className="project-card__inner"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        }}
      >
        {/* Header / Media Area */}
        <div className="project-card__header">
          <div
            className="project-card__header-bg"
            style={{
              background: `radial-gradient(ellipse at 50% 30%, ${project.color} 0%, transparent 70%)`,
            }}
          />
          {project.video ? (
            <video
              className="project-card__media"
              src={
                project.video.startsWith('http')
                  ? project.video
                  : `${import.meta.env.BASE_URL}${project.video.replace(/^\//, '')}`
              }
              poster={
                project.image
                  ? (project.image.startsWith('http')
                      ? project.image
                      : `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`)
                  : undefined
              }
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          ) : project.image ? (
            <img
              className="project-card__media"
              src={
                project.image.startsWith('http')
                  ? project.image
                  : `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`
              }
              alt={project.title}
            />
          ) : (
            <div className="project-card__icon">&lt;/&gt;</div>
          )}

          {/* Floating Case Study Badge */}
          <div
            className="project-card__case-study-badge"
            style={{
              borderColor: `rgba(${hexRgb}, 0.4)`,
              color: project.color,
            }}
          >
            <span>Case Study</span> ↗
          </div>
        </div>

        {/* Body */}
        <div className="project-card__body">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>

          {/* Tech Tags */}
          <div className="project-card__tags">
            {project.techStack.map((tech) => (
              <span key={tech} className="project-card__tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="project-card__actions">
            <button
              type="button"
              className="project-card__link project-card__details-btn"
              style={{ color: project.color }}
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenModal) onOpenModal(project);
              }}
            >
              Details <FaArrowRight style={{ fontSize: '0.75rem' }} />
            </button>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                className="project-card__link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Helper: hex color to r,g,b string */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0,229,255';
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
}
