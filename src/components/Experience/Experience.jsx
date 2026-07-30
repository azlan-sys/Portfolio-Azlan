import { experienceData } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionTitle title="Experience" subtitle="My professional journey" />

        <div className="experience__timeline">
          {/* Center gradient line */}
          <div className="experience__line" aria-hidden="true" />

          {experienceData.map((entry, i) => {
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <div
                key={entry.id}
                className={`experience__entry experience__entry--${side}`}
              >
                {/* Dot */}
                <div className="experience__dot" aria-hidden="true" />

                {/* Connector */}
                <div className="experience__connector" aria-hidden="true" />

                {/* Card */}
                <ScrollReveal direction={side === 'left' ? 'left' : 'right'} delay={i * 0.15}>
                  <div className="experience__card">
                    <h3 className="experience__role">{entry.role}</h3>
                    <div className="experience__company">{entry.company}</div>
                    <div className="experience__duration">{entry.duration}</div>
                    <p className="experience__description">{entry.description}</p>
                    <div className="experience__tags">
                      {entry.technologies.map((tech) => (
                        <span key={tech} className="experience__tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
