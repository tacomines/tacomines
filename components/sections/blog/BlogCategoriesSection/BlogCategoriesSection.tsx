import styles from './BlogCategoriesSection.module.css';

const categories = [
  'AI Productivity',
  'Web Development',
  'Progressive Web Apps',
  'Hybrid Applications',
  'Cloud & Deployment',
  'Engineering Workflows',
];

export default function BlogCategoriesSection() {
  return (
      <section
        id='categories'
        className={styles.section}
      >
      <div className='container'>

        <div className={styles.wrapper}>

          <h2 className={styles.title}>
            Explore Categories
          </h2>

          <div className={styles.categories}>
            {categories.map(
              (category, index) => (
                <button
                  key={index}
                  className={styles.tag}
                >
                  {category}
                </button>
              )
            )}
          </div>

        </div>

      </div>
    </section>
  );
}