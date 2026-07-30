import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, typewriterStrings } from '../../data/portfolioData';
import Typewriter from './Typewriter';
import HeroScene from './HeroScene';
import './Hero.css';

/* --- Animation variants --- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={sectionRef}>
      {/* Layer 1: 3D Scene */}
      <HeroScene />

      {/* Layer 2: Gradient overlay at bottom */}
      <div className="hero__gradient-overlay" />

      {/* Layer 3: Text content */}
      <motion.div
        className="hero__content"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div className="hero__greeting" variants={childVariants}>
          <span className="hero__greeting-dot" />
          Hello, I am
        </motion.div>

        {/* Name */}
        <motion.h1 className="hero__name gradient-text" variants={childVariants}>
          {personalInfo.name}
        </motion.h1>

        {/* Typewriter line */}
        <motion.p className="hero__typewriter-line" variants={childVariants}>
          <span className="hero__typewriter-prefix">I am a </span>
          <Typewriter strings={typewriterStrings} />
        </motion.p>

        {/* Description */}
        <motion.p className="hero__description" variants={childVariants}>
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="hero__cta-row" variants={childVariants}>
          <a
            href="#projects"
            className="hero__btn hero__btn--filled"
            data-cursor="pointer"
            onClick={handleScrollToWork}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="hero__btn hero__btn--outlined"
            data-cursor="pointer"
            onClick={handleScrollToContact}
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-chevron" />
      </motion.div>
    </section>
  );
};

export default Hero;
