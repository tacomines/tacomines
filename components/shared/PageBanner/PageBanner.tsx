import Image from 'next/image';

import styles from './PageBanner.module.css';

interface PageBannerProps {
  badge: string;

  title: string;

  highlight?: string;

  description: string;

  center?: boolean;

  image?: string;

  imageAlt?: string;
}

export default function PageBanner({
  badge,
  title,
  highlight,
  description,
  center = false,
  image,
  imageAlt = 'Banner Image',
}: PageBannerProps) {
  const hasImage = Boolean(image);

  return (
    <section className={styles.section}>
      <div className='container'>

        <div
          className={`${styles.wrapper} ${
            hasImage
              ? styles.split
              : styles.single
          }`}
        >

          <div
            className={`${styles.content} ${
              center && !hasImage
                ? styles.center
                : ''
            }`}
          >

            <span className={styles.badge}>
              {badge}
            </span>

            <h1 className={styles.title}>
              {title}

              {highlight && (
                <span>
                  {' '}
                  {highlight}
                </span>
              )}
            </h1>

            <p className={styles.description}>
              {description}
            </p>

          </div>

          {/* OPTIONAL IMAGE */}

          {hasImage && (
            <div className={styles.imageWrapper}>

            <Image
              src={image as string}
              alt={imageAlt}
              fill
              priority
              sizes='(max-width: 768px) 100vw, 50vw'
              className={styles.image}
            />

            </div>
          )}

        </div>

      </div>
    </section>
  );
}