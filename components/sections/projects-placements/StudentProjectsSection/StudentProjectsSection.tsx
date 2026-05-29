import {
  Globe,
  Smartphone,
  LayoutDashboard,
  BrainCircuit,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './StudentProjectsSection.module.css';

const projects = [
  {
    icon: <Globe size={26} />,
    title: 'Website Development',
    description:
      'Responsive business websites and modern frontend implementation projects.',
  },

  {
    icon: <LayoutDashboard size={26} />,
    title: 'Web Applications',
    description:
      'Dashboard systems and workflow-oriented engineering applications.',
  },

  {
    icon: <Smartphone size={26} />,
    title: 'Hybrid Applications',
    description:
      'Cross-platform mobile application implementation projects.',
  },

  {
    icon: <BrainCircuit size={26} />,
    title: 'AI Productivity Workflows',
    description:
      'AI-assisted engineering implementation and productivity-oriented projects.',
  },
];

export default function StudentProjectsSection() {
  return (
      <section
        id='projects'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Student Projects'
          title='Implementation-Focused'
          highlight='Engineering Projects'
          description='Students work on practical engineering projects designed to improve implementation confidence and workflow understanding.'
          center
        />

        <div className={styles.grid}>
          {projects.map(
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