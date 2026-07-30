import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiThreedotjs,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiFigma,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const iconMap = {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiThreedotjs,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiAmazonwebservices: FaAws,
  SiGithubactions,
  SiLinux,
  SiFigma,
};

const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function SkillCard({ skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const Icon = iconMap[skill.icon];
  const offset = isInView
    ? CIRCUMFERENCE - (skill.level / 100) * CIRCUMFERENCE
    : CIRCUMFERENCE;

  return (
    <div ref={ref} className="skill-card">
      {/* Icon */}
      <div className="skill-card__icon">
        {Icon ? <Icon /> : null}
      </div>

      {/* Name */}
      <div className="skill-card__info">
        <div className="skill-card__name">{skill.name}</div>
      </div>

      {/* Progress Ring */}
      <div className="skill-card__ring">
        <svg viewBox="0 0 60 60">
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-cyan)" />
              <stop offset="100%" stopColor="var(--accent-violet)" />
            </linearGradient>
          </defs>
          <circle
            className="skill-card__ring-bg"
            cx="30"
            cy="30"
            r={RADIUS}
          />
          <circle
            className="skill-card__ring-progress"
            cx="30"
            cy="30"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="skill-card__ring-text">{skill.level}%</div>
      </div>
    </div>
  );
}
