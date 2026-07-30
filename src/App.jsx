import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Smooth scroll
import useSmoothScroll from './hooks/useSmoothScroll';

// Components
import Loader from './components/Loader/Loader';
import CustomCursor from './components/Cursor/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scrolling
  useSmoothScroll();

  // Prevent scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      {/* Custom Cursor — hidden on mobile */}
      <CustomCursor />

      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Experience />
            <div className="section-divider" />
            <Testimonials />
            <div className="section-divider" />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
