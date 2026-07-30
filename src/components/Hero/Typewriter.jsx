import { useState, useEffect, useCallback } from 'react';

const Typewriter = ({
  strings = [],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDelay = 2000,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    if (strings.length === 0) return;

    const fullText = strings[currentIndex];

    if (!isDeleting) {
      // Typing
      if (currentText.length < fullText.length) {
        return setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause then start deleting
        return setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        return setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next string
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
        return undefined;
      }
    }
  }, [currentText, currentIndex, isDeleting, strings, typingSpeed, deletingSpeed, pauseDelay]);

  useEffect(() => {
    const timeout = tick();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [tick]);

  return (
    <span className="typewriter" style={styles.wrapper}>
      <span style={styles.text}>{currentText}</span>
      <span style={styles.cursor} aria-hidden="true">
        |
      </span>
    </span>
  );
};

const styles = {
  wrapper: {
    display: 'inline',
    fontFamily: 'var(--font-mono)',
  },
  text: {
    color: 'var(--accent-cyan)',
  },
  cursor: {
    color: 'var(--accent-cyan)',
    animation: 'typing-cursor 0.8s steps(1) infinite',
    marginLeft: '2px',
    fontWeight: 300,
  },
};

export default Typewriter;
