import styles from './AboutVisionSection.module.css';

export default function AboutVisionSection() {
  return (
      <section
        id='vision'
        className={styles.section}
      >
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <span className={styles.badge}>
              Who We Are
            </span>

            <h2 className={styles.title}>
              Built for Practical
              <span> Engineering Growth</span>
            </h2>
          </div>

          <div className={styles.right}>
            <p>
              TacoMines was created to support modern learners with
              practical engineering workflows, AI-assisted learning
              systems and career-oriented technical development.
            </p>

            <p>
              Instead of focusing only on theoretical course completion,
              TacoMines emphasizes implementation, productivity,
              portfolio development and long-term technical growth.
            </p>

            <p>
              Our goal is to help students understand modern engineering
              practices through guided learning, practical workflows and
              structured development approaches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}