import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import './BackToTop.css';

export default function BackToTop() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      data-cursor="pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.3 }}
    >
      <div className="back-to-top__glow" aria-hidden="true" />
      <HiArrowUp className="back-to-top__icon" />
    </motion.button>
  );
}
