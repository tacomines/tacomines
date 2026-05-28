import Link from 'next/link';

import CTAButton from '@/components/shared/CTAButton/CTAButton';

import {
  ArrowRight,
  PhoneCall,
} from 'lucide-react';

import styles from './CoursesCTASection.module.css';

export default function CoursesCTASection() {
  return (
      <section
        id='cta'
        className={styles.section}
      >
      <div className='container'>
        <div className={styles.card}>
          <span className={styles.badge}>
            Start Learning with TacoMines
          </span>

          <h2 className={styles.title}>
            Build Modern Engineering Skills
            <span> with Practical Training</span>
          </h2>

          <p className={styles.description}>
            Learn modern engineering workflows,
            AI-assisted productivity systems and
            implementation-oriented technical skills
            designed for long-term career growth.
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