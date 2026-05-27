import styles from './AboutHeroSection.module.css';

export default function AboutHeroSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.content}>
          <span className={styles.badge}>
            About TacoMines
          </span>

          <h1 className={styles.title}>
            AI-Assisted Engineering
            <span> Learning Ecosystem</span>
          </h1>

          <p className={styles.description}>
            TacoMines is focused on practical engineering education,
            AI-assisted productivity workflows and career-oriented
            technical development designed for modern learners.
          </p>
        </div>
      </div>
    </section>
  );
}