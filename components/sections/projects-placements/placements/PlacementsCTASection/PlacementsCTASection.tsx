import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './PlacementsCTASection.module.css';

export default function PlacementsCTASection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.card}>

          <span className={styles.badge}>
            Start Career Growth
          </span>

          <h2 className={styles.title}>
            Build Practical Skills
            <span> For Technical Growth</span>
          </h2>

          <p className={styles.description}>
            Improve implementation confidence,
            productivity and engineering workflow
            understanding through structured
            learning and guided projects.
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