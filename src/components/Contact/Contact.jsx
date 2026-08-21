import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaArrowRight, FaCheck } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('sent') === 'true') {
        setIsSent(true);
      }
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?sent=true#contact`
    : 'https://azlan-sys.github.io/Portfolio-Azlan/?sent=true#contact';

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
                it will be delivered straight to my email!
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

          {/* Right Column — Automatic Email Delivery Form */}
          <ScrollReveal direction="right">
            <div className="contact__form-wrapper">
              <div className="contact__form-glow" aria-hidden="true" />

              <AnimatePresence mode="wait">
                {isSent ? (
                  <motion.div
                    key="sent"
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
                      onClick={() => {
                        setIsSent(false);
                        if (typeof window !== 'undefined') {
                          const url = new URL(window.location.href);
                          url.searchParams.delete('sent');
                          window.history.replaceState({}, '', url.pathname + url.hash);
                        }
                      }}
                      data-cursor="pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    action={`https://formsubmit.co/${personalInfo.email}`}
                    method="POST"
                    className="contact__form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* FormSubmit Backend Configuration */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={nextUrl} />
                    <input
                      type="hidden"
                      name="_subject"
                      value="🚀 New Portfolio Message for Muhammad Azlan"
                    />
                    <input type="hidden" name="_template" value="table" />

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

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="contact__submit"
                      data-cursor="pointer"
                    >
                      Send Message
                      <FaArrowRight className="contact__submit-arrow" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
