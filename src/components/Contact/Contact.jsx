import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaArrowRight, FaCheck, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import './Contact.css';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_5hg2frw';
const EMAILJS_TEMPLATE_ID = 'template_1bh6xsb';
const EMAILJS_PUBLIC_KEY = 'Z3lKKttogCcI_UNrU';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const templateParams = {
      name: form.name,
      from_name: form.name,
      email: form.email,
      from_email: form.email,
      reply_to: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200 || response.text === 'OK') {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email via EmailJS');
      }
    } catch (err) {
      console.error('EmailJS delivery error:', err);
      setErrorMessage(
        'Unable to send message right now. Please reach out directly to azlanbinmuhd@gmail.com'
      );
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
                I&rsquo;m always open to discussing new projects, internship opportunities,
                full-time roles, or creative collaborations. Leave your message below and
                I will get back to you!
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

          {/* Right Column — Form with Direct EmailJS Integration */}
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
                        rows={4}
                        required
                      />
                      <label className="contact__label">Your Message</label>
                    </div>

                    {errorMessage && (
                      <p className="contact__error-text">{errorMessage}</p>
                    )}

                    {/* Submit Button */}
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
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="contact__success-icon">
                      <FaCheck />
                    </div>
                    <h4 className="contact__success-title">Message Delivered!</h4>
                    <p className="contact__success-text">
                      Thank you for reaching out! Your message has been sent directly to{' '}
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
