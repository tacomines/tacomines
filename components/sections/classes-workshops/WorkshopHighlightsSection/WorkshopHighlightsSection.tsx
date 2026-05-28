import {
  Code2,
  BrainCircuit,
  Globe,
  Smartphone,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './WorkshopHighlightsSection.module.css';

const workshops = [
  {
    icon: <Code2 size={26} />,
    title: 'Modern Web Development',
    description:
      'Practical workshops focused on modern frontend engineering, responsive websites and implementation workflows.',
  },

  {
    icon: <BrainCircuit size={26} />,
    title: 'AI Productivity Systems',
    description:
      'Workshops designed to teach responsible AI-assisted engineering workflows and productivity improvement techniques.',
  },

  {
    icon: <Globe size={26} />,
    title: 'Progressive Web Apps',
    description:
      'Hands-on exposure to installable web applications, offline support and modern deployment workflows.',
  },

  {
    icon: <Smartphone size={26} />,
    title: 'Hybrid App Development',
    description:
      'Cross-platform application workshops focused on practical development workflows and modern frameworks.',
  },
];

export default function WorkshopHighlightsSection() {
  return (
      <section
        id='highlights'
        className={styles.section}
      >
      <div className='container'>

        <SectionHeading
          badge='Workshop Highlights'
          title='Practical'
          highlight='Technical Workshops'
          description='Focused workshops designed to provide practical engineering exposure, productivity-oriented workflows and implementation confidence.'
          center
        />

        <div className={styles.grid}>
          {workshops.map(
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