import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

let globalLenis = null;

export const getLenis = () => globalLenis;

const useSmoothScroll = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      prevent: (node) => node.closest && node.closest('[data-lenis-prevent]'),
    });

    lenisRef.current = lenis;
    globalLenis = lenis;
    window.__lenis = lenis;

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      globalLenis = null;
      window.__lenis = null;
    };
  }, []);

  return lenisRef.current;
};

export default useSmoothScroll;
