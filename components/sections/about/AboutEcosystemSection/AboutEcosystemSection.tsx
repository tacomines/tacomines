import {
  BrainCircuit,
  FolderKanban,
  BriefcaseBusiness,
  BadgeCheck,
} from 'lucide-react';

import styles from './AboutEcosystemSection.module.css';

const ecosystem = [
  {
    icon: <BrainCircuit size={24} />,
    title: 'AI-Assisted Learning',
    description:
      'Modern AI-supported productivity workflows for engineering-focused practical learning.',
  },

  {
    icon: <FolderKanban size={24} />,
    title: 'Guided Projects',
    description:
      'Structured mini projects and implementation-oriented engineering practice.',
  },

  {
    icon: <BriefcaseBusiness size={24} />,
    title: 'Career Ecosystem',
    description:
      'Portfolio building, technical visibility and career-oriented student development.',
  },

  {
    icon: <BadgeCheck size={24} />,
    title: 'Professional Growth',
    description:
      'Discipline, productivity and long-term engineering mindset improvement.',
  },
];

export default function AboutEcosystemSection() {
  return (
      <section
        id='ecosystem'
        className={styles.section}
      >
      <div className='container'>
        <div className={styles.header}>
          <span className={styles.badge}>
            Engineering Ecosystem
          </span>

          <h2 className={styles.title}>
            Beyond Traditional
            <span> Classroom Training</span>
          </h2>

          <p className={styles.description}>
            TacoMines focuses on modern engineering learning workflows
            designed for implementation confidence, productivity and
            practical technical growth.
          </p>
        </div>

        <div className={styles.grid}>
          {ecosystem.map((item, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.icon}>
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}