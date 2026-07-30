import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import './Testimonials.css';

const AUTOPLAY_INTERVAL = 5000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = testimonialsData.length;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Show one testimonial at a time (can pair on desktop via CSS)
  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <SectionTitle title="Testimonials" subtitle="What people say" />

        <div
          className="testimonials__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonials__track"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Primary card */}
              <TestimonialCard testimonial={current} />

              {/* Secondary card (desktop only, next one) */}
              {totalSlides > 1 && (
                <TestimonialCard
                  testimonial={testimonialsData[(activeIndex + 1) % totalSlides]}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="testimonials__dots">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${
                i === activeIndex ? 'testimonials__dot--active' : ''
              }`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const initial = testimonial.name.charAt(0).toUpperCase();

  return (
    <div className="testimonial-card">
      <span className="testimonial-card__quote-mark" aria-hidden="true">
        &ldquo;
      </span>
      <p className="testimonial-card__text">{testimonial.quote}</p>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">{initial}</div>
        <div>
          <div className="testimonial-card__name">{testimonial.name}</div>
          <div className="testimonial-card__role">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}
