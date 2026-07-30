import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import SkillCard from './SkillCard';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);

  const activeSkills =
    skillsData.find((cat) => cat.category === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionTitle title="Skills & Expertise" subtitle="Technologies I work with" />

        {/* Category Tabs */}
        <div className="skills__tabs">
          {skillsData.map((cat) => (
            <button
              key={cat.category}
              className={`skills__tab ${
                activeCategory === cat.category ? 'skills__tab--active' : ''
              }`}
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills__grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeSkills.map((skill, i) => (
              <ScrollReveal key={skill.name} delay={i * 0.1}>
                <SkillCard skill={skill} />
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
