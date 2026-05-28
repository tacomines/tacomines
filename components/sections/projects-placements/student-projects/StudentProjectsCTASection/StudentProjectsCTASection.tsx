import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './StudentProjectsCTASection.module.css';

export default function StudentProjectsCTASection() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.card}>

          <span className={styles.badge}>
            Start Building Projects
          </span>

          <h2 className={styles.title}>
            Build Real Engineering
            <span> Implementation Skills</span>
          </h2>

          <p className={styles.description}>
            Work on practical engineering projects
            designed to improve productivity,
            implementation confidence and workflow
            understanding.
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