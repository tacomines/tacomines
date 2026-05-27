'use client';

import Link from 'next/link';

import {
  Globe,
  MonitorSmartphone,
  Smartphone,
  LayoutPanelTop,
  Megaphone,
  CloudCog,
} from 'lucide-react';

import styles from './HeroSection.module.css';

const trainingItems = [
  {
    icon: <Globe size={18} />,
    title: 'Website Development',
  },
  {
    icon: <MonitorSmartphone size={18} />,
    title: 'Web Application Development',
  },
  {
    icon: <Smartphone size={18} />,
    title: 'Hybrid Mobile Apps',
  },
  {
    icon: <LayoutPanelTop size={18} />,
    title: 'Progressive Web Apps',
  },
  {
    icon: <Megaphone size={18} />,
    title: 'Digital Marketing',
  },
  {
    icon: <CloudCog size={18} />,
    title: 'Cloud Hosting & Security',
  },
];

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className='container'>
        <div className={styles.wrapper}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.badge}>
              AI-Assisted Training Academy
            </div>

            <h1 className={styles.title}>
              Build Real Skills with
              <span>
                {' '}
                AI-Powered Training
              </span>
            </h1>

            <p className={styles.description}>
              Learn software development,
              AI tools, automation and
              modern technologies through
              practical industry-oriented
              training programs.
            </p>

            <div className={styles.note}>
              Minimum Qualification:
              {' '}
              12th Pass
            </div>

            <div className={styles.actions}>
              <Link
                href='/courses'
                className={styles.primaryButton}
              >
                Explore Courses
              </Link>

              <Link
                href='/register'
                className={styles.secondaryButton}
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.rightCard}>
              <div className={styles.rightTitle}>
                AI Assisted Courses Training
              </div>

              <div className={styles.trainingGrid}>
                {trainingItems.map((item) => (
                  <div
                    key={item.title}
                    className={styles.trainingItem}
                  >
                    <div className={styles.iconBox}>
                      {item.icon}
                    </div>

                    <span>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;