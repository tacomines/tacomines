import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import {
  MonitorSmartphone,
  Building2,
  Presentation,
  FolderKanban,
} from 'lucide-react';

import styles from './CoursesModesSection.module.css';

const modes = [
  {
    icon: <MonitorSmartphone size={26} />,
    title: 'Online Training',
    description:
      'Flexible remote learning with guided sessions, implementation support and productivity-oriented workflows.',
  },

  {
    icon: <Building2 size={26} />,
    title: 'Offline Classroom',
    description:
      'Practical classroom-focused engineering learning environment with direct mentorship and interaction.',
  },

  {
    icon: <Presentation size={26} />,
    title: 'Workshops',
    description:
      'Focused short-term workshops designed for rapid practical exposure and technical implementation understanding.',
  },

  {
    icon: <FolderKanban size={26} />,
    title: 'Guided Projects',
    description:
      'Structured project-oriented learning workflow designed for portfolio and implementation confidence.',
  },
];

export default function CoursesModesSection() {
  return (
      <section
        id='modes'
        className={styles.section}
      >
      <div className='container'>

        <SectionHeading
          badge='Training Modes'
          title='Flexible Learning'
          highlight='Training Formats'
          description='TacoMines provides multiple learning formats designed to support practical implementation, flexibility and engineering-focused development.'
          center
        />

        <div className={styles.grid}>
          {modes.map((mode, index) => (
            <div
              key={index}
              className={styles.card}
            >
              <div className={styles.icon}>
                {mode.icon}
              </div>

              <h3>{mode.title}</h3>

              <p>{mode.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}