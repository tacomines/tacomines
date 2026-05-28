import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  badge?: string;

  title: string;

  highlight?: string;

  description?: string;

  center?: boolean;
}

const SectionHeading = ({
  badge,
  title,
  highlight,
  description,
  center = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={`${styles.wrapper} ${
        center ? styles.center : ''
      }`}
    >
      {badge && (
        <span className={styles.badge}>
          {badge}
        </span>
      )}

      <h2 className={styles.title}>
        {title}

        {highlight && (
          <span className={styles.highlight}>
            {' '}
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;