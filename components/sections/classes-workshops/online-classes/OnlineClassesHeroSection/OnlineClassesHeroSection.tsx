import styles from './OnlineClassesHeroSection.module.css';

export default function OnlineClassesHeroSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.content}>

          <span className={styles.badge}>
            Online Classes
          </span>

          <h1 className={styles.title}>
            Flexible
            <span> Online Engineering Learning</span>
          </h1>

          <p className={styles.description}>
            Learn modern engineering workflows,
            AI-assisted productivity systems and
            practical implementation skills from
            anywhere through TacoMines online
            learning programs.
          </p>

        </div>
      </div>
    </section>
  );
}