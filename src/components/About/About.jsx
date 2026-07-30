import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutData } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import './About.css';

/* ---- Animated Counter Hook ---- */
function useAnimatedCounter(target, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);
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
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, startCounting]);

  return count;
}

/* ---- Stat Card ---- */
function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useAnimatedCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      className="about__stat-card"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="about__stat-value">
        {count}
        <span className="about__stat-suffix">+</span>
      </div>
      <div className="about__stat-label">{stat.label}</div>
    </motion.div>
  );
}

/* ---- About Section ---- */
export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionTitle title="About Me" subtitle="Get to know me" />

        <div className="about__content">
          {/* Bio Column */}
          <div className="about__bio">
            {aboutData.bio.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <p className="about__bio-text">{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="about__divider" aria-hidden="true" />

          {/* Stats Column */}
          <div className="about__stats">
            {aboutData.stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
