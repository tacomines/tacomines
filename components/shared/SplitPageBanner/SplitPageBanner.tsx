import Link from 'next/link';

import {
  ArrowRight,
} from 'lucide-react';

import styles from './SplitPageBanner.module.css';

interface QuickLink {
  title: string;

  href: string;

  icon: React.ReactNode;
}

interface SplitPageBannerProps {
  badge: string;

  title: string;

  highlight?: string;

  description: string;

  quickLinks: QuickLink[];
}

export default function SplitPageBanner({
  badge,
  title,
  highlight,
  description,
  quickLinks,
}: SplitPageBannerProps) {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.wrapper}>

          {/* LEFT */}

          <div className={styles.left}>

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

          {/* RIGHT */}

          <div className={styles.right}>
            {quickLinks.map(
              (item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={styles.card}
                >

                  <div className={styles.icon}>
                    {item.icon}
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                  </div>

                  <ArrowRight
                    size={24}
                    className={styles.arrow}
                  />

                </Link>
              )
            )}
          </div>

        </div>

      </div>
    </section>
  );
}