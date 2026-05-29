import {
  MonitorSmartphone,
  Building2,
  Presentation,
  FolderKanban,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './TrainingFormatsSection.module.css';

const formats = [
  {
    icon: <MonitorSmartphone size={28} />,
    title: 'Online Classes',
    description:
      'Flexible remote engineering learning with guided implementation and productivity-focused workflows.',
  },

  {
    icon: <Building2 size={28} />,
    title: 'Offline Classroom',
    description:
      'Structured classroom learning experience with direct mentorship and practical technical guidance.',
  },

  {
    icon: <Presentation size={28} />,
    title: 'Technical Workshops',
    description:
      'Focused implementation-oriented workshops designed for rapid practical exposure.',
  },

  {
    icon: <FolderKanban size={28} />,
    title: 'Guided Projects',
    description:
      'Real-world project implementation support for practical engineering experience.',
  },
];

export default function TrainingFormatsSection() {
  return (
      <section
        id='formats'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Learning Formats'
          title='Flexible'
          highlight='Training Modes'
          description='Multiple learning formats designed for implementation-focused engineering education and productivity-oriented technical growth.'
          center
        />

        <div className={styles.grid}>
          {formats.map((item, index) => (
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