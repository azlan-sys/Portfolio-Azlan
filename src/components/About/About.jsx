import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo, aboutData } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import './About.css';

/* ---- Animated Counter Hook ---- */
function useAnimatedCounter(target, duration = 2000, startCounting = false, isDecimal = false) {
  const [count, setCount] = useState(isDecimal ? '0.00' : 0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startCounting || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      if (isDecimal) {
        setCount((eased * target).toFixed(2));
      } else {
        setCount(Math.floor(eased * target));
      }
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(isDecimal ? target.toFixed(2) : target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, startCounting, isDecimal]);

  return count;
}

/* ---- Stat Card ---- */
function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useAnimatedCounter(
    typeof stat.value === 'number' ? stat.value : 0,
    2000,
    isInView,
    stat.isDecimal
  );

  const displayValue = stat.isText ? stat.value : count;

  return (
    <motion.div
      ref={ref}
      className="about__stat-card"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="about__stat-value">
        {displayValue}
        {stat.suffix && <span className="about__stat-suffix">{stat.suffix}</span>}
      </div>
      <div className="about__stat-label">{stat.label}</div>
    </motion.div>
  );
}

/* ---- About Section ---- */
export default function About() {
  const imageSrc = `${import.meta.env.BASE_URL}${aboutData.image.replace(/^\//, '')}`;

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionTitle title="About Me" subtitle="Get to know me" />

        <div className="about__grid">
          {/* Left Column: Portrait Showcase */}
          <ScrollReveal direction="left">
            <div className="about__image-wrapper">
              <div className="about__image-glow" aria-hidden="true" />
              <div className="about__image-frame">
                <img
                  src={imageSrc}
                  alt={personalInfo.name}
                  className="about__portrait"
                  loading="lazy"
                />
                
                {/* Floating Status Badge */}
                <div className="about__status-pill">
                  <span className="about__status-dot" />
                  <span>Seeking Internship</span>
                </div>

                {/* Floating Academic Badge */}
                <div className="about__floating-badge">
                  <span className="about__badge-icon">🎓</span>
                  <div>
                    <div className="about__badge-title">UiTM Final-Year</div>
                    <div className="about__badge-sub">Information Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Bio, Focus Areas & Stats */}
          <div className="about__details">
            <ScrollReveal delay={0.1}>
              <h3 className="about__headline">{aboutData.headline}</h3>
            </ScrollReveal>

            <div className="about__bio">
              {aboutData.bio.map((paragraph, i) => (
                <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                  <p className="about__bio-text">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Core Competency Cards */}
            <ScrollReveal delay={0.35}>
              <div className="about__focus-grid">
                {aboutData.focusAreas.map((area) => (
                  <div key={area.title} className="about__focus-card">
                    <div className="about__focus-title">{area.title}</div>
                    <div className="about__focus-desc">{area.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats Row */}
            <div className="about__stats">
              {aboutData.stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
