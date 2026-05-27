import Link from 'next/link';

import {
  ArrowRight,
  PhoneCall,
} from 'lucide-react';

import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.card}>

          <div className={styles.content}>
            <span className={styles.badge}>
              Start Your Engineering Journey
            </span>

            <h2 className={styles.title}>
              Build Practical Skills with
              <span> AI-Assisted Engineering Training</span>
            </h2>

            <p className={styles.description}>
              Join TacoMines to learn modern engineering workflows,
              practical implementation, productivity systems and
              career-oriented technical development.
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
                href='/register'
                className={styles.secondaryButton}
              >
                Register Now
              </Link>

              <Link
                href='/contact'
                className={styles.contactButton}
              >
                <PhoneCall size={18} />

                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}