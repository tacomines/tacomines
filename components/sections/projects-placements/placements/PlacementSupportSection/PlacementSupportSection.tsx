import {
  FileText,
  Users,
  BriefcaseBusiness,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './PlacementSupportSection.module.css';

const support = [
  {
    icon: <FileText size={26} />,
    title: 'Resume Guidance',
    description:
      'Structured support for preparing professional technical resumes and engineering portfolios.',
  },

  {
    icon: <Users size={26} />,
    title: 'Mentorship Support',
    description:
      'Career-oriented mentorship focused on implementation workflows and technical growth.',
  },

  {
    icon: <BriefcaseBusiness size={26} />,
    title: 'Placement Readiness',
    description:
      'Practical engineering learning designed to improve implementation confidence and interview readiness.',
  },

];

export default function PlacementSupportSection() {
  return (
      <section
        id='guidance'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Placement Support'
          title='Professional'
          highlight='Career Preparation'
          description='TacoMines focuses on implementation-oriented technical learning and structured career growth support.'
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