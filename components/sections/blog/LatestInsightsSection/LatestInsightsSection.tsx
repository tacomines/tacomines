import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

import styles from './LatestInsightsSection.module.css';

const insights = [
  {
    title:
      'Why Practical Engineering Workflows Matter',

    description:
      'Implementation-oriented engineering learning improves productivity and technical confidence.',
  },

  {
    title:
      'Understanding Progressive Web Applications',

    description:
      'Modern web applications designed for installable and responsive user experiences.',
  },

  {
    title:
      'AI-Assisted Productivity for Developers',

    description:
      'Responsible AI-assisted workflows can improve engineering efficiency and implementation speed.',
  },
];

export default function LatestInsightsSection() {
  return (
      <section
        id='insights'
        className={styles.section}
      >
      <div className='container'>

        <SectionHeading
          badge='Latest Insights'
          title='Recent'
          highlight='Technical Articles'
          description='Explore implementation-focused technical insights designed for productivity and engineering growth.'
          center
        />

        <div className={styles.list}>
          {insights.map(
            (item, index) => (
              <article
                key={index}
                className={styles.item}
              >
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            )
          )}
        </div>

      </div>
    </section>
  );
}