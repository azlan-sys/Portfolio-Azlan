import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData, educationData } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionTitle
          title="Experience & Education"
          subtitle="My academic & leadership journey"
        />

        {/* Tab Switcher */}
        <div className="experience__tabs">
          <button
            className={`experience__tab-btn ${
              activeTab === 'experience' ? 'experience__tab-btn--active' : ''
            }`}
            onClick={() => setActiveTab('experience')}
          >
            <FaBriefcase /> Leadership & Experience
          </button>
          <button
            className={`experience__tab-btn ${
              activeTab === 'education' ? 'experience__tab-btn--active' : ''
            }`}
            onClick={() => setActiveTab('education')}
          >
            <FaGraduationCap /> Education & Academics
          </button>
        </div>

        {/* Content View */}
        <AnimatePresence mode="wait">
          {activeTab === 'experience' ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="experience__timeline"
            >
              {/* Center gradient line */}
              <div className="experience__line" aria-hidden="true" />

              {experienceData.map((entry, i) => {
                const side = i % 2 === 0 ? 'left' : 'right';
                return (
                  <div
                    key={entry.id}
                    className={`experience__entry experience__entry--${side}`}
                  >
                    {/* Dot */}
                    <div className="experience__dot" aria-hidden="true" />

                    {/* Connector */}
                    <div className="experience__connector" aria-hidden="true" />

                    {/* Card */}
                    <ScrollReveal
                      direction={side === 'left' ? 'left' : 'right'}
                      delay={i * 0.1}
                    >
                      <div className="experience__card">
                        <div className="experience__header">
                          <h3 className="experience__role">{entry.role}</h3>
                          <span className="experience__duration">
                            {entry.duration}
                          </span>
                        </div>
                        <div className="experience__company">
                          {entry.company}
                        </div>
                        {entry.location && (
                          <div className="experience__location">
                            <FaMapMarkerAlt /> {entry.location}
                          </div>
                        )}
                        <p className="experience__description">
                          {entry.description}
                        </p>
                        <div className="experience__tags">
                          {entry.technologies.map((tech) => (
                            <span key={tech} className="experience__tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="education__grid"
            >
              {educationData.map((edu, i) => (
                <ScrollReveal key={edu.id} delay={i * 0.15}>
                  <div className="education__card">
                    <div className="education__card-glow" aria-hidden="true" />
                    <div className="education__card-header">
                      <div className="education__icon-box">
                        <FaGraduationCap />
                      </div>
                      <div>
                        <span className="education__period">{edu.period}</span>
                        <h3 className="education__institution">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>

                    <div className="education__degree">{edu.degree}</div>

                    {edu.grade && (
                      <div className="education__grade-badge">
                        <span>Academic Standing:</span> <strong>{edu.grade}</strong>
                      </div>
                    )}

                    <div className="education__location">
                      <FaMapMarkerAlt /> {edu.location}
                    </div>

                    <p className="education__description">{edu.description}</p>

                    <div className="education__skills">
                      {edu.skills.map((skill) => (
                        <span key={skill} className="education__skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
