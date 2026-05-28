import {
  BrainCircuit,
  FolderKanban,
  Users,
  Rocket,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './LearningExperienceSection.module.css';

const experience = [
  {
    icon: <BrainCircuit size={26} />,
    title: 'AI-Assisted Learning',
    description:
      'Students learn modern AI-assisted engineering workflows designed to improve productivity and practical implementation confidence.',
  },

  {
    icon: <FolderKanban size={26} />,
    title: 'Project-Oriented Practice',
    description:
      'Implementation-focused guided projects help students understand practical engineering workflows beyond theoretical learning.',
  },

  {
    icon: <Users size={26} />,
    title: 'Mentorship & Guidance',
    description:
      'Students receive structured mentorship, workflow guidance and engineering-oriented learning support.',
  },

  {
    icon: <Rocket size={26} />,
    title: 'Career-Focused Growth',
    description:
      'Learning workflows are designed to support portfolio development, productivity and long-term technical growth.',
  },
];

export default function LearningExperienceSection() {
  return (
      <section
        id='experience'
        className={styles.section}
      >
      <div className='container'>

        <SectionHeading
          badge='Learning Experience'
          title='Implementation-Focused'
          highlight='Engineering Learning'
          description='TacoMines focuses on practical engineering growth through AI-assisted workflows, guided mentorship and structured implementation-oriented learning.'
          center
        />

        <div className={styles.grid}>
          {experience.map(
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