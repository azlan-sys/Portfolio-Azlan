import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaArrowRight, FaCheck } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visual-only success — no actual send
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />

        <div className="contact__content">
          {/* Left Column — Info */}
          <ScrollReveal direction="left">
            <div className="contact__info">
              <h3 className="contact__heading">
                Let&rsquo;s create something amazing together
              </h3>
              <p className="contact__text">
                I&rsquo;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Drop me a line and
                let&rsquo;s talk!
              </p>

              <div className="contact__details">
                <div className="contact__detail">
                  <HiOutlineMail className="contact__detail-icon" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="contact__detail">
                  <HiOutlineLocationMarker className="contact__detail-icon" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div className="contact__socials">
                <a
                  href={personalInfo.socials.github}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column — Form */}
          <ScrollReveal direction="right">
            <div className="contact__form-wrapper">
              <div className="contact__form-glow" aria-hidden="true" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    className="contact__form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Name */}
                    <div className="contact__field">
                      <input
                        type="text"
                        name="name"
                        className="contact__input"
                        placeholder=" "
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <label className="contact__label">Your Name</label>
                    </div>

                    {/* Email */}
                    <div className="contact__field">
                      <input
                        type="email"
                        name="email"
                        className="contact__input"
                        placeholder=" "
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                      <label className="contact__label">Your Email</label>
                    </div>

                    {/* Message */}
                    <div className="contact__field">
                      <textarea
                        name="message"
                        className="contact__textarea"
                        placeholder=" "
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                      <label className="contact__label">Your Message</label>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="contact__submit">
                      Send Message
                      <FaArrowRight className="contact__submit-arrow" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="contact__success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="contact__success-icon">
                      <FaCheck />
                    </div>
                    <h4 className="contact__success-title">Message Sent!</h4>
                    <p className="contact__success-text">
                      Thanks for reaching out. I&rsquo;ll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
