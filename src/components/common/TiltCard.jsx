import { useRef, useState, useCallback } from 'react';

const TiltCard = ({ children, className = '', tiltAmount = 15, ...props }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [highlightStyle, setHighlightStyle] = useState({ opacity: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (-mouseY / (rect.height / 2)) * tiltAmount;
    const rotateY = (mouseX / (rect.width / 2)) * tiltAmount;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);

    const highlightX = ((e.clientX - rect.left) / rect.width) * 100;
    const highlightY = ((e.clientY - rect.top) / rect.height) * 100;

    setHighlightStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${highlightX}% ${highlightY}%, rgba(0, 229, 255, 0.12) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)`,
    });
  }, [tiltAmount]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    setHighlightStyle({ opacity: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovering ? 'none' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',
        overflow: 'hidden',
      }}
      {...props}
    >
      {children}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          transition: 'opacity 0.3s ease-out',
          ...highlightStyle,
        }}
      />
    </div>
  );
};

export default TiltCard;
