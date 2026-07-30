import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import useMousePosition from '../../hooks/useMousePosition';
import './CustomCursor.css';

const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [cursorState, setCursorState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  const ringX = useSpring(0, springConfig);
  const ringY = useSpring(0, springConfig);

  /* Keep ring following with a spring lag */
  useEffect(() => {
    ringX.set(x);
    ringY.set(y);
  }, [x, y, ringX, ringY]);

  /* Show cursor only after first move */
  useEffect(() => {
    const show = () => setIsVisible(true);
    window.addEventListener('mousemove', show, { once: true });
    return () => window.removeEventListener('mousemove', show);
  }, []);

  /* Detect interactive element hover via event delegation */
  useEffect(() => {
    const handleOver = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], [data-cursor="pointer"], [data-cursor="text"], input, textarea, select'
      );

      if (!target) {
        setCursorState('default');
        return;
      }

      const attr = target.getAttribute('data-cursor');
      if (attr === 'text') {
        setCursorState('text');
      } else {
        setCursorState('pointer');
      }
    };

    document.addEventListener('mouseover', handleOver);
    return () => document.removeEventListener('mouseover', handleOver);
  }, []);

  if (!isVisible) return null;

  const dotClass = [
    'cursor__dot',
    cursorState === 'pointer' && 'cursor__dot--pointer',
    cursorState === 'text' && 'cursor__dot--text',
  ]
    .filter(Boolean)
    .join(' ');

  const ringClass = [
    'cursor__ring',
    cursorState === 'pointer' && 'cursor__ring--pointer',
    cursorState === 'text' && 'cursor__ring--text',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {/* Dot — follows immediately */}
      <motion.div
        className={`cursor ${dotClass}`}
        style={{
          left: x,
          top: y,
        }}
        aria-hidden="true"
      />

      {/* Ring — follows with spring lag */}
      <motion.div
        className={`cursor ${ringClass}`}
        style={{
          left: ringX,
          top: ringY,
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
