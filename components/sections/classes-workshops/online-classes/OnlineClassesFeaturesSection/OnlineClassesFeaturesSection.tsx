import {
  Monitor,
  BrainCircuit,
  Users,
  FolderKanban,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './OnlineClassesFeaturesSection.module.css';

const features = [
  {
    icon: <Monitor size={26} />,
    title: 'Flexible Learning',
    description:
      'Attend classes remotely with structured learning schedules and implementation-focused sessions.',
  },

  {
    icon: <BrainCircuit size={26} />,
    title: 'AI-Assisted Workflow',
    description:
      'Learn modern productivity-oriented engineering workflows using AI-assisted tools responsibly.',
  },

  {
    icon: <Users size={26} />,
    title: 'Guided Mentorship',
    description:
      'Receive structured mentorship and implementation guidance during learning sessions.',
  },

  {
    icon: <FolderKanban size={26} />,
    title: 'Project Practice',
    description:
      'Practical assignments and guided projects help students improve implementation confidence.',
  },
];

export default function OnlineClassesFeaturesSection() {
  return (
      <section
        id='features'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Online Learning Features'
          title='Structured'
          highlight='Remote Learning'
          description='TacoMines online classes are designed for practical engineering learning, productivity and guided implementation workflows.'
          center
        />

        <div className={styles.grid}>
          {features.map(
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