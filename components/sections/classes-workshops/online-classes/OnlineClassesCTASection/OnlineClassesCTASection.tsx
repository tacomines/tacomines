import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './OnlineClassesCTASection.module.css';

export default function OnlineClassesCTASection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.card}>

          <span className={styles.badge}>
            Start Online Learning
          </span>

          <h2 className={styles.title}>
            Join TacoMines
            <span> Online Classes</span>
          </h2>

          <p className={styles.description}>
            Learn practical engineering workflows
            remotely with AI-assisted productivity,
            mentorship and implementation-oriented
            learning support.
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