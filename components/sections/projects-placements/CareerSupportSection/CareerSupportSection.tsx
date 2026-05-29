import {
  FileText,
  Users,
  BriefcaseBusiness,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './CareerSupportSection.module.css';

const support = [
  {
    icon: <FileText size={26} />,
    title: 'Resume Preparation',
    description:
      'Structured guidance for technical resumes and engineering portfolio presentation.',
  },

  {
    icon: <Users size={26} />,
    title: 'Mentorship Guidance',
    description:
      'Career-oriented mentorship focused on productivity and engineering growth.',
  },

  {
    icon: <BriefcaseBusiness size={26} />,
    title: 'Placement Readiness',
    description:
      'Implementation-focused learning designed to improve technical confidence and placement readiness.',
  },
];

export default function CareerSupportSection() {
  return (
      <section
        id='support'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Career Support'
          title='Career-Oriented'
          highlight='Technical Growth'
          description='TacoMines supports students with implementation-focused engineering learning and professional growth guidance.'
          center
        />

        <div className={styles.grid}>
          {support.map(
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