import styles from './PlacementsHeroSection.module.css';

export default function PlacementsHeroSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.content}>

          <span className={styles.badge}>
            Placements & Career Support
          </span>

          <h1 className={styles.title}>
            Career-Oriented
            <span> Engineering Growth</span>
          </h1>

          <p className={styles.description}>
            TacoMines supports students with
            practical engineering learning,
            implementation-focused workflows,
            portfolio guidance and placement
            readiness support.
          </p>

        </div>
      </div>
    </section>
  );
}