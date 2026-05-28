import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './ProjectsPlacementsCTASection.module.css';

export default function ProjectsPlacementsCTASection() {
  return (
      <section
        id='cta'
        className={styles.section}
      >
      <div className='container'>

        <div className={styles.card}>

          <span className={styles.badge}>
            Start Your Journey
          </span>

          <h2 className={styles.title}>
            Build Practical Skills
            <span> With TacoMines</span>
          </h2>

          <p className={styles.description}>
            Improve engineering productivity,
            implementation confidence and
            career-oriented technical growth
            through guided learning workflows.
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