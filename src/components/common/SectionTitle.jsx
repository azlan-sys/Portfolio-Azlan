import ScrollReveal from './ScrollReveal';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <ScrollReveal direction="up">
      <div className={`section-title section-title--${align}`}>
        <h2 className="section-title__heading gradient-text">{title}</h2>
        <div className="section-title__line" aria-hidden="true" />
        {subtitle && (
          <p className="section-title__subtitle">{subtitle}</p>
        )}
      </div>
    </ScrollReveal>
  );
};

export default SectionTitle;
