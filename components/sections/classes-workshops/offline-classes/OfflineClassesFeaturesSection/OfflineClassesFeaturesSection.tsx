import {
  Building2,
  Users,
  FolderKanban,
  BadgeCheck,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './OfflineClassesFeaturesSection.module.css';

const features = [
  {
    icon: <Building2 size={26} />,
    title: 'Classroom Learning',
    description:
      'Structured classroom-based engineering learning with practical implementation support.',
  },

  {
    icon: <Users size={26} />,
    title: 'Direct Mentorship',
    description:
      'Students receive direct guidance, mentoring and workflow clarification during sessions.',
  },

  {
    icon: <FolderKanban size={26} />,
    title: 'Hands-On Practice',
    description:
      'Practical implementation exercises and guided projects help improve technical confidence.',
  },

  {
    icon: <BadgeCheck size={26} />,
    title: 'Focused Learning Environment',
    description:
      'Dedicated engineering-focused learning atmosphere designed for productivity and technical growth.',
  },
];

export default function OfflineClassesFeaturesSection() {
  return (
      <section
        id='features'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Offline Learning Features'
          title='Structured'
          highlight='Classroom Experience'
          description='TacoMines classroom training programs focus on practical engineering workflows, mentorship and implementation-oriented learning.'
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