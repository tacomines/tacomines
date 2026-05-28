import {
  Code2,
  BrainCircuit,
  Globe,
  Smartphone,
  Cloud,
  Rocket,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './WorkshopsTopicsSection.module.css';

const topics = [
  {
    icon: <Code2 size={26} />,
    title: 'Modern Web Development',
    description:
      'Implementation-focused workshops covering responsive websites and frontend engineering workflows.',
  },

  {
    icon: <BrainCircuit size={26} />,
    title: 'AI Productivity Systems',
    description:
      'Workshops focused on responsible AI-assisted engineering workflows and productivity improvement.',
  },

  {
    icon: <Globe size={26} />,
    title: 'Progressive Web Apps',
    description:
      'Hands-on exposure to installable web applications and modern deployment workflows.',
  },

  {
    icon: <Smartphone size={26} />,
    title: 'Hybrid App Development',
    description:
      'Cross-platform application workshops focused on implementation-oriented learning.',
  },

  {
    icon: <Cloud size={26} />,
    title: 'Cloud & Deployment',
    description:
      'Practical workshops focused on deployment workflows, hosting and engineering infrastructure basics.',
  },

  {
    icon: <Rocket size={26} />,
    title: 'Project Workflows',
    description:
      'Guided engineering project workflows designed for practical implementation confidence.',
  },
];

export default function WorkshopsTopicsSection() {
  return (
      <section
        id='topics'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Workshop Topics'
          title='Focused'
          highlight='Technical Workshops'
          description='TacoMines workshops are designed to provide practical engineering exposure and implementation-focused technical learning.'
          center
        />

        <div className={styles.grid}>
          {topics.map(
            (item, index) => (
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
            )
          )}
        </div>

      </div>
    </section>
  );
}