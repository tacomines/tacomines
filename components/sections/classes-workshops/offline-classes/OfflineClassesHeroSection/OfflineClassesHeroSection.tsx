import styles from './OfflineClassesHeroSection.module.css';

export default function OfflineClassesHeroSection() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.content}>

          <span className={styles.badge}>
            Offline Classroom Training
          </span>

          <h1 className={styles.title}>
            Practical
            <span> Classroom Engineering Learning</span>
          </h1>

          <p className={styles.description}>
            Learn through structured classroom
            sessions, guided implementation,
            mentorship and practical engineering
            workflows in a focused learning
            environment.
          </p>

        </div>
      </div>
    </section>
  );
}