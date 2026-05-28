import Link from 'next/link';

import {
  ArrowRight,
  PhoneCall,
} from 'lucide-react';

import styles from './AboutCTASection.module.css';

export default function AboutCTASection() {
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
            Learn modern development workflows, AI-assisted engineering
            practices and practical implementation strategies designed
            for long-term technical growth.
          </p>

          <div className={styles.actions}>
            <Link
              href='/courses'
              className={styles.primaryButton}
            >
              Explore Courses

              <ArrowRight size={18} />
            </Link>

            <Link
              href='/contact'
              className={styles.secondaryButton}
            >
              <PhoneCall size={18} />

              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}