import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './OfflineClassesCTASection.module.css';

export default function OfflineClassesCTASection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.card}>

          <span className={styles.badge}>
            Start Classroom Learning
          </span>

          <h2 className={styles.title}>
            Join TacoMines
            <span> Offline Classes</span>
          </h2>

          <p className={styles.description}>
            Experience practical classroom
            engineering learning with mentorship,
            implementation guidance and
            productivity-oriented workflows.
          </p>

          <div className={styles.actions}>
            <CTAButton
              href='/register'
              label='Register Now'
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