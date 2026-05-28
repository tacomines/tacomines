import styles from './WorkshopsHeroSection.module.css';

export default function WorkshopsHeroSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.content}>

          <span className={styles.badge}>
            Technical Workshops
          </span>

          <h1 className={styles.title}>
            Practical
            <span> Engineering Workshops</span>
          </h1>

          <p className={styles.description}>
            TacoMines workshops are designed to
            provide focused implementation-oriented
            learning experiences in modern
            engineering technologies, AI-assisted
            workflows and practical development
            systems.
          </p>

        </div>
      </div>
    </section>
  );
}