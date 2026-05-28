import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './BlogCTASection.module.css';

export default function BlogCTASection() {
  return (
      <section
        id='cta'
        className={styles.section}
      >
      <div className='container'>

        <div className={styles.card}>

          <span className={styles.badge}>
            Continue Learning
          </span>

          <h2 className={styles.title}>
            Explore Practical
            <span> Engineering Insights</span>
          </h2>

          <p className={styles.description}>
            Learn modern engineering workflows,
            implementation systems and
            productivity-oriented technical
            concepts through TacoMines insights.
          </p>

          <div className={styles.actions}>
            <CTAButton
              href='/courses'
              label='Explore Courses'
            />

            <CTAButton
              href='/contact'
              label='Contact Us'
              variant='secondary'
            />
          </div>

        </div>

      </div>
    </section>
  );
}