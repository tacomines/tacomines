import styles from './StudentProjectsHeroSection.module.css';

export default function StudentProjectsHeroSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.content}>

          <span className={styles.badge}>
            Student Projects
          </span>

          <h1 className={styles.title}>
            Practical
            <span> Engineering Projects</span>
          </h1>

          <p className={styles.description}>
            TacoMines students work on
            implementation-focused engineering
            projects designed to improve workflow
            understanding, productivity and
            technical confidence.
          </p>

        </div>
      </div>
    </section>
  );
}