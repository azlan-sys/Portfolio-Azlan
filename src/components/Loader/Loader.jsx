import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Slightly longer than bar fill (2.5s) for polish

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isLoading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: '-100%',
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.65, 0, 0.35, 1],
            },
          }}
        >
          {/* Ambient glow */}
          <div className="loader__glow" aria-hidden="true" />

          {/* Logo letter */}
          <motion.span
            className="loader__letter gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            A
          </motion.span>

          {/* Loading bar */}
          <motion.div
            className="loader__bar-track"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.3, duration: 0.4 },
            }}
          >
            <div className="loader__bar-fill" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
