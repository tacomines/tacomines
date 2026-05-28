import {
  ClipboardList,
  Code2,
  Rocket,
  BadgeCheck,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './CareerPreparationSection.module.css';

const preparation = [
  {
    icon: <ClipboardList size={26} />,
    title: 'Structured Learning',
    description:
      'Implementation-oriented learning workflows designed to improve technical understanding.',
  },

  {
    icon: <Code2 size={26} />,
    title: 'Practical Implementation',
    description:
      'Hands-on engineering projects help students improve workflow understanding and productivity.',
  },

  {
    icon: <Rocket size={26} />,
    title: 'Portfolio Development',
    description:
      'Students build implementation-oriented project portfolios to showcase practical skills.',
  },

  {
    icon: <BadgeCheck size={26} />,
    title: 'Confidence Building',
    description:
      'Technical mentorship and guided workflows help students improve engineering confidence.',
  },
];

export default function CareerPreparationSection() {
  return (
      <section
        id='opportunities'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>

        <SectionHeading
          badge='Career Preparation'
          title='Implementation-Focused'
          highlight='Technical Growth'
          description='Students are guided through structured engineering workflows designed for productivity and practical technical growth.'
          center
        />

        <div className={styles.grid}>
          {preparation.map(
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