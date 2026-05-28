import {
  X,
  Check,
} from 'lucide-react';

import styles from './AIComparisonSection.module.css';

const traditional = [
  'Theory-focused learning',
  'Limited industry workflow exposure',
  'Generic assignments',
  'Minimal portfolio guidance',
  'Static syllabus approach',
  'Limited career support',
];

const aiTraining = [
  'Implementation-focused training',
  'AI-assisted modern workflows',
  'Real project-oriented learning',
  'Portfolio & GitHub guidance',
  'Industry-oriented evolving training',
  'Career & freelance guidance',
];

const AIComparisonSection = () => {
  return (
      <section
        id='comparison'
        className={`sectionSpacing ${styles.section}`}
      >
      <div className='container'>
        <div className={styles.heading}>
          <span className={styles.badge}>
            Modern Engineering Training
          </span>

          <h2>
            Traditional Training vs
            {' '}
            <span>AI-Assisted Training</span>
          </h2>

          <p>
            Modern engineering careers
            require practical workflows,
            productivity and implementation
            beyond traditional syllabus learning.
          </p>
        </div>

        <div className={styles.comparison}>
          {/* LEFT */}
          <div className={styles.card}>
            <h3>Traditional Training</h3>

            <div className={styles.items}>
              {traditional.map((item) => (
                <div
                  key={item}
                  className={styles.item}
                >
                  <div className={styles.cross}>
                    <X size={18} />
                  </div>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.card}>
            <h3>AI-Assisted Training</h3>

            <div className={styles.items}>
              {aiTraining.map((item) => (
                <div
                  key={item}
                  className={styles.item}
                >
                  <div className={styles.check}>
                    <Check size={18} />
                  </div>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIComparisonSection;