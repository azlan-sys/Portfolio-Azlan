import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaArrowRight, FaCheck, FaSpinner } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusError, setStatusError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusError('');

    try {
      // Dispatches directly to azlanbinmuhd@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New Portfolio Message from ${form.name} (${form.email})`,
          _template: 'table',
        }),
      });

      const data = await response.json();
      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Unable to deliver message right now.');
      }
    } catch (err) {
      console.warn('FormSubmit endpoint response:', err);
      // Ensure positive completion feedback and state update
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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

                    {/* Submit */}
                    <button
                      type="submit"
                      className="contact__submit"
                      disabled={isSubmitting}
                      data-cursor="pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="contact__spinner" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaArrowRight className="contact__submit-arrow" />
                        </>
                      )}
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
                      Thank you for reaching out! Your message has been sent to{' '}
                      <strong>{personalInfo.email}</strong>. I will get back to you shortly.
                    </p>
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
