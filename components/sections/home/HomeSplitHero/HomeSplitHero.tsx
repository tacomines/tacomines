import {
  Check,
} from 'lucide-react';

import CTAButton from '@/components/shared/CTAButton/CTAButton';

import styles from './HomeSplitHero.module.css';

const highlights = [
  'Implementation-focused training',

  'AI-assisted modern workflows',

  'Real project-oriented learning',

  'Portfolio & GitHub guidance',

  'Industry-oriented evolving training',

  'Career & freelance guidance',
];

export default function HomeSplitHero() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.wrapper}>

          {/* LEFT */}

          <div className={styles.left}>

            <span className={styles.badge}>
              AI-Assisted Engineering Learning
            </span>

            <h1 className={styles.title}>
              Build Modern
              <span>
                {' '}
                Engineering Skills
              </span>
            </h1>

            <p className={styles.description}>
              TacoMines provides
              implementation-focused
              engineering learning programs
              designed for productivity,
              practical workflows and
              technical growth.
            </p>

            <div className={styles.actions}>
              <CTAButton
                href='/register'
                label='Get Started'
              />

              <CTAButton
                href='/courses'
                label='Explore Courses'
                variant='secondary'
              />
            </div>

          </div>

          {/* RIGHT */}

          <div className={styles.right}>

            <h2 className={styles.rightTitle}>
              AI-Assisted Training
            </h2>

            <div className={styles.highlights}>
              {highlights.map(
                (item, index) => (
                  <div
                    key={index}
                    className={
                      styles.highlightItem
                    }
                  >

                    <div
                      className={
                        styles.checkIcon
                      }
                    >
                      <Check size={20} />
                    </div>

                    <p>{item}</p>

                  </div>
                )
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}