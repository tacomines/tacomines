import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './WorkshopsCTASection.module.css';

export default function WorkshopsCTASection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.card}>

          <span className={styles.badge}>
            Join Workshops
          </span>

          <h2 className={styles.title}>
            Explore TacoMines
            <span> Technical Workshops</span>
          </h2>

          <p className={styles.description}>
            Participate in implementation-focused
            engineering workshops designed to
            improve productivity, practical
            understanding and technical confidence.
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