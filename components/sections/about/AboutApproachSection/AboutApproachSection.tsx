import {
  BrainCircuit,
  FolderKanban,
  BadgeCheck,
  BriefcaseBusiness,
} from 'lucide-react';

import styles from './AboutApproachSection.module.css';

const items = [
  {
    icon: <BrainCircuit size={24} />,
    title: 'AI-Assisted Learning',
    description:
      'Modern productivity-oriented engineering workflows using AI tools responsibly and professionally.',
  },

  {
    icon: <FolderKanban size={24} />,
    title: 'Practical Implementation',
    description:
      'Focus on guided implementation, mini projects and real development understanding.',
  },

  {
    icon: <BadgeCheck size={24} />,
    title: 'Structured Skill Development',
    description:
      'Portfolio building, technical visibility and long-term engineering growth support.',
  },

  {
    icon: <BriefcaseBusiness size={24} />,
    title: 'Career-Oriented Guidance',
    description:
      'Career awareness, workflow discipline and technical confidence improvement.',
  },
];

export default function AboutApproachSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.header}>
          <span className={styles.badge}>
            Learning Philosophy
          </span>

          <h2 className={styles.title}>
            Modern Engineering
            <span> Training Approach</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
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