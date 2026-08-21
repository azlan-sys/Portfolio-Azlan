import { useCallback } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, navLinks } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Three-column grid */}
        <div className="footer__grid">
          {/* Left — Brand */}
          <div className="footer__brand">
            <a
              href="#home"
              className="footer__logo"
              data-cursor="pointer"
              onClick={(e) => handleNavClick(e, '#home')}
            >
              <span className="footer__logo-accent">A</span>zlan
            </a>
            <p className="footer__tagline">
              Crafting immersive digital experiences at the intersection of
              creativity and technology.
            </p>
          </div>

          {/* Center — Quick links */}
          <nav className="footer__links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer__link"
                data-cursor="pointer"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — Social icons */}
          <div className="footer__socials">
            <a
              href={personalInfo.socials.github}
              className="footer__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-cursor="pointer"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              className="footer__social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-cursor="pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Azlan. Crafted with{' '}
            <span className="footer__copyright-star">✦</span> and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
