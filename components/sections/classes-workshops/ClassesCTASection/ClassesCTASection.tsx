import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './ClassesCTASection.module.css';

export default function ClassesCTASection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.card}>
          <span className={styles.badge}>
            Start Learning
          </span>

          <h2 className={styles.title}>
            Join TacoMines
            <span> Classes & Workshops</span>
          </h2>

          <p className={styles.description}>
            Begin your engineering learning journey
            with implementation-focused classes,
            practical workshops and AI-assisted
            productivity workflows.
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