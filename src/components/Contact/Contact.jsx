import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaArrowRight, FaCheck, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sentName, setSentName] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Azlan,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const getGmailWebLink = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${sentName || form.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Azlan,\n\n${form.message}\n\n---\nFrom: ${form.name || sentName}\nEmail: ${form.email}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentName(form.name);

    // 1. Trigger user's default email client with pre-filled content
    window.location.href = getMailtoLink();

    // 2. Also try background dispatch to FormSubmit
    try {
      fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name} (${form.email})`,
          _captcha: 'false',
        }),
      }).catch(() => {});
    } catch {
      // Ignore background errors
    }

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
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact__detail-link"
                  data-cursor="pointer"
                >
                  <HiOutlineMail className="contact__detail-icon" />
                  <span>{personalInfo.email}</span>
                </a>
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
                  data-cursor="pointer"
                >
                  <FaGithub />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  data-cursor="pointer"
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

                    {/* Submit Buttons */}
                    <div className="contact__btn-group">
                      <button
                        type="submit"
                        className="contact__submit"
                        data-cursor="pointer"
                      >
                        Send Message
                        <FaArrowRight className="contact__submit-arrow" />
                      </button>

                      <a
                        href={getGmailWebLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__gmail-btn"
                        data-cursor="pointer"
                      >
                        <FaEnvelope /> Open in Gmail Web
                      </a>
                    </div>
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
                    <h4 className="contact__success-title">Opening Email Client...</h4>
                    <p className="contact__success-text">
                      Your draft is prepared for <strong>{personalInfo.email}</strong>. If your email client didn&rsquo;t open automatically, use the buttons below:
                    </p>

                    <div className="contact__success-actions">
                      <a
                        href={getGmailWebLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__action-btn contact__action-btn--primary"
                        data-cursor="pointer"
                      >
                        <FaExternalLinkAlt /> Open in Gmail Web
                      </a>

                      <a
                        href={getMailtoLink()}
                        className="contact__action-btn contact__action-btn--secondary"
                        data-cursor="pointer"
                      >
                        <FaEnvelope /> Open Default Mail App
                      </a>
                    </div>

                    <button
                      type="button"
                      className="contact__resend-btn"
                      onClick={() => setSubmitted(false)}
                      data-cursor="pointer"
                    >
                      Send Another Message
                    </button>
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
